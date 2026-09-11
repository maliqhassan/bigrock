import Image from "next/image";

import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

type Project = {
  number: string;
  title: string;
  category: string;
  image?: string;
};

const featuredProject: Project = {
  number: "01",
  title: "Punjab House",
  category: "Construction",
  image: "/images/project-punjab-house.jpg",
};

const projects: Project[] = [
  {
    number: "02",
    title: "FGEHF Water Supply Wells",
    category: "Water Infrastructure",
    image: "/images/project-water-wells.jpg",
  },
  {
    number: "03",
    title: "Soil Nailing & Excavation",
    category: "Civil Engineering",
    image: "/images/project-soil.jpg",
  },
  {
    number: "04",
    title: "Rawalpindi Institute of Cardiology",
    category: "Healthcare",
    image: "/images/project-rics.jpg",
  },
  {
    number: "05",
    title: "Benazir Bhutto Hospital",
    category: "Healthcare",
    image: "/images/project-bbh.jpg",
  },
  {
    number: "06",
    title: "Maryam Nawaz Health Clinic",
    category: "Healthcare",
    image: "/images/project-maryam-nawaz-clinic.jpg",
  },
];

/** Architectural ruled plate shown beneath the photograph. */
const plateStyle = {
  backgroundImage: [
    "linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px)",
    "linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
  ].join(", "),
  backgroundSize: "56px 100%, 100% 56px",
} as const;

type ProjectTileProps = {
  project: Project;
  sizes: string;
  aspect: string;
  featured?: boolean;
};

function ProjectTile({ project, sizes, aspect, featured = false }: ProjectTileProps) {
  return (
    <article
      className={cn(
        "border-line bg-ink-900 group relative h-full overflow-hidden rounded-lg border",
        aspect,
      )}
    >
      <div aria-hidden="true" className="absolute inset-0" style={plateStyle} />

      <span
        aria-hidden="true"
        className="font-display absolute top-6 right-6 text-5xl font-semibold text-white/[0.07] sm:top-8 sm:right-8 sm:text-6xl"
      >
        {project.number}
      </span>

      {project.image ? (
        <Image
          src={project.image}
          alt=""
          fill
          sizes={sizes}
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />
      ) : null}

      <div
        aria-hidden="true"
        className="from-ink-950 via-ink-950/50 absolute inset-0 bg-gradient-to-t to-transparent"
      />

      <div
        className={cn(
          "absolute inset-x-0 bottom-0 flex flex-col",
          featured ? "p-7 sm:p-10" : "p-6 sm:p-8",
        )}
      >
        <span className="eyebrow">{project.category}</span>
        <h3 className={cn(featured ? "heading-2" : "heading-3", "mt-3 text-white")}>
          {project.title}
        </h3>
        <span className="rule-gold mt-5" aria-hidden="true" />
      </div>
    </article>
  );
}

/** All six selected projects, presented without unverified detail. */
export default function ProjectsOverviewSection() {
  return (
    <section aria-labelledby="portfolio-heading" className="bg-ink-950 section">
      <div className="site-container">
        <SectionHeading
          eyebrow="Selected Projects"
          headingId="portfolio-heading"
          title="A Portfolio Built on Delivery."
          description="Each project below has been delivered by Big Rock Builders across construction, civil engineering, water infrastructure and healthcare environments."
        />

        <ul className="mt-16 grid gap-6 sm:grid-cols-2">
          <li className="sm:col-span-2">
            <ProjectTile
              project={featuredProject}
              featured
              sizes="(min-width: 640px) 90vw, 100vw"
              aspect="aspect-[4/5] sm:aspect-[16/9] lg:aspect-[21/9]"
            />
          </li>

          {projects.map((project, index) => {
            const isWide = index === projects.length - 1;

            return (
              <li key={project.number} className={cn(isWide && "sm:col-span-2")}>
                <ProjectTile
                  project={project}
                  sizes={
                    isWide
                      ? "(min-width: 640px) 90vw, 100vw"
                      : "(min-width: 640px) 45vw, 100vw"
                  }
                  aspect={
                    isWide
                      ? "aspect-[4/3] sm:aspect-[2/1]"
                      : "aspect-[4/3] lg:aspect-[5/4]"
                  }
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
