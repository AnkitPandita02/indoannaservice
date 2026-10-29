import Link from "next/link";
import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import { translations } from "@/lib/i18n";

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/indoannaiservice",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M13.5 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.3V13h2.8v8h3.4Z"
        />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/indoannaiservice/",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle
          cx="12"
          cy="12"
          r="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="17.5" cy="6.8" r="1.2" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "X",
    href: "https://x.com/indoannai",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 13.9 4.8 22H1.7l7.3-8.4L1.2 2h6.5l4.5 7.5L18.9 2Zm-1.1 18h1.7L6.7 3.9H4.9L17.8 20Z"
        />
      </svg>
    ),
  },
];

export default function Footer({ locale }: { locale: Locale }) {
  const t = translations[locale];

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link href={`/${locale}`} className="footer-brand">
            <Image
              src="/images/logo.png"
              alt="INDO ANNAI SERVICES"
              width={180}
              height={60}
              className="brand-logo"
              style={{
                backgroundColor: "#ffffff",
                padding: "6px 12px",
                borderRadius: "6px",
                objectFit: "contain",
              }}
            />
          </Link>

          <p>{t.footer}</p>
          <div className="footer-social">
            <span className="footer-social-label">Follow Us</span>

            <div className="footer-social-links">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow INDO ANNAI SERVICES on ${social.name}`}
                  title={social.name}
                  className="footer-social-link"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h3>{t.nav.services}</h3>
          <Link href={`/${locale}/services`}>{t.nav.services}</Link>
          <Link href={`/${locale}/tours`}>{t.nav.tours}</Link>
          <Link href={`/${locale}/gallery`}>{t.nav.gallery}</Link>
          <Link href={`/${locale}/japanese-lessons`}>{t.nav.lessons}</Link>
        </div>

        <div>
          <h3>{t.nav.contact}</h3>
          <a href="mailto:surender.gupta@indoannaiservice.com">
            surender.gupta@indoannaiservice.com
          </a>
          <a href="tel:+919625578934">+91 96255 78934</a>
          <a
            href="https://share.google/zF33F38L7UL4kvpSI"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View INDO ANNAI SERVICES address on Google Maps"
            className="footer-address"
          >
            Plot No. D-361-362 KH No. 185, 3rd Floor
            <br />
            Indra Park, Najafgarh New Delhi, South West Delhi
            <br />
            Delhi – 110043
            <br />
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 INDO ANNAI SERVICES</span>

        <span>India · 日本</span>
      </div>

      {/* Social media links at the bottom of the footer */}
    </footer>
  );
}
