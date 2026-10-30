import type { MetadataRoute } from "next";

const BASE_URL = "https://indoannaiservice.com";

const locales = ["en", "ja"] as const;

const staticPages = [
  "",
  "/about",
  "/gallery",
  "/services",
  "/tours",
  "/japanese-lessons",
  "/contact",
];

const serviceSlugs = [
  "travel-coordination",
  "interpretation-translation",
  "hotels-accommodation",
  "car-services",
  "liaison-support",
  "japanese-lessons",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Localized static pages
  locales.forEach((locale) => {
    staticPages.forEach((page) => {
      sitemapEntries.push({
        url: `${BASE_URL}/${locale}${page}`,
        changeFrequency: page === "" ? "daily" : "monthly",
        priority: page === "" ? 1 : 0.8,
        alternates: {
          languages: {
            en: `${BASE_URL}/en${page}`,
            ja: `${BASE_URL}/ja${page}`,
          },
        },
      });
    });
  });

  // Dynamic service detail pages
  locales.forEach((locale) => {
    serviceSlugs.forEach((slug) => {
      sitemapEntries.push({
        url: `${BASE_URL}/${locale}/services/${slug}`,
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: {
          languages: {
            en: `${BASE_URL}/en/services/${slug}`,
            ja: `${BASE_URL}/ja/services/${slug}`,
          },
        },
      });
    });
  });

  return sitemapEntries;
}
