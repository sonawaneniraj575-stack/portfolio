# Changelog

## 2025-09-14

- Fixed navbar underline overflow by replacing global animated underline with scoped, per-link `::after` underline that scales within the link text. Prevents overflow on hover/active across breakpoints.
- Ensured light mode uses dark text by switching hard-coded `text-white` styles to theme-aware `text-foreground` variants; updated headings, body copy, Footer, Navbar, and Projects/Education sections.
- Replaced 3D model with lightweight, animated "NS" initials using React Three Fiber and drei Text. Added reduced-motion static fallback and tuned materials/lighting for performance.
- Added project image support with a robust fallback to `public/images/placeholder-project.png` via `<img onError>`; enforced consistent 16:9 aspect and object-fit.
- Enhanced Education timeline with icons (graduation cap/school), clearer node markers, and improved hierarchy; made styles theme-aware.
- Installed required runtime deps: `framer-motion`, `gsap`, `@react-three/fiber`, `@react-three/drei`, `three`, `@react-three/postprocessing`, `react-helmet-async`, `react-icons`, and `@fontsource/poppins`.
- Verified build with Vite; resolved missing font dependency.
