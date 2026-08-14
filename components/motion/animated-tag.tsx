"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type AnimatedTagProps = {
  children: ReactNode;
  className?: string;
};

export function AnimatedTag({ children, className = "" }: AnimatedTagProps) {
  const prefersReducedMotion = useReducedMotion() ?? false;

  return (
    <motion.span
      className={className}
      whileHover={
        prefersReducedMotion
          ? undefined
          : {
              y: -2,
              borderColor: "var(--accent)",
            }
      }
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.span>
  );
}
