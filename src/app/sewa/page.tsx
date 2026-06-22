import type { Metadata } from "next";
import { rentalCars, site } from "@/lib/site";
import { PageHero } from "@/components/site/PageHero";
import { VehicleListing } from "@/components/site/VehicleListing";
import { CtaBand } from "@/components/site/CtaBand";

export const metadata: Metadata = {
  title: rentalCars.title,
  description: rentalCars.intro.slice(0, 155),
  alternates: { canonical: `${site.url}/sewa` },
};

export default function Page() {
  return (
    <>
      <PageHero
        title={rentalCars.title}
        kicker={rentalCars.kicker}
        description={rentalCars.intro}
        image={rentalCars.hero}
        tags={["All-in", "Mobil + Driver + BBM", "Armada Terawat"]}
        crumbs={[{ label: "Home", href: "/" }, { label: rentalCars.title }]}
      />
      <VehicleListing vehicles={rentalCars.vehicles} label="Sewa Mobil All-in" />
      <CtaBand />
    </>
  );
}
