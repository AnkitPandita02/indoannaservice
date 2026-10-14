
import { notFound } from "next/navigation";
import InfoPage from "@/components/InfoPage";
import { locales, type Locale } from "@/lib/i18n";

export default async function ToursPage({
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
      eyebrow={ja ? "インド旅行" : "EXPLORE INDIA"}
      title={ja ? "あなたに合ったインドの旅" : "India, your way."}
      description={
        ja
          ? "人気の観光ルートから文化体験まで、ご希望に合わせた旅行プランをご提案します。日本語対応スタッフによるサポートもご相談いただけます。"
          : "Discover India's famous landmarks, spiritual destinations, vibrant cities, and local traditions. Choose a classic itinerary or ask us to tailor a journey around your interests."
      }
      items={
        ja
          ? [
              "ゴールデントライアングル：デリー・ジャイプール・アグラ",
              "ガンガーと歴史文化：デリー・アグラ・バラナシ",
              "自然とヨガ：デリー・ハリドワール・リシケシュ",
              "仏教文化と山岳：アムリトサル・ダラムシャーラー",
              "オーダーメイドツアー、ホームステイ、伝統的な村の訪問",
              "ヨガ、家庭料理、寺院巡りなどの文化体験",
            ]
          : [
              "Golden Triangle: Delhi, Jaipur, and Agra",
              "Ganga and Heritage: Delhi, Agra, and Varanasi",
              "Nature and Yoga: Delhi, Haridwar, and Rishikesh",
              "Buddhist Heritage and Mountains: Amritsar and Dharamshala",
              "Customized tours, homestays, and traditional village visits",
              "Cultural experiences including yoga, cooking, and temple visits",
            ]
      }
      cta={ja ? "ツアーを相談する" : "Plan Your Tour"}
    />
  );
}
