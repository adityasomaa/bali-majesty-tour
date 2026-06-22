import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, Phone, Users, Car, Fuel, UserCheck } from "lucide-react";
import type { Vehicle } from "@/lib/site";
import { site, vehicleSlug, waLink } from "@/lib/site";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { Reveal } from "@/components/ui/Reveal";

const PERKS = [
  "Sudah termasuk BBM",
  "Driver berpengalaman & ramah",
  "Unit terawat, bersih, ber-AC",
  "Free pick-up area tertentu",
  "Fleksibel untuk tour maupun transfer",
  "Harga kompetitif & transparan",
];

type RentalLike = { slug: string; title: string; hero: string; vehicles: Vehicle[] };

export function VehicleDetail({ rental, item }: { rental: RentalLike; item: Vehicle }) {
  const related = rental.vehicles.filter((v) => vehicleSlug(v) !== vehicleSlug(item)).slice(0, 3);

  const specs = [
    { icon: Users, label: "Kapasitas", value: item.seats },
    { icon: Car, label: "Tipe", value: item.type },
    { icon: Fuel, label: "BBM", value: "Sudah termasuk" },
    { icon: UserCheck, label: "Driver", value: "Berpengalaman" },
  ];

  return (
    <>
      <PageHero
        title={item.name}
        kicker={rental.title}
        image={rental.hero}
        crumbs={[
          { label: "Home", href: "/" },
          { label: rental.title, href: `/${rental.slug}` },
          { label: item.name },
        ]}
        tags={[item.seats, item.type, "All-in"]}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[16/11] overflow-hidden rounded-3xl border border-ink/10 bg-sand">
              <Image src={item.image} alt={item.name} fill sizes="(max-width:1024px) 100vw, 50vw" className="object-contain p-6" priority />
              <span className="absolute right-4 top-4 rounded-full bg-ink px-3 py-1 text-xs font-bold text-cream">{item.type}</span>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {specs.map((s) => (
                <div key={s.label} className="rounded-2xl border border-ink/10 bg-cream p-4 text-center">
                  <s.icon size={18} className="mx-auto text-gold-dark" />
                  <div className="mt-2 text-[11px] uppercase tracking-wide text-ink/45">{s.label}</div>
                  <div className="text-sm font-semibold text-ink">{s.value}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={80}>
            <p className="text-sm font-semibold uppercase tracking-widest text-gold-dark">{rental.title}</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-ink">{item.name}</h2>
            <p className="mt-4 leading-relaxed text-ink/70">
              {item.name} ({item.seats}) adalah pilihan tepat untuk perjalanan Anda di Bali. Disewakan
              all-in bersama driver berpengalaman yang merangkap sebagai guide, sehingga Anda cukup
              menikmati liburan tanpa repot memikirkan rute dan kemacetan.
            </p>

            <h3 className="mt-7 font-display text-lg font-bold text-ink">Keunggulan</h3>
            <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {PERKS.map((p) => (
                <li key={p} className="flex items-center gap-2.5 text-sm text-ink/70">
                  <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold/20 text-gold-dark">
                    <Check size={12} />
                  </span>
                  {p}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={waLink(`Halo Bali Majesty Tour, saya ingin menyewa ${item.name} (${item.seats}). Mohon info harga & ketersediaan.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-bold text-ink shadow-[var(--shadow-gold)] transition hover:bg-gold-soft"
              >
                <Phone size={16} /> Cek Harga via WhatsApp
              </a>
              <a
                href={`mailto:${site.email}?subject=${encodeURIComponent("Sewa " + item.name)}`}
                className="inline-flex flex-1 items-center justify-center rounded-full border border-ink/15 px-6 py-3.5 text-sm font-semibold text-ink transition hover:bg-sand"
              >
                Email Kami
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-sand py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-bold text-ink">Unit lainnya</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((v) => (
                <Link
                  key={vehicleSlug(v)}
                  href={`/${rental.slug}/${vehicleSlug(v)}`}
                  className="group flex flex-col overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-sand">
                    <Image src={v.image} alt={v.name} fill sizes="(max-width:768px) 100vw, 33vw" className="object-contain p-4 transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="flex flex-1 items-center justify-between p-5">
                    <div>
                      <h3 className="font-display text-base font-semibold text-ink">{v.name}</h3>
                      <p className="text-sm text-ink/55">{v.seats}</p>
                    </div>
                    <ArrowUpRight size={18} className="text-gold-dark" />
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
