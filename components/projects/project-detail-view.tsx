import Link from "next/link";
import type { Project } from "@/lib/types";
import { site } from "@/content/site";
import { ProjectImagePlaceholder } from "@/components/projects/project-image-placeholder";
import { ButtonLink, Tag } from "@/components/ui/primitives";

type ProjectDetailViewProps = {
  project: Project;
};

export function ProjectDetailView({ project }: ProjectDetailViewProps) {
  return (
    <article>
      <header className="border-b border-zinc-200/80 pb-10 dark:border-zinc-800/80">
        <Link
          href="/#work"
          className="text-sm text-zinc-500 transition-colors hover:text-accent dark:text-zinc-400"
        >
          ← Back to work
        </Link>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <span className="font-mono text-sm font-semibold text-accent">
            Project {project.number}
          </span>
          {project.status && <Tag variant="learning">{project.status}</Tag>}
        </div>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {project.title}
        </h1>
        <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-400">
          {project.category}
        </p>
        {project.context && (
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
            {project.context}
          </p>
        )}
      </header>

      <div className="py-10">
        <ProjectImagePlaceholder title={project.title} />
      </div>

      <div className="grid gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:gap-16">
        <div className="space-y-10">
          <section aria-labelledby="overview-heading">
            <h2
              id="overview-heading"
              className="text-lg font-semibold tracking-tight text-foreground"
            >
              Overview
            </h2>
            <p className="mt-3 leading-relaxed text-zinc-600 dark:text-zinc-400">
              {project.overview ?? project.description}
            </p>
          </section>

          {project.aiDevelopmentNote && (
            <section aria-labelledby="development-heading">
              <h2
                id="development-heading"
                className="text-lg font-semibold tracking-tight text-foreground"
              >
                Development Approach
              </h2>
              <p className="mt-3 leading-relaxed text-zinc-600 dark:text-zinc-400">
                {project.aiDevelopmentNote}
              </p>
            </section>
          )}

          {project.features && project.features.length > 0 && (
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
                    className="flex gap-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        <aside className="space-y-8">
          <section aria-labelledby="technologies-heading">
            <h2
              id="technologies-heading"
              className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400"
            >
              Technologies
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.length > 0 ? (
                project.technologies.map((tech) => <Tag key={tech}>{tech}</Tag>)
              ) : (
                project.technologiesNote && (
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {project.technologiesNote}
                  </p>
                )
              )}
            </div>
          </section>

          <section aria-labelledby="links-heading">
            <h2
              id="links-heading"
              className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400"
            >
              Links
            </h2>
            <div className="mt-4 flex flex-col items-start gap-3">
              {project.github ? (
                <ButtonLink href={project.github} variant="ghost" external>
                  GitHub
                </ButtonLink>
              ) : (
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  Repository link coming soon.
                </p>
              )}
              {project.live ? (
                <ButtonLink href={project.live} variant="ghost" external>
                  Live demo
                </ButtonLink>
              ) : (
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  Live demo not available yet.
                </p>
              )}
              <ButtonLink href={site.links.github} variant="ghost" external>
                {site.name} on GitHub
              </ButtonLink>
            </div>
          </section>
        </aside>
      </div>
    </article>
  );
}
