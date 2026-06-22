import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getVehicle, vehicleParams, site } from "@/lib/site";
import { VehicleDetail } from "@/components/site/VehicleDetail";

const RENTAL = "paket-bus";

export function generateStaticParams() {
  return vehicleParams(RENTAL);
}

export async function generateMetadata({ params }: { params: Promise<{ item: string }> }): Promise<Metadata> {
  const { item } = await params;
  const data = getVehicle(RENTAL, item);
  if (!data) return {};
  return {
    title: `${data.item.name} (${data.item.seats}) — ${data.rental.title}`,
    description: `Sewa ${data.item.name} ${data.item.seats} di Bali, all-in dengan driver & BBM. Harga kompetitif.`,
    alternates: { canonical: `${site.url}/${RENTAL}/${item}` },
    openGraph: { title: data.item.name, images: [data.item.image] },
  };
}

export default async function Page({ params }: { params: Promise<{ item: string }> }) {
  const { item } = await params;
  const data = getVehicle(RENTAL, item);
  if (!data) notFound();
  return <VehicleDetail rental={data.rental} item={data.item} />;
}
