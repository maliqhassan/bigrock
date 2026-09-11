import Image from "next/image";
import { ArrowRight } from "lucide-react";

import Button from "@/components/ui/Button";
import { site } from "@/lib/site";

/**
 * Full-height homepage hero. The header sits over this section, so the top
 * padding reserves its height while the negative margin pulls the artwork
 * behind it.
 */
export default function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="bg-ink-950 relative -mt-20 flex min-h-[100svh] flex-col justify-center overflow-hidden pt-20"
    >
      {/* Architectural photography */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Navy readability overlays: vertical on mobile, horizontal on desktop */}
      <div
        aria-hidden="true"
        className="from-ink-950 via-ink-950/85 to-ink-950/35 absolute inset-0 -z-10 bg-gradient-to-b lg:bg-gradient-to-r lg:via-ink-950/80 lg:to-transparent"
      />
      <div
        aria-hidden="true"
        className="from-ink-950 absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t to-transparent"
      />

      {/* Gold edge detail */}
      <div
        aria-hidden="true"
        className="via-gold-500/60 absolute inset-y-0 left-0 -z-10 hidden w-px bg-gradient-to-b from-transparent to-transparent lg:block"
      />

      <div className="site-container relative w-full py-20 sm:py-24">
        <div className="max-w-3xl">
          <p className="eyebrow">{site.tagline}</p>

          <h1 id="hero-heading" className="display mt-6">
            Built on Strength.
            <span className="text-gold-500 block">Delivered with Trust.</span>
          </h1>

          <span className="rule-gold mt-8 w-16" aria-hidden="true" />

          <p className="lead mt-8 max-w-2xl">
            At {site.legalName}, we turn visions into reality with unwavering
            commitment to quality, integrity and innovation. We build more than
            structures &mdash; we build trust.
          </p>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button href="/projects" size="lg">
              Explore Our Projects
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Talk to Our Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
