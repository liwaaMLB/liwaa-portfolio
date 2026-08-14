import { experience } from "@/content/experience";
import { ExperienceTimeline } from "@/components/motion/experience-timeline";
import { Reveal } from "@/components/motion/primitives";
import { SectionHeading } from "@/components/ui/primitives";

export function Experience() {
  return (
    <section
      id="experience"
      className="border-b border-border"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <Reveal>
          <SectionHeading
            id="experience-heading"
            title="Experience"
            description="Software development internships focused on building practical, workflow-driven applications."
          />
        </Reveal>

        <ExperienceTimeline entries={experience} />
      </div>
    </section>
  );
}
