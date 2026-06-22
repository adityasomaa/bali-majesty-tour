"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Search, ArrowUpRight } from "lucide-react";
import type { Category } from "@/lib/site";
import { tourSlug } from "@/lib/site";
import { Select } from "@/components/ui/Select";

const parsePrice = (p: string) => Number(p.replace(/[^\d]/g, "")) || 0;

const sortOptions = [
  { label: "Urutkan", value: "default" },
  { label: "Harga Terendah", value: "low" },
  { label: "Harga Tertinggi", value: "high" },
];

export function CategoryListing({ category }: { category: Category }) {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("default");

  const items = useMemo(() => {
    let list = category.items.filter((t) =>
      t.name.toLowerCase().includes(query.trim().toLowerCase())
    );
    if (sort === "low") list = [...list].sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    if (sort === "high") list = [...list].sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    return list;
  }, [category.items, query, sort]);

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-dark">Pilihan Paket</p>
          <h2 className="mt-1.5 font-display text-3xl font-bold text-ink">List Produk</h2>
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
          <Select value={sort} onChange={setSort} options={sortOptions} ariaLabel="Urutkan" className="w-44" />
        </div>
      </div>

      <motion.div layout className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {items.map((t, i) => (
            <motion.div
              layout
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.05 }}
            >
              <Link
                href={`/${category.slug}/${tourSlug(t)}`}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    sizes="(max-width:768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-cream/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-gold-dark backdrop-blur">
                    {category.kicker}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg font-semibold leading-snug text-ink">{t.name}</h3>
                  <div className="mt-auto flex items-end justify-between pt-6">
                    <div>
                      <span className="block text-xs text-ink/45">Start from</span>
                      <span className="font-display text-xl font-bold text-gold-dark">
                        {t.price}
                        <span className="text-xs font-medium text-ink/45">{t.badge}</span>
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2.5 text-sm font-semibold text-cream transition group-hover:bg-gold group-hover:text-ink">
                      Lihat Details <ArrowUpRight size={15} />
                    </span>
                  </div>
                </div>
              </Link>
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
    </section>
  );
}
