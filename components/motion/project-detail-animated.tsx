"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import type { Project } from "@/lib/types";
import { site } from "@/content/site";
import { ProjectImagePlaceholder } from "@/components/projects/project-image-placeholder";
import { ProjectScreenshot } from "@/components/projects/project-screenshot";
import { Tag } from "@/components/ui/primitives";
import { AnimatedButtonLink } from "@/components/motion/animated-button-link";
import {
  PageEnter,
  Reveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion/primitives";

type ProjectDetailAnimatedProps = {
  project: Project;
};

export function ProjectDetailAnimated({ project }: ProjectDetailAnimatedProps) {
  const prefersReducedMotion = useReducedMotion() ?? false;
  const featuredGalleryImages =
    project.gallery?.filter((image) => image.featured) ?? [];
  const galleryImages =
    project.gallery?.filter((image) => !image.featured) ?? [];
  const hideLinkPlaceholders =
    project.slug === "identica" || project.slug === "bloodconnect";

  return (
    <PageEnter>
      <article>
        <header className="border-b border-border pb-10">
          <motion.div whileHover={prefersReducedMotion ? undefined : { x: -2 }}>
            <Link
              href="/#work"
              className="inline-flex items-center gap-1 text-sm text-foreground-subtle transition-colors duration-200 hover:text-accent-bright focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              ← Back to work
            </Link>
          </motion.div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="font-mono text-sm font-semibold text-accent">
              Project {project.number}
            </span>
            {project.status && <Tag variant="learning">{project.status}</Tag>}
          </div>

          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {project.title}
          </h1>
          <p className="mt-3 text-lg text-foreground-muted">
            {project.category}
          </p>
          {project.context && (
            <p className="mt-2 text-sm text-foreground-subtle">
              {project.context}
            </p>
          )}
        </header>

        <Reveal className="py-10">
          <div className="overflow-hidden rounded-lg">
            <motion.div
              whileHover={prefersReducedMotion ? undefined : { scale: 1.015 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              {project.heroImage ? (
                <ProjectScreenshot
                  image={project.heroImage}
                  priority
                  sizes="(min-width: 1024px) 1152px, 100vw"
                />
              ) : (
                <ProjectImagePlaceholder title={project.title} />
              )}
            </motion.div>
          </div>
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:gap-16">
          <div className="space-y-10">
            <Reveal>
              <section aria-labelledby="overview-heading">
                <h2
                  id="overview-heading"
                  className="text-lg font-semibold tracking-tight text-foreground"
                >
                  Overview
                </h2>
                <p className="mt-3 leading-relaxed text-foreground-muted">
                  {project.overview ?? project.description}
                </p>
              </section>
            </Reveal>

            {project.contribution && (
              <Reveal delay={0.04}>
                <section aria-labelledby="contribution-heading">
                  <h2
                    id="contribution-heading"
                    className="text-lg font-semibold tracking-tight text-foreground"
                  >
                    My Contribution
                  </h2>
                  <p className="mt-3 leading-relaxed text-foreground-muted">
                    {project.contribution}
                  </p>
                </section>
              </Reveal>
            )}

            {project.engineeringApproach && (
              <Reveal delay={0.05}>
                <section aria-labelledby="approach-heading">
                  <h2
                    id="approach-heading"
                    className="text-lg font-semibold tracking-tight text-foreground"
                  >
                    Engineering Approach
                  </h2>
                  <p className="mt-3 leading-relaxed text-foreground-muted">
                    {project.engineeringApproach}
                  </p>
                </section>
              </Reveal>
            )}

            {project.aiDevelopmentNote && (
              <Reveal delay={0.08}>
                <section aria-labelledby="development-heading">
                  <h2
                    id="development-heading"
                    className="text-lg font-semibold tracking-tight text-foreground"
                  >
                    Development Approach
                  </h2>
                  <p className="mt-3 leading-relaxed text-foreground-muted">
                    {project.aiDevelopmentNote}
                  </p>
                </section>
              </Reveal>
            )}

            {project.features && project.features.length > 0 && (
              <Reveal delay={0.11}>
                <section aria-labelledby="features-heading">
                  <h2
                    id="features-heading"
                    className="text-lg font-semibold tracking-tight text-foreground"
                  >
                    Key Work
                  </h2>
                  <ul className="mt-4 space-y-2">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex gap-3 text-sm leading-relaxed text-foreground-muted"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </section>
              </Reveal>
            )}
          </div>

          <aside className="space-y-8">
            <Reveal delay={0.05}>
              <section aria-labelledby="technologies-heading">
                <h2
                  id="technologies-heading"
                  className="text-sm font-semibold uppercase tracking-wider text-foreground-subtle"
                >
                  Technologies
                </h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.length > 0 ? (
                    project.technologies.map((tech) => <Tag key={tech}>{tech}</Tag>)
                  ) : (
                    project.technologiesNote && (
                      <p className="text-sm text-foreground-muted">
                        {project.technologiesNote}
                      </p>
                    )
                  )}
                </div>
              </section>
            </Reveal>

            <Reveal delay={0.1}>
              <section aria-labelledby="links-heading">
                <h2
                  id="links-heading"
                  className="text-sm font-semibold uppercase tracking-wider text-foreground-subtle"
                >
                  Links
                </h2>
                <div className="mt-4 flex flex-col items-start gap-3">
                  {project.github ? (
                    <AnimatedButtonLink href={project.github} variant="ghost" external>
                      GitHub
                    </AnimatedButtonLink>
                  ) : !hideLinkPlaceholders ? (
                    <p className="text-sm text-foreground-subtle">
                      Repository link coming soon.
                    </p>
                  ) : null}
                  {project.live ? (
                    <AnimatedButtonLink href={project.live} variant="ghost" external>
                      Live demo
                    </AnimatedButtonLink>
                  ) : !hideLinkPlaceholders ? (
                    <p className="text-sm text-foreground-subtle">
                      Live demo not available yet.
                    </p>
                  ) : null}
                  <AnimatedButtonLink
                    href={site.links.github}
                    variant="ghost"
                    external
                  >
                    {site.name} on GitHub
                  </AnimatedButtonLink>
                </div>
              </section>
            </Reveal>
          </aside>
        </div>

        {project.capabilities && project.capabilities.length > 0 && (
          <section
            className="mt-16 border-t border-border pt-12"
            aria-labelledby="capabilities-heading"
          >
            <Reveal>
              <h2
                id="capabilities-heading"
                className="text-lg font-semibold tracking-tight text-foreground"
              >
                Key Capabilities
              </h2>
              <p className="mt-2 max-w-2xl leading-relaxed text-foreground-muted">
                The core workflows {project.title} brings together.
              </p>
            </Reveal>

            <StaggerContainer className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {project.capabilities.map((capability) => (
                <StaggerItem key={capability.title}>
                  <div className="h-full rounded-lg border border-border bg-surface p-5 transition-colors duration-200 hover:border-accent/40">
                    <h3 className="text-sm font-semibold text-foreground">
                      {capability.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                      {capability.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </section>
        )}

        {project.gallery && project.gallery.length > 0 && (
          <section
            className="mt-16 border-t border-border pt-12"
            aria-labelledby="gallery-heading"
          >
            <Reveal>
              <h2
                id="gallery-heading"
                className="text-lg font-semibold tracking-tight text-foreground"
              >
                Selected Interface
              </h2>
              <p className="mt-2 max-w-2xl leading-relaxed text-foreground-muted">
                A closer look at key screens from the {project.title}{" "}
                experience.
              </p>
            </Reveal>

            {featuredGalleryImages.length > 0 && (
              <div className="mt-8 space-y-8">
                {featuredGalleryImages.map((image) => (
                  <Reveal key={image.src}>
                    <figure>
                      <motion.div
                        whileHover={
                          prefersReducedMotion ? undefined : { scale: 1.01 }
                        }
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <ProjectScreenshot
                          image={image}
                          sizes="(min-width: 1024px) 1152px, 100vw"
                        />
                      </motion.div>
                      {(image.label || image.caption) && (
                        <figcaption className="mt-4 max-w-2xl">
                          {image.label && (
                            <p className="text-base font-semibold text-foreground">
                              {image.label}
                            </p>
                          )}
                          {image.caption && (
                            <p className="mt-1.5 text-sm leading-relaxed text-foreground-muted">
                              {image.caption}
                            </p>
                          )}
                        </figcaption>
                      )}
                    </figure>
                  </Reveal>
                ))}
              </div>
            )}

            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              {galleryImages.map((image, index) => (
                <Reveal key={image.src} delay={0.06 * (index + 1)}>
                  <figure>
                    <motion.div
                      whileHover={
                        prefersReducedMotion ? undefined : { scale: 1.015 }
                      }
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <ProjectScreenshot
                        image={image}
                        sizes="(min-width: 640px) 50vw, 100vw"
                      />
                    </motion.div>
                    {(image.label || image.caption) && (
                      <figcaption className="mt-3">
                        {image.label && (
                          <p className="text-sm font-medium text-foreground-subtle">
                            {image.label}
                          </p>
                        )}
                        {image.caption && (
                          <p className="mt-1 text-sm leading-relaxed text-foreground-subtle">
                            {image.caption}
                          </p>
                        )}
                      </figcaption>
                    )}
                  </figure>
                </Reveal>
              ))}
            </div>
          </section>
        )}

        {project.confidentialityNote && (
          <Reveal delay={0.05}>
            <p className="mt-12 max-w-2xl text-xs italic leading-relaxed text-foreground-subtle">
              {project.confidentialityNote}
            </p>
          </Reveal>
        )}
      </article>
    </PageEnter>
  );
}
