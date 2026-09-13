"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

/**
 * Site-wide motion settings. `reducedMotion="user"` makes every animation
 * respect the visitor's operating-system preference, so transforms are
 * dropped and only opacity changes remain.
 */
export default function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
