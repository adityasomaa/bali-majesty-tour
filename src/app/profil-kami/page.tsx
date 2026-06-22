import type { Metadata } from "next";
import Image from "next/image";
import { Check, Eye, Target, BadgeCheck, FileText } from "lucide-react";
import { homeStats, site } from "@/lib/site";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Profil Kami",
  description:
    "PT. Bali Majesty Tour — perusahaan tour & travel berbasis di Bali, berdiri sejak 2017 dengan komitmen memberikan pengalaman perjalanan tak terlupakan.",
  alternates: { canonical: `${site.url}/profil-kami` },
};

const misiPoints = [
  "Menyediakan paket perjalanan yang memenuhi berbagai kebutuhan dan anggaran wisatawan.",
  "Memastikan kenyamanan, keselamatan, dan kepuasan pelanggan selama perjalanan mereka.",
  "Memfasilitasi pengalaman wisata yang bertanggung jawab secara ekologis dan sosial.",
  "Berkontribusi pada ekonomi lokal dan pelestarian budaya Bali.",
];

export default function Page() {
  return (
    <>
      <PageHero
        title="Profil Kami"
        kicker="About Us"
        description="Mengenal lebih dekat PT. Bali Majesty Tour — partner perjalanan terpercaya Anda di Pulau Dewata."
        image="/images/Hillcon-2-min-scaled-1.jpeg"
        crumbs={[{ label: "Home", href: "/" }, { label: "Profil Kami" }]}
      />

      {/* Story */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
              <Image src="/images/WhatsApp-Image-2023-04-03-at-17.01.38.jpeg" alt="Bali Majesty Tour" fill sizes="50vw" className="object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-4 rounded-2xl bg-gold px-6 py-5 text-ink shadow-[var(--shadow-gold)] sm:right-6">
              <div className="font-display text-3xl font-bold">{new Date().getFullYear() - site.founded}+</div>
              <div className="text-xs font-semibold uppercase tracking-wide">Tahun Pengalaman</div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-sm font-semibold uppercase tracking-widest text-gold-dark">PT. Bali Majesty Tour</p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
              Didorong oleh cinta kami terhadap Bali
            </h2>
            <p className="mt-5 leading-relaxed text-ink/65">
              Kami adalah perusahaan tour dan travel yang berbasis di Bali, pulau surga yang terkenal
              dengan keindahan alamnya. Dengan lebih dari {new Date().getFullYear() - site.founded} tahun
              pengalaman, PT. Bali Majesty Tour didirikan pada tahun {site.founded} sebagai perusahaan
              dengan penuh semangat dan motivasi baru.
            </p>
            <p className="mt-4 leading-relaxed text-ink/65">
              Didorong oleh komitmen untuk memberikan pengalaman terbaik kepada Anda, kami berkomitmen
              memberikan pengalaman perjalanan yang tak terlupakan kepada setiap pelanggan kami.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {homeStats.map((s) => (
                <div key={s.label} className="rounded-2xl bg-sand px-4 py-4 text-center">
                  <div className="font-display text-2xl font-bold text-gold-dark">{s.value}</div>
                  <div className="mt-1 text-[11px] uppercase tracking-wide text-ink/55">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-ink py-20 text-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 sm:p-10">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gold text-ink">
                <Eye size={24} />
              </span>
              <h3 className="mt-5 font-display text-2xl font-bold text-cream">Visi</h3>
              <p className="mt-3 leading-relaxed text-cream/65">
                Menjadi penyedia perjalanan terkemuka di Bali yang menawarkan paket liburan yang
                menginspirasi, menghubungkan wisatawan dengan keajaiban alam dan budaya pulau ini.
              </p>
            </Reveal>
            <Reveal delay={100} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 sm:p-10">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gold text-ink">
                <Target size={24} />
              </span>
              <h3 className="mt-5 font-display text-2xl font-bold text-cream">Misi</h3>
              <p className="mt-3 leading-relaxed text-cream/65">
                Memberikan layanan tour dan transport yang unggul dengan fokus pada kepuasan pelanggan,
                keberlanjutan lingkungan, dan penghargaan terhadap budaya lokal Bali. Kami berupaya untuk:
              </p>
              <ul className="mt-5 grid gap-3">
                {misiPoints.map((m) => (
                  <li key={m} className="flex gap-3 text-sm text-cream/70">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold/20 text-gold">
                      <Check size={12} />
                    </span>
                    {m}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Legality */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-sand px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-gold-dark">
            <BadgeCheck size={14} /> Legalitas Kami
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-ink">Resmi & Berbadan Hukum</h2>
          <p className="mt-3 text-ink/60">
            PT. Bali Majesty Tour terdaftar resmi sebagai perusahaan pariwisata di Indonesia.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-ink/10 bg-cream p-6 text-left">
              <FileText size={20} className="text-gold-dark" />
              <div className="mt-3 text-xs uppercase tracking-wide text-ink/50">NIB</div>
              <div className="font-display text-xl font-bold text-ink">{site.nib}</div>
            </div>
            <div className="rounded-2xl border border-ink/10 bg-cream p-6 text-left">
              <FileText size={20} className="text-gold-dark" />
              <div className="mt-3 text-xs uppercase tracking-wide text-ink/50">NPWP</div>
              <div className="font-display text-xl font-bold text-ink">{site.npwp}</div>
            </div>
          </div>
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
