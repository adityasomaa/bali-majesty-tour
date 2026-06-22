import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { categories, nav, rentalBus, rentalCars, site } from "@/lib/site";
import { LegalShell } from "@/components/site/LegalShell";

export const metadata: Metadata = {
  title: "Sitemap",
  description: "Peta situs Bali Majesty Tour — seluruh halaman dalam satu tempat.",
  alternates: { canonical: `${site.url}/sitemap` },
};

const groups = [
  {
    title: "Utama",
    links: [
      { label: "Home", href: "/" },
      { label: "Profil Kami", href: "/profil-kami" },
      { label: "Semua Paket", href: "/paket" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Paket Tour",
    links: categories.map((c) => ({ label: c.title, href: `/${c.slug}` })),
  },
  {
    title: "Transportasi",
    links: [
      { label: rentalCars.title, href: `/${rentalCars.slug}` },
      { label: rentalBus.title, href: `/${rentalBus.slug}` },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Kebijakan Privasi", href: "/privacy-policy" },
      { label: "Syarat & Ketentuan", href: "/syarat-dan-ketentuan" },
      { label: "Sitemap", href: "/sitemap" },
    ],
  },
];

export default function Page() {
  void nav;
  return (
    <LegalShell title="Sitemap">
      <p>Temukan semua halaman situs Bali Majesty Tour di bawah ini.</p>
      <div className="not-prose grid gap-8 sm:grid-cols-2">
        {groups.map((g) => (
          <div key={g.title}>
            <h2 className="font-display text-xl font-bold text-ink">{g.title}</h2>
            <ul className="mt-4 space-y-2.5">
              {g.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="group inline-flex items-center gap-1.5 text-ink/70 transition hover:text-gold-dark">
                    <ArrowUpRight size={15} className="text-gold-dark transition group-hover:translate-x-0.5" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </LegalShell>
  );
}
