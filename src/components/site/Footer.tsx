import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { categories, nav, site, waLink } from "@/lib/site";

const TikTok = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" {...props}>
    <path d="M16.5 3c.3 2.1 1.5 3.4 3.5 3.6v2.4c-1.2.1-2.4-.3-3.5-1v6.3c0 3.4-2.8 5.7-5.9 5.2-2.6-.4-4.5-2.7-4.4-5.3.1-2.6 2.4-4.7 5-4.6.3 0 .6 0 .9.1v2.6c-.3-.1-.6-.2-.9-.2-1.2 0-2.2 1-2.1 2.2 0 1.2 1 2.1 2.2 2.1 1.2 0 2.1-1 2.1-2.2V3h2.6z" />
  </svg>
);

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-cream/80">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Image src="/logo-horizontal.png" alt={site.name} width={220} height={60} className="h-11 w-auto" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/60">
              {site.legalName} — perusahaan tour & travel berbadan hukum di Bali, siap melayani Anda
              secara exclusive dengan tim berpengalaman dan profesional.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href={site.socials.instagram.url} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:bg-gold hover:text-ink">
                <Instagram size={18} />
              </a>
              <a href={site.socials.facebook.url} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:bg-gold hover:text-ink">
                <Facebook size={18} />
              </a>
              <a href={site.socials.tiktok.url} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:bg-gold hover:text-ink">
                <TikTok />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-lg text-cream">Contact Us</h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-gold" />
                <span className="text-cream/60">{site.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="mt-0.5 shrink-0 text-gold" />
                <a href={waLink()} target="_blank" rel="noopener noreferrer" className="text-cream/60 transition hover:text-gold">
                  {site.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="mt-0.5 shrink-0 text-gold" />
                <a href={`mailto:${site.email}`} className="text-cream/60 transition hover:text-gold">
                  {site.email}
                </a>
              </li>
            </ul>
            <div className="mt-5 space-y-1 text-xs text-cream/40">
              <p>NIB: {site.nib}</p>
              <p>NPWP: {site.npwp}</p>
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-lg text-cream">Quick Links</h3>
            <ul className="mt-5 space-y-2.5 text-sm">
              {nav
                .filter((n) => !n.children)
                .map((n) => (
                  <li key={n.href}>
                    <Link href={n.href} className="text-cream/60 transition hover:text-gold">
                      {n.label}
                    </Link>
                  </li>
                ))}
              <li>
                <Link href="/syarat-dan-ketentuan" className="text-cream/60 transition hover:text-gold">
                  Syarat &amp; Ketentuan
                </Link>
              </li>
            </ul>
          </div>

          {/* Packages */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-lg text-cream">Paket Populer</h3>
            <ul className="mt-5 space-y-2.5 text-sm">
              {categories.slice(0, 6).map((c) => (
                <li key={c.slug}>
                  <Link href={`/${c.slug}`} className="text-cream/60 transition hover:text-gold">
                    {c.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Payment */}
        <div className="mt-14 flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-cream/40">Metode Pembayaran</p>
            <div className="mt-3 flex items-center gap-3">
              <span className="grid h-9 items-center rounded-md bg-white px-3">
                <Image src="/images/Logo-BCA-PNG.png" alt="BCA" width={48} height={20} className="h-4 w-auto object-contain" />
              </span>
              <span className="grid h-9 items-center rounded-md bg-white px-3">
                <Image src="/images/Bank_Mandiri_logo_2016.svg.png" alt="Bank Mandiri" width={70} height={20} className="h-4 w-auto object-contain" />
              </span>
            </div>
          </div>
          <p className="max-w-md text-xs leading-relaxed text-cream/40">
            Kami sangat menjaga keamanan online Anda. Semua pembayaran yang diproses dijamin aman dan terenkripsi.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-cream/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.legalName}. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy-policy" className="transition hover:text-gold">Privacy Policy</Link>
            <Link href="/syarat-dan-ketentuan" className="transition hover:text-gold">Terms of Use</Link>
            <Link href="/sitemap" className="transition hover:text-gold">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
