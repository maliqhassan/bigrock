import type { Metadata } from "next";

import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

import PageHero from "@/components/sections/PageHero";
import CompanyStorySection from "@/components/sections/CompanyStorySection";
import CeoMessageSection from "@/components/sections/CeoMessageSection";
import MissionVisionSection from "@/components/sections/MissionVisionSection";
import DifferentiatorsSection from "@/components/sections/DifferentiatorsSection";
import TeamCapabilitySection from "@/components/sections/TeamCapabilitySection";
import ContactCtaSection from "@/components/sections/ContactCtaSection";

export const metadata: Metadata = pageMetadata({
  title: "About Us",
  description:
    "Founded in Pakistan in 2016, Big Rock Builders (Pvt Ltd) delivers construction and engineering projects with civil, mechanical and electrical capability, quality control and transparent client communication.",
  path: "/about",
  image: "/og/about.jpg",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        schema={breadcrumbSchema([{ name: "About Us", path: "/about" }])}
      />

      <PageHero
        eyebrow="About Big Rock Builders"
        headingId="about-hero-heading"
        title={
          <>
            Building with Purpose.
            <span className="text-gold-500 block">
              Delivering with Confidence.
            </span>
          </>
        }
        description="Founded in Pakistan in 2016, Big Rock Builders (Pvt Ltd) delivers construction and engineering solutions with a focus on quality, disciplined execution and client satisfaction."
        image={{
          src: "/images/about.jpg",
          alt: "A tower crane against an evening sky above a construction site",
        }}
      />
      <CompanyStorySection />
      <CeoMessageSection />
      <MissionVisionSection />
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
