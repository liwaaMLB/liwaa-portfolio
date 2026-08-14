"use client";

import { site } from "@/content/site";
import {
  AnimatedButtonLink,
  AnimatedTextLink,
} from "@/components/motion/animated-button-link";
import { PulseDot } from "@/components/motion/pulse-dot";
import { HeroVisual } from "@/components/motion/hero-visual";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/motion/primitives";
import { motionDistances, stagger } from "@/lib/motion-config";
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/icons";

const socialLinks = [
  { href: site.links.github, label: "GitHub", Icon: GithubIcon },
  { href: site.links.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
  { href: site.links.email, label: "Email", Icon: MailIcon },
] as const;

const [headlineLead, headlineAccent] = site.title.split(" & ");

export function HeroAnimated() {
  return (
    <section
      id="top"
      className="atmosphere relative overflow-hidden border-b border-border"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto grid max-w-6xl gap-16 px-6 py-16 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-12 lg:py-28">
        <StaggerContainer
          animateOnMount
          staggerDelay={stagger.hero}
          className="space-y-0"
        >
          <StaggerItem distance={motionDistances.mobile}>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="inline-flex items-center gap-2 text-sm text-foreground-muted">
                <PulseDot />
                {site.availability}
              </span>
              <span className="hidden text-border-strong sm:inline">·</span>
              <span className="text-sm text-foreground-subtle">
                {site.location}
              </span>
            </div>
          </StaggerItem>

          <StaggerItem distance={motionDistances.hero} className="mt-6">
            <p className="text-sm font-medium tracking-wide text-foreground-muted">
              {site.greeting}
            </p>
          </StaggerItem>

          <StaggerItem distance={motionDistances.hero} className="mt-2">
            <h1
              id="hero-heading"
              className="max-w-xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl sm:leading-tight"
            >
              {headlineLead} &<br />
              <span className="text-accent-bright">{headlineAccent}</span>
            </h1>
          </StaggerItem>

          <StaggerItem distance={motionDistances.hero} className="mt-5">
            <p className="max-w-lg text-lg leading-relaxed text-foreground-muted">
              {site.description}
            </p>
          </StaggerItem>

          <StaggerItem distance={motionDistances.card} className="mt-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <AnimatedButtonLink href="/#work" variant="primary" showArrow>
                View My Work
              </AnimatedButtonLink>
              <AnimatedButtonLink
                href={site.links.resume}
                variant="secondary"
                showArrow
                arrow="↓"
              >
                Download CV
              </AnimatedButtonLink>
            </div>
          </StaggerItem>

          <StaggerItem distance={motionDistances.mobile} className="mt-8">
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {socialLinks.map(({ href, label, Icon }) => (
                <li key={label}>
                  <AnimatedTextLink
                    href={href}
                    external={href.startsWith("http")}
                    className="inline-flex items-center gap-1.5"
                  >
                    <Icon className="h-4 w-4 text-foreground-subtle" />
                    {label}
                  </AnimatedTextLink>
                </li>
              ))}
            </ul>
          </StaggerItem>
        </StaggerContainer>

        <HeroVisual />
      </div>
    </section>
  );
}
