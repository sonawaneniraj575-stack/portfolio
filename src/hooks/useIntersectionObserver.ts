import { useEffect, useState } from "react";

export function useIntersectionObserver<T extends Element>(
  ref: React.RefObject<T>,
  options?: IntersectionObserverInit
) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => setInView(e.isIntersecting));
    }, { threshold: 0.2, ...(options || {}) });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref, options]);

  return inView;
}
