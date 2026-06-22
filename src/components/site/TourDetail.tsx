import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, Clock, MapPin, Phone, Users, ShieldCheck } from "lucide-react";
import type { Category, Tour } from "@/lib/site";
import { site, tourSlug, waLink } from "@/lib/site";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { Reveal } from "@/components/ui/Reveal";

const INCLUDES = [
  "Transportasi AC + BBM selama tour",
  "Driver merangkap guide berpengalaman",
  "Tiket masuk objek wisata sesuai program",
  "Air mineral & dokumentasi perjalanan",
];

const HIGHLIGHTS = [
  { icon: Users, title: "Private Tour", text: "Tidak digabung peserta lain — fleksibel sesuai keinginan Anda." },
  { icon: Clock, title: "Itinerary Fleksibel", text: "Waktu dan urutan kunjungan bisa disesuaikan." },
  { icon: ShieldCheck, title: "Aman & Terpercaya", text: "Tim profesional, armada terawat, harga transparan." },
];

export function TourDetail({ category, item }: { category: Category; item: Tour }) {
  const related = category.items.filter((t) => t.name !== item.name).slice(0, 3);

  return (
    <>
      <PageHero
        title={item.name}
        kicker={category.kicker}
        image={item.image}
        crumbs={[
          { label: "Home", href: "/" },
          { label: category.title, href: `/${category.slug}` },
          { label: item.name },
        ]}
        tags={category.tags}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3">
          {/* Main */}
          <div className="lg:col-span-2">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-widest text-gold-dark">{category.title}</p>
              <h2 className="mt-2 font-display text-3xl font-bold text-ink">Tentang Paket Ini</h2>
              <p className="mt-4 leading-relaxed text-ink/70">{category.intro}</p>
              <p className="mt-4 leading-relaxed text-ink/70">
                Paket <strong>{item.name}</strong> sudah kami rancang agar Anda dapat menikmati
                pengalaman terbaik tanpa repot. Harga dapat menyesuaikan jumlah peserta, pilihan hotel,
                dan tanggal keberangkatan — hubungi kami untuk penawaran terbaik &amp; itinerary lengkap.
              </p>
            </Reveal>

            <Reveal className="mt-10">
              <h3 className="font-display text-xl font-bold text-ink">Fasilitas Termasuk</h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {INCLUDES.map((inc) => (
                  <li key={inc} className="flex items-start gap-3 rounded-2xl border border-ink/10 bg-cream p-4 text-sm text-ink/75">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold/20 text-gold-dark">
                      <Check size={13} />
                    </span>
                    {inc}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="mt-10 grid gap-4 sm:grid-cols-3">
              {HIGHLIGHTS.map((h) => (
                <div key={h.title} className="rounded-2xl border border-ink/10 bg-cream p-5">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-gold/15 text-gold-dark">
                    <h.icon size={20} />
                  </span>
                  <h4 className="mt-4 font-display text-base font-semibold text-ink">{h.title}</h4>
                  <p className="mt-1 text-sm text-ink/60">{h.text}</p>
                </div>
              ))}
            </Reveal>
          </div>

          {/* Sticky booking card */}
          <div className="lg:col-span-1">
            <Reveal className="lg:sticky lg:top-24">
              <div className="overflow-hidden rounded-3xl border border-ink/10 bg-cream shadow-[var(--shadow-soft)]">
                <div className="relative aspect-[4/3]">
                  <Image src={item.image} alt={item.name} fill sizes="400px" className="object-cover" />
                </div>
                <div className="p-6">
                  <span className="text-xs text-ink/50">Mulai dari</span>
                  <div className="font-display text-3xl font-bold text-gold-dark">
                    {item.price}
                    <span className="text-sm font-medium text-ink/45">{item.badge}</span>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-sm text-ink/55">
                    <MapPin size={15} className="text-gold-dark" /> {category.title}
                  </div>
                  <a
                    href={waLink(`Halo Bali Majesty Tour, saya tertarik dengan "${item.name}" (${item.price}${item.badge ?? ""}). Mohon info detail & ketersediaan.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-bold text-ink shadow-[var(--shadow-gold)] transition hover:bg-gold-soft"
                  >
                    <Phone size={16} /> Pesan via WhatsApp
                  </a>
                  <a
                    href={`mailto:${site.email}?subject=${encodeURIComponent("Reservasi " + item.name)}`}
                    className="mt-3 flex items-center justify-center rounded-full border border-ink/15 px-6 py-3.5 text-sm font-semibold text-ink transition hover:bg-sand"
                  >
                    Email Kami
                  </a>
                  <p className="mt-4 text-center text-xs text-ink/45">Atau telepon {site.phoneDisplay}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-sand py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-bold text-ink">Paket lain di {category.title}</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((t) => (
                <Link
                  key={t.name}
                  href={`/${category.slug}/${tourSlug(t)}`}
                  className="group flex flex-col overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={t.image} alt={t.name} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-display text-lg font-semibold text-ink">{t.name}</h3>
                    <div className="mt-auto flex items-end justify-between pt-4">
                      <span className="font-display text-lg font-bold text-gold-dark">
                        {t.price}<span className="text-xs font-medium text-ink/45">{t.badge}</span>
                      </span>
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-ink/60 transition group-hover:gap-2">
                        Detail <ArrowUpRight size={15} />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand />
    </>
  );
}
