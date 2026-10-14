
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  locales,
  translations,
  serviceItems,
  type Locale,
} from "@/lib/i18n";

const serviceDetails = {
  en: {
    "travel-coordination": {
      title: "Travel & Tour Coordination",
      description:
        "Explore India with Japanese-speaking coordination and travel assistance tailored to your interests.",
      points: [
        "Packaged and customized tours",
        "Japanese-speaking tour coordination",
        "Hotel and transportation arrangements",
        "Cultural activities, homestays, and local experiences",
      ],
    },
    "interpretation-translation": {
      title: "Japanese Interpretation & Translation",
      description:
        "Japanese, English, and Hindi language support for business and travel.",
      points: [
        "Business meetings and factory visits",
        "Automotive and heavy industries",
        "Power, appliances, tourism, and rail projects",
        "Translation and bilingual communication",
      ],
    },
    "hotels-accommodation": {
      title: "Hotels & Service Apartments",
      description:
        "Accommodation support for Japanese visitors and expatriates.",
      points: [
        "Japanese-style and international accommodation options",
        "Long-term service apartment arrangements",
        "Support for daily living requirements",
        "Accommodation coordination based on your needs",
      ],
    },
    "car-services": {
      title: "Car & Driver Services",
      description:
        "Comfortable transportation for business travel, sightseeing, and extended stays.",
      points: [
        "Trained drivers",
        "Short-term and long-term arrangements",
        "Annual contracts on request",
        "Customer feedback and issue resolution",
      ],
    },
    "liaison-support": {
      title: "Business & Liaison Support",
      description:
        "Local coordination to help Japanese clients navigate practical requirements in India.",
      points: [
        "Local expert and consultant introductions",
        "Research and information collection",
        "Communication and coordination",
        "Support for timelines and project objectives",
      ],
    },
    "japanese-lessons": {
      title: "Japanese Language Training",
      description:
        "Practical Japanese language learning for beginners, professionals, and aspiring interpreters.",
      points: [
        "JLPT N5 and N4 preparation",
        "Conversational and survival Japanese",
        "Communication with Japanese colleagues",
        "Professional interpreter preparation",
        "Online lessons and customized home tuition on request",
      ],
    },
  },
  ja: {
    "travel-coordination": {
      title: "旅行・ツアーコーディネート",
      description:
        "日本語でのサポートを通じて、ご希望に合わせたインド旅行をお手伝いします。",
      points: [
        "パッケージツアー・オーダーメイドツアー",
        "日本語対応のツアーコーディネーター",
        "ホテル・交通手段の手配",
        "文化体験、ホームステイ、地域観光",
      ],
    },
    "interpretation-translation": {
      title: "日本語通訳・翻訳",
      description:
        "ビジネスや旅行における日本語・英語・ヒンディー語の言語サポート。",
      points: [
        "ビジネス会議・工場訪問",
        "自動車・重工業分野",
        "電力・家電・観光・鉄道分野",
        "翻訳および多言語コミュニケーション",
      ],
    },
    "hotels-accommodation": {
      title: "ホテル・サービスアパートメント",
      description:
        "インドを訪れる日本人旅行者や駐在員向けの宿泊サポート。",
      points: [
        "日本式・国際式の宿泊施設",
        "長期滞在向け住居の手配",
        "日常生活に必要なサポート",
        "ご要望に合わせた宿泊施設の調整",
      ],
    },
    "car-services": {
      title: "車両・ドライバーサービス",
      description:
        "出張、観光、長期滞在に対応する快適な移動サービス。",
      points: [
        "訓練を受けたドライバー",
        "短期・長期の車両手配",
        "年間契約のご相談",
        "お客様のご意見への迅速な対応",
      ],
    },
    "liaison-support": {
      title: "ビジネス・リエゾンサポート",
      description:
        "インドでのさまざまな手続きや現地調整をサポートします。",
      points: [
        "現地の専門家・コンサルタントの紹介",
        "調査・情報収集",
        "コミュニケーション・調整業務",
        "スケジュールと目標達成に向けた支援",
      ],
    },
    "japanese-lessons": {
      title: "日本語教育",
      description:
        "初心者からプロの通訳を目指す方まで、日本語学習をサポートします。",
      points: [
        "JLPT N5・N4対策",
        "日常会話・サバイバル日本語",
        "日本人の同僚とのコミュニケーション",
        "プロの通訳者を目指すための講座",
        "オンライン授業・ご希望に応じた家庭教師",
      ],
    },
  },
} as const;

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    serviceItems[locale].map((service) => ({
      locale,
      slug: service.slug,
    }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!locales.includes(locale as Locale)) return {};

  const details =
    serviceDetails[locale as Locale][
      slug as keyof (typeof serviceDetails)[Locale]
    ];

  return details ? { title: details.title } : {};
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  if (!locales.includes(locale as Locale)) notFound();

  const currentLocale = locale as Locale;
  const details =
    serviceDetails[currentLocale][
      slug as keyof (typeof serviceDetails)[Locale]
    ];

  if (!details) notFound();

  return (
    <section className="section">
      <div className="container detail-layout">
        <span className="eyebrow">INDO ANNAI SERVICES</span>
        <h1 className="section-title">{details.title}</h1>
        <p className="section-description">
          {details.description}
        </p>

        <div className="detail-panel">
          <h2>
            {currentLocale === "ja"
              ? "サービス内容"
              : "What We Offer"}
          </h2>
          <ul className="tour-list">
            {details.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>

          <Link
            href={`/${currentLocale}/contact`}
            className="button button-primary"
          >
            {translations[currentLocale].contact} ↗
          </Link>
        </div>

        <Link
          href={`/${currentLocale}/services`}
          className="text-link"
        >
          ← {translations[currentLocale].nav.services}
        </Link>
      </div>
    </section>
  );
}
