"use client";

import { motion, useReducedMotion } from "motion/react";

export function PulseDot() {
  const prefersReducedMotion = useReducedMotion() ?? false;

  if (prefersReducedMotion) {
    return (
      <span
        className="h-2 w-2 rounded-full bg-accent"
        aria-hidden="true"
      />
    );
  }

  return (
    <span className="relative flex h-2 w-2" aria-hidden="true">
      <motion.span
        className="absolute inline-flex h-full w-full rounded-full bg-accent/35"
        animate={{ scale: [1, 1.6, 1], opacity: [0.5, 0.15, 0.5] }}
        transition={{
          duration: 2.8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
    </span>
  );
}
