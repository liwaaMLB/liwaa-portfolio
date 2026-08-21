"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import type { Project } from "@/lib/types";
import { ProjectImagePlaceholder } from "@/components/projects/project-image-placeholder";
import { ProjectScreenshot } from "@/components/projects/project-screenshot";
import { Tag } from "@/components/ui/primitives";
import { AnimatedButtonLink } from "@/components/motion/animated-button-link";
import {
  getScaleUpVariant,
  getTransition,
  viewportOnce,
} from "@/lib/motion-config";

type AnimatedProjectCardProps = {
  project: Project;
  reverse?: boolean;
};

export function AnimatedProjectCard({
  project,
  reverse = false,
}: AnimatedProjectCardProps) {
  const prefersReducedMotion = useReducedMotion() ?? false;
  const caseStudyHref = `/projects/${project.slug}`;
  const variants = getScaleUpVariant(prefersReducedMotion);

  return (
    <motion.article
      className="group rounded-xl border border-border bg-surface p-5 transition-[border-color,transform,box-shadow] duration-300 hover:border-accent/40 sm:p-6 lg:p-8 [@media(hover:hover)]:hover:-translate-y-1 [@media(hover:hover)]:hover:shadow-[0_0_32px_-12px_rgb(76_141_255/0.35)]"
      aria-labelledby={`project-${project.slug}-title`}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={variants}
      transition={getTransition(prefersReducedMotion, 0.5)}
    >
      <div
        className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-12 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <Link
          href={caseStudyHref}
          className="block overflow-hidden rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          aria-label={`View ${project.title} case study`}
        >
          <div className="overflow-hidden rounded-lg">
            <motion.div
              className="origin-center"
              whileHover={
                prefersReducedMotion ? undefined : { scale: 1.02, y: -2 }
              }
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              {project.heroImage ? (
                <ProjectScreenshot
                  image={project.heroImage}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              ) : (
                <ProjectImagePlaceholder title={project.title} />
              )}
            </motion.div>
          </div>
        </Link>

        <div>
          <div className="flex flex-wrap items-center gap-3">
            <motion.span
              className="font-mono text-sm font-semibold text-accent"
              whileHover={prefersReducedMotion ? undefined : { x: 2 }}
              transition={{ duration: 0.2 }}
            >
              {project.number}
            </motion.span>
            {project.status && (
              <Tag variant="learning">{project.status}</Tag>
            )}
          </div>

          <h3
            id={`project-${project.slug}-title`}
            className="mt-4 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
          >
            <Link
              href={caseStudyHref}
              className="transition-colors duration-200 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {project.title}
            </Link>
          </h3>

          <p className="mt-2 text-sm font-medium text-foreground-subtle">
            {project.category}
          </p>

          {project.context && (
            <p className="mt-2 text-sm text-foreground-subtle">
              {project.context}
            </p>
          )}

          <p className="mt-4 text-base leading-relaxed text-foreground-muted">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.length > 0 ? (
              project.technologies.map((tech) => <Tag key={tech}>{tech}</Tag>)
            ) : (
              project.technologiesNote && (
                <Tag variant="muted">{project.technologiesNote}</Tag>
              )
            )}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <AnimatedButtonLink
              href={caseStudyHref}
              variant="primary"
              showArrow
            >
              View Case Study
            </AnimatedButtonLink>
            {project.github && (
              <AnimatedButtonLink href={project.github} variant="ghost" external>
                GitHub
              </AnimatedButtonLink>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
