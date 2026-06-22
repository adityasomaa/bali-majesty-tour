import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import LenisProvider from "@/components/providers/LenisProvider";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { SiteLoader } from "@/components/site/SiteLoader";
import { RouteTransition } from "@/components/site/RouteTransition";
import { CookieConsent } from "@/components/site/CookieConsent";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Paket Tour & Sewa Mobil Bali Terpercaya`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    "paket tour bali",
    "sewa mobil bali",
    "tour nusa penida",
    "bulan madu bali",
    "sewa bus bali",
    "bali majesty tour",
  ],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Discover Your Perfect Holiday in Bali`,
    description: site.description,
    images: ["/images/Ulun-Danu-Beratan.jpg"],
  },
  icons: { icon: "/favicon.png", apple: "/favicon.png" },
  alternates: { canonical: site.url },
};

export const viewport: Viewport = {
  themeColor: "#15130d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${jakarta.variable} ${bricolage.variable}`}>
      <body>
        <SiteLoader />
        <LenisProvider />
        <RouteTransition />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <CookieConsent />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
