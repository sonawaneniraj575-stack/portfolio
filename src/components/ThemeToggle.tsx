import { useEffect, useRef, useState } from "react";
import { useTheme } from "@/hooks/useTheme";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const [announce, setAnnounce] = useState("");
  const liveRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    setAnnounce(`Switched to ${theme} mode`);
  }, [theme]);

  return (
    <div className="relative">
      <button
        aria-label="Toggle theme"
        aria-pressed={theme === "dark"}
        onClick={toggle}
        className="inline-flex items-center justify-center rounded-full border border-border bg-background/5 p-2 text-foreground/80 backdrop-blur hover:bg-background/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/60"
      >
        {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
      </button>
      <span ref={liveRef} aria-live="polite" className="sr-only">
        {announce}
      </span>
    </div>
  );
}
