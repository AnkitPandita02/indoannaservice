import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { translations } from "@/lib/i18n";

export default function Footer({ locale }: { locale: Locale }) {
  const t = translations[locale];

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link href={`/${locale}`} className="footer-brand">
            INDO ANNAI SERVICES
          </Link>
          <p>{t.footer}</p>
        </div>

        <div>
          <h3>{t.nav.services}</h3>
          <Link href={`/${locale}/services`}>{t.nav.services}</Link>
          <Link href={`/${locale}/tours`}>{t.nav.tours}</Link>
          <Link href={`/${locale}/japanese-lessons`}>{t.nav.lessons}</Link>
        </div>

        <div>
          <h3>{t.nav.contact}</h3>
          <a href="mailto:Surender.gupta@indoannai.com">
            Surender.gupta@indoannai.com
          </a>
          <a href="tel:+919625578934">+91 96255 78934</a>
          <a href="https://indoannai.com">indoannai.com</a>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 INDO ANNAI SERVICES</span>
        <span>India · 日本</span>
      </div>
    </footer>
  );
}
