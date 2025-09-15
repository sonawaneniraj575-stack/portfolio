export const defaultTitle = "Niraj Sonawane | Full-Stack Developer in IT (AI-Integrated Web Solutions)";
export const defaultDescription =
  "Portfolio of Niraj Sonawane, IT student and future full-stack developer passionate about building intelligent, AI-powered digital experiences that are scalable, user-friendly, and future-ready.";

export function buildOg(url: string) {
  return {
    "og:title": defaultTitle,
    "og:description": defaultDescription,
    "og:type": "website",
    "og:url": url,
  } as Record<string, string>;
}
