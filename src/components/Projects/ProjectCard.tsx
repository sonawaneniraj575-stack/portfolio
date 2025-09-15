import { motion, useInView } from "framer-motion";
import Pill from "@/components/ui/Pill";
import Button from "@/components/ui/Button";
import { useEffect, useRef, useState } from "react";
import { countUp } from "@/lib/gsap";

type Metric = { label: string; value: number; suffix?: string; decimals?: number };

type Props = {
  title: string;
  problem?: string;
  approach?: string;
  stack: string[];
  links: { live?: string; repo?: string };
  metrics?: Metric[];
  layout?: "left" | "right";
  image?: string;
};

export default function ProjectCard({ title, problem, approach, stack, links, metrics, layout = "left", image }: Props) {
  const cardRef = useRef<HTMLDivElement>(null);
  const inView = useInView(cardRef, { amount: 0.4, once: true });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const metricRefs = useRef<Array<HTMLSpanElement | null>>([]);

  useEffect(() => {
    if (!inView || !metrics) return;
    metrics.forEach((m, i) => {
      const el = metricRefs.current[i];
      if (el) countUp(el, m.value, { suffix: m.suffix, decimals: m.decimals });
    });
  }, [inView, metrics]);

  const placeholder = "/images/placeholder-project.png";

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      onMouseMove={(e) => {
        const r = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        setTilt({ x: -py * 6, y: px * 8 });
      }}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
      className={`rounded-2xl border border-border bg-background/5 p-6 shadow-[0_12px_48px_-20px_rgba(0,0,0,0.6)]`}
    >
      <div className={`grid items-start gap-6 md:grid-cols-2 ${layout === "right" ? "md:[&>*:first-child]:order-2" : ""}`}>
        <div>
          <h3 className="text-xl font-semibold text-foreground">{title}</h3>
          {problem && <p className="mt-3 text-sm text-foreground/70">{problem}</p>}
          {approach && <p className="mt-3 text-sm text-foreground/70">{approach}</p>}
          {metrics && (
            <div className="mt-5 grid grid-cols-2 gap-4">
              {metrics.map((m, i) => (
                <div key={m.label} className="rounded-xl border border-teal-400/20 bg-teal-400/5 p-3 text-center">
                  <div className="text-2xl font-semibold text-teal-300"><span ref={(el) => (metricRefs.current[i] = el)} aria-label={`${m.label} ${m.value}${m.suffix || ""}`}>0</span></div>
                  <div className="text-xs text-foreground/70">{m.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div>
          <div className="overflow-hidden rounded-xl border border-border bg-background/10">
            <img
              src={image ?? placeholder}
              alt={`${title} screenshot`}
              onError={(e) => {
                const t = e.currentTarget as HTMLImageElement;
                if (!t.src.endsWith("placeholder-project.png")) t.src = placeholder;
              }}
              className="aspect-video h-auto w-full object-cover"
            />
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {stack.map((t) => (
              <Pill key={t}>{t}</Pill>
            ))}
          </div>
          <div className="mt-6 flex gap-3">
            {links.live && (
              <a href={links.live} target="_blank" rel="noreferrer">
                <Button>Live</Button>
              </a>
            )}
            {links.repo && (
              <a href={links.repo} target="_blank" rel="noreferrer">
                <Button variant="outline">Code</Button>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
