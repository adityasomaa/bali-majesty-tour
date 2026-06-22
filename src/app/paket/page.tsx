import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { categories, site } from "@/lib/site";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Semua Paket Tour Bali",
  description: "Jelajahi seluruh paket tour Bali — dari paket harian, 3D2N hingga 5D4N, adventure, Nusa Penida, bulan madu, dan tour group.",
  alternates: { canonical: `${site.url}/paket` },
};

export default function Page() {
  return (
    <>
      <PageHero
        title="Semua Paket Tour Bali"
        kicker="Our Packages"
        description="Beragam pilihan paket wisata yang kami kemas dengan itinerary menarik, mencakup objek wisata utama dan terkenal di Pulau Bali."
        image={categories[0].hero}
        crumbs={[{ label: "Home", href: "/" }, { label: "Paket" }]}
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, i) => (
            <Reveal key={c.slug} delay={(i % 3) * 80}>
              <Link href={`/${c.slug}`} className="group relative block aspect-[4/5] overflow-hidden rounded-3xl">
                <Image src={c.hero} alt={c.title} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="rounded-full bg-gold/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-ink">{c.kicker}</span>
                  <h2 className="mt-3 font-display text-xl font-semibold text-cream">{c.title}</h2>
                  <p className="mt-1 line-clamp-2 text-sm text-cream/70">{c.intro}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-gold transition group-hover:gap-2">
                    Lihat Paket <ArrowUpRight size={15} />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
