import { notFound } from "next/navigation";
import InfoPage from "@/components/InfoPage";
import { locales, type Locale } from "@/lib/i18n";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();

  const ja = locale === "ja";

  return (
    <InfoPage
      locale={locale as Locale}
      eyebrow={ja ? "会社概要" : "ABOUT INDO ANNAI"}
      title={
        ja
          ? "日本とインドをつなぐ、信頼できるパートナー"
          : "Your trusted partner for India."
      }
      description={
        ja
          ? "インド・案内・サービスは、日本人旅行者、企業、駐在員の皆様に向けて、旅行、通訳・翻訳、宿泊、移動、語学教育、現地調整などのサービスを提供しています。言葉や文化の違いを越え、お客様一人ひとりのニーズに合わせたサポートを目指しています。"
          : "INDO ANNAI SERVICE supports Japanese visitors, businesses, and expatriates in India. Our services include customized travel, interpretation, translation, accommodation, transportation, Japanese language education, and local coordination. We focus on understanding each client's needs and helping them navigate India with confidence."
      }
      items={
        ja
          ? [
              "日本語による旅行・ビジネスサポート",
              "お客様のご希望に合わせたサービス",
              "インドでの生活と業務の円滑なサポート",
            ]
          : [
              "Japanese-language travel and business assistance",
              "Services tailored to each client's requirements",
              "Practical support for living and working in India",
            ]
      }
      cta={ja ? "お問い合わせ" : "Contact Our Team"}
    />
  );
}
