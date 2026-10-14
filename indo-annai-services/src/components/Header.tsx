
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { translations } from "@/lib/i18n";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header({ locale }: { locale: Locale }) {
  const t = translations[locale];

  const navItems = [
    { href: "", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/services", label: t.nav.services },
    { href: "/tours", label: t.nav.tours },
    { href: "/japanese-lessons", label: t.nav.lessons },
  ];

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href={`/${locale}`} className="brand">
          <span className="brand-mark">A</span>
          <span className="brand-copy">
            <strong>INDO ANNAI</strong>
            <small>SERVICES · インド・案内</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={`/${locale}${item.href}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <LanguageSwitcher locale={locale} />
          <Link
            className="button button-primary header-contact"
            href={`/${locale}/contact`}
          >
            {t.contact}
          </Link>
        </div>
      </div>
    </header>
  );
}
