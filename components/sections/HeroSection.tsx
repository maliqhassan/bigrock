import Image from "next/image";
import { ArrowRight } from "lucide-react";

import Button from "@/components/ui/Button";
import { Entrance, RevealBlock, WordReveal } from "@/components/ui/Reveal";
import HeroStructure from "@/components/sections/HeroStructure";
import { site } from "@/lib/site";

/**
 * Full-height homepage hero. The floating header bar sits over this section,
 * so the top padding keeps the headline clear of it.
 */
export default function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="bg-ink-950 relative isolate flex min-h-[100svh] flex-col justify-center overflow-hidden pt-28"
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

      {/* Even navy scrim, holding overall legibility. */}
      <div
        aria-hidden="true"
        className="bg-ink-950/45 absolute inset-0 -z-10"
      />

      {/* Midnight navy side gradient: anchors the headline on the left and
          fades out across the image. Runs bottom-up on narrow screens. */}
      <div
        aria-hidden="true"
        className="from-ink-950 via-ink-950/45 sm:via-ink-950/30 absolute inset-0 -z-10 bg-gradient-to-t to-transparent sm:bg-gradient-to-r"
      />

      {/* Construction frame ornament */}
      <HeroStructure />

      {/* Gold edge detail */}
      <div
        aria-hidden="true"
        className="via-gold-500/60 absolute inset-y-0 left-0 -z-10 hidden w-px bg-gradient-to-b from-transparent to-transparent lg:block"
      />

      <div className="site-container relative w-full py-20 sm:py-24">
        <Entrance className="max-w-3xl">
          <RevealBlock>
            <p className="eyebrow">{site.tagline}</p>
          </RevealBlock>

          <RevealBlock>
            <h1 id="hero-heading" className="display mt-6">
              <WordReveal text="Built on Strength." />
              <span className="text-gold-500 block">
                <WordReveal text="Delivered with Trust." delay={0.18} />
              </span>
            </h1>
          </RevealBlock>

          <RevealBlock>
            <span className="rule-gold mt-8 w-16" aria-hidden="true" />
          </RevealBlock>

          <RevealBlock>
            <p className="lead mt-8 max-w-2xl">
              At {site.legalName}, we turn visions into reality with unwavering
              commitment to quality, integrity and innovation. We build more
              than structures &mdash; we build trust.
            </p>
          </RevealBlock>

          <RevealBlock className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button href="/projects" size="lg">
              Explore Our Projects
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Talk to Our Team
            </Button>
          </RevealBlock>
        </Entrance>
      </div>
    </section>
  );
}
