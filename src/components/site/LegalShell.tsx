import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function LegalShell({
  title,
  updated,
  children,
}: {
  title: string;
  updated?: string;
  children: React.ReactNode;
}) {
  return (
    <article className="relative">
      <div className="bg-ink px-4 pb-14 pt-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <nav className="mb-4 flex items-center gap-1.5 text-sm text-cream/55">
            <Link href="/" className="transition hover:text-gold">Home</Link>
            <ChevronRight size={14} className="text-cream/40" />
            <span className="text-gold">{title}</span>
          </nav>
          <h1 className="font-display text-4xl font-bold text-cream sm:text-5xl">{title}</h1>
          {updated && <p className="mt-3 text-sm text-cream/55">Terakhir diperbarui: {updated}</p>}
        </div>
      </div>
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="space-y-6 text-ink/75 [&_a]:font-medium [&_a]:text-gold-dark [&_a]:underline [&_a]:underline-offset-2 [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-ink [&_h3]:mt-6 [&_h3]:font-display [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-ink [&_li]:ml-1 [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
          {children}
        </div>
      </div>
    </article>
  );
}
