import { siteContent } from "@/content/siteContent";
import { motion } from "framer-motion";
import { FaGraduationCap, FaSchool } from "react-icons/fa";
import Pill from "@/components/ui/Pill";

function iconFor(title: string) {
  return title.toLowerCase().includes("be") ? <FaGraduationCap /> : <FaSchool />;
}

export default function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="mx-auto max-w-6xl px-4 py-20"
    >
      <h2 id="education-heading" className="text-2xl font-semibold text-foreground">
        Education
      </h2>
      <div className="relative mt-8">
        {/* timeline line */}
        <div
          className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-teal-500/50 via-teal-500/20 to-transparent md:left-1/2"
          aria-hidden
        />
        <div className="grid gap-10 md:grid-cols-2">
          {siteContent.education.map((e, idx) => {
            const isBE = e.title.toLowerCase().includes("be");
            return (
              <motion.div
                key={e.period}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -16 : 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6 }}
                className={`relative rounded-2xl border border-border bg-background/5 p-5 ${
                  idx % 2 === 0 ? "md:mr-8" : "md:ml-8"
                }`}
              >
                {/* DOT: only for BE, placed inside card at top-left */}
                {isBE && (
                  <motion.div
                    aria-hidden
                    className="absolute left-4 top-4"
                    animate={{ opacity: [0.35, 1, 0.35] }}
                    transition={{ repeat: Infinity, duration: 1.4 }}
                  >
                    <span className="block h-3 w-3 rounded-full bg-teal-500 ring-4 ring-teal-500/20" />
                  </motion.div>
                )}

                <div className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-9 w-9 place-items-center rounded-full bg-teal-500/10 text-teal-400 ring-1 ring-teal-500/30">
                    {iconFor(e.title)}
                  </span>
                  <div>
                    <div className="text-sm text-teal-400">{e.period}</div>
                    <div className="mt-1 font-medium text-foreground">{e.title}</div>
                    {e.institution && (
                      <div className="text-sm text-foreground/70">{e.institution}</div>
                    )}
                    {e.details && (
                      <p className="mt-2 text-sm text-foreground/70">{e.details}</p>
                    )}
                    {e.highlights && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {e.highlights.map((h) => (
                          <Pill key={h}>{h}</Pill>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
