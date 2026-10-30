
const BASE_URL = "https://indoannaiservice.com";

const locales = ["en", "ja"];

const pages = [
  "",
  "/about",
  "/gallery",
  "/services",
  "/tours",
  "/japanese-lessons",
  "/contact",
];

export async function GET() {
  const urls = locales
    .flatMap((locale) =>
      pages.map((page) => {
        const path = `/${locale}${page}`;

        return `
  <url>
    <loc>${BASE_URL}${path}</loc>
    <changefreq>${page === "" ? "daily" : "monthly"}</changefreq>
    <priority>${page === "" ? "1.0" : "0.8"}</priority>
  </url>`;
      })
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
