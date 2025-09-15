export function initGA(id?: string) {
  const gaId = id || import.meta.env.VITE_GA_ID;
  if (!gaId || typeof window === "undefined") return;
  if ((window as any).__gaInitialized) return;
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
  document.head.appendChild(s);
  (window as any).dataLayer = (window as any).dataLayer || [];
  function gtag(...args: any[]) {
    (window as any).dataLayer.push(args);
  }
  (window as any).gtag = gtag;
  gtag("js", new Date());
  gtag("config", gaId);
  (window as any).__gaInitialized = true;
}
