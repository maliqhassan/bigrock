"use client";

import { motion } from "motion/react";

import {
  FacebookGlyph,
  InstagramGlyph,
  WhatsAppGlyph,
} from "@/components/ui/BrandGlyphs";
import { site } from "@/lib/site";

/**
 * Social row. Each tile fills with gold from the bottom on hover while the
 * glyph flips to navy, and the row arrives one tile at a time.
 *
 * A tile only becomes a link once its address is set in `lib/site.ts` —
 * unconfigured ones render as inert marks rather than pointing somewhere
 * wrong.
 */

const EASE = [0.22, 1, 0.36, 1] as const;

const channels = [
  { name: "Facebook", href: site.social.facebook, Glyph: FacebookGlyph },
  { name: "Instagram", href: site.social.instagram, Glyph: InstagramGlyph },
  {
    name: "WhatsApp",
    href: site.whatsapp ? `https://wa.me/${site.whatsapp}` : "",
    Glyph: WhatsAppGlyph,
  },
];

const tile =
  "group border-line text-mist-300 relative inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-md border transition-colors duration-300";

function Fill() {
  return (
    <span
      aria-hidden="true"
      className="bg-gold-500 absolute inset-0 origin-bottom scale-y-0 transition-transform duration-300 ease-out group-hover:scale-y-100"
    />
  );
}

export default function SocialLinks({ className }: { className?: string }) {
  return (
    <motion.ul
      className={`flex flex-wrap items-center gap-3 ${className ?? ""}`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
    >
      {channels.map(({ name, href, Glyph }) => (
        <motion.li
          key={name}
          variants={{
            hidden: { opacity: 0, y: 14 },
            show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
          }}
        >
          {href ? (
            <motion.a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${site.name} on ${name}`}
              className={`${tile} hover:border-gold-500`}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 320, damping: 18 }}
            >
              <Fill />
              <Glyph className="group-hover:text-ink-950 relative h-4 w-4 transition-colors duration-300" />
            </motion.a>
          ) : (
            <span className={`${tile} opacity-40`} title={`${name} — link pending`}>
              <Glyph className="relative h-4 w-4" />
            </span>
          )}
        </motion.li>
      ))}
    </motion.ul>
  );
}
