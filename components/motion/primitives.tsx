"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import {
  getFadeUpVariant,
  getTransition,
  viewportOnce,
} from "@/lib/motion-config";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
};

export function FadeIn({
  children,
  className,
  delay = 0,
  distance,
}: FadeInProps) {
  const prefersReducedMotion = useReducedMotion() ?? false;
  const variants = getFadeUpVariant(prefersReducedMotion, distance);

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={getTransition(prefersReducedMotion, undefined, delay)}
    >
      {children}
    </motion.div>
  );
}

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
};

export function Reveal({
  children,
  className,
  delay = 0,
  distance,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion() ?? false;
  const variants = getFadeUpVariant(prefersReducedMotion, distance);

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={variants}
      transition={getTransition(prefersReducedMotion, undefined, delay)}
    >
      {children}
    </motion.div>
  );
}

type StaggerContainerProps = {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  animateOnMount?: boolean;
};

export function StaggerContainer({
  children,
  className,
  staggerDelay,
  animateOnMount = false,
}: StaggerContainerProps) {
  const prefersReducedMotion = useReducedMotion() ?? false;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : (staggerDelay ?? 0.08),
      },
    },
  };

  const motionProps = animateOnMount
    ? { initial: "hidden" as const, animate: "visible" as const }
    : {
        initial: "hidden" as const,
        whileInView: "visible" as const,
        viewport: viewportOnce,
      };

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  distance?: number;
};

export function StaggerItem({
  children,
  className,
  distance,
}: StaggerItemProps) {
  const prefersReducedMotion = useReducedMotion() ?? false;
  const variants = getFadeUpVariant(prefersReducedMotion, distance);

  return (
    <motion.div className={className} variants={variants}>
      {children}
    </motion.div>
  );
}

type PageEnterProps = {
  children: ReactNode;
  className?: string;
};

export function PageEnter({ children, className }: PageEnterProps) {
  const prefersReducedMotion = useReducedMotion() ?? false;
  const variants = getFadeUpVariant(
    prefersReducedMotion,
    prefersReducedMotion ? 0 : 12,
  );

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={getTransition(prefersReducedMotion, 0.4)}
    >
      {children}
    </motion.div>
  );
}
