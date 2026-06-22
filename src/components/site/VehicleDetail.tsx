import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, X, Phone, Users, Car, Fuel, UserCheck, Clock, Info } from "lucide-react";
import type { Vehicle } from "@/lib/site";
import { bigBusNote, rentalTerms, site, vehicleSlug, waLink } from "@/lib/site";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { Reveal } from "@/components/ui/Reveal";

type RentalLike = { slug: string; title: string; hero: string; vehicles: Vehicle[] };

export function VehicleDetail({ rental, item }: { rental: RentalLike; item: Vehicle }) {
  const related = rental.vehicles.filter((v) => vehicleSlug(v) !== vehicleSlug(item)).slice(0, 3);
  const isBigBus = item.seats.includes("45");

  const specs = [
    { icon: Users, label: "Kapasitas", value: item.seats },
    { icon: Car, label: "Tipe", value: item.type },
    { icon: Fuel, label: "BBM", value: "Termasuk" },
    { icon: UserCheck, label: "Driver", value: "Termasuk" },
  ];

  const priceRows = [
    { service: `Full Day ${item.name}`, duration: "12 Jam", price: item.fullDay },
    { service: `Half Day ${item.name}`, duration: "6 Jam", price: item.halfDay },
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
        <div className="grid gap-10 lg:grid-cols-3">
          {/* Main column */}
          <div className="lg:col-span-2">
            <Reveal>
              <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-ink/10 bg-sand">
                <Image src={item.image} alt={item.name} fill sizes="(max-width:1024px) 100vw, 66vw" className="object-contain p-6" priority />
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

            {/* Price table */}
            <Reveal className="mt-10">
              <h2 className="font-display text-2xl font-bold text-ink">Harga Sewa</h2>
              <div className="mt-4 overflow-hidden rounded-2xl border border-ink/10">
                <table className="w-full text-left text-sm">
                  <thead className="bg-ink text-cream">
                    <tr>
                      <th className="px-5 py-3.5 font-semibold">Layanan</th>
                      <th className="px-5 py-3.5 font-semibold">Durasi</th>
                      <th className="px-5 py-3.5 text-right font-semibold">Harga</th>
                    </tr>
                  </thead>
                  <tbody>
                    {priceRows.map((r, i) => (
                      <tr key={r.service} className={i % 2 ? "bg-sand/60" : "bg-white"}>
                        <td className="px-5 py-4 font-medium text-ink">{r.service}</td>
                        <td className="px-5 py-4 text-ink/60">
                          <span className="inline-flex items-center gap-1.5"><Clock size={14} className="text-gold-dark" /> {r.duration}</span>
                        </td>
                        <td className="px-5 py-4 text-right font-display text-base font-bold text-gold-dark">{r.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 flex items-start gap-2 text-xs text-ink/50">
                <Info size={14} className="mt-0.5 shrink-0 text-gold-dark" />
                Harga all-in (unit + BBM + driver). Tarif dapat menyesuaikan rute, durasi, dan musim.
              </p>
            </Reveal>

            {/* Facilities */}
            <Reveal className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-ink/10 bg-cream p-6">
                <h3 className="font-display text-lg font-bold text-ink">Termasuk</h3>
                <ul className="mt-4 space-y-2.5">
                  {item.facilities.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-ink/70">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold/20 text-gold-dark">
                        <Check size={12} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-ink/10 bg-cream p-6">
                <h3 className="font-display text-lg font-bold text-ink">Tidak Termasuk</h3>
                <ul className="mt-4 space-y-2.5">
                  {item.excluded.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-ink/70">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-ink/10 text-ink/50">
                        <X size={12} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Terms */}
            <Reveal className="mt-10">
              <h3 className="font-display text-xl font-bold text-ink">Syarat &amp; Ketentuan</h3>
              <ul className="mt-4 space-y-2.5">
                {(isBigBus ? [bigBusNote, ...rentalTerms] : rentalTerms).map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm leading-relaxed text-ink/65">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-dark" />
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Sticky booking card */}
          <div className="lg:col-span-1">
            <Reveal className="lg:sticky lg:top-24">
              <div className="overflow-hidden rounded-3xl border border-ink/10 bg-cream shadow-[var(--shadow-soft)]">
                <div className="relative aspect-[16/10] bg-sand">
                  <Image src={item.image} alt={item.name} fill sizes="400px" className="object-contain p-5" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-ink/55">
                    <Users size={15} className="text-gold-dark" /> {item.seats} · {item.type}
                  </div>
                  <div className="mt-3 flex items-end justify-between border-t border-ink/10 pt-4">
                    <span className="text-xs text-ink/50">Half Day (6 Jam)</span>
                    <span className="font-display text-xl font-bold text-ink">{item.halfDay}</span>
                  </div>
                  <div className="mt-1.5 flex items-end justify-between">
                    <span className="text-xs text-ink/50">Full Day (12 Jam)</span>
                    <span className="font-display text-2xl font-bold text-gold-dark">{item.fullDay}</span>
                  </div>
                  <a
                    href={waLink(`Halo Bali Majesty Tour, saya ingin menyewa ${item.name} (${item.seats}). Full day ${item.fullDay} / half day ${item.halfDay}. Mohon info ketersediaan.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-bold text-ink shadow-[var(--shadow-gold)] transition hover:bg-gold-soft"
                  >
                    <Phone size={16} /> Pesan via WhatsApp
                  </a>
                  <a
                    href={`mailto:${site.email}?subject=${encodeURIComponent("Sewa " + item.name)}`}
                    className="mt-3 flex items-center justify-center rounded-full border border-ink/15 px-6 py-3.5 text-sm font-semibold text-ink transition hover:bg-sand"
                  >
                    Email Kami
                  </a>
                  <p className="mt-4 text-center text-xs text-ink/45">Telepon {site.phoneDisplay}</p>
                </div>
              </div>
            </Reveal>
          </div>
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
                      <p className="text-sm text-ink/55">{v.seats} · mulai {v.halfDay}</p>
                    </div>
                    <ArrowUpRight size={18} className="shrink-0 text-gold-dark" />
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
