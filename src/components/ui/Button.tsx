import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "gold" | "ink" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-gold/30 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  gold: "bg-gold text-ink shadow-[var(--shadow-gold)] hover:bg-gold-soft hover:-translate-y-0.5",
  ink: "bg-ink text-cream hover:bg-ink-soft hover:-translate-y-0.5",
  outline: "border border-ink/20 text-ink hover:border-gold hover:text-gold-dark hover:bg-sand",
  ghost: "text-ink/80 hover:text-gold-dark hover:bg-sand",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

type Props = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
} & (
  | ({ href: string } & React.ComponentProps<typeof Link>)
  | ({ href?: undefined } & React.ButtonHTMLAttributes<HTMLButtonElement>)
);

export function Button({ variant = "gold", size = "md", className, children, ...props }: Props) {
  const classes = cn(base, variants[variant], sizes[size], className);
  if ("href" in props && props.href) {
    const isExternal = props.href.startsWith("http");
    if (isExternal) {
      return (
        <a href={props.href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link {...(props as React.ComponentProps<typeof Link>)} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)} className={classes}>
      {children}
    </button>
  );
}
