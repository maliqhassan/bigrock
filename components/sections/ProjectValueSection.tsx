import { CircleCheck, Loader } from "lucide-react";

import SectionHeading from "@/components/ui/SectionHeading";
import Reveal, { RevealList, RevealItem } from "@/components/ui/Reveal";

/**
 * Project values, as supplied by the company.
 *
 * The headline figures are the sums of the breakdown below — completed
 * 70 + 100 + 290 = 460, in progress 220 + 150 = 370, portfolio 830 — so the
 * two halves of this section cannot drift apart unnoticed.
 */

type Headline = {
  number: string;
  label: string;
  amount: string;
  note: string;
};

const headlines: Headline[] = [
  {
    number: "01",
    label: "Completed Projects",
    amount: "460",
    note: "Total value of completed projects",
  },
  {
    number: "02",
    label: "Ongoing Projects",
    amount: "370",
    note: "Current projects under execution",
  },
  {
    number: "03",
    label: "Total Project Portfolio",
    amount: "830",
    note: "Combined value of highlighted projects",
  },
];

type Row = {
  project: string;
  client: string;
  status: "Completed" | "In Progress";
  value: string;
};

const rows: Row[] = [
  {
    project: "Benazir Bhutto Hospital (BBH)",
    client: "C&W Dept Punjab (PWD)",
    status: "Completed",
    value: "PKR 70 Million",
  },
  {
    project: "Rawalpindi Institute of Cardiology (RIC)",
    client: "C&W Dept Punjab (PWD)",
    status: "Completed",
    value: "PKR 100 Million",
  },
  {
    project: "BHU Phase 1 & 2 (Rawalpindi)",
    client: "C&W Dept Punjab (PWD)",
    status: "Completed",
    value: "PKR 290 Million",
  },
  {
    project: "BHU Phase 3 (Modernization)",
    client: "C&W Dept Punjab (PWD)",
    status: "In Progress",
    value: "PKR 220 Million",
  },
  {
    project: "Soil Nailing & Excavation",
    client: "DHA",
    status: "In Progress",
    value: "PKR 150 Million",
  },
];

function StatusPill({ status }: { status: Row["status"] }) {
  const done = status === "Completed";
  const Icon = done ? CircleCheck : Loader;

  return (
    <span
      className={
        done
          ? "border-line text-mist-200 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs whitespace-nowrap"
          : "border-gold-500/40 text-gold-500 bg-gold-500/10 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs whitespace-nowrap"
      }
    >
      <Icon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
      {status}
    </span>
  );
}

const cell = "px-5 py-4 text-left align-middle";
const headCell =
  "font-display text-mist-400 px-5 py-4 text-left text-[0.6875rem] font-semibold tracking-[0.18em] uppercase";

export default function ProjectValueSection() {
  return (
    <section
      aria-labelledby="project-value-heading"
      className="bg-ink-950 section"
    >
      <div className="site-container">
        <SectionHeading
          eyebrow="Project Value"
          headingId="project-value-heading"
          title="A Portfolio Worth PKR 830 Million+."
          description="Combined value of the projects highlighted below, across completed and ongoing work."
        />

        {/* Headline figures */}
        <RevealList className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {headlines.map((item) => (
            <RevealItem
              key={item.label}
              className="card border-line bg-ink-900 relative overflow-hidden rounded-xl p-7 sm:p-8"
            >
              <span
                aria-hidden="true"
                className="font-display text-gold-500/25 absolute top-5 right-6 text-2xl font-semibold"
              >
                {item.number}
              </span>

              <p className="eyebrow">{item.label}</p>
              <span className="rule-gold mt-5" aria-hidden="true" />

              <p className="mt-6 flex items-baseline gap-2">
                <span className="font-display text-mist-300 text-lg font-semibold">
                  PKR
                </span>
                <span className="font-display text-gold-500 text-5xl leading-none font-bold sm:text-6xl">
                  {item.amount}
                </span>
              </p>
              <p className="font-display text-cream mt-2 text-lg font-semibold">
                Million+
              </p>

              <p className="body-muted mt-4">{item.note}</p>
            </RevealItem>
          ))}
        </RevealList>

        {/* Breakdown */}
        <Reveal className="mt-14" delay={0.1}>
          <h3 className="font-display text-gold-500 text-[0.6875rem] font-semibold tracking-[0.18em] uppercase">
            Project Value Breakdown
          </h3>

          {/* Scrolls sideways on narrow screens; focusable so it can be
              scrolled from the keyboard. */}
          <div
            tabIndex={0}
            role="group"
            aria-labelledby="project-value-table-caption"
            className="border-line mt-6 overflow-x-auto rounded-xl border"
          >
            <table className="w-full min-w-[46rem] border-collapse text-[0.9375rem]">
              <caption id="project-value-table-caption" className="sr-only">
                Project value breakdown by project, client department, status
                and value in Pakistani rupees.
              </caption>

              <thead className="bg-ink-900">
                <tr className="border-line border-b">
                  <th scope="col" className={headCell}>
                    Project
                  </th>
                  <th scope="col" className={headCell}>
                    Client / Department
                  </th>
                  <th scope="col" className={headCell}>
                    Status
                  </th>
                  <th scope="col" className={`${headCell} text-right`}>
                    Value
                  </th>
                </tr>
              </thead>

              <tbody className="divide-line divide-y">
                {rows.map((row) => (
                  <tr key={row.project}>
                    <th
                      scope="row"
                      className={`${cell} text-cream font-display font-semibold`}
                    >
                      {row.project}
                    </th>
                    <td className={`${cell} text-mist-300`}>{row.client}</td>
                    <td className={cell}>
                      <StatusPill status={row.status} />
                    </td>
                    <td
                      className={`${cell} font-display text-gold-500 text-right font-semibold whitespace-nowrap`}
                    >
                      {row.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
