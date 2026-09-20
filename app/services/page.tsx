import type { Metadata } from "next";

import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

import PageHero from "@/components/sections/PageHero";
import ServicesOverviewSection from "@/components/sections/ServicesOverviewSection";
import IntegratedCapabilitySection from "@/components/sections/IntegratedCapabilitySection";
import ContactCtaSection from "@/components/sections/ContactCtaSection";

export const metadata: Metadata = pageMetadata({
  title: "Services",
  description:
    "Big Rock Builders provides civil and structural construction, project management, renovations and extensions, and sustainable building — with integrated civil, mechanical and electrical capability.",
  path: "/services",
  image: "/og/services.jpg",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        schema={breadcrumbSchema([{ name: "Services", path: "/services" }])}
      />

      <PageHero
        eyebrow="Our Services"
        headingId="services-hero-heading"
        title={
          <>
            Built for Complexity.
            <span className="text-gold-500 block">
              Engineered for Excellence.
            </span>
          </>
        }
        description="From civil and structural construction to project management, renovations and sustainable building, we provide integrated solutions for demanding projects."
        image={{
          src: "/images/services-hero.jpg",
          alt: "Construction workers tying reinforcement steel on a slab at sunset",
        }}
      />
      <ServicesOverviewSection />
      <IntegratedCapabilitySection />
      <ContactCtaSection
        eyebrow="Start a Conversation"
        headingId="services-cta-heading"
        title="Let's Discuss Your Project."
        description="Talk to Big Rock Builders about your construction or engineering requirements."
        primaryCta={{ label: "Talk to Our Team", href: "/contact" }}
        secondaryCta={{ label: "View Our Projects", href: "/projects" }}
      />
    </>
  );
}
