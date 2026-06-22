import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="grid min-h-[80vh] place-items-center bg-ink px-4 text-center">
      <div>
        <p className="font-display text-[7rem] font-bold leading-none text-gold sm:text-[10rem]">404</p>
        <h1 className="mt-2 font-display text-2xl font-bold text-cream sm:text-3xl">Halaman tidak ditemukan</h1>
        <p className="mx-auto mt-3 max-w-md text-cream/60">
          Sepertinya rute yang Anda tuju sudah dipindahkan atau tidak tersedia. Mari kembali menjelajah Bali.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/" className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-bold text-ink transition hover:bg-gold-soft">
            <Home size={16} /> Kembali ke Beranda
          </Link>
          <Link href="/paket" className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-7 py-3.5 text-sm font-semibold text-cream transition hover:bg-white/10">
            <ArrowLeft size={16} /> Lihat Semua Paket
          </Link>
        </div>
      </div>
    </section>
  );
}
