import type { ReactNode } from "react";

import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

type CtaLink = {
  label: string;
  href: string;
};

type ContactCtaSectionProps = {
  /** Pass `null` to render the section without an eyebrow. */
  eyebrow?: string | null;
  title?: ReactNode;
  description?: ReactNode;
  primaryCta?: CtaLink;
  /** Pass `null` to render a single call to action. */
  secondaryCta?: CtaLink | null;
  headingId?: string;
};

/** Closing call to action, shared across pages. */
export default function ContactCtaSection({
  eyebrow = "Let's Build Together",
  title = "Have a Project in Mind?",
  description = "Whether you are planning a new development, a complex construction project or an extension to an existing space, our team is ready to discuss how Big Rock Builders can help.",
  primaryCta = { label: "Talk to Our Team", href: "/contact" },
  secondaryCta = { label: "Explore Our Projects", href: "/projects" },
  headingId = "contact-cta-heading",
}: ContactCtaSectionProps) {
  return (
    <section aria-labelledby={headingId} className="bg-ink-950 section">
      <div className="site-container">
        <div className="mx-auto flex max-w-3xl flex-col items-center">
          <SectionHeading
            eyebrow={eyebrow ?? undefined}
            headingId={headingId}
            align="center"
            title={title}
            description={description}
          />

          <div className="mt-12 flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:items-center">
            <Button href={primaryCta.href} size="lg">
              {primaryCta.label}
            </Button>
            {secondaryCta ? (
              <Button href={secondaryCta.href} variant="outline" size="lg">
                {secondaryCta.label}
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
