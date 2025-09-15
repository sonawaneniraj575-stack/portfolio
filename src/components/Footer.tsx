import { useEffect, useState } from "react";
import { siteContent } from "@/content/siteContent";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const s = window.scrollY;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setShowTop(s > h * 0.5);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer id="contact" className="relative border-t border-border bg-background/30">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-foreground/70 md:flex-row">
          <div className="flex items-center gap-4">
            <a href={`mailto:${siteContent.socials.email}`} className="hover:text-foreground">Email</a>
            <a href={siteContent.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-foreground">LinkedIn</a>
            <a href={siteContent.socials.github} target="_blank" rel="noreferrer" className="hover:text-foreground">GitHub</a>
            <a href={siteContent.socials.twitter} target="_blank" rel="noreferrer" className="hover:text-foreground">X/Twitter</a>
          </div>
          <div className="text-foreground/50">© {new Date().getFullYear()} {siteContent.name}</div>
        </div>
      </div>
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="group fixed bottom-6 right-6 grid h-12 w-12 place-items-center rounded-full bg-teal-500 text-black shadow-[0_16px_50px_-16px_rgba(0,178,169,0.8)] transition-transform hover:-translate-y-0.5"
        >
          <ArrowUpRight className="transition-transform group-hover:rotate-180" />
        </button>
      )}
    </footer>
  );
}
