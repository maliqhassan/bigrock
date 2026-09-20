"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Phone } from "lucide-react";

import { WhatsAppGlyph } from "@/components/ui/BrandGlyphs";
import { site } from "@/lib/site";

/**
 * Floating contact actions.
 *
 * On a phone they stack in the bottom right corner, call above WhatsApp. From
 * the small breakpoint up the call button moves to the bottom left, so the two
 * sit in opposite corners.
 *
 * Each uses the number set in `lib/site.ts`. Without a WhatsApp number the
 * lower button points at the contact page instead: visible either way, but
 * never pointing at an invented number.
 *
 * The site-wide reduced-motion setting stills the pulses.
 */

const EASE = [0.22, 1, 0.36, 1] as const;

const SHELL =
  "group relative flex h-14 w-14 items-center justify-center rounded-full";

const TOOLTIP =
  "border-line bg-ink-900 text-cream pointer-events-none absolute hidden rounded-md border px-3 py-2 text-xs font-medium whitespace-nowrap opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block";

/** Slides out to the left of its button — for anything on the right edge. */
const TOOLTIP_LEFT = `${TOOLTIP} right-full mr-3 translate-x-2`;

/** Slides out to the right of its button — for anything on the left edge. */
const TOOLTIP_RIGHT = `${TOOLTIP} left-full ml-3 -translate-x-2`;

function Action({
  className,
  delay,
  children,
}: {
  className: string;
  delay: number;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className={`fixed z-40 ${className}`}
      initial={{ opacity: 0, scale: 0.6, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay, duration: 0.5, ease: EASE }}
      whileHover={{ scale: 1.07 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.div>
  );
}

/** Pulse radiating out from behind a button, plus its solid face. */
function Face({ color, pulseDelay }: { color: string; pulseDelay: number }) {
  return (
    <>
      <motion.span
        aria-hidden="true"
        className="absolute inset-0 rounded-full"
        style={{ backgroundColor: color }}
        animate={{ scale: [1, 1.6], opacity: [0.45, 0] }}
        transition={{
          duration: 2.4,
          repeat: Infinity,
          ease: "easeOut",
          delay: pulseDelay,
        }}
      />
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-full"
        style={{ backgroundColor: color }}
      />
    </>
  );
}

export default function FloatingActions() {
  const whatsapp = site.whatsapp.replace(/\D/g, "");
  const dial = site.phone.dial.replace(/[^\d+]/g, "");

  return (
    <>
      {dial ? (
        /* Stacked above WhatsApp on a phone, bottom left from sm up. */
        <Action
          delay={0.85}
          className="right-5 bottom-[5.625rem] sm:right-auto sm:bottom-7 sm:left-7"
        >
          <a
            href={`tel:${dial}`}
            aria-label={`Call ${site.name} on ${site.phone.display}`}
            className={`${SHELL} text-navy-ink shadow-[0_16px_34px_-14px_rgba(239,191,4,0.9)]`}
          >
            <Face color="#efbf04" pulseDelay={1.2} />

            <Phone className="relative h-6 w-6" aria-hidden="true" />

            <span className={TOOLTIP_RIGHT}>{site.phone.display}</span>
          </a>
        </Action>
      ) : null}

      <Action delay={1} className="right-5 bottom-5 sm:right-7 sm:bottom-7">
        {whatsapp ? (
          <a
            href={`https://wa.me/${whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Message ${site.name} on WhatsApp`}
            className={`${SHELL} text-white shadow-[0_16px_34px_-14px_rgba(37,211,102,0.85)]`}
          >
            <Face color="#25D366" pulseDelay={0} />

            <WhatsAppGlyph className="relative h-6 w-6" />

            <span className={TOOLTIP_LEFT}>Chat on WhatsApp</span>
          </a>
        ) : (
          <Link
            href="/contact"
            aria-label={`Contact ${site.name}`}
            className={`${SHELL} text-white shadow-[0_16px_34px_-14px_rgba(37,211,102,0.85)]`}
          >
            <Face color="#25D366" pulseDelay={0} />

            <WhatsAppGlyph className="relative h-6 w-6" />

            <span className={TOOLTIP_LEFT}>Talk to our team</span>
          </Link>
        )}
      </Action>
    </>
  );
}
