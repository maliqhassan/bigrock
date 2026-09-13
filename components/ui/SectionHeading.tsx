import type { ReactNode } from "react";

import { RevealGroup, RevealBlock, WordReveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

type HeadingLevel = "h1" | "h2" | "h3";
type HeadingAlign = "left" | "center";

const levelClasses: Record<HeadingLevel, string> = {
  h1: "display",
  h2: "heading-2",
  h3: "heading-3",
};

type SectionHeadingProps = {
  /** Small gold label rendered above the title. */
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  /** Semantic heading level; also sets the type scale. Defaults to `h2`. */
  as?: HeadingLevel;
  align?: HeadingAlign;
  /** Optional id on the heading element, for `aria-labelledby` on the section. */
  headingId?: string;
  /** Hides the short gold rule under the title. */
  hideRule?: boolean;
  className?: string;
};

/**
 * Consistent section intro: eyebrow, heading, gold rule and optional lead copy.
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  as = "h2",
  align = "left",
  headingId,
  hideRule = false,
  className,
}: SectionHeadingProps) {
  const Heading = as;
  const isCentered = align === "center";

  return (
    <RevealGroup
      stagger={0.12}
      className={cn(
        "flex flex-col",
        isCentered ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow ? (
        <RevealBlock>
          <span className="eyebrow">{eyebrow}</span>
        </RevealBlock>
      ) : null}

      <Heading
        id={headingId}
        className={cn(levelClasses[as], eyebrow && "mt-4")}
      >
        {/* Plain-text titles animate word by word; composed titles rise as a
            block, since they carry their own markup. */}
        {typeof title === "string" ? <WordReveal text={title} /> : title}
      </Heading>

      {hideRule ? null : (
        <RevealBlock>
          <span className="rule-gold mt-6" aria-hidden="true" />
        </RevealBlock>
      )}

      {description ? (
        <RevealBlock>
          <p
            className={cn("lead mt-6", isCentered ? "max-w-2xl" : "max-w-3xl")}
          >
            {description}
          </p>
        </RevealBlock>
      ) : null}
    </RevealGroup>
  );
}
