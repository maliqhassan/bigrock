import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

/** Guidance on what makes an enquiry useful to the team. */
export default function ProjectEnquiryNoteSection() {
  return (
    <section
      aria-labelledby="enquiry-note-heading"
      className="bg-ink-950 section-tight"
    >
      <div className="site-container">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Project Enquiries"
              headingId="enquiry-note-heading"
              title="The Right Conversation Starts with the Right Information."
            />
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <Reveal>
              <p className="body-text lg:mt-16">
                Share the essentials of your project, scope and requirements.
                Providing clear information helps us understand your needs and
                determine how our multidisciplinary capability can support the
                delivery.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
