"use client";

import { use, useEffect, useState } from "react";
import Image from "next/image";

type Locale = "en" | "ja";

type GalleryImage = {
  src: string;
  title: string;
  alt: string;
};

const images: GalleryImage[] = [
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.36.jpeg",
    title: "Memories in India",
    alt: "Travel memories in India",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.37 (1).jpeg",
    title:
      "Jatayu Earth's Center Nature Park in Chadayamangalam, Kollam district, Kerala,",
    alt: "Travelers exploring India",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.37 (2).jpeg",
    title: " Hawa Mahal (Palace of the Winds) Jaipur, Rajasthan",
    alt: "Indian heritage and architecture",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.38.jpeg",
    title: "Har Ki Pauri ghat in Haridwar, Uttarakhand, India",
    alt: "Travel experiences in India",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.39 (1).jpeg",
    title: "Indian Culture",
    alt: "Indian culture and traditions",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.39 (2).jpeg",
    title:
      "Vivekananda Rock Memorial and the Thiruvalluvar Statue. Kanyakumari, Tamil Nadu",
    alt: "Discovering India",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.39.jpeg",
    title:
      "Ashta Sakthi Mandapam inside the Meenakshi Amman Temple in Madurai, Tamil Nadu",
    alt: "Sightseeing during a trip to India",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.40 (1).jpeg",
    title: "Jaisalmer Fort in Rajasthan",
    alt: "Travel destinations in India",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.40 (2).jpeg",
    title: "Sam Sand Dunes in Jaisalmer, Rajasthan",
    alt: "Indian culture and heritage",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.40.jpeg",
    title:
      " Jatayu Earth's Center Nature Park in Chadayamangalam, Kollam district, Kerala",
    alt: "Memorable moments in India",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.41 (1).jpeg",
    title: "Taj Mahal in Agra",
    alt: "Tourism in India",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.41 (2).jpeg",
    title: "Enjoying a traditional Indian home-cooked meal",
    alt: "Indian architecture",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.41.jpeg",
    title: "Exploring India",
    alt: "Exploring destinations in India",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.42.jpeg",
    title: " Attari–Wagah border near Amritsar, Punjab,",
    alt: "Travel memories from India",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.43.jpeg",
    title: "Ganges River in Varanasi, India",
    alt: "Beautiful destinations in India",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.44 (1).jpeg",
    title: "Indian Heritage",
    alt: "Indian heritage",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.44.jpeg",
    title: "Enjoying a traditional South Indian meal served on a banana leaf",
    alt: "Beautiful places in India",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.45 (1).jpeg",
    title: "Lepchajagat Pine Forest near Darjeeling in West Bengal.",
    alt: "Travel and tourism in India",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.47.jpeg",
    title: "Indian Landscapes",
    alt: "Indian landscapes",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.48 (1).jpeg",
    title:
      "Taj Mahal as seen across the Yamuna River from the Agra Fort (Musamman Burj) in Agra, Uttar Pradesh",
    alt: "Travel photography in India",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.48.jpeg",
    title:
      "traditional regional attire and carrying harvest baskets while picking tea leaves in a hillside tea garden in Darjeeling, West Bengal",
    alt: "Discover India's destinations",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.49 (1).jpeg",
    title: "Amer Fort (Amber Fort) in Jaipur, Rajasthan",
    alt: "Indian culture and sightseeing",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.49 (2).jpeg",
    title: "Hawa Mahal (Palace of Winds) in Jaipur, Rajasthan",
    alt: "Travel memories in India",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.49.jpeg",
    title:
      "Sumendu Lake (Mirik Lake) in Mirik, Darjeeling district, West Bengal",
    alt: "Tourism experiences in India",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.50 (1).jpeg",
    title:
      "Enjoying a traditional Rajasthani folk dance and cultural night at a desert camp in Sam Sand Dunes, Jaisalmer, Rajasthan",
    alt: "Indian destinations and heritage",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.50 (2).jpeg",
    title:
      "Enjoying a traditional Rajasthani folk dance and cultural night at a desert camp in Sam Sand Dunes, Jaisalmer, Rajasthan",
    alt: "Indian culture and traditions",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.50.jpeg",
    title:
      " open-top jeep carrying two people during a desert safari at sunset in the Thar Desert near Jaisalmer, Rajasthan",
    alt: "Indian sightseeing experiences",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.51 (1).jpeg",
    title: "sunlit historic street lined with golden-yellow sandstone havelis and ornate architectural details in Jaisalmer, Rajasthan",
    alt: "Travel memories in India",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.51 (2).jpeg",
    title: "camel safari during sunset in the Thar Desert near Jaisalmer, Rajasthan",
    alt: "Indian heritage and traditions",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.51.jpeg",
    title: "Shri Digambar Jain Lal Mandir temple located in Chandni Chowk, Old Delhi",
    alt: "Exploring India",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.52 (1).jpeg",
    title: " cultural event",
    alt: "Indian cultural destinations",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.52 (2).jpeg",
    title: "Taj Mahal located in Agra, Uttar Pradesh",
    alt: "Travel experiences in India",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.52.jpeg",
    title: "The Thar Desert (Great Indian Desert), near Jaisalmer, Rajasthan",
    alt: "Beautiful destinations in India",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.53 (1).jpeg",
    title: "Lalgarh Palace Campus, Samta Nagar / Sri Ganganagar Road, Bikaner, Rajasthan",
    alt: "Indian tourism and culture",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.53 (2).jpeg",
    title: "Nine Arch Bridge (also known as the Bridge in the Sky) located in Ella",
    alt: "Indian traditions and heritage",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.53 (3).jpeg",
    title: "Betwa River in Madhya Pradesh",
    alt: "Memorable travel experiences",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.53.jpeg",
    title: "Amer, about 11 kilometers from Jaipur, Rajasthan",
    alt: "India travel photography",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.54 (1).jpeg",
    title: "Tabakoshi near Darjeeling",
    alt: "Indian cultural experiences",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.54 (2).jpeg",
    title: " Jhansi Fort in Uttar Pradesh,",
    alt: "Discover Indian heritage",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.54.jpeg",
    title: "Mahasukhamdada Chin Thargyi Pagoda located in Kushinagar, Uttar Pradesh,",
    alt: "Indian destinations and landscapes",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.55 (1).jpeg",
    title: "Himachal Pradesh Cricket Association (HPCA) Stadium located in Dharamshala, Himachal Pradesh",
    alt: "Sightseeing in India",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.55 (2).jpeg",
    title: "McLeod Ganj, a hill station and suburb of Dharamshala in Himachal Pradesh",
    alt: "Indian travel and culture",
  },

  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.56 (1).jpeg",
    title: " Bhagsu Waterfalls, a popular 20-meter cascade located near McLeod Ganj in the Kangra district of Himachal Pradesh",
    alt: "Indian cultural heritage",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.56.jpeg",
    title: "architectural landmarks from across India",
    alt: "Explore India",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.57.jpeg",
    title: "Bhagsunag Waterfall (also known as Bhagsu Waterfall)",
    alt: "Indian travel photography",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.58 (1).jpeg",
    title: " Mussoorie, Uttarakhand.",
    alt: "Indian tourism destinations",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.58.jpeg",
    title: " River in Mussoorie, Uttarakhand.",
    alt: "Indian culture and traditions",
  },

  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.59 (2).jpeg",
    title: " Khajjiar, located in the Chamba district of Himachal Pradesh",
    alt: "Indian travel destinations",
  },
  {
    src: "/images/gallery/WhatsApp Image 2026-10-16 at 20.12.59.jpeg",
    title: " Bhagsunag Waterfall (also known as Bhagsu Waterfall), located near McLeod Ganj in Dharamshala, Himachal Pradesh",
    alt: "India sightseeing and heritage",
  },
];

