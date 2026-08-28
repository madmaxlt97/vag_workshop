import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://YOUR-DOMAIN.lt",
      lastModified: new Date(),
    },
    {
      url: "https://YOUR-DOMAIN/kontaktai",
      lastModified: new Date(),
    },
  ];
}
