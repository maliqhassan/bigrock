"use client";

import Link from "next/link";
import { motion } from "motion/react";

import { WhatsAppGlyph } from "@/components/ui/BrandGlyphs";
import { site } from "@/lib/site";

/**
 * Floating contact action.
 *
 * With a WhatsApp number set in `lib/site.ts` it opens a chat. Until one is
 * supplied it points at the contact page instead — visible either way, but
 * never pointing at an invented number.
 *
 * The site-wide reduced-motion setting stills the pulse.
 */

const EASE = [0.22, 1, 0.36, 1] as const;

const SHELL =
  "group relative flex h-14 w-14 items-center justify-center rounded-full text-white shadow-[0_16px_34px_-14px_rgba(37,211,102,0.85)]";

export default function WhatsAppButton() {
  const number = site.whatsapp.replace(/\D/g, "");
  const label = number
    ? `Message ${site.name} on WhatsApp`
    : `Contact ${site.name}`;

  const inner = (
    <>
      {/* Pulse, radiating out from behind the button */}
      <motion.span
        aria-hidden="true"
        className="absolute inset-0 rounded-full bg-[#25D366]"
        animate={{ scale: [1, 1.6], opacity: [0.45, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
      />

      <span className="absolute inset-0 rounded-full bg-[#25D366]" aria-hidden="true" />

      <WhatsAppGlyph className="relative h-6 w-6" />

      {/* Label, sliding out on hover */}
      <span className="border-line bg-ink-900 text-cream pointer-events-none absolute right-full mr-3 hidden translate-x-2 rounded-md border px-3 py-2 text-xs font-medium whitespace-nowrap opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block">
        {number ? "Chat on WhatsApp" : "Talk to our team"}
      </span>
    </>
  );

  return (
    <motion.div
      className="fixed right-5 bottom-5 z-40 sm:right-7 sm:bottom-7"
      initial={{ opacity: 0, scale: 0.6, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5, ease: EASE }}
      whileHover={{ scale: 1.07 }}
      whileTap={{ scale: 0.95 }}
    >
      {number ? (
        <a
          href={`https://wa.me/${number}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={SHELL}
        >
          {inner}
        </a>
      ) : (
        <Link href="/contact" aria-label={label} className={SHELL}>
          {inner}
        </Link>
      )}
    </motion.div>
  );
}
