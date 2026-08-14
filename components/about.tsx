import { about } from "@/content/site";
import { currentLearning } from "@/content/learning";
import { AnimatedSkills } from "@/components/motion/animated-skills";
import { Reveal } from "@/components/motion/primitives";
import { SectionHeading, Tag } from "@/components/ui/primitives";

export function About() {
  return (
    <section
      id="about"
      className="border-b border-border"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <Reveal>
          <SectionHeading
            id="about-heading"
            title="About"
            description="Early-career software engineer focused on building useful, well-structured applications."
          />
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
          <div className="space-y-8">
            <Reveal delay={0.05}>
              <div className="space-y-4">
                {about.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 32)}
                    className="leading-relaxed text-foreground-muted"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <section aria-labelledby="learning-heading">
                <h3
                  id="learning-heading"
                  className="text-lg font-semibold tracking-tight text-foreground"
                >
                  Currently Learning
                </h3>
                <div className="mt-4 rounded-lg border border-border bg-surface p-5 transition-[border-color,transform] duration-300 hover:border-accent/30 [@media(hover:hover)]:hover:-translate-y-0.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-sm font-medium text-foreground">
                      {currentLearning.title}
                    </p>
                    <Tag variant="learning">{currentLearning.status}</Tag>
                  </div>
                  <p className="mt-1 text-sm text-foreground-subtle">
                    {currentLearning.provider}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {currentLearning.areas.map((area) => (
                      <Tag key={area} variant="default">
                        {area}
                      </Tag>
                    ))}
                  </ul>
                </div>
              </section>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <section aria-labelledby="skills-heading">
              <h3
                id="skills-heading"
                className="text-lg font-semibold tracking-tight text-foreground"
              >
                Technical Skills
              </h3>
              <AnimatedSkills />
            </section>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
