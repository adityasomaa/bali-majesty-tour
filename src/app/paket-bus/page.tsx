import type { Metadata } from "next";
import { rentalBus, site } from "@/lib/site";
import { PageHero } from "@/components/site/PageHero";
import { VehicleListing } from "@/components/site/VehicleListing";
import { CtaBand } from "@/components/site/CtaBand";

export const metadata: Metadata = {
  title: rentalBus.title,
  description: rentalBus.intro.slice(0, 155),
  alternates: { canonical: `${site.url}/paket-bus` },
};

export default function Page() {
  return (
    <>
      <PageHero
        title={rentalBus.title}
        kicker={rentalBus.kicker}
        description={rentalBus.intro}
        image={rentalBus.hero}
        tags={["23–45 Seat", "Sopir Profesional", "Ekonomi & Executive"]}
        crumbs={[{ label: "Home", href: "/" }, { label: rentalBus.title }]}
      />
      <VehicleListing vehicles={rentalBus.vehicles} label="Sewa Bus Pariwisata" rentalSlug={rentalBus.slug} />
      <CtaBand />
    </>
  );
}
