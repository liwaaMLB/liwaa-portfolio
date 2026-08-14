"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { site } from "@/content/site";
import { AnimatedNavLink } from "@/components/motion/animated-nav-link";

const navLinks = [
  { href: "/#work", label: "Work" },
  { href: "/#experience", label: "Experience" },
  { href: "/#education", label: "Education" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
] as const;

const linkClassName =
  "text-sm text-foreground-muted transition-colors duration-200 hover:text-accent-bright focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export function ScrollNavigation() {
  const [scrolled, setScrolled] = useState(false);
  const prefersReducedMotion = useReducedMotion() ?? false;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className={`sticky top-0 z-50 border-b backdrop-blur-md transition-[background-color,border-color,box-shadow] duration-300 ${
        scrolled
          ? "border-border-strong bg-background/85 shadow-[0_8px_30px_-16px_rgb(0_0_0/0.6)]"
          : "border-transparent bg-background/40"
      }`}
      animate={
        prefersReducedMotion
          ? undefined
          : {
              boxShadow: scrolled
                ? "0 8px 30px -16px rgb(0 0 0 / 0.6)"
                : "0 0 0 0 transparent",
            }
      }
      transition={{ duration: 0.25 }}
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3.5"
        aria-label="Primary"
      >
        <Link
          href="/"
          className="group flex items-baseline gap-2 text-sm font-medium tracking-tight text-foreground transition-colors duration-200 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <span className="text-base font-semibold">{site.name}</span>
          <span className="hidden text-xs font-normal text-foreground-subtle sm:inline">
            /
          </span>
          <span className="hidden text-xs font-normal uppercase tracking-widest text-foreground-subtle sm:inline">
            LA
          </span>
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <AnimatedNavLink href={href} className={linkClassName}>
                {label}
              </AnimatedNavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <details className="relative lg:hidden">
            <summary className="cursor-pointer list-none rounded-md border border-border-strong px-3 py-1.5 text-sm text-foreground-muted transition-colors duration-200 hover:border-accent hover:text-accent-bright [&::-webkit-details-marker]:hidden">
              Menu
            </summary>
            <ul className="absolute right-0 mt-2 min-w-44 rounded-lg border border-border bg-surface py-2 shadow-[0_16px_40px_-16px_rgb(0_0_0/0.7)]">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="block px-4 py-2 text-sm text-foreground-muted transition-colors duration-200 hover:bg-surface-hover hover:text-accent-bright"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </details>

          <motion.a
            href={site.links.resume}
            className="inline-flex items-center rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            whileHover={
              prefersReducedMotion ? undefined : { y: -1, opacity: 0.92 }
            }
            whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            Resume
          </motion.a>
        </div>
      </nav>
    </motion.header>
  );
}
