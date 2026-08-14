type ProjectImagePlaceholderProps = {
  title: string;
  className?: string;
};

export function ProjectImagePlaceholder({
  title,
  className = "",
}: ProjectImagePlaceholderProps) {
  return (
    <div
      className={`relative aspect-[16/10] overflow-hidden rounded-lg border border-border bg-surface ${className}`}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_40%,rgb(76_141_255/0.08)_40%,rgb(76_141_255/0.08)_60%,transparent_60%)]" />
      <div className="flex h-full flex-col items-center justify-center gap-2 p-6 text-center">
        <span className="text-xs font-medium uppercase tracking-widest text-accent-bright">
          Screenshot
        </span>
        <span className="max-w-xs text-sm text-foreground-subtle">
          {title} — image coming soon
        </span>
      </div>
    </div>
  );
}
