import type { Metadata } from "next";

import PageHero from "@/components/sections/PageHero";
import CompanyStorySection from "@/components/sections/CompanyStorySection";
import DifferentiatorsSection from "@/components/sections/DifferentiatorsSection";
import TeamCapabilitySection from "@/components/sections/TeamCapabilitySection";
import ContactCtaSection from "@/components/sections/ContactCtaSection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Founded in Pakistan in 2016, Big Rock Builders (Pvt Ltd) delivers construction and engineering projects with civil, mechanical and electrical capability, quality control and transparent client communication.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Big Rock Builders"
        headingId="about-hero-heading"
        title={
          <>
            Building with Purpose.
            <span className="text-gold-500 block">Delivering with Confidence.</span>
          </>
        }
        description="Founded in Pakistan in 2016, Big Rock Builders (Pvt Ltd) delivers construction and engineering solutions with a focus on quality, disciplined execution and client satisfaction."
        image={{ src: "/images/about-hero.jpg" }}
      />
      <CompanyStorySection />
      <DifferentiatorsSection />
      <TeamCapabilitySection />
      <ContactCtaSection
        eyebrow={null}
        headingId="about-cta-heading"
        title="Let's Build Something That Lasts."
        description="Talk to Big Rock Builders about your next construction or engineering project."
        primaryCta={{ label: "Talk to Our Team", href: "/contact" }}
        secondaryCta={{ label: "View Our Projects", href: "/projects" }}
      />
    </>
  );
}
