import type { Metadata } from "next";

import PageHero from "@/components/sections/PageHero";
import QualityApproachSection from "@/components/sections/QualityApproachSection";
import QualityStandardsSection from "@/components/sections/QualityStandardsSection";
import QualityStatementSection from "@/components/sections/QualityStatementSection";
import QualityCapabilitySection from "@/components/sections/QualityCapabilitySection";
import ContactCtaSection from "@/components/sections/ContactCtaSection";

export const metadata: Metadata = {
  title: "Quality & Standards",
  description:
    "Big Rock Builders delivers projects with structured quality control, risk management, responsible execution and transparent client communication from planning through completion.",
};

export default function QualityStandardsPage() {
  return (
    <>
      <PageHero
        eyebrow="Quality & Standards"
        headingId="quality-hero-heading"
        title={
          <>
            Committed to Quality.
            <span className="text-gold-500 block">
              Built on Accountability.
            </span>
          </>
        }
        description="Our approach is grounded in disciplined project delivery, quality control, risk management and transparent communication — helping clients move from planning to completion with confidence."
        image={{ src: "/images/quality-hero.jpg" }}
      />
      <QualityApproachSection />
      <QualityStandardsSection />
      <QualityStatementSection />
      <QualityCapabilitySection />
      <ContactCtaSection
        eyebrow="Work With Us"
        headingId="quality-cta-heading"
        title="Build with Confidence."
        description="Talk to Big Rock Builders about your construction or engineering requirements."
        primaryCta={{ label: "Talk to Our Team", href: "/contact" }}
        secondaryCta={{ label: "Explore Our Projects", href: "/projects" }}
      />
    </>
  );
}
