import { cn } from "@/lib/utils";

export function Logo({
  className,
  variant = "ink",
}: {
  className?: string;
  variant?: "ink" | "cream";
}) {
  const stroke = variant === "ink" ? "var(--moss-700)" : "var(--cream)";
  const fill = variant === "ink" ? "var(--ink)" : "var(--cream-soft)";
  return (
    <a
      href="/"
      className={cn(
        "inline-flex items-center gap-2.5 font-display text-[1.25rem] leading-none tracking-tight",
        className,
      )}
      style={{ color: fill }}
      aria-label="Brother Ellie — accueil"
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="16" cy="16" r="14.5" stroke={stroke} strokeWidth="1" />
        <path
          d="M16 4 C 10 9, 9 17, 16 28 C 23 17, 22 9, 16 4 Z"
          fill={stroke}
          opacity="0.85"
        />
        <path d="M16 8 L16 27" stroke={fill} strokeWidth="0.75" opacity="0.6" />
      </svg>
      <span>
        Brother <span className="italic" style={{ fontWeight: 500 }}>Ellie</span>
      </span>
    </a>
  );
}
