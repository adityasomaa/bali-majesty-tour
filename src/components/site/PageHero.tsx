import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Crumb = { label: string; href?: string };

type Props = {
  title: string;
  kicker?: string;
  description?: string;
  image: string;
  crumbs?: Crumb[];
  tags?: string[];
};

export function PageHero({ title, kicker, description, image, crumbs, tags }: Props) {
  return (
    <section className="relative flex min-h-[58vh] items-end overflow-hidden">
      <Image src={image} alt={title} fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/30" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-14 pt-32 sm:px-6 lg:px-8">
        {crumbs && (
          <nav className="mb-5 flex flex-wrap items-center gap-1.5 text-sm text-cream/60">
            {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight size={14} className="text-cream/40" />}
                {c.href ? (
                  <Link href={c.href} className="transition hover:text-gold">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-gold">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        {kicker && (
          <span className="inline-block rounded-full bg-gold/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-gold">
            {kicker}
          </span>
        )}
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight text-cream text-balance sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-cream/75 sm:text-lg">
            {description}
          </p>
        )}
        {tags && (
          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span key={t} className="rounded-full border border-cream/25 px-3.5 py-1.5 text-xs font-medium text-cream/80">
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