const copy = {
  en: {
    eyebrow: "OUR GALLERY",
    title: "Memories made in India.",
    description:
      "Explore India's beautiful destinations, traditions, and unforgettable experiences.",
    close: "Close image viewer",
  },
  ja: {
    eyebrow: "フォトギャラリー",
    title: "インドで生まれる、特別な思い出。",
    description: "インドの美しい観光地、伝統文化、心に残る体験をご紹介します。",
    close: "画像を閉じる",
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

  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  useEffect(() => {
    if (!selectedImage) return;

    const previousOverflow = document.body.style.overflow;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

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
              <button
                className="gallery-card"
                key={image.src}
                type="button"
                onClick={() => setSelectedImage(image)}
                aria-label={`Open image: ${image.title}`}
              >
                <div className="gallery-card-image">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={700}
                    height={520}
                    sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                    className="gallery-image"
                  />
                </div>

                <span className="gallery-card-title">{image.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.title}
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="gallery-close"
            type="button"
            aria-label={t.close}
            onClick={() => setSelectedImage(null)}
          >
            &times;
          </button>

          <div
            className="gallery-lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={1600}
              height={1200}
              sizes="100vw"
              className="gallery-lightbox-image"
            />
            <p className="gallery-lightbox-title">{selectedImage.title}</p>
          </div>
        </div>
      )}
    </>
  );
}
