"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Search, SlidersHorizontal, MapPin, ArrowUpRight } from "lucide-react";
import { categories, site, waLink } from "@/lib/site";
import { Modal } from "@/components/ui/Modal";
import { cn } from "@/lib/utils";

type FlatTour = {
  name: string;
  price: string;
  priceValue: number;
  badge?: string;
  image: string;
  category: string;
  categoryTitle: string;
};

const parsePrice = (p: string) => Number(p.replace(/[^\d]/g, "")) || 0;

const flatTours: FlatTour[] = categories.flatMap((c) =>
  c.items.map(
    (t): FlatTour => ({
      name: t.name,
      price: t.price,
      priceValue: parsePrice(t.price),
      badge: t.badge,
      image: t.image,
      category: c.slug,
      categoryTitle: c.title,
    })
  )
);

const filters = [
  { label: "Semua", value: "all" },
  ...categories.map((c) => ({ label: c.kicker, value: c.slug, title: c.title })),
];

export function PackageExplorer() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState("all");
  const [sort, setSort] = useState("popular");
  const [selected, setSelected] = useState<FlatTour | null>(null);

  const results = useMemo(() => {
    let list = flatTours.filter((t) => {
      const matchesCat = active === "all" || t.category === active;
      const q = query.trim().toLowerCase();
      const matchesQuery =
        !q || t.name.toLowerCase().includes(q) || t.categoryTitle.toLowerCase().includes(q);
      return matchesCat && matchesQuery;
    });
    if (sort === "low") list = [...list].sort((a, b) => a.priceValue - b.priceValue);
    if (sort === "high") list = [...list].sort((a, b) => b.priceValue - a.priceValue);
    return list;
  }, [query, active, sort]);

  return (
    <div>
      {/* Controls */}
      <div className="flex flex-col gap-4 rounded-3xl border border-ink/10 bg-cream p-4 shadow-[var(--shadow-soft)] sm:p-5">
        <div className="flex flex-col gap-3 lg:flex-row">
          <div className="relative flex-1">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/40" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cari paket, destinasi, atau aktivitas…"
              className="field pl-11"
              aria-label="Cari paket"
            />
          </div>
          <div className="flex items-center gap-2 rounded-[0.85rem] border border-ink/10 bg-white px-3">
            <SlidersHorizontal size={16} className="text-ink/40" />
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="field border-0 bg-transparent px-1 focus:shadow-none"
              aria-label="Urutkan"
            >
              <option value="popular">Paling Populer</option>
              <option value="low">Harga Terendah</option>
              <option value="high">Harga Tertinggi</option>
            </select>
          </div>
        </div>

        {/* Category chips */}
        <div className="no-bar -mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={cn(
                "shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition",
                active === f.value
                  ? "bg-ink text-cream"
                  : "bg-sand text-ink/70 hover:bg-sand-deep"
              )}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Result count */}
      <p className="mt-5 text-sm text-ink/55">
        Menampilkan <span className="font-semibold text-ink">{results.length}</span> paket
        {active !== "all" && (
          <>
            {" "}di kategori{" "}
            <span className="font-semibold text-gold-dark">
              {categories.find((c) => c.slug === active)?.title}
            </span>
          </>
        )}
      </p>

      {/* Grid */}
      <motion.div layout className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {results.map((t) => (
            <motion.button
              layout
              key={`${t.category}-${t.name}`}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelected(t)}
              className="group relative overflow-hidden rounded-3xl border border-ink/10 bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
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
                  {categories.find((c) => c.slug === t.category)?.kicker}
                </span>
                <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-gold text-ink opacity-0 transition group-hover:opacity-100">
                  <ArrowUpRight size={18} />
                </span>
              </div>
              <div className="p-5">
                <p className="flex items-center gap-1 text-xs text-ink/45">
                  <MapPin size={12} /> {t.categoryTitle}
                </p>
                <h3 className="mt-1.5 font-display text-lg leading-snug text-ink">{t.name}</h3>
                <div className="mt-4 flex items-end justify-between">
                  <span className="text-xs text-ink/45">Mulai dari</span>
                  <span className="font-display text-lg font-bold text-gold-dark">
                    {t.price}
                    <span className="text-xs font-medium text-ink/45">{t.badge}</span>
                  </span>
                </div>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      {results.length === 0 && (
        <div className="mt-8 rounded-3xl border border-dashed border-ink/15 bg-sand p-12 text-center">
          <p className="font-display text-lg text-ink">Tidak ada paket yang cocok</p>
          <p className="mt-1 text-sm text-ink/55">Coba kata kunci lain atau pilih kategori berbeda.</p>
        </div>
      )}

      {/* Booking modal (popup — page scroll locks, modal scrolls) */}
      <Modal open={!!selected} onClose={() => setSelected(null)} title={selected?.name}>
        {selected && (
          <div>
            <div className="relative aspect-video overflow-hidden rounded-2xl">
              <Image src={selected.image} alt={selected.name} fill sizes="500px" className="object-cover" />
            </div>
            <div className="mt-5 flex items-center justify-between rounded-2xl bg-sand px-5 py-4">
              <div>
                <p className="text-xs text-ink/50">{selected.categoryTitle}</p>
                <p className="font-display text-lg font-bold text-ink">
                  {selected.price}
                  <span className="text-sm font-medium text-ink/50">{selected.badge}</span>
                </p>
              </div>
              <span className="rounded-full bg-gold/15 px-3 py-1 text-xs font-bold uppercase text-gold-dark">
                {categories.find((c) => c.slug === selected.category)?.kicker}
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-ink/65">
              Harga sudah termasuk fasilitas standar paket (transport, driver/guide, dan item sesuai
              program). Hubungi kami untuk itinerary lengkap, ketersediaan tanggal, dan harga terbaik
              sesuai jumlah peserta.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={waLink(`Halo Bali Majesty Tour, saya ingin memesan "${selected.name}" (${selected.price}${selected.badge ?? ""}). Mohon info lebih lanjut.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-bold text-ink transition hover:bg-gold-soft"
              >
                Pesan via WhatsApp
              </a>
              <a
                href={`mailto:${site.email}?subject=${encodeURIComponent("Reservasi " + selected.name)}`}
                className="flex flex-1 items-center justify-center gap-2 rounded-full border border-ink/15 px-6 py-3.5 text-sm font-semibold text-ink transition hover:bg-sand"
              >
                Email Kami
              </a>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
