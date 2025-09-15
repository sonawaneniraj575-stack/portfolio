import { siteContent } from "@/content/siteContent";
import { motion } from "framer-motion";
import { FaReact, FaPython, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiTensorflow } from "react-icons/si";

const iconMap: Record<string, JSX.Element> = {
  react: <FaReact className="text-cyan-300" />,
  python: <FaPython className="text-yellow-300" />,
  node: <FaNodeJs className="text-green-300" />,
  tensorflow: <SiTensorflow className="text-orange-300" />,
  database: <FaDatabase className="text-teal-300" />,
};

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="mx-auto max-w-6xl px-4 py-20">
      <h2 id="about-heading" className="text-2xl font-semibold text-foreground">About</h2>
      <p className="mt-4 max-w-3xl text-pretty text-foreground/70">{siteContent.about}</p>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {siteContent.skills.map((s) => (
          <div key={s.key} className="rounded-2xl border border-border bg-background/5 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-foreground/80">
                <span className="text-lg">{iconMap[s.icon]}</span>
                <span>{s.key}</span>
              </div>
              <span className="text-sm text-foreground/60" aria-hidden>
                {s.level}%
              </span>
            </div>
            <div className="mt-3 h-2 w-full rounded-full bg-foreground/10" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={s.level} aria-label={`${s.key} proficiency ${s.level} percent`}>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${s.level}%` }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="h-full rounded-full bg-teal-500 shadow-[0_0_28px_-6px_rgba(0,178,169,0.8)]"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
