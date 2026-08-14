"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ExperienceEntry } from "@/lib/types";
import { Reveal } from "@/components/motion/primitives";
import { getTransition } from "@/lib/motion-config";

type ExperienceTimelineProps = {
  entries: readonly ExperienceEntry[];
};

export function ExperienceTimeline({ entries }: ExperienceTimelineProps) {
  const prefersReducedMotion = useReducedMotion() ?? false;

  return (
    <div className="relative pl-6 sm:pl-8">
      <motion.div
        className="absolute bottom-0 left-0 top-0 w-px origin-top bg-border-strong"
        initial={prefersReducedMotion ? { opacity: 0 } : { scaleY: 0, opacity: 0.5 }}
        whileInView={prefersReducedMotion ? { opacity: 1 } : { scaleY: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={getTransition(prefersReducedMotion, 0.6)}
      />

      <ol className="space-y-10">
        {entries.map((entry, index) => (
          <Reveal key={`${entry.company}-${entry.dates}`} delay={index * 0.08}>
            <li className="relative">
              <motion.span
                className="absolute -left-[calc(1.5rem+0.3125rem)] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-background bg-foreground-subtle sm:-left-[calc(2rem+0.3125rem)]"
                initial={
                  prefersReducedMotion
                    ? { backgroundColor: "var(--accent)" }
                    : { scale: 0.6, backgroundColor: "rgb(107 118 144)" }
                }
                whileInView={
                  prefersReducedMotion
                    ? { backgroundColor: "var(--accent)" }
                    : { scale: 1, backgroundColor: "var(--accent)" }
                }
                viewport={{ once: true }}
                transition={getTransition(prefersReducedMotion, 0.35, index * 0.08)}
                aria-hidden="true"
              />

              <div className="rounded-lg border border-border bg-surface p-6 transition-[border-color,transform] duration-300 hover:border-accent/30 [@media(hover:hover)]:hover:-translate-y-0.5">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-foreground">
                      {entry.role}
                    </h3>
                    <p className="mt-1 text-base text-accent-bright">{entry.company}</p>
                  </div>
                  <p className="text-sm text-foreground-subtle">
                    {entry.dates}
                  </p>
                </div>

                {entry.location && (
                  <p className="mt-2 text-sm text-foreground-subtle">
                    {entry.location}
                  </p>
                )}

                <p className="mt-4 text-sm font-medium text-foreground">
                  Main project:{" "}
                  <span className="font-normal text-foreground-muted">
                    {entry.project}
                  </span>
                </p>

                <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                  {entry.focus}
                </p>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}
