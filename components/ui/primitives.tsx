import Link from "next/link";

type SectionHeadingProps = {
  id: string;
  title: string;
  description?: string;
  eyebrow?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  id,
  title,
  description,
  eyebrow,
  align = "left",
}: SectionHeadingProps) {
  const isCentered = align === "center";

  return (
    <div
      className={`mb-10 max-w-2xl ${isCentered ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-bright">
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
      >
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base leading-relaxed text-foreground-muted">
          {description}
        </p>
      )}
    </div>
  );
}

type TagProps = {
  children: React.ReactNode;
  variant?: "default" | "muted" | "learning";
};

export function Tag({ children, variant = "default" }: TagProps) {
  const styles = {
    default: "border-border bg-surface text-foreground-muted",
    muted: "border-dashed border-border-strong bg-transparent text-foreground-subtle",
    learning: "border-accent/25 bg-accent-muted text-accent-bright",
  };

  return (
    <span
      className={`inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-medium ${styles[variant]}`}
    >
      {children}
    </span>
  );
}

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
}: ButtonLinkProps) {
  const base =
    "inline-flex items-center justify-center rounded-md px-4 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background";

  const variants = {
    primary: "bg-foreground text-background hover:opacity-90",
    secondary:
      "border border-border-strong text-foreground hover:border-accent hover:text-accent-bright",
    ghost:
      "!px-0 !py-0 text-accent-bright hover:text-accent-bright/80 underline-offset-4 hover:underline",
  };

  const className = `${base} ${variants[variant]}`;

  if (external || href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={className}
        {...(external || href.startsWith("http")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
