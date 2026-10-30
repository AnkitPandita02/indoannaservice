"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import { translations } from "@/lib/i18n";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header({ locale }: { locale: Locale }) {
  const t = translations[locale];

  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { href: "", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/gallery", label: t.nav.gallery },
    { href: "/services", label: t.nav.services },
    { href: "/tours", label: t.nav.tours },
    { href: "/japanese-lessons", label: t.nav.lessons },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        {/* Logo */}
        <Link href={`/${locale}`} className="brand" onClick={closeMenu}>
          <Image
            src="/images/logo.png"
            alt="IINDO ANNAI SERVICES"
            width={180}
            height={60}
            priority
            className="brand-logo"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={`/${locale}${item.href}`}>
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="header-actions">
          <LanguageSwitcher locale={locale} />

          <Link
            className="button button-primary header-contact"
            href={`/${locale}/contact`}
          >
            {t.contact}
          </Link>
        </div>

        {/* Hamburger Button */}
        <button
          className={`hamburger ${menuOpen ? "active" : ""}`}
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        className={`mobile-menu ${menuOpen ? "open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Mobile navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={`/${locale}${item.href}`}
              onClick={closeMenu}
              tabIndex={menuOpen ? 0 : -1}
            >
              {item.label}
            </Link>
          ))}

          <div className="mobile-menu-actions">
            <LanguageSwitcher locale={locale} />

            <Link
              className="button button-primary"
              href={`/${locale}/contact`}
              onClick={closeMenu}
              tabIndex={menuOpen ? 0 : -1}
            >
              {t.contact}
            </Link>
          </div>
        </nav>
      </div>

      {/* Background overlay */}
      {menuOpen && <div className="mobile-overlay" onClick={closeMenu} />}
    </header>
  );
}
