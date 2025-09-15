import { useEffect, useRef } from "react";
import { shimmer } from "@/lib/gsap";

export default function DividerShimmer() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current) shimmer(ref.current);
  }, []);
  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="h-px w-full bg-[linear-gradient(90deg,transparent,rgba(0,178,169,0.6),transparent)] bg-[length:200%_100%]"
    />
  );
}
