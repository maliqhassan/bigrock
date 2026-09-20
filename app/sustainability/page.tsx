import type { Metadata } from "next";

import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

import PageHero from "@/components/sections/PageHero";
import SustainabilityOverviewSection from "@/components/sections/SustainabilityOverviewSection";
import SustainabilityPrinciplesSection from "@/components/sections/SustainabilityPrinciplesSection";
import SustainabilityStatementSection from "@/components/sections/SustainabilityStatementSection";
import LongTermCapabilitySection from "@/components/sections/LongTermCapabilitySection";
import ContactCtaSection from "@/components/sections/ContactCtaSection";

export const metadata: Metadata = pageMetadata({
  title: "Sustainability",
  description:
    "Big Rock Builders approaches construction with attention to efficiency, responsible resource use and the long-term value of the spaces and infrastructure we help create.",
  path: "/sustainability",
  image: "/og/sustainability.jpg",
});

export default function SustainabilityPage() {
  return (
    <>
      <JsonLd
        schema={breadcrumbSchema([
          { name: "Sustainability", path: "/sustainability" },
        ])}
      />

      <PageHero
        eyebrow="Sustainability"
        headingId="sustainability-hero-heading"
        title={
          <>
            Building for Today.
            <span className="text-gold-500 block">
              Thinking Beyond Tomorrow.
            </span>
          </>
        }
        description="We believe responsible construction should consider the long-term impact of the spaces and infrastructure we create."
        image={{
          src: "/images/sustainability-hero.jpg",
          alt: "A concrete structure under construction with cranes and scaffolding",
        }}
      />
      <SustainabilityOverviewSection />
      <SustainabilityPrinciplesSection />
      <SustainabilityStatementSection />
      <LongTermCapabilitySection />
      <ContactCtaSection
        eyebrow="Work With Us"
        headingId="sustainability-cta-heading"
        title="Build Something That Lasts."
        description="Talk to Big Rock Builders about your construction or engineering requirements."
        primaryCta={{ label: "Talk to Our Team", href: "/contact" }}
        secondaryCta={{ label: "Explore Our Projects", href: "/projects" }}
      />
    </>
  );
}
