
export const locales = ["en", "ja"] as const;

export type Locale = (typeof locales)[number];

export const translations = {
  en: {
    brand: "INDO ANNAI SERVICES",
    tagline: "Your trusted Japanese-speaking partner in India",
    nav: {
      home: "Home",
      about: "About Us",
      services: "Services",
      tours: "India Tours",
      gallery: "Gallery",
      lessons: "Japanese Lessons",
      contact: "Contact",
    },
    hero: {
      eyebrow: "BRIDGING JAPAN & INDIA",
      title: "Discover India with confidence.",
      description:
        "From personalized journeys to professional interpretation, we make every India experience seamless for Japanese visitors and businesses.",
      primary: "Explore Our Services",
      secondary: "Plan Your Journey",
    },
    about: {
      eyebrow: "WELCOME TO INDO ANNAI",
      title: "India feels closer when you have the right partner.",
      description:
        "We provide Japanese-language support, customized tours, accommodation assistance, transportation, and business coordination across India.",
    },
    servicesTitle: "Services designed around you",
    servicesDescription:
      "Reliable support for travel, everyday living, language, and business in India.",
    toursTitle: "Experience the many sides of India",
    toursDescription:
      "Explore iconic destinations, discover local traditions, and enjoy journeys tailored to your interests.",
    ctaTitle: "Planning a trip or business visit to India?",
    ctaDescription:
      "Tell us what you need. Our team will help you plan the right experience.",
    contact: "Contact Us",
    learnMore: "Learn More",
    viewTours: "Explore Tours",
    footer: "Connecting Japan and India through service and understanding.",
  },

  ja: {
    brand: "インド・案内・サービス",
    tagline: "インドでの日本語ニーズを幅広くサポート",
    nav: {
      home: "ホーム",
      about: "会社概要",
      services: "サービス",
      tours: "インドツアー",
      gallery: "ギャラリー",
      lessons: "日本語レッスン",
      contact: "お問い合わせ",
    },
    hero: {
      eyebrow: "日本とインドをつなぐ",
      title: "安心して楽しむインドの旅。",
      description:
        "オーダーメイドの旅行から専門的な通訳まで、日本のお客様や企業のインドでの活動を幅広くサポートします。",
      primary: "サービスを見る",
      secondary: "旅行を相談する",
    },
    about: {
      eyebrow: "インド・案内へようこそ",
      title: "信頼できるパートナーと、もっと身近なインドへ。",
      description:
        "インド全土で、日本語対応の旅行手配、通訳・翻訳、宿泊、車両、ビジネスコーディネートなどを提供しています。",
    },
    servicesTitle: "お客様のニーズに合わせたサービス",
    servicesDescription:
      "インドでの旅行、生活、語学、ビジネスを幅広くサポートします。",
    toursTitle: "多彩なインドの魅力を体験",
    toursDescription:
      "人気の観光地から地域の文化まで、お客様のご希望に合わせた旅をご提案します。",
    ctaTitle: "インドへの旅行や出張をご検討中ですか？",
    ctaDescription:
      "ご希望をお聞かせください。お客様に合ったプランをご提案します。",
    contact: "お問い合わせ",
    learnMore: "詳しく見る",
    viewTours: "ツアーを見る",
    footer: "サービスと相互理解を通じて、日本とインドをつなぎます。",
  },
} as const;

export const serviceItems = {
  en: [
    {
      slug: "travel-coordination",
      title: "Travel & Tour Coordination",
      description:
        "Japanese-speaking coordinators, customized itineraries, and assistance throughout India.",
      icon: "✈",
    },
    {
      slug: "interpretation-translation",
      title: "Japanese Interpretation & Translation",
      description:
        "Professional language support for meetings, factories, tourism, and business.",
      icon: "文",
    },
    {
      slug: "hotels-accommodation",
      title: "Hotels & Service Apartments",
      description:
        "Accommodation support for visitors and Japanese expatriates living in India.",
      icon: "⌂",
    },
    {
      slug: "car-services",
      title: "Car & Driver Services",
      description:
        "Comfortable transportation with trained drivers for short and long stays.",
      icon: "↗",
    },
    {
      slug: "liaison-support",
      title: "Business & Liaison Support",
      description:
        "Local coordination, expert introductions, research, and communication assistance.",
      icon: "◎",
    },
    {
      slug: "japanese-lessons",
      title: "Japanese Language Training",
      description:
        "JLPT N5 and N4, conversational Japanese, and professional interpreter preparation.",
      icon: "学",
    },
  ],
  ja: [
    {
      slug: "travel-coordination",
      title: "旅行・ツアーコーディネート",
      description:
        "日本語対応スタッフによるインド全土の旅行手配とオーダーメイドツアー。",
      icon: "✈",
    },
    {
      slug: "interpretation-translation",
      title: "日本語通訳・翻訳",
      description:
        "会議、工場、観光、ビジネスなど、さまざまな場面での言語サポート。",
      icon: "文",
    },
    {
      slug: "hotels-accommodation",
      title: "ホテル・サービスアパートメント",
      description:
        "旅行者やインド駐在の日本人向けの宿泊施設探しをサポートします。",
      icon: "⌂",
    },
    {
      slug: "car-services",
      title: "車両・ドライバーサービス",
      description:
        "短期・長期滞在に対応する、経験豊富なドライバーによる送迎サービス。",
      icon: "↗",
    },
    {
      slug: "liaison-support",
      title: "ビジネス・リエゾンサポート",
      description:
        "現地調整、専門家の紹介、調査、円滑なコミュニケーションを支援します。",
      icon: "◎",
    },
    {
      slug: "japanese-lessons",
      title: "日本語教育",
      description:
        "JLPT N5・N4、日常会話、ビジネス日本語、通訳者育成講座。",
      icon: "学",
    },
  ],
} as const;
