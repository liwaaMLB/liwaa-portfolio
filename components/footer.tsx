import { site } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-12 sm:py-14">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium text-foreground">{site.name}</p>
            <p className="mt-2 text-sm text-foreground-muted">
              {site.availability}
            </p>
            <p className="mt-1 text-sm text-foreground-subtle">
              {site.location}
            </p>
          </div>
          <div className="flex flex-col items-start gap-3 sm:items-end">
            <a
              href={site.links.email}
              className="text-sm text-foreground-muted underline-offset-4 transition-colors hover:text-accent-bright hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Get in touch
            </a>
            <div className="flex flex-wrap gap-4">
              <a
                href={site.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-foreground-subtle transition-colors hover:text-accent-bright focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                GitHub
              </a>
              <a
                href={site.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-foreground-subtle transition-colors hover:text-accent-bright focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <p className="mt-10 border-t border-border pt-6 text-xs text-foreground-subtle">
          © {year} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
