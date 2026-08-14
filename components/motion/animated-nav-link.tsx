"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type AnimatedNavLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export function AnimatedNavLink({
  href,
  children,
  className = "",
}: AnimatedNavLinkProps) {
  const prefersReducedMotion = useReducedMotion() ?? false;

  return (
    <Link href={href} className={`group relative ${className}`}>
      {children}
      <motion.span
        className="absolute -bottom-1 left-0 h-px w-full origin-left bg-accent"
        initial={{ scaleX: 0 }}
        whileHover={prefersReducedMotion ? undefined : { scaleX: 1 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      />
    </Link>
  );
}
