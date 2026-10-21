import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { locales, type Locale } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Contact",
};

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();

  const ja = locale === "ja";

  return (
    <section className="section">
      <div className="container contact-grid">
        <div>
          <span className="eyebrow">
            {ja ? "お問い合わせ" : "GET IN TOUCH"}
          </span>

          <h1 className="section-title">
            {ja
              ? "インドでのご予定をお聞かせください。"
              : "Let's make your India experience easier."}
          </h1>

          <p className="section-description">
            {ja
              ? "旅行、通訳、宿泊、ビジネス、日本語レッスンなど、ご希望のサービスについてお気軽にお問い合わせください。"
              : "Tell us about your travel, interpretation, accommodation, business support, or Japanese learning requirements."}
          </p>
        </div>

        <div className="detail-panel contact-panel">
          <span className="eyebrow">{ja ? "担当者" : "YOUR CONTACT"}</span>

          <h2>Surender Gupta</h2>
          <p>{ja ? "英語・日本語対応" : "English & Japanese speaking"}</p>

          <div className="contact-detail">
            <span>Email</span>
            <a href="mailto:surender.gupta@indoannaiservice.com">
              surender.gupta@indoannaiservice.com
            </a>
          </div>

          <div className="contact-detail">
            <span>Phone</span>
            <a href="tel:+919625578934">+91 96255 78934</a>
          </div>

          <div className="contact-detail">
            <span>LINE ID</span>
            <strong>sonugupta18</strong>
          </div>

          <a
            href="mailto:surender.gupta@indoannaiservice.com?subject=INDO%20ANNAI%20SERVICES%20Enquiry"
            className="button button-primary"
          >
            {ja ? "メールで問い合わせる" : "Send an Email"} ↗
          </a>
        </div>
      </div>
    </section>
  );
}
