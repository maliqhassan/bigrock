import type { Metadata } from "next";

import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

import PageHero from "@/components/sections/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/sections/ContactForm";
import Reveal from "@/components/ui/Reveal";
import ContactInformationSection from "@/components/sections/ContactInformationSection";
import ProjectEnquiryNoteSection from "@/components/sections/ProjectEnquiryNoteSection";
import ContactCtaSection from "@/components/sections/ContactCtaSection";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description:
    "Talk to Big Rock Builders about your construction or engineering requirements — new builds, infrastructure, renovations and multidisciplinary project delivery.",
  path: "/contact",
  image: "/og/contact.jpg",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        schema={breadcrumbSchema([{ name: "Contact", path: "/contact" }])}
      />

      <PageHero
        eyebrow="Get in Touch"
        headingId="contact-hero-heading"
        title={
          <>
            Let&rsquo;s Build{" "}
            <span className="text-gold-500">Something Together.</span>
          </>
        }
        description="Have a construction or engineering requirement? Talk to Big Rock Builders about your project and delivery needs."
        image={{
          src: "/images/contact-hero.jpg",
          alt: "Office staff working at laptops",
        }}
      />

      <section
        aria-labelledby="contact-intro-heading"
        className="bg-ink-950 section"
      >
        <div className="site-container">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Start a Conversation"
                headingId="contact-intro-heading"
                title="Tell Us About Your Project."
              />
              <p className="body-text mt-8 max-w-md">
                Whether you are planning a new build, infrastructure work,
                renovation or a complex engineering requirement, our team is
                ready to understand your needs and discuss the right approach.
              </p>
            </div>

            <Reveal delay={0.12} className="lg:col-span-6 lg:col-start-7">
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      <ContactInformationSection />
      <ProjectEnquiryNoteSection />

      <ContactCtaSection
        eyebrow="Explore Our Work"
        headingId="contact-cta-heading"
        title="See What We Build."
        description="Explore selected projects delivered across construction, infrastructure and healthcare."
        primaryCta={{ label: "View Our Projects", href: "/projects" }}
        secondaryCta={null}
      />
    </>
  );
}
