import { useEffect, useState } from "react";

export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0] || "");

  useEffect(() => {
    const map = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          map.set(entry.target.id, entry.intersectionRatio);
        });

        let max = -1;
        let current = ids[0];

        for (const id of ids) {
          const ratio = map.get(id) || 0;
          if (ratio > max) {
            max = ratio;
            current = id;
          }
        }

        setActive(current);
      },
      {
        threshold: [0, 0.25, 0.5, 0.75, 1],
        rootMargin: "0px 0px -20% 0px", // 👈 only trims bottom a little
      }
    );

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [ids]);

  return active;
}
