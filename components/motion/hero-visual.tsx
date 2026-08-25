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
    position: "left-[-6%] top-[8%] lg:left-[-4%]",
    delay: 0.1,
  },
  {
    eyebrow: "CLEAN CODE",
    body: "Readable. Maintainable. Scalable.",
    position: "right-[-4%] top-[38%] lg:right-[-2%]",
    delay: 0.22,
  },
  {
    eyebrow: "FULL-STACK",
    body: "From database to interface. End-to-end.",
    position: "bottom-[2%] left-[-4%] lg:left-[-2%]",
    delay: 0.34,
  },
] as const;

function StatusBadge({ className = "" }: { className?: string }) {
  const prefersReducedMotion = useReducedMotion() ?? false;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 12, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={getTransition(prefersReducedMotion, 0.5, 0.46)}
    >
      <motion.div
        className="inline-flex items-center gap-1.5 rounded-full border border-accent/20 bg-surface/80 px-3.5 py-2 text-xs text-accent-bright shadow-[0_0_24px_-8px_rgb(76_141_255/0.35)] backdrop-blur-md"
        animate={getDriftAnimation(prefersReducedMotion, 0.46)}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-accent-bright" />
        AI agent active
      </motion.div>
    </motion.div>
  );
}

function ProfilePortrait() {
  const prefersReducedMotion = useReducedMotion() ?? false;

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[22rem] lg:max-w-[26rem]">
      {/* Soft blue → violet glow behind the rings, echoing the portfolio's accent color */}
      <motion.div
        className="pointer-events-none absolute inset-[-14%] rounded-full opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgb(76 141 255 / 0.35), rgb(139 92 246 / 0.16), transparent 72%)",
        }}
        animate={
          prefersReducedMotion
            ? undefined
            : { opacity: [0.55, 0.8, 0.55] }
        }
        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      {/* Concentric rings */}
      <div className="pointer-events-none absolute inset-0 rounded-full border border-accent/15" />
      <div className="pointer-events-none absolute inset-[7%] rounded-full border border-border-strong" />
      <div className="pointer-events-none absolute inset-[13%] rounded-full border border-[rgb(139_92_246/0.22)]" />

      {/* Subtle orbit dots drifting around the rings */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        animate={prefersReducedMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      >
        <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-bright shadow-[0_0_8px_2px_rgb(124_176_255/0.55)]" />
      </motion.div>
      <motion.div
        className="pointer-events-none absolute inset-0"
        animate={prefersReducedMotion ? undefined : { rotate: -360 }}
        transition={{ duration: 80, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      >
        <span className="absolute bottom-[6%] right-[10%] h-1 w-1 rounded-full bg-[rgb(139_92_246)] shadow-[0_0_6px_2px_rgb(139_92_246/0.5)]" />
      </motion.div>

      {/* Portrait */}
      <div className="absolute inset-[19%] overflow-hidden rounded-full border border-border-strong bg-surface shadow-[0_0_40px_-8px_rgb(76_141_255/0.4)]">
        <Image
          src="/images/profile-liwaa.png"
          alt="Portrait of Liwaa Aljaramani"
          fill
          priority
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 55vw, 70vw"
          className="object-cover"
        />
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
      className="relative mx-auto w-full max-w-md lg:max-w-none lg:translate-x-6"
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={getTransition(prefersReducedMotion, 0.6, 0.3)}
    >
      <div className="lg:px-8 lg:py-6">
        <ProfilePortrait />
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
        <div className="pointer-events-auto absolute right-[10%] top-[3%]">
          <StatusBadge />
        </div>
      </div>

      {/* Stacked, non-overlapping placement below the portrait on small/medium screens */}
      <div className="mt-5 flex flex-wrap items-center justify-center gap-3 lg:hidden">
        {floatingCards.map((card) => (
          <FloatingCard
            key={card.eyebrow}
            eyebrow={card.eyebrow}
            body={card.body}
            delay={card.delay}
          />
        ))}
        <StatusBadge />
      </div>
    </motion.div>
  );
}
