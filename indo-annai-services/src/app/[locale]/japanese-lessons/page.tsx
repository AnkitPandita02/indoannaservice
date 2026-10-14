
import { notFound } from "next/navigation";
import InfoPage from "@/components/InfoPage";
import { locales, type Locale } from "@/lib/i18n";

export default async function JapaneseLessonsPage({
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
      eyebrow={ja ? "日本語レッスン" : "LEARN JAPANESE"}
      title={
        ja
          ? "日本語を学び、次のステップへ"
          : "Learn Japanese with purpose."
      }
      description={
        ja
          ? "初心者からビジネスで日本語を使う方まで、目標に合わせたレッスンをご案内します。"
          : "Build your Japanese language skills with lessons designed for beginners, JLPT candidates, working professionals, and aspiring interpreters."
      }
      items={
        ja
          ? [
              "JLPT N5・N4試験対策",
              "日常会話・サバイバル日本語",
              "日本人の同僚とのコミュニケーション",
              "プロの通訳者を目指す方向けの実践講座",
              "オンラインレッスン、必要に応じた家庭教師",
            ]
          : [
              "JLPT N5 and N4 preparation",
              "Conversational and survival Japanese",
              "Communication with Japanese colleagues",
              "Practical training for aspiring professional interpreters",
              "Online classes and home tuition on request",
            ]
      }
      cta={ja ? "レッスンについて問い合わせる" : "Enquire About Lessons"}
    />
  );
}
