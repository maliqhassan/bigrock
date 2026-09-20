import Image from "next/image";

import SectionHeading from "@/components/ui/SectionHeading";
import { RevealList, RevealItem } from "@/components/ui/Reveal";
import ArrowLink from "@/components/ui/ArrowLink";

type Project = {
  title: string;
  category: string;
  description?: string;
  image: string;
};

const featuredProject: Project = {
  title: "DHA Development Projects",
  category: "Construction",
  image: "/images/project-dha-1.jpg",
};

const supportingProjects: Project[] = [
  {
    title: "Rawalpindi Institute of Cardiology",
    category: "Healthcare",
    description:
      "A major healthcare project reflecting our experience in delivering demanding building environments.",
    image: "/images/project-rics.jpg",
  },
  {
    title: "Benazir Bhutto Hospital",
    category: "Healthcare",
    description:
      "A healthcare project delivered through coordinated execution, with quality control applied throughout.",
    image: "/images/project-bbh.jpg",
  },
];

/** Additional delivered projects, listed by name only. */
const furtherProjects = [
  "Punjab House",
  "FGEHF Water Supply Wells",
  "Soil Nailing & Excavation",
  "Maryam Nawaz Health Clinic",
];

type ProjectTileProps = {
  project: Project;
  featured?: boolean;
  sizes: string;
};

function ProjectTile({ project, featured = false, sizes }: ProjectTileProps) {
  return (
    <article
      className={`border-line group relative h-full overflow-hidden rounded-xl border ${
        featured
          ? "aspect-[4/5] sm:aspect-[3/2] lg:aspect-auto lg:min-h-[34rem]"
          : "aspect-[3/2] lg:aspect-auto lg:min-h-[16rem]"
      }`}
    >
      <Image
        src={project.image}
        alt=""
        fill
        sizes={sizes}
        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
      />

      <div
        aria-hidden="true"
        className="from-ink-950 via-ink-950/55 absolute inset-0 bg-gradient-to-t to-transparent"
      />

      <div
        className={`absolute inset-x-0 bottom-0 flex flex-col ${
          featured ? "p-7 sm:p-10" : "p-6"
        }`}
      >
        <span className="eyebrow">{project.category}</span>
        <h3
          className={`${featured ? "heading-2" : "heading-4"} mt-3 text-white`}
        >
          {project.title}
        </h3>
        <span className="rule-gold mt-5" aria-hidden="true" />
        {project.description ? (
          <p
            className={`${featured ? "body-text" : "body-muted"} mt-5 max-w-xl`}
          >
            {project.description}
          </p>
        ) : null}
      </div>
    </article>
  );
}

/** Homepage portfolio: one dominant featured project beside two supporting works. */
export default function ProjectsSection() {
  return (
    <section aria-labelledby="projects-heading" className="bg-ink-950 section">
      <div className="site-container">
        <SectionHeading
          eyebrow="Selected Projects"
          headingId="projects-heading"
          title="Built to Stand the Test of Time."
          description="From healthcare facilities and public infrastructure to complex excavation and water supply works, our projects reflect a commitment to disciplined execution and lasting quality."
        />

        <RevealList className="mt-16 grid gap-6 lg:grid-cols-5">
          <RevealItem className="lg:col-span-3">
            <ProjectTile
              project={featuredProject}
              featured
              sizes="(min-width: 1024px) 58vw, 100vw"
            />
          </RevealItem>

          <RevealItem className="lg:col-span-2">
            <ul className="grid h-full gap-6 lg:grid-rows-2">
              {supportingProjects.map((project) => (
                <li key={project.title} className="h-full">
                  <ProjectTile
                    project={project}
                    sizes="(min-width: 1024px) 38vw, 100vw"
                  />
                </li>
              ))}
            </ul>
          </RevealItem>
        </RevealList>

        <div className="hairline mt-12 flex flex-col gap-6 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="body-muted">
            <span className="text-mist-300">Also delivered:</span>{" "}
            {furtherProjects.join(" · ")}
          </p>
          <ArrowLink href="/projects" className="shrink-0">
            View All Projects
          </ArrowLink>
        </div>
      </div>
    </section>
  );
}
