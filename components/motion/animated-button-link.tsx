"use client";

import Link from "next/link";
import type { ReactNode } from "react";

type AnimatedButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
  showArrow?: boolean;
  arrow?: string;
};

export function AnimatedButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
  showArrow = false,
  arrow = "→",
}: AnimatedButtonLinkProps) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium transition-[transform,color,opacity,border-color] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-safe:hover:-translate-y-px motion-safe:active:scale-[0.98]";

  const variants = {
    primary: "bg-foreground text-background hover:opacity-90",
    secondary:
      "border border-border-strong text-foreground hover:border-accent hover:text-accent-bright",
    ghost:
      "!px-0 !py-0 text-accent-bright hover:text-accent-bright/80 underline-offset-4 hover:underline motion-safe:hover:translate-y-0",
  };

  const className = `${base} ${variants[variant]}`;

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <span
          aria-hidden="true"
          className="inline-block transition-transform duration-200 motion-safe:group-hover:translate-x-1"
        >
          {arrow}
        </span>
      )}
    </>
  );

  if (external || href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={className}
        {...(external || href.startsWith("http")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {content}
    </Link>
  );
}

type AnimatedTextLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
};

export function AnimatedTextLink({
  href,
  children,
  className = "",
  external = false,
}: AnimatedTextLinkProps) {
  const linkClassName = `text-sm text-foreground-subtle underline-offset-4 transition-colors duration-200 hover:text-accent-bright hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background ${className}`;

  if (external || href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={linkClassName}
        {...(external || href.startsWith("http")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={linkClassName}>
      {children}
    </Link>
  );
}
