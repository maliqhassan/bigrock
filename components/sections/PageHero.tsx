import Image from "next/image";

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
        "surface-blue relative -mt-20 flex min-h-[60svh] flex-col justify-center overflow-hidden pt-20",
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
          <div
            aria-hidden="true"
            className="from-ink-950 via-ink-950/85 to-ink-950/40 lg:via-ink-950/80 absolute inset-0 -z-10 bg-gradient-to-b lg:bg-gradient-to-r lg:to-transparent"
          />
        </>
      ) : null}

      <div
        aria-hidden="true"
        className="from-ink-950 absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t to-transparent"
      />

      <div className="site-container relative w-full py-20 sm:py-24">
        <div className="max-w-3xl">
          <p className="eyebrow">{eyebrow}</p>
          <h1 id={headingId} className="heading-1 mt-6">
            {title}
          </h1>
          <span className="rule-gold mt-8 w-16" aria-hidden="true" />
          {description ? <p className="lead mt-8 max-w-2xl">{description}</p> : null}
        </div>
      </div>
    </section>
  );
}
