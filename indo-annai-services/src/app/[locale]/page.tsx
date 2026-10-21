import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ServiceCard from "@/components/ServiceCard";
import { locales, translations, serviceItems, type Locale } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    return {};
  }

  const t = translations[locale as Locale];

  return {
    title: t.brand,
    description: t.tagline,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        ja: "/ja",
      },
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const currentLocale = locale as Locale;
  const t = translations[currentLocale];
  const services = serviceItems[currentLocale];

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              {t.hero.eyebrow}
            </span>

            <h1>{t.hero.title}</h1>
            <p className="hero-description">{t.hero.description}</p>

            <div className="hero-actions">
              <Link
                href={`/${currentLocale}/services`}
                className="button button-primary"
              >
                {t.hero.primary} <span>↗</span>
              </Link>

              <Link
                href={`/${currentLocale}/contact`}
                className="button button-outline"
              >
                {t.hero.secondary}
              </Link>
            </div>

            <div className="hero-note">
              <span className="hero-note-icon">✓</span>
              <span>Japanese-language support for travel and business</span>
            </div>
          </div>

          <div className="hero-visual">
            <div
              className="hero-image"
              role="img"
              aria-label="Indian architecture and travel"
            />
            <div className="hero-floating-card">
              <span className="floating-icon">日</span>
              <div>
                <strong>Japan meets India</strong>
                <span>Language · Culture · Care</span>
              </div>
            </div>
            <div className="hero-image-caption">
              <span>01 / DISCOVER INDIA</span>
              <span>भारत · インド</span>
            </div>
          </div>
        </div>

        <div className="hero-bottom container">
          <span>TRAVEL</span>
          <span>INTERPRETATION</span>
          <span>ACCOMMODATION</span>
          <span>BUSINESS SUPPORT</span>
        </div>
      </section>

      <section className="section section-about">
        <div className="container about-grid">
          <div>
            <span className="eyebrow">{t.about.eyebrow}</span>
            <h2 className="section-title">{t.about.title}</h2>
          </div>

          <div className="about-copy">
            <p>{t.about.description}</p>
            <Link href={`/${currentLocale}/about`} className="text-link">
              {t.learnMore} <span>↗</span>
            </Link>
          </div>
        </div>

        <div className="container stats-grid">
          <div className="stat">
            <strong>Japan ↔ India</strong>
            <span>Two cultures, one trusted partner</span>
          </div>
          <div className="stat">
            <strong>Travel & Business</strong>
            <span>Support for different needs</span>
          </div>
          <div className="stat">
            <strong>Personalized</strong>
            <span>Solutions tailored to each client</span>
          </div>
        </div>
      </section>

      <section className="section services-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">WHAT WE DO</span>
              <h2 className="section-title">{t.servicesTitle}</h2>
              <p className="section-description">{t.servicesDescription}</p>
            </div>

            <Link href={`/${currentLocale}/services`} className="text-link">
              {t.learnMore} <span>↗</span>
            </Link>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <ServiceCard
                key={service.slug}
                locale={currentLocale}
                {...service}
                learnMore={t.learnMore}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section tours-section">
        <div className="container tours-grid">
          <div className="tour-visual">
            <div className="tour-image" />
            {/* <div className="tour-label">
              INDIA, BEYOND THE ORDINARY
            </div> */}
          </div>

          <div className="tour-copy">
            <span className="eyebrow">YOUR JOURNEY, YOUR WAY</span>
            <h2 className="section-title">{t.toursTitle}</h2>
            <p className="section-description">{t.toursDescription}</p>

            <ul className="tour-list">
              <li>Delhi · Jaipur · Agra — Golden Triangle</li>
              <li>Delhi · Agra · Varanasi — Heritage & Spirituality</li>
              <li>Delhi · Haridwar · Rishikesh — Nature & Yoga</li>
              <li>Amritsar · Dharamshala — Culture & Mountains</li>
              <li>Rajasthan — Royal Rajasthan · Culture & Folk Art</li>
              <li>South India — Tradition & Scenery</li>
              <li>Darjeeling & the Himalayas — Gardens of Tea</li>
            </ul>

            <Link
              href={`/${currentLocale}/tours`}
              className="button button-primary"
            >
              {t.viewTours} <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container cta-inner">
          <div>
            <span className="eyebrow eyebrow-light">
              LET&apos;S PLAN SOMETHING GREAT
            </span>
            <h2>{t.ctaTitle}</h2>
            <p>{t.ctaDescription}</p>
          </div>

          <Link
            href={`/${currentLocale}/contact`}
            className="button button-white"
          >
            {t.contact} <span>↗</span>
          </Link>
        </div>
      </section>
    </>
  );
}
