"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";

import { site } from "@/lib/site";

/**
 * First-load screen.
 *
 * Rendered on the server, so it is painted with the very first frame rather
 * than appearing once React has hydrated. It clears when the page has finished
 * loading, and in any case after MAX_MS — a slow image must never leave anyone
 * staring at a covered site. Without JavaScript the noscript rule in the root
 * layout removes it outright.
 *
 * The supplied logo is navy artwork, so it sits on the same white plate the
 * footer uses. The artwork itself is untouched.
 */

const EASE = [0.22, 1, 0.36, 1] as const;

/** Held briefly so the screen never flashes past on a fast connection. */
const MIN_MS = 500;

/** Cleared regardless once this passes. */
const MAX_MS = 3000;

export default function SiteLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const started = performance.now();
    let holdTimer = 0;

    const finish = () => {
      const elapsed = performance.now() - started;
      holdTimer = window.setTimeout(
        () => setLoading(false),
        Math.max(0, MIN_MS - elapsed),
      );
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, { once: true });
    }

    const capTimer = window.setTimeout(() => setLoading(false), MAX_MS);

    return () => {
      window.clearTimeout(holdTimer);
      window.clearTimeout(capTimer);
      window.removeEventListener("load", finish);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading ? (
        <motion.div
          id="site-loader"
          aria-hidden="true"
          className="bg-ink-950 fixed inset-0 z-[100] flex flex-col items-center justify-center gap-8"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: EASE }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/images/logo.png"
                alt=""
                width={960}
                height={960}
                priority
                sizes="144px"
                className="h-28 w-28 object-contain sm:h-36 sm:w-36"
              />
            </motion.div>
          </motion.div>

          {/* Gold sweep, in place of a percentage nobody can act on */}
          <div className="bg-line relative h-px w-40 overflow-hidden rounded-full">
            <motion.span
              className="via-gold-500 absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent to-transparent"
              animate={{ x: ["-100%", "200%"] }}
              transition={{
                duration: 1.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          <p className="eyebrow">{site.tagline}</p>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
