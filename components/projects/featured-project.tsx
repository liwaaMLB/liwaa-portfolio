import Link from "next/link";
import type { Project } from "@/lib/types";
import { ProjectImagePlaceholder } from "@/components/projects/project-image-placeholder";
import { ButtonLink, Tag } from "@/components/ui/primitives";

type FeaturedProjectProps = {
  project: Project;
  reverse?: boolean;
};

export function FeaturedProject({ project, reverse = false }: FeaturedProjectProps) {
  const caseStudyHref = `/projects/${project.slug}`;

  return (
    <article
      className="group rounded-xl border border-zinc-200 bg-background p-5 transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:hover:border-zinc-700 sm:p-6 lg:p-8"
      aria-labelledby={`project-${project.slug}-title`}
    >
      <div
        className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-12 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <Link
          href={caseStudyHref}
          className="block overflow-hidden rounded-lg transition-opacity hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          aria-label={`View ${project.title} case study`}
        >
          <ProjectImagePlaceholder title={project.title} />
        </Link>

        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-sm font-semibold text-accent">
              {project.number}
            </span>
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
              className="transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {project.title}
            </Link>
          </h3>

          <p className="mt-2 text-sm font-medium text-zinc-500 dark:text-zinc-400">
            {project.category}
          </p>

          {project.context && (
            <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
              {project.context}
            </p>
          )}

          <p className="mt-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
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
            <ButtonLink href={caseStudyHref} variant="primary">
              View Case Study
            </ButtonLink>
            {project.github && (
              <ButtonLink href={project.github} variant="ghost" external>
                GitHub
              </ButtonLink>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
