# Niraj Sonawane — Portfolio

Live preview: https://sonawaneniraj575-stack/my-portfolio1-51d28c91.scout.site (temporary). Requesting mapping to https://ns.scout.live for review.

## Overview
A fast, accessible portfolio for Niraj Sonawane built with React, Vite, TypeScript, Tailwind CSS v4, Framer Motion, GSAP, and @react-three/fiber. Heavy sections (3D and Projects) are code‑split and lazy‑loaded. The 3D hero renders auto‑generated “NS” initials as a wireframe text mesh with teal glow and reduced‑motion SVG fallback.

## Tech Stack
- React 19 + Vite 6 + TypeScript
- Tailwind CSS v4 (@theme + CSS variables)
- Framer Motion (reveal animations, skill bars)
- GSAP (navbar underline follow, count‑up metrics, shimmer divider)
- three.js + @react-three/fiber + drei + postprocessing (3D initials)
- react-icons (skill icons)
- react-helmet-async (SEO)

## Repo Structure
```
src/
  components/
    Navbar.tsx
    Hero.tsx
    About.tsx
    Education.tsx
    Projects/
      ProjectsSection.tsx  (lazy-loaded)
      ProjectCard.tsx
    Footer.tsx
    ThemeToggle.tsx
    three/
      Initials3D.tsx       (lazy-loaded)
    ui/
      Section.tsx
      Pill.tsx
      Button.tsx
      DividerShimmer.tsx
  hooks/
    useActiveSection.ts
    useIntersectionObserver.ts
    useTheme.ts
    useReducedMotionPref.ts
  lib/
    gsap.ts
    analytics.ts
    seo.ts
    routing.ts
  content/
    siteContent.ts
  styles/
    globals.css
  assets/
    og/og-placeholder.png
  main.tsx
  App.tsx
public/
  favicon.png
  robots.txt
  sitemap.xml
```

## Environment Variables
Copy `.env.example` to `.env` and adjust if needed:
```
VITE_GA_ID=G-1MLMNRRDMH
```
Analytics initializes only when the variable is present.

## Development
```
bun dev
```
Open http://localhost:5173. Edit files in `src/` — HMR updates automatically.

## Build
```
bun run build
bun run preview
```

## SEO
- Title: “Niraj Sonawane | Full-Stack Developer in IT (AI-Integrated Web Solutions)”
- Meta description configured in `src/lib/seo.ts` and `App.tsx`
- Open Graph: `src/assets/og/og-placeholder.png`
- `public/robots.txt` and `public/sitemap.xml`

## Accessibility
- Semantic sections and headings
- Keyboard‑navigable sticky navbar with skip link
- ARIA progressbars for skill levels
- Reduced‑motion: 3D canvas replaced with static SVG

## Animation Map
- Framer Motion: section reveals, skill bar fill, project card entrances
- GSAP: navbar underline follower, count‑up metrics, shimmer divider
- CSS: button lift/glow, back‑to‑top 180° rotate on hover

## Deployment
- Preview is auto‑deployed on each change.
- For custom domain, map `ns.scout.live` to this build. Static export is compatible with Netlify/Vercel or any static host.

## Replacing Assets
- OG image: replace `src/assets/og/og-placeholder.png`
- Favicon: replace `public/favicon.png`

## License
MIT © Niraj Sonawane