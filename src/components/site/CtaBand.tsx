import { Phone, Sparkles } from "lucide-react";
import { site, waLink } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";

export function CtaBand() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <Reveal className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-ink px-6 py-14 text-center sm:px-12">
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <div className="absolute -left-10 top-0 h-60 w-60 rounded-full bg-gold/40 blur-[90px]" />
          <div className="absolute -right-10 bottom-0 h-60 w-60 rounded-full bg-gold/30 blur-[90px]" />
        </div>
        <div className="relative">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold">
            <Sparkles size={14} /> Custom Itinerary
          </span>
          <h2 className="mx-auto mt-5 max-w-2xl font-display text-3xl font-bold text-cream text-balance sm:text-4xl">
            Ingin memesan paket tour custom sesuai budget?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-cream/65">
            Sampaikan keinginan dan budget Anda — tim kami akan menyusun itinerary terbaik untuk
            liburan impian Anda di Bali.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={waLink("Halo Bali Majesty Tour, saya ingin custom paket tour sesuai budget saya.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-bold text-ink shadow-[var(--shadow-gold)] transition hover:-translate-y-0.5 hover:bg-gold-soft"
            >
              <Phone size={16} /> Hubungi Kami
            </a>
            <span className="text-sm text-cream/55">atau telepon {site.phoneDisplay}</span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
