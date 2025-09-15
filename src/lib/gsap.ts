import gsap from "gsap";

export function navbarUnderline(nav: HTMLElement, underline: HTMLElement) {
  const items = Array.from(nav.querySelectorAll<HTMLAnchorElement>("a[data-nav]"));
  let active: HTMLAnchorElement | null = items[0] || null;

  function animateTo(target: HTMLAnchorElement | null) {
    const el = target || active;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const parentRect = nav.getBoundingClientRect();
    const x = rect.left - parentRect.left;
    gsap.to(underline, { x, width: rect.width, duration: 0.3, ease: "power3.out" });
  }

  items.forEach((a) => {
    a.addEventListener("mouseenter", () => animateTo(a));
    a.addEventListener("focus", () => animateTo(a));
    a.addEventListener("mouseleave", () => animateTo(active));
    a.addEventListener("blur", () => animateTo(active));
  });

  return {
    setActive(id: string) {
      const found = items.find((i) => i.getAttribute("href") === `#${id}`);
      if (found) {
        active = found;
        animateTo(found);
      }
    },
    refresh() {
      animateTo(active);
    },
  };
}

export function countUp(el: HTMLElement, to: number, opts?: { duration?: number; suffix?: string; decimals?: number }) {
  const duration = opts?.duration ?? 1.2;
  const decimals = opts?.decimals ?? (Number.isInteger(to) ? 0 : 1);
  const suffix = opts?.suffix ?? "";
  const obj = { val: 0 } as any;
  gsap.to(obj, {
    val: to,
    duration,
    ease: "power2.out",
    onUpdate: () => {
      const value = obj.val.toFixed(decimals);
      el.textContent = `${value}${suffix}`;
    },
  });
}

export function shimmer(el: HTMLElement) {
  gsap.to(el, {
    backgroundPositionX: "200%",
    duration: 2,
    repeat: -1,
    ease: "linear",
  });
}
