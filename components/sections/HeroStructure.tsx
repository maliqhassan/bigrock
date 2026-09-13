"use client";

import { motion } from "motion/react";

/**
 * Banner ornament: a structural frame under construction, built from real 3D
 * transforms (`preserve-3d` + perspective) and rotated slowly on its axis.
 *
 * Floor plates stack upward and the top one is still "going up" — it hovers
 * slightly above the frame, the way a slab does before it is set.
 *
 * Pure CSS transforms, so there is no WebGL payload. Motion is decorative and
 * `MotionConfig reducedMotion="user"` stops it for anyone who asks for that.
 */

const FOOTPRINT = 200;
const FLOOR_HEIGHT = 42;
const FLOORS = 6;

const half = FOOTPRINT / 2;
const frameHeight = FLOOR_HEIGHT * (FLOORS - 1);

/** Corner column positions on the footprint. */
const corners = [
  { x: -half, z: -half },
  { x: half, z: -half },
  { x: half, z: half },
  { x: -half, z: half },
];

export default function HeroStructure() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute top-1/2 right-[6%] -z-[5] hidden -translate-y-1/2 lg:block"
      style={{ perspective: "1100px", perspectiveOrigin: "50% 40%" }}
    >
      <motion.div
        className="relative"
        style={{
          width: FOOTPRINT,
          height: frameHeight,
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
        initial={{ opacity: 0, rotateX: 12, rotateY: 0 }}
        animate={{ opacity: 0.75, rotateX: 12, rotateY: 360 }}
        transition={{
          opacity: { duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 0.4 },
          rotateY: { duration: 52, ease: "linear", repeat: Infinity },
        }}
      >
        {/* Floor plates */}
        {Array.from({ length: FLOORS }).map((_, index) => {
          const isTop = index === FLOORS - 1;
          const y = -index * FLOOR_HEIGHT;

          return (
            <div
              key={`floor-${index}`}
              className={
                isTop
                  ? "border-gold-500/70 absolute border"
                  : "border-azure-400/35 absolute border"
              }
              style={{
                width: FOOTPRINT,
                height: FOOTPRINT,
                left: 0,
                top: "50%",
                marginTop: -half,
                transform: `translateY(${y}px) rotateX(90deg)`,
                backgroundColor: isTop
                  ? "rgba(239, 191, 4, 0.05)"
                  : "rgba(30, 64, 216, 0.05)",
              }}
            />
          );
        })}

        {/* Corner columns */}
        {corners.map((corner, index) => (
          <div
            key={`column-${index}`}
            className="bg-azure-400/45 absolute"
            style={{
              width: 2,
              height: frameHeight + FLOOR_HEIGHT,
              left: "50%",
              top: "50%",
              transform: `translate3d(${corner.x}px, ${-frameHeight}px, ${corner.z}px)`,
              transformStyle: "preserve-3d",
            }}
          />
        ))}

        {/* Slab being placed: hovers above the frame on a hoist line */}
        <motion.div
          className="border-gold-500/60 absolute border"
          style={{
            width: FOOTPRINT * 0.62,
            height: FOOTPRINT * 0.62,
            left: FOOTPRINT * 0.19,
            top: "50%",
            marginTop: -FOOTPRINT * 0.31,
            backgroundColor: "rgba(239, 191, 4, 0.07)",
            transform: `translateY(${-frameHeight - FLOOR_HEIGHT * 1.6}px) rotateX(90deg)`,
          }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 7, ease: "easeInOut", repeat: Infinity }}
        />
      </motion.div>
    </div>
  );
}
