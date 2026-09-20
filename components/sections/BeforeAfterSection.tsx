"use client";

import { useState } from "react";
import Image from "next/image";

import SectionHeading from "@/components/ui/SectionHeading";

/**
 * Before-and-after comparison.
 *
 * The divider is a real range input laid over the frame, so it can be dragged
 * with a pointer and moved with arrow keys, and screen readers announce it as
 * a slider. Both photographs carry alt text, since here the images are the
 * content rather than decoration.
 */

const BEFORE = {
  src: "/images/project-maryam-nawaz-clinic-before.jpg",
  alt: "The health facility before redevelopment",
};

const AFTER = {
  src: "/images/project-maryam-nawaz-clinic.jpg",
  alt: "The completed health facility, with the new entrance and landscaping",
};

export default function BeforeAfterSection() {
  const [position, setPosition] = useState(50);

  return (
    <section aria-labelledby="before-after-heading" className="bg-ink-950 section">
      <div className="site-container">
        <SectionHeading
          eyebrow="Before & After"
          headingId="before-after-heading"
          title="From Site to Completion."
          description="Maryam Nawaz Health Clinic, during construction and on completion. Drag the handle to compare."
        />

        <div className="border-line relative mt-14 aspect-[4/3] w-full overflow-hidden rounded-xl border sm:aspect-[16/9]">
          {/* Completed state, filling the frame */}
          <Image
            src={AFTER.src}
            alt={AFTER.alt}
            fill
            sizes="(min-width: 1280px) 1200px, 100vw"
            className="object-cover object-center"
          />

          {/* Construction state, clipped to the handle position */}
          <div
            className="absolute inset-0"
            style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
          >
            <Image
              src={BEFORE.src}
              alt={BEFORE.alt}
              fill
              sizes="(min-width: 1280px) 1200px, 100vw"
              className="object-cover object-center"
            />
          </div>

          {/* Divider */}
          <div
            aria-hidden="true"
            className="bg-gold-500 absolute inset-y-0 w-px"
            style={{ left: `${position}%` }}
          />

          {/* Handle */}
          <div
            aria-hidden="true"
            className="border-gold-500 bg-ink-950/80 absolute top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border backdrop-blur-sm"
            style={{ left: `${position}%` }}
          >
            <span className="text-gold-500 font-display text-xs">&lt;&nbsp;&gt;</span>
          </div>

          {/* Labels */}
          <span className="border-line bg-ink-950/75 text-mist-200 font-display absolute top-5 left-5 rounded-md border px-3 py-1.5 text-[0.6875rem] font-semibold tracking-[0.16em] uppercase backdrop-blur-sm">
            Before
          </span>
          <span className="border-line bg-ink-950/75 text-mist-200 font-display absolute top-5 right-5 rounded-md border px-3 py-1.5 text-[0.6875rem] font-semibold tracking-[0.16em] uppercase backdrop-blur-sm">
            After
          </span>

          {/* The control itself — invisible, but draggable and keyboard operable */}
          <input
            type="range"
            min={0}
            max={100}
            value={position}
            onChange={(event) => setPosition(Number(event.target.value))}
            aria-label="Compare before and after"
            className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
          />
        </div>
      </div>
    </section>
  );
}
