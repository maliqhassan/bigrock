import type { Metadata } from "next";

import PageHero from "@/components/sections/PageHero";
import ExpertiseOverviewSection from "@/components/sections/ExpertiseOverviewSection";
import IntegratedApproachSection from "@/components/sections/IntegratedApproachSection";
import CapabilityStatementSection from "@/components/sections/CapabilityStatementSection";
import ContactCtaSection from "@/components/sections/ContactCtaSection";

export const metadata: Metadata = {
  title: "Expertise",
  description:
    "Big Rock Builders brings civil, mechanical, electrical and integrated services capability together, supporting coordinated delivery on complex construction and engineering projects.",
};

export default function ExpertisePage() {
  return (
    <>
      <PageHero
        eyebrow="Our Expertise"
        headingId="expertise-hero-heading"
        title={
          <>
            Engineering Depth.
            <span className="text-gold-500 block">Integrated Capability.</span>
          </>
        }
        description="Our multidisciplinary capability allows us to approach complex projects with coordinated civil, mechanical and electrical expertise."
        image={{ src: "/images/expertise-hero.jpg" }}
      />
      <ExpertiseOverviewSection />
      <IntegratedApproachSection />
      <CapabilityStatementSection />
      <ContactCtaSection
        eyebrow="Work With Us"
        headingId="expertise-cta-heading"
        title="Bring Your Project to the Right Team."
        description="Talk to Big Rock Builders about your construction or engineering requirements."
        primaryCta={{ label: "Talk to Our Team", href: "/contact" }}
        secondaryCta={{ label: "View Our Projects", href: "/projects" }}
      />
    </>
  );
}
