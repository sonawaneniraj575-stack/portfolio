import { smoothScrollToId } from "@/lib/routing";
import { useActiveSection } from "@/hooks/useActiveSection";
import ThemeToggle from "./ThemeToggle";

const SECTIONS = ["home", "about", "education", "projects", "resume"];

export default function Navbar() {
  const active = useActiveSection(SECTIONS);

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/40">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:rounded focus:bg-teal-600 focus:px-3 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      <nav className="relative mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-teal-400 to-teal-600 text-sm font-semibold text-black grid place-items-center">
            NS
          </div>
          <span className="text-sm text-foreground/80">Niraj Sonawane</span>
        </div>

        {/* Nav Links */}
        <div className="relative hidden gap-6 md:flex">
          {SECTIONS.map((id) => {
            const label = id === "resume"
              ? "Résumé"
              : id.charAt(0).toUpperCase() + id.slice(1);

            return (
              <a
                key={id}
                data-nav
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  smoothScrollToId(id);
                }}
                className={`group px-1.5 py-1 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/60
                  ${
                    id === "resume"
                      ? "rounded-md border border-teal-500/40 px-3 py-1.5 font-medium text-teal-400 hover:bg-teal-500/10"
                      : "text-foreground/70 hover:text-foreground"
                  }
                  ${active === id && id !== "resume" ? "text-foreground" : ""}
                `}
              >
                <span
                  className={`relative inline-block
                    ${id !== "resume" ? "after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:rounded after:bg-teal-400 after:transition-transform after:duration-300 group-hover:after:scale-x-100" : ""}
                    ${active === id ? "after:scale-x-100" : ""}
                  `}
                >
                  {label}
                </span>
              </a>
            );
          })}
        </div>

        {/* Theme Toggle */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
