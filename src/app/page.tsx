import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock, Network, ShieldCheck, Sparkles, Car, Bus } from "lucide-react";
import { categories, rentalBus, rentalCars, whyChooseUs } from "@/lib/site";
import { HomeHero } from "@/components/site/HomeHero";
import { PackageExplorer } from "@/components/site/PackageExplorer";
import { Testimonials } from "@/components/site/Testimonials";
import { Faq } from "@/components/site/Faq";
import { CtaBand } from "@/components/site/CtaBand";
import { Reveal } from "@/components/ui/Reveal";

const whyIcons = { Network, ShieldCheck, Sparkles, Clock } as const;

const services = [
  { title: rentalCars.title, href: `/${rentalCars.slug}`, image: rentalCars.hero, icon: Car, desc: "All-in: mobil, driver & BBM" },
  { title: rentalBus.title, href: `/${rentalBus.slug}`, image: rentalBus.hero, icon: Bus, desc: "Medium hingga big bus 45 seat" },
  ...categories.map((c) => ({ title: c.title, href: `/${c.slug}`, image: c.hero, icon: Sparkles, desc: c.kicker })),
];

export default function HomePage() {
  return (
    <>
      <HomeHero />

      {/* Intro */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-gold-dark">Tentang Kami</p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-ink text-balance sm:text-4xl">
              Liburan Bali yang dikemas exclusive & tak terlupakan
            </h2>
            <p className="mt-5 leading-relaxed text-ink/65">
              PT. Bali Majesty Tour resmi berbadan hukum dan telah bertahun-tahun terjun di dunia
              pariwisata. Kami menyediakan paket tour harian untuk wisatawan keluarga, rombongan/instansi,
              bulan madu, gathering, outing/team building, tour Nusa Penida, hingga wisata petualangan.
            </p>
            <p className="mt-4 leading-relaxed text-ink/65">
              Selain paket yang sudah disiapkan, Anda bebas request acara atau itinerary sesuai keinginan.
              Kami juga menyediakan layanan transportasi sewa mobil &amp; bus all-in dengan armada terawat.
            </p>
            <Link href="/profil-kami" className="mt-7 inline-flex items-center gap-2 font-semibold text-gold-dark transition hover:gap-3">
              Selengkapnya tentang kami <ArrowUpRight size={18} />
            </Link>
          </Reveal>
          <Reveal delay={120} className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative aspect-[3/4] overflow-hidden rounded-3xl">
                <Image src="/images/bali-thumbnail.webp" alt="Bali" fill sizes="40vw" className="object-cover" />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-3xl">
                <Image src="/images/rama-krisna-tuban-14.jpg" alt="Tour" fill sizes="40vw" className="object-cover" />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="relative aspect-square overflow-hidden rounded-3xl">
                <Image src="/images/6725db0c491c5.jpg" alt="Tour" fill sizes="40vw" className="object-cover" />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden rounded-3xl">
                <Image src="/images/3-Hari-paket-B.jpg" alt="Tour" fill sizes="40vw" className="object-cover" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="bg-sand py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold-dark">Layanan Kami</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
              Pilih layanan yang sesuai dengan rencana liburan Anda
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.href} delay={(i % 3) * 80}>
                <Link href={s.href} className="group relative block aspect-[4/5] overflow-hidden rounded-3xl">
                  <Image src={s.image} alt={s.title} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-ink">
                      <s.icon size={12} /> {s.desc}
                    </span>
                    <h3 className="mt-3 font-display text-xl font-semibold text-cream">{s.title}</h3>
                    <span className="mt-2 inline-flex items-center gap-1 text-sm text-cream/80 transition group-hover:gap-2">
                      Lihat Details <ArrowUpRight size={15} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Explore — search & filter */}
      <section id="explore" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
        <Reveal className="mx-auto mb-10 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-dark">Temukan Paketmu</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
            Cari & filter paket tour favoritmu
          </h2>
          <p className="mt-3 text-ink/60">
            Telusuri seluruh paket dari semua kategori, urutkan berdasarkan harga, dan pesan langsung.
          </p>
        </Reveal>
        <Reveal>
          <PackageExplorer />
        </Reveal>
      </section>

      {/* Why choose us */}
      <section className="relative overflow-hidden bg-ink py-20 text-cream">
        <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold">Mengapa Memilih Kami</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Mengapa Memilih Bali Majesty Tour?</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((w, i) => {
              const Icon = whyIcons[w.icon as keyof typeof whyIcons];
              return (
                <Reveal key={w.title} delay={i * 80} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:bg-white/[0.08]">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gold text-ink">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-cream">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/60">{w.text}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-dark">Testimoni</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">Our Happy Travelers</h2>
        </Reveal>
        <Testimonials />
      </section>

      {/* FAQ */}
      <section className="bg-sand py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto mb-12 max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold-dark">FAQ</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">Pertanyaan Yang Sering Muncul</h2>
          </Reveal>
          <Faq />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
