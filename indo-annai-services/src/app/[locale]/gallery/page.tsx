"use client";

import { use } from "react";
import Image from "next/image";

type Locale = "en" | "ja";

const images = [
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.36 (1).jpeg",
    alt: "India travel photography",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.36 (2).jpeg",
    alt: "Indian destinations and culture",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.36.jpeg",
    alt: "Memorable experiences in India",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.37 (1).jpeg",
    alt: "Indian travel photography",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.37 (2).jpeg",
    alt: "Indian heritage and architecture",
  },

  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.38.jpeg",
    alt: "Travel experiences in India",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.39 (1).jpeg",
    alt: "Indian culture and traditions",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.39 (2).jpeg",
    alt: "Discover India",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.39.jpeg",
    alt: "India sightseeing",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.40 (1).jpeg",
    alt: "Indian travel destinations",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.40 (2).jpeg",
    alt: "Indian culture and heritage",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.40.jpeg",
    alt: "Memorable moments in India",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.41 (1).jpeg",
    alt: "India tourism",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.41 (2).jpeg",
    alt: "Indian architecture and culture",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.41.jpeg",
    alt: "Exploring India",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.42.jpeg",
    alt: "Indian travel memories",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.43.jpeg",
    alt: "Indian destinations and experiences",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.44 (1).jpeg",
    alt: "Indian heritage",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.44.jpeg",
    alt: "Beautiful places in India",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.45 (1).jpeg",
    alt: "Travel and tourism in India",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.45.jpeg",
    alt: "Indian cultural experiences",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.46.jpeg",
    alt: "India sightseeing and travel",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.47.jpeg",
    alt: "Indian landscapes",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.48 (1).jpeg",
    alt: "Indian travel photography",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.48.jpeg",
    alt: "Explore India's destinations",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.49 (1).jpeg",
    alt: "Indian culture and sightseeing",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.49 (2).jpeg",
    alt: "Travel memories in India",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.49.jpeg",
    alt: "India tourism experiences",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.50 (1).jpeg",
    alt: "Indian destinations and heritage",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.50 (2).jpeg",
    alt: "Discover India's culture",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.50.jpeg",
    alt: "Indian sightseeing experiences",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.51 (1).jpeg",
    alt: "Indian travel memories",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.51 (2).jpeg",
    alt: "Indian heritage and traditions",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.51.jpeg",
    alt: "Explore India",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.52 (1).jpeg",
    alt: "Indian cultural destinations",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.52 (2).jpeg",
    alt: "India travel experiences",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.52.jpeg",
    alt: "Beautiful destinations in India",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.53 (1).jpeg",
    alt: "Indian tourism and culture",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.53 (2).jpeg",
    alt: "Indian traditions and heritage",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.53 (3).jpeg",
    alt: "Memorable travel experiences",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.53.jpeg",
    alt: "India travel photography",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.54 (1).jpeg",
    alt: "Indian cultural experiences",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.54 (2).jpeg",
    alt: "Discover Indian heritage",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.54.jpeg",
    alt: "Indian destinations and landscapes",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.55 (1).jpeg",
    alt: "India sightseeing",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.55 (2).jpeg",
    alt: "Indian travel and culture",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.55.jpeg",
    alt: "Travel experiences in India",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.56 (1).jpeg",
    alt: "Indian cultural heritage",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.56.jpeg",
    alt: "Explore India",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.57.jpeg",
    alt: "Indian travel photography",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.58 (1).jpeg",
    alt: "Indian tourism destinations",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.58.jpeg",
    alt: "Indian culture and traditions",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.59 (1).jpeg",
    alt: "Memorable experiences in India",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.59 (2).jpeg",
    alt: "Indian travel destinations",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.59.jpeg",
    alt: "India sightseeing and heritage",
  },
];

const copy = {
  en: {
    eyebrow: "OUR GALLERY",
    title: "Memories made in India.",
    description:
      "Explore India's beautiful destinations, traditions, and unforgettable experiences.",
  },
  ja: {
    eyebrow: "フォトギャラリー",
    title: "インドで生まれる、特別な思い出。",
    description: "インドの美しい観光地、伝統文化、心に残る体験をご紹介します。",
  },
};

export default function GalleryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: routeLocale } = use(params);

  const locale: Locale = routeLocale === "ja" ? "ja" : "en";
  const t = copy[locale];

  return (
    <>
      <section className="gallery-hero">
        <div className="container">
          <span className="eyebrow">{t.eyebrow}</span>
          <h1>{t.title}</h1>
          <p>{t.description}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="gallery-grid">
            {images.map((image) => (
              <div className="gallery-card" key={image.src}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={700}
                  height={520}
                  sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                  className="gallery-image"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
