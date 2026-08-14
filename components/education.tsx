import { education } from "@/content/education";
import { Reveal } from "@/components/motion/primitives";
import { SectionHeading } from "@/components/ui/primitives";

export function Education() {
  return (
    <section
      id="education"
      className="border-b border-border"
      aria-labelledby="education-heading"
    >
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <Reveal>
          <SectionHeading
            id="education-heading"
            title="Education"
            description="Academic foundation in business computing with a practical orientation toward software engineering."
          />
        </Reveal>

        <Reveal delay={0.06}>
          <div className="max-w-2xl rounded-lg border border-border bg-surface p-6 transition-[border-color,transform] duration-300 hover:border-accent/30 [@media(hover:hover)]:hover:-translate-y-0.5">
            <h3 className="text-lg font-semibold tracking-tight text-foreground">
              {education.institution}
            </h3>
            <p className="mt-1 text-sm text-foreground-muted">
              {education.faculty}
            </p>
            <p className="mt-4 text-base text-foreground">{education.degree}</p>
            <p className="mt-2 text-sm text-foreground-subtle">
              Graduation: {education.graduation}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
