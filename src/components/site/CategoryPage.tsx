import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCategory, site } from "@/lib/site";
import { PageHero } from "@/components/site/PageHero";
import { CategoryListing } from "@/components/site/CategoryListing";
import { CtaBand } from "@/components/site/CtaBand";

export function categoryMetadata(slug: string): Metadata {
  const c = getCategory(slug);
  if (!c) return {};
  return {
    title: c.title,
    description: `${c.title} — ${c.intro.slice(0, 150)}`,
    alternates: { canonical: `${site.url}/${slug}` },
    openGraph: { title: c.title, description: c.intro, images: [c.hero] },
  };
}

export function CategoryPage({ slug }: { slug: string }) {
  const category = getCategory(slug);
  if (!category) notFound();

  return (
    <>
      <PageHero
        title={category.title}
        kicker={category.kicker}
        description={category.intro}
        image={category.hero}
        tags={category.tags}
        crumbs={[{ label: "Home", href: "/" }, { label: "Paket" }, { label: category.title }]}
      />
      <CategoryListing category={category} />
      <CtaBand />
    </>
  );
}
