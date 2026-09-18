import { certificates } from "@/content/certificates";
import { Reveal } from "@/components/motion/primitives";
import { ButtonLink, SectionHeading } from "@/components/ui/primitives";

export function Certificates() {
  return (
    <section
      id="certificates"
      className="border-b border-border"
      aria-labelledby="certificates-heading"
    >
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <Reveal>
          <SectionHeading id="certificates-heading" title="Certificates" />
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2">
          {certificates.map((certificate, index) => (
            <Reveal key={certificate.href} delay={0.06 * (index + 1)}>
              <article className="flex h-full flex-col rounded-lg border border-border bg-surface p-6 transition-[border-color,transform] duration-300 hover:border-accent/30 [@media(hover:hover)]:hover:-translate-y-0.5">
                <h3 className="text-lg font-semibold tracking-tight text-foreground">
                  {certificate.title}
                </h3>
                <p className="mt-1 text-sm text-foreground-muted">
                  {certificate.issuer}
                </p>
                <p className="mt-4 mb-6 text-sm leading-relaxed text-foreground-muted">
                  {certificate.description}
                </p>
                <div className="mt-auto">
                  <ButtonLink href={certificate.href} variant="secondary" external>
                    View Certificate
                    <span className="sr-only">
                      {` from ${certificate.issuer} (PDF, opens in a new tab)`}
                    </span>
                  </ButtonLink>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
