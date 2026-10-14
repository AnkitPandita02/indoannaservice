
import Link from "next/link";
import type { Locale } from "@/lib/i18n";

type Props = {
  locale: Locale;
  slug: string;
  title: string;
  description: string;
  icon: string;
  learnMore: string;
};

export default function ServiceCard({
  locale,
  slug,
  title,
  description,
  icon,
  learnMore,
}: Props) {
  return (
    <article className="service-card">
      <div className="service-icon" aria-hidden="true">
        {icon}
      </div>

      <h3>{title}</h3>
      <p>{description}</p>

      <Link
        className="text-link"
        href={`/${locale}/services/${slug}`}
      >
        {learnMore} <span aria-hidden="true">↗</span>
      </Link>
    </article>
  );
}
