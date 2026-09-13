"use client";

import { motion } from "motion/react";
import type { Variants } from "motion/react";
import type { ReactNode } from "react";

/**
 * Shared motion primitives. Every animation on the site is composed from
 * these, so timing and easing stay consistent and restrained.
 *
 * Each is a client boundary that accepts server-rendered children, which keeps
 * the sections themselves server components.
 */

const EASE = [0.22, 1, 0.36, 1] as const;

const DURATION = 0.7;

/** Fires once, when the element scrolls into view. */
const VIEWPORT = { once: true, amount: 0.2 } as const;

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: DURATION, ease: EASE } },
};

function containerVariants(stagger: number, delay: number): Variants {
  return {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren: delay } },
  };
}

type BaseProps = {
  children: ReactNode;
  className?: string;
};

type RevealProps = BaseProps & {
  /** Seconds to hold before animating. */
  delay?: number;
  /** Distance travelled, in pixels. */
  y?: number;
};

/** Single block that rises into place as it enters the viewport. */
export default function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.8, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

type GroupProps = BaseProps & {
  /** Seconds between each child. */
  stagger?: number;
  delay?: number;
};

/** `<ul>` whose `RevealItem` children arrive one after another. */
export function RevealList({
  children,
  className,
  stagger = 0.09,
  delay = 0,
}: GroupProps) {
  return (
    <motion.ul
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      variants={containerVariants(stagger, delay)}
    >
      {children}
    </motion.ul>
  );
}

/** `<li>` child of `RevealList`. */
export function RevealItem({ children, className }: BaseProps) {
  return (
    <motion.li className={className} variants={itemVariants}>
      {children}
    </motion.li>
  );
}

/** `<div>` group, for staggering children that are not list items. */
export function RevealGroup({
  children,
  className,
  stagger = 0.09,
  delay = 0,
}: GroupProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      variants={containerVariants(stagger, delay)}
    >
      {children}
    </motion.div>
  );
}

/** `<div>` child of `RevealGroup` or `Entrance`. */
export function RevealBlock({ children, className }: BaseProps) {
  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  );
}

/** Animates on mount rather than on scroll — for above-the-fold content. */
export function Entrance({
  children,
  className,
  stagger = 0.1,
  delay = 0.1,
}: GroupProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="show"
      variants={containerVariants(stagger, delay)}
    >
      {children}
    </motion.div>
  );
}

/* ==========================================================================
   Text effect
   ========================================================================== */

const wordVariants: Variants = {
  hidden: { y: "110%" },
  show: { y: "0%", transition: { duration: 0.75, ease: EASE } },
};

type WordRevealProps = {
  /** Plain text — split on spaces so each word can rise on its own. */
  text: string;
  className?: string;
  delay?: number;
  /** Seconds between words. */
  stagger?: number;
};

/**
 * Headline effect: each word rises out of a clipped line, one after another.
 * The words stay real text nodes in order, so the heading reads normally to
 * screen readers and to search engines.
 */
export function WordReveal({
  text,
  className,
  delay = 0,
  stagger = 0.05,
}: WordRevealProps) {
  const words = text.split(" ");

  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      variants={containerVariants(stagger, delay)}
    >
      {words.map((word, index) => (
        <span key={`${word}-${index}`}>
          <span className="inline-flex overflow-hidden align-bottom">
            <motion.span className="inline-block" variants={wordVariants}>
              {word}
            </motion.span>
          </span>
          {index < words.length - 1 ? " " : null}
        </span>
      ))}
    </motion.span>
  );
}

/* ==========================================================================
   Image effect
   ========================================================================== */

type RevealImageProps = BaseProps & {
  delay?: number;
};

/**
 * Image effect: a navy curtain lifts away while the photograph settles back
 * from a slight overscale. `className` carries the frame itself (aspect ratio,
 * border, radius), and children are positioned against it.
 */
export function RevealImage({
  children,
  className,
  delay = 0,
}: RevealImageProps) {
  return (
    <div className={`relative overflow-hidden ${className ?? ""}`}>
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.14 }}
        whileInView={{ scale: 1 }}
        viewport={VIEWPORT}
        transition={{ duration: 1.4, ease: EASE, delay }}
      >
        {children}
      </motion.div>

      <motion.span
        aria-hidden="true"
        className="bg-ink-950 absolute inset-0 z-10 origin-top"
        initial={{ scaleY: 1 }}
        whileInView={{ scaleY: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.95, ease: EASE, delay }}
      />
    </div>
  );
}
