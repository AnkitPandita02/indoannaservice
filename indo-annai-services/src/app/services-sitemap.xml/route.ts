
const BASE_URL = "https://indoannaiservice.com";

const locales = ["en", "ja"];

const serviceSlugs = [
  "travel-coordination",
  "interpretation-translation",
  "hotels-accommodation",
  "car-services",
  "liaison-support",
  "japanese-lessons",
];

export async function GET() {
  const urls = locales
    .flatMap((locale) =>
      serviceSlugs.map((slug) => `
  <url>
    <loc>${BASE_URL}/${locale}/services/${slug}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`)
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
