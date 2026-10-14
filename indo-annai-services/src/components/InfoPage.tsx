
import Link from "next/link";
import type { Locale } from "@/lib/i18n";

type Props = {
  locale: Locale;
  eyebrow: string;
  title: string;
  description: string;
  items?: string[];
  cta?: string;
};

export default function InfoPage({
  locale,
  eyebrow,
  title,
  description,
  items = [],
  cta = "Contact Us",
}: Props) {
  return (
    <section className="section">
      <div className="container detail-layout">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="section-title">{title}</h1>
        <p className="section-description">{description}</p>

        {items.length > 0 && (
          <div className="detail-panel">
            <ul className="tour-list">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        <Link
          href={`/${locale}/contact`}
          className="button button-primary"
        >
          {cta} ↗
        </Link>
      </div>
    </section>
  );
}
