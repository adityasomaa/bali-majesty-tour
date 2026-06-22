"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Users, Car, ArrowUpRight, Check } from "lucide-react";
import type { Vehicle } from "@/lib/site";
import { vehicleSlug } from "@/lib/site";

const PERKS = ["Sudah termasuk BBM", "Driver berpengalaman"];

export function VehicleListing({
  vehicles,
  label,
  rentalSlug,
}: {
  vehicles: Vehicle[];
  label: string;
  rentalSlug: string;
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-gold-dark">{label}</p>
        <h2 className="mt-1.5 font-display text-3xl font-bold text-ink">Unit &amp; Prices List</h2>
        <p className="mt-3 max-w-2xl text-sm text-ink/60">
          Klik unit untuk melihat detail. Harga final tergantung durasi sewa dan rute — hubungi kami
          untuk penawaran terbaik sesuai kebutuhan perjalanan Anda.
        </p>
      </div>

      <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {vehicles.map((v, i) => (
          <motion.div
            key={vehicleSlug(v)}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
          >
            <Link
              href={`/${rentalSlug}/${vehicleSlug(v)}`}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-sand">
                <Image
                  src={v.image}
                  alt={v.name}
                  fill
                  sizes="(max-width:768px) 100vw, 33vw"
                  className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute right-3 top-3 rounded-full bg-ink px-3 py-1 text-[11px] font-bold text-cream">
                  {v.type}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-semibold text-ink">{v.name}</h3>
                <div className="mt-2 flex items-center gap-4 text-sm text-ink/55">
                  <span className="flex items-center gap-1.5"><Users size={15} className="text-gold-dark" /> {v.seats}</span>
                  <span className="flex items-center gap-1.5"><Car size={15} className="text-gold-dark" /> All-in</span>
                </div>
                <ul className="mt-4 grid gap-1.5">
                  {PERKS.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-xs text-ink/60">
                      <Check size={13} className="text-gold-dark" /> {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex items-end justify-between pt-5">
                  <div>
                    <span className="block text-xs text-ink/45">Mulai dari (Half Day)</span>
                    <span className="font-display text-lg font-bold text-gold-dark">{v.halfDay}</span>
                  </div>
                  <span className="inline-flex items-center justify-center gap-1.5 rounded-full bg-ink px-4 py-2.5 text-sm font-semibold text-cream transition group-hover:bg-gold group-hover:text-ink">
                    Detail <ArrowUpRight size={15} />
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
