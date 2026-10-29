import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { locales, type Locale } from "@/lib/i18n";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact INDO ANNAI SERVICES for travel, tours, interpretation, accommodation, business support, and Japanese lessons.",
};

const LINE_URL = "https://line.me/ti/p/Awn1mKdYQv";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const ja = locale === "ja";

  return (
    <section className="section">
      <div className="container contact-grid">
        <div className="contact-intro">
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

          <div className="line-contact">
            <div className="line-contact-content">
              <span className="eyebrow">
                {ja ? "LINEでお問い合わせ" : "CONTACT US ON LINE"}
              </span>

              <h2>
                {ja
                  ? "LINEでお気軽にご連絡ください"
                  : "Let's connect on LINE"}
              </h2>

              <p>
                {ja
                  ? "QRコードをスキャンするか、下のボタンからLINEで友だち追加してください。"
                  : "Scan the QR code or use the button below to connect with us directly on LINE."}
              </p>

              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="line-contact-button"
              >
                {ja ? "LINEで友だち追加" : "Connect with us on LINE"}
                <span aria-hidden="true">↗</span>
              </a>
            </div>

            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="line-qr-link"
              aria-label={
                ja
                  ? "LINEを開いて友だち追加する"
                  : "Open LINE to add us as a contact"
              }
            >
              <Image
                src="/images/line-qr.jpeg"
                alt={
                  ja
                    ? "INDO ANNAI SERVICESのLINE QRコード"
                    : "INDO ANNAI SERVICES LINE QR code"
                }
                width={240}
                height={240}
                className="line-qr-image"
              />
            </a>
          </div>
        </div>

        <ContactForm ja={ja} />
      </div>
    </section>
  );
}