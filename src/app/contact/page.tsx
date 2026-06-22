import type { Metadata } from "next";
import { Mail, MapPin, Phone, Clock, Instagram } from "lucide-react";
import { site, waLink } from "@/lib/site";
import { PageHero } from "@/components/site/PageHero";
import { BookingForm } from "@/components/site/BookingForm";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description: "Hubungi PT. Bali Majesty Tour untuk reservasi paket tour, sewa mobil & bus, atau custom itinerary. Tim kami siap melayani 24 jam.",
  alternates: { canonical: `${site.url}/contact` },
};

const cards = [
  { icon: Phone, label: "Call / WhatsApp", value: site.phoneDisplay, href: waLink() },
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: Instagram, label: "Instagram", value: site.socials.instagram.handle, href: site.socials.instagram.url },
  { icon: Clock, label: "Jam Operasional", value: "24 Jam / 7 Hari", href: undefined },
];

export default function Page() {
  return (
    <>
      <PageHero
        title="Hubungi Kami"
        kicker="Contact"
        description="Ada pertanyaan atau ingin memesan paket tour? Tim Travel Consultant kami siap membantu Anda 24 jam."
        image="/images/OOVpqOhqXamwd3mMJxAQwa0nw.webp"
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <BookingForm />
          </Reveal>

          <Reveal delay={100} className="flex flex-col gap-6">
            <div>
              <h2 className="font-display text-3xl font-bold text-ink">Bali Majesty Tour</h2>
              <p className="mt-2 flex items-start gap-2 text-ink/65">
                <MapPin size={18} className="mt-0.5 shrink-0 text-gold-dark" />
                {site.address}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {cards.map((c) => {
                const Inner = (
                  <>
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-gold/15 text-gold-dark">
                      <c.icon size={20} />
                    </span>
                    <div className="mt-4">
                      <div className="text-xs uppercase tracking-wide text-ink/50">{c.label}</div>
                      <div className="mt-0.5 font-semibold text-ink">{c.value}</div>
                    </div>
                  </>
                );
                return c.href ? (
                  <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-ink/10 bg-cream p-5 transition hover:-translate-y-0.5 hover:border-gold/40 hover:shadow-[var(--shadow-soft)]">
                    {Inner}
                  </a>
                ) : (
                  <div key={c.label} className="rounded-2xl border border-ink/10 bg-cream p-5">
                    {Inner}
                  </div>
                );
              })}
            </div>

            <div className="overflow-hidden rounded-2xl border border-ink/10">
              <iframe
                title="Lokasi Bali Majesty Tour"
                src="https://www.google.com/maps?q=Sesetan,Denpasar,Bali&output=embed"
                className="h-72 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
