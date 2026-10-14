
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceCard from "@/components/ServiceCard";
import {
  locales,
  translations,
  serviceItems,
  type Locale,
} from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) return {};

  return {
    title: locale === "ja" ? "サービス一覧" : "Our Services",
    description: translations[locale as Locale].servicesDescription,
  };
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) notFound();

  const currentLocale = locale as Locale;
  const t = translations[currentLocale];

  return (
    <section className="section services-section">
      <div className="container">
        <span className="eyebrow">OUR EXPERTISE</span>
        <h1 className="section-title">{t.servicesTitle}</h1>
        <p className="section-description">
          {t.servicesDescription}
        </p>

        <div className="services-grid" style={{ marginTop: 40 }}>
          {serviceItems[currentLocale].map((service) => (
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
  );
}
