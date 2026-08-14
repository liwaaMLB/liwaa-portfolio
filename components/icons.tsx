type IconProps = {
  className?: string;
};

export function GithubIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 1.5a10.5 10.5 0 0 0-3.32 20.47c.525.1.717-.228.717-.505 0-.25-.01-1.08-.014-1.96-2.917.634-3.533-1.24-3.533-1.24-.477-1.213-1.164-1.536-1.164-1.536-.951-.65.072-.637.072-.637 1.052.074 1.606 1.08 1.606 1.08.935 1.603 2.453 1.14 3.05.872.095-.678.366-1.14.666-1.402-2.33-.265-4.78-1.166-4.78-5.19 0-1.146.41-2.084 1.08-2.818-.108-.265-.468-1.333.103-2.78 0 0 .88-.282 2.882 1.076a10.02 10.02 0 0 1 5.25 0c2-1.358 2.88-1.076 2.88-1.076.572 1.447.212 2.515.104 2.78.672.734 1.078 1.672 1.078 2.818 0 4.034-2.454 4.922-4.792 5.183.376.324.712.964.712 1.944 0 1.403-.013 2.534-.013 2.879 0 .28.19.61.723.505A10.5 10.5 0 0 0 12 1.5Z" />
    </svg>
  );
}

export function LinkedinIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.328-.024-3.037-1.852-3.037-1.854 0-2.138 1.448-2.138 2.94v5.667H9.35V9h3.41v1.561h.049c.475-.9 1.637-1.85 3.37-1.85 3.603 0 4.27 2.372 4.27 5.456v6.283ZM5.34 7.433a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

export function MailIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2.4" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}
