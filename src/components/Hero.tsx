import { Suspense, lazy } from "react";
import Button from "@/components/ui/Button";
import { siteContent } from "@/content/siteContent";
import { smoothScrollToId } from "@/lib/routing";

const Initials3D = lazy(() => import("./three/Initials3D"));

export default function Hero() {
  return (
    <section id="home" aria-labelledby="home-heading" className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-4 py-20 md:grid-cols-2 md:py-28">
      <div>
        <h1 id="home-heading" className="text-balance text-4xl font-semibold leading-tight text-foreground md:text-5xl lg:text-6xl">
          {siteContent.hero.tagline}
        </h1>
        <p className="mt-5 max-w-prose text-pretty text-base text-foreground/70 md:text-lg">
          {siteContent.hero.subtext}
        </p>
        <div className="mt-8 flex gap-4">
          <Button onClick={() => smoothScrollToId(siteContent.hero.cta.targetId)}>
            {siteContent.hero.cta.label}
          </Button>
          <a href="#projects" className="text-sm text-foreground/70 underline-offset-4 hover:text-foreground hover:underline">Browse Projects</a>
        </div>
      </div>
      <div className="relative aspect-square w-full flex items-center justify-center p-2">
    <Suspense fallback={<div className="h-full w-full bg-gradient-to-br from-[#071A3F] to-[#0B2540]" />}>
      <Initials3D />
    </Suspense>
      </div>
    </section>
  );
}
