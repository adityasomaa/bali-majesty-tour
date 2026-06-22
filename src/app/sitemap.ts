import type { MetadataRoute } from "next";
import { categories, rentalBus, rentalCars, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/profil-kami",
    "/paket",
    "/contact",
    `/${rentalCars.slug}`,
    `/${rentalBus.slug}`,
    "/privacy-policy",
    "/syarat-dan-ketentuan",
    "/sitemap",
  ];

  const now = new Date();

  return [
    ...staticRoutes.map((route) => ({
      url: `${site.url}${route}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.7,
    })),
    ...categories.map((c) => ({
      url: `${site.url}/${c.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}
