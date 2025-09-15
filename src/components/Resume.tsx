import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { FaDownload, FaExternalLinkAlt } from "react-icons/fa";

export default function ResumeSection() {
  return (
    <Section id="resume" className="mx-auto max-w-6xl px-4 py-20">
      <h2 className="text-2xl font-semibold text-foreground text-center">Resume</h2>
      
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="mt-8 mx-auto max-w-2xl rounded-2xl border border-border bg-background/5 p-8 text-center shadow-lg shadow-black/10"
      >
        <p className="text-foreground/70">
          A concise overview of my skills, education, and projects.  
          Optimized for software engineering roles and MAANG preparation.
        </p>

        <p className="mt-2 text-xs text-foreground/50">Last updated: September 2025</p>

        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-teal-500/10 px-5 py-2.5 text-sm font-medium text-teal-400 ring-1 ring-teal-400/30 transition hover:bg-teal-500/20"
          >
            <FaExternalLinkAlt className="text-sm" />
            View Online
          </a>
          
          <a
            href="#"
            download
            className="inline-flex items-center gap-2 rounded-xl bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow-md shadow-teal-600/30 transition hover:bg-teal-500 hover:shadow-lg hover:shadow-teal-500/40"
          >
            <FaDownload className="text-sm" />
            Download Resume
          </a>
        </div>
      </motion.div>
    </Section>
  );
}
