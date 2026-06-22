import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTour, tourParams, site } from "@/lib/site";
import { TourDetail } from "@/components/site/TourDetail";

const CATEGORY = "paket-pertualangan";

export function generateStaticParams() {
  return tourParams(CATEGORY);
}

export async function generateMetadata({ params }: { params: Promise<{ item: string }> }): Promise<Metadata> {
  const { item } = await params;
  const data = getTour(CATEGORY, item);
  if (!data) return {};
  return {
    title: `${data.item.name} — ${data.category.title}`,
    description: `${data.item.name} mulai dari ${data.item.price}${data.item.badge ?? ""}. ${data.category.intro.slice(0, 120)}`,
    alternates: { canonical: `${site.url}/${CATEGORY}/${item}` },
    openGraph: { title: data.item.name, images: [data.item.image] },
  };
}

export default async function Page({ params }: { params: Promise<{ item: string }> }) {
  const { item } = await params;
  const data = getTour(CATEGORY, item);
  if (!data) notFound();
  return <TourDetail category={data.category} item={data.item} />;
}
