import { projects } from "@/content/projects";
import { AnimatedProjectCard } from "@/components/motion/animated-project-card";
import { Reveal } from "@/components/motion/primitives";
import { SectionHeading } from "@/components/ui/primitives";

export function SelectedWork() {
  return (
    <section
      id="work"
      className="border-b border-border"
      aria-labelledby="work-heading"
    >
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <Reveal>
          <SectionHeading
            id="work-heading"
            eyebrow="• SELECTED WORK •"
            align="center"
            title="Featured Projects"
            description="Selected software projects spanning full-stack web development, clinic management systems, and AI-assisted engineering workflows."
          />
        </Reveal>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <AnimatedProjectCard
              key={project.slug}
              project={project}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
