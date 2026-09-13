import Image from "next/image";

import { Entrance, RevealBlock } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  /** Optional full-bleed background image. The layout works without one. */
  image?: { src: string; alt?: string };
  headingId?: string;
  className?: string;
};

/**
 * Shared hero for inner pages. Sits beneath the transparent sticky header,
 * so the top padding reserves the header height.
 */
export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  headingId = "page-hero-heading",
  className,
}: PageHeroProps) {
  return (
    <section
      aria-labelledby={headingId}
      className={cn(
        "bg-ink-950 relative isolate flex min-h-[60svh] flex-col justify-center overflow-hidden pt-28",
        className,
      )}
    >
      {image ? (
        <>
          <div className="absolute inset-0 -z-20">
            <Image
              src={image.src}
              alt={image.alt ?? ""}
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

          {/* Midnight navy side gradient, matching the homepage banner. */}
          <div
            aria-hidden="true"
            className="from-ink-950 via-ink-950/45 sm:via-ink-950/30 absolute inset-0 -z-10 bg-gradient-to-t to-transparent sm:bg-gradient-to-r"
          />
        </>
      ) : null}

      <div className="site-container relative w-full py-20 sm:py-24">
        <Entrance className="max-w-3xl">
          <RevealBlock>
            <p className="eyebrow">{eyebrow}</p>
          </RevealBlock>
          <RevealBlock>
            <h1 id={headingId} className="heading-1 mt-6">
              {title}
            </h1>
          </RevealBlock>
          <RevealBlock>
            <span className="rule-gold mt-8 w-16" aria-hidden="true" />
          </RevealBlock>
          {description ? (
            <RevealBlock>
              <p className="lead mt-8 max-w-2xl">{description}</p>
            </RevealBlock>
          ) : null}
        </Entrance>
      </div>
    </section>
  );
}
