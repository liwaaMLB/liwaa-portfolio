"use client";

import type { ReactNode } from "react";
import { skillCategories } from "@/content/skills";
import { AnimatedTag } from "@/components/motion/animated-tag";
import { Reveal } from "@/components/motion/primitives";

const tagStyles = {
  default:
    "inline-flex items-center rounded-md border border-border bg-surface px-2.5 py-1 text-xs font-medium text-foreground-muted",
  learning:
    "inline-flex items-center rounded-md border border-accent/25 bg-accent-muted px-2.5 py-1 text-xs font-medium text-accent-bright",
} as const;

export function AnimatedSkills() {
  return (
    <div className="mt-4 space-y-5">
      {skillCategories.map((category, index) => (
        <Reveal key={category.title} delay={index * 0.05}>
          <div>
            <h4 className="text-sm font-medium text-foreground">
              {category.title}
            </h4>
            {category.note && (
              <p className="mt-1 text-xs text-foreground-subtle">
                {category.note}
              </p>
            )}
            <ul className="mt-3 flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <li key={skill}>
                  <AnimatedTag
                    className={
                      category.title === "Cloud / AI Learning"
                        ? tagStyles.learning
                        : tagStyles.default
                    }
                  >
                    {skill}
                  </AnimatedTag>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export function AnimatedSkillTags({
  children,
  variant = "default",
}: {
  children: ReactNode;
  variant?: "default" | "learning";
}) {
  return (
    <AnimatedTag className={tagStyles[variant]}>{children}</AnimatedTag>
  );
}
