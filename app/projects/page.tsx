import type { Metadata } from "next";

import PageHero from "@/components/sections/PageHero";
import ProjectsOverviewSection from "@/components/sections/ProjectsOverviewSection";
import BeforeAfterSection from "@/components/sections/BeforeAfterSection";
import ProjectApproachSection from "@/components/sections/ProjectApproachSection";
import ContactCtaSection from "@/components/sections/ContactCtaSection";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected construction and engineering projects delivered by Big Rock Builders, spanning healthcare facilities, public infrastructure, water supply works and specialised civil engineering.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Projects"
        headingId="projects-hero-heading"
        title="Built to Stand the Test of Time."
        description="From healthcare facilities and public infrastructure to complex excavation and water supply works, our projects reflect a commitment to disciplined execution and lasting quality."
        image={{ src: "/images/projects-hero.jpg" }}
      />
      <ProjectsOverviewSection />
      <BeforeAfterSection />
      <ProjectApproachSection />
      <ContactCtaSection
        eyebrow="Start Your Project"
        headingId="projects-cta-heading"
        title="Let's Build Something That Lasts."
        description="Talk to Big Rock Builders about your next construction or engineering project."
        primaryCta={{ label: "Talk to Our Team", href: "/contact" }}
        secondaryCta={{ label: "Explore Our Services", href: "/services" }}
      />
    </>
  );
}
