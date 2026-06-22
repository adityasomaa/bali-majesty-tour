"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Search, ArrowUpRight, Check, Star } from "lucide-react";
import type { Category, Tour } from "@/lib/site";
import { site, waLink } from "@/lib/site";
import { Modal } from "@/components/ui/Modal";

const parsePrice = (p: string) => Number(p.replace(/[^\d]/g, "")) || 0;

const INCLUDES = [
  "Transportasi AC + BBM",
  "Driver merangkap guide berpengalaman",
  "Tiket masuk objek wisata",
  "Air mineral & dokumentasi perjalanan",
];

export function CategoryListing({ category }: { category: Category }) {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("default");
  const [selected, setSelected] = useState<Tour | null>(null);

  const items = useMemo(() => {
    let list = category.items.filter((t) =>
      t.name.toLowerCase().includes(query.trim().toLowerCase())
    );
    if (sort === "low") list = [...list].sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    if (sort === "high") list = [...list].sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    return list;
  }, [category.items, query, sort]);

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-dark">Pilihan Paket</p>
          <h2 className="mt-1 font-display text-3xl font-bold text-ink">List Produk</h2>
        </div>
        <div className="flex gap-3">
          <div className="relative">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink/40" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cari…"
              className="field py-2.5 pl-10 text-sm sm:w-48"
              aria-label="Cari paket"
            />
          </div>
          <select value={sort} onChange={(e) => setSort(e.target.value)} className="field w-auto py-2.5 text-sm" aria-label="Urutkan">
            <option value="default">Urutkan</option>
            <option value="low">Harga ↑</option>
            <option value="high">Harga ↓</option>
          </select>
        </div>
      </div>

      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {items.map((t, i) => (
            <motion.div
              layout
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.05 }}
              className="group flex flex-col overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={t.image}
                  alt={t.name}
                  fill
                  sizes="(max-width:768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent opacity-0 transition group-hover:opacity-100" />
                <span className="absolute left-3 top-3 rounded-full bg-cream/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-gold-dark backdrop-blur">
                  {category.kicker}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-lg font-semibold leading-snug text-ink">{t.name}</h3>
                <div className="mt-auto flex items-end justify-between pt-5">
                  <div>
                    <span className="block text-xs text-ink/45">Start from</span>
                    <span className="font-display text-xl font-bold text-gold-dark">
                      {t.price}
                      <span className="text-xs font-medium text-ink/45">{t.badge}</span>
                    </span>
                  </div>
                  <button
                    onClick={() => setSelected(t)}
                    className="inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2.5 text-sm font-semibold text-cream transition hover:bg-gold hover:text-ink"
                  >
                    Lihat Details <ArrowUpRight size={15} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {items.length === 0 && (
        <div className="rounded-3xl border border-dashed border-ink/15 bg-sand p-12 text-center">
          <p className="font-display text-lg text-ink">Tidak ditemukan</p>
          <p className="mt-1 text-sm text-ink/55">Coba kata kunci lain.</p>
        </div>
      )}

      <Modal open={!!selected} onClose={() => setSelected(null)} title={selected?.name}>
        {selected && (
          <div>
            <div className="relative aspect-video overflow-hidden rounded-2xl">
              <Image src={selected.image} alt={selected.name} fill sizes="500px" className="object-cover" />
              <span className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-cream/90 px-3 py-1 text-[11px] font-bold uppercase text-gold-dark">
                <Star size={11} className="fill-gold text-gold" /> {category.kicker}
              </span>
            </div>
            <div className="mt-5 flex items-center justify-between rounded-2xl bg-sand px-5 py-4">
              <span className="text-sm text-ink/55">{category.title}</span>
              <span className="font-display text-xl font-bold text-ink">
                {selected.price}
                <span className="text-sm font-medium text-ink/50">{selected.badge}</span>
              </span>
            </div>
            <p className="mt-5 text-sm font-semibold text-ink">Fasilitas termasuk:</p>
            <ul className="mt-3 grid gap-2">
              {INCLUDES.map((inc) => (
                <li key={inc} className="flex items-center gap-2.5 text-sm text-ink/70">
                  <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold/20 text-gold-dark">
                    <Check size={12} />
                  </span>
                  {inc}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={waLink(`Halo Bali Majesty Tour, saya tertarik dengan "${selected.name}" (${selected.price}${selected.badge ?? ""}) dari ${category.title}. Mohon info detail & ketersediaan.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-bold text-ink transition hover:bg-gold-soft"
              >
                Pesan via WhatsApp
              </a>
              <a
                href={`mailto:${site.email}?subject=${encodeURIComponent("Reservasi " + selected.name)}`}
                className="flex flex-1 items-center justify-center rounded-full border border-ink/15 px-6 py-3.5 text-sm font-semibold text-ink transition hover:bg-sand"
              >
                Email Kami
              </a>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
