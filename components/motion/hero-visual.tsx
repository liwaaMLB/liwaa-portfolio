"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import {
  getDriftAnimation,
  getScaleUpVariant,
  getTransition,
} from "@/lib/motion-config";

const floatingCards = [
  {
    eyebrow: "AI AGENT",
    body: "Planning, building, and reviewing with AI.",
    position: "left-[-6%] top-[10%] lg:left-[-10%]",
    delay: 0.1,
  },
  {
    eyebrow: "CLEAN CODE",
    body: "Readable. Maintainable. Scalable.",
    position: "right-[-4%] top-[42%] lg:right-[-8%]",
    delay: 0.22,
  },
  {
    eyebrow: "FULL-STACK",
    body: "From database to interface. End-to-end.",
    position: "bottom-[-8%] left-[14%]",
    delay: 0.34,
  },
] as const;

function WorkspacePanel() {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border bg-surface">
      <Image
        src="/images/developer-workspace.png"
        alt="Dark, blue-lit software developer workstation with a code editor, a dashboard interface, and a laptop on the desk"
        fill
        priority
        sizes="(min-width: 1024px) 42vw, (min-width: 640px) 70vw, 90vw"
        className="object-cover"
      />

      {/* Dark overlays so the photo reads as atmosphere behind the portfolio,
          not a raw screenshot competing with the UI on top of it — kept
          light enough that the workstation itself stays clearly visible. */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-background/20" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_60%_at_75%_20%,rgb(76_141_255/0.12),transparent_60%)]" />

      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between border-t border-border/70 bg-background/50 px-5 py-3 text-xs text-foreground-subtle backdrop-blur-sm sm:px-7">
        <span>build.ts</span>
        <span className="inline-flex items-center gap-1.5 text-accent-bright">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-bright" />
          AI agent active
        </span>
      </div>
    </div>
  );
}

function FloatingCard({
  eyebrow,
  body,
  className = "",
  delay = 0,
}: {
  eyebrow: string;
  body: string;
  className?: string;
  delay?: number;
}) {
  const prefersReducedMotion = useReducedMotion() ?? false;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 12, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={getTransition(prefersReducedMotion, 0.5, delay)}
    >
      {/* Nested so the continuous drift loop never fights the one-shot entrance transform above. */}
      <motion.div
        className={`w-44 rounded-xl border border-accent/20 bg-surface/80 p-3.5 shadow-[0_0_24px_-8px_rgb(76_141_255/0.35)] backdrop-blur-md sm:w-48`}
        animate={getDriftAnimation(prefersReducedMotion, delay)}
      >
        <p className="text-[10px] font-semibold uppercase tracking-widest text-accent-bright">
          {eyebrow}
        </p>
        <p className="mt-1.5 text-xs leading-relaxed text-foreground-muted">
          {body}
        </p>
      </motion.div>
    </motion.div>
  );
}

export function HeroVisual() {
  const prefersReducedMotion = useReducedMotion() ?? false;
  const variants = getScaleUpVariant(prefersReducedMotion);

  return (
    <motion.div
      className="relative mx-auto w-full max-w-md lg:max-w-none"
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={getTransition(prefersReducedMotion, 0.6, 0.3)}
    >
      <div className="lg:px-8 lg:py-6">
        <WorkspacePanel />
      </div>

      {/* Overlapping placement on larger screens */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        {floatingCards.map((card) => (
          <div
            key={card.eyebrow}
            className={`pointer-events-auto absolute ${card.position}`}
          >
            <FloatingCard
              eyebrow={card.eyebrow}
              body={card.body}
              delay={card.delay}
            />
          </div>
        ))}
      </div>

      {/* Stacked, non-overlapping placement below the panel on small/medium screens */}
      <div className="mt-5 flex flex-wrap justify-center gap-3 lg:hidden">
        {floatingCards.map((card) => (
          <FloatingCard
            key={card.eyebrow}
            eyebrow={card.eyebrow}
            body={card.body}
            delay={card.delay}
          />
        ))}
      </div>
    </motion.div>
  );
}
