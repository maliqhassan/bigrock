"use client";

import { motion } from "motion/react";

/**
 * Footer backdrop: a row of buildings in gold line work, with points along the
 * skyline that catch the light.
 *
 * Each block is a real building rather than a striped rectangle — towers step
 * back as they rise, mid-rises are capped with parapets, low-rises carry
 * pitched roofs, and all of them sit on a ground-floor podium with an
 * entrance. Columns cross floor lines into window bays.
 *
 * Generated from a seeded generator so the server and the client draw the same
 * row, and emitted as merged paths to keep the markup small, since this sits
 * in the footer of every page.
 *
 * Decorative only: hidden from assistive tech, non-interactive, and the
 * site-wide reduced-motion setting stills the shine.
 */

const VIEW_WIDTH = 1400;
const VIEW_HEIGHT = 240;
const GROUND = VIEW_HEIGHT;
const PODIUM = 22;

/** Deterministic PRNG (mulberry32) — same sequence everywhere, every time. */
function seeded(seed: number) {
  return function random() {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const random = seeded(20240917);

const n = (value: number) => Math.round(value);

const outlines: string[] = [];
const bays: string[] = [];
const details: string[] = [];
const glints: { x: number; y: number; delay: number }[] = [];

/** Columns crossed with floor lines, inside a given face. */
function fenestrate(x: number, width: number, top: number, bottom: number) {
  const column = 11 + random() * 4;
  const floor = 13 + random() * 4;

  for (let cx = x + column; cx < x + width - 2; cx += column) {
    bays.push(`M${n(cx)} ${n(top + 4)}V${n(bottom)}`);
  }

  for (let cy = top + floor; cy < bottom - 2; cy += floor) {
    bays.push(`M${n(x)} ${n(cy)}H${n(x + width)}`);
  }
}

/** Ground-floor podium with an entrance. */
function podium(x: number, width: number) {
  const line = GROUND - PODIUM;
  const centre = x + width / 2;

  details.push(`M${n(x)} ${n(line)}H${n(x + width)}`);
  details.push(
    `M${n(centre - 6)} ${GROUND}V${n(line + 5)}H${n(centre + 6)}V${GROUND}`,
  );
}

function tower(x: number, width: number, height: number) {
  const top = GROUND - height;
  const right = x + width;
  const inset = width * 0.18;
  const setback = top + height * 0.34;

  outlines.push(
    `M${n(x)} ${GROUND}V${n(setback)}H${n(x + inset)}V${n(top)}H${n(right - inset)}V${n(setback)}H${n(right)}V${GROUND}`,
  );

  // Crown parapet and mast
  details.push(`M${n(x + inset - 2)} ${n(top)}H${n(right - inset + 2)}`);
  details.push(`M${n(x + width / 2)} ${n(top)}V${n(top - 14 - random() * 12)}`);

  fenestrate(x + inset, width - inset * 2, top, setback);
  fenestrate(x, width, setback, GROUND - PODIUM);
  podium(x, width);

  return top;
}

function midRise(x: number, width: number, height: number) {
  const top = GROUND - height;
  const right = x + width;

  outlines.push(`M${n(x)} ${GROUND}V${n(top)}H${n(right)}V${GROUND}`);

  // Parapet, oversailing slightly
  details.push(`M${n(x - 3)} ${n(top)}H${n(right + 3)}`);
  details.push(`M${n(x - 3)} ${n(top)}V${n(top - 5)}H${n(right + 3)}V${n(top)}`);

  if (random() < 0.4) {
    // Roof tank on legs
    const centre = x + width / 2;
    details.push(
      `M${n(centre - 7)} ${n(top - 5)}V${n(top - 18)}H${n(centre + 7)}V${n(top - 5)}`,
    );
  }

  fenestrate(x, width, top, GROUND - PODIUM);
  podium(x, width);

  return top;
}

function lowRise(x: number, width: number, height: number) {
  const eaves = GROUND - height;
  const ridge = eaves - 16 - random() * 10;
  const right = x + width;

  outlines.push(
    `M${n(x)} ${GROUND}V${n(eaves)}L${n(x + width / 2)} ${n(ridge)}L${n(right)} ${n(eaves)}V${GROUND}`,
  );
  details.push(`M${n(x)} ${n(eaves)}H${n(right)}`);

  fenestrate(x, width, eaves, GROUND - PODIUM);
  podium(x, width);

  return ridge;
}

// Lay out the street.
let cursor = -20;

while (cursor < VIEW_WIDTH + 20) {
  const kind = random();
  let width: number;
  let top: number;

  if (kind < 0.3) {
    width = 46 + random() * 22;
    top = tower(cursor, width, 130 + random() * 70);
  } else if (kind < 0.75) {
    width = 64 + random() * 34;
    top = midRise(cursor, width, 78 + random() * 52);
  } else {
    width = 72 + random() * 38;
    top = lowRise(cursor, width, 46 + random() * 26);
  }

  // A point of shine on some roofs
  if (random() < 0.36) {
    glints.push({
      x: cursor + width / 2,
      y: top - 4,
      delay: random() * 7,
    });
  }

  cursor += width;
}

const OUTLINES = outlines.join("");
const BAYS = bays.join("");
const DETAILS = details.join("");

const FADE = {
  maskImage:
    "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 55%, transparent 100%)",
  WebkitMaskImage:
    "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 55%, transparent 100%)",
} as const;

export default function FooterBuildings() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-0 h-52 overflow-hidden select-none sm:h-64"
      style={FADE}
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox={`0 0 ${VIEW_WIDTH} ${VIEW_HEIGHT}`}
        preserveAspectRatio="xMidYMax slice"
        fill="none"
        strokeLinecap="square"
        strokeLinejoin="miter"
      >
        {/* Window bays */}
        <path d={BAYS} stroke="rgba(239, 191, 4, 0.18)" strokeWidth={0.9} />

        {/* Parapets, podiums, entrances, tanks */}
        <path d={DETAILS} stroke="rgba(239, 191, 4, 0.4)" strokeWidth={1.2} />

        {/* Silhouettes */}
        <path d={OUTLINES} stroke="rgba(239, 191, 4, 0.55)" strokeWidth={1.7} />

        {/* Points of shine */}
        {glints.map((glint, index) => (
          <motion.circle
            key={`glint-${index}`}
            cx={n(glint.x)}
            cy={n(glint.y)}
            r={2.4}
            fill="rgba(247, 212, 81, 0.9)"
            animate={{ opacity: [0.1, 1, 0.1] }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              delay: glint.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>

      {/* A slow pass of light along the street */}
      <motion.div
        className="absolute inset-y-0 w-1/4"
        style={{
          backgroundImage:
            "linear-gradient(90deg, transparent 0%, rgba(239, 191, 4, 0.08) 50%, transparent 100%)",
        }}
        animate={{ x: ["-40%", "440%"] }}
        transition={{
          duration: 16,
          repeat: Infinity,
          repeatDelay: 4,
          ease: "linear",
        }}
      />
    </div>
  );
}
