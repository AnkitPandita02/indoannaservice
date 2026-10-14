
"use client";

import { usePathname, useRouter } from "next/navigation";
import type { Locale } from "@/lib/i18n";

export default function LanguageSwitcher({
  locale,
}: {
  locale: Locale;
}) {
  const pathname = usePathname();
  const router = useRouter();

  function changeLanguage(nextLocale: Locale) {
    const segments = pathname.split("/");
    segments[1] = nextLocale;

    router.push(segments.join("/") || `/${nextLocale}`);
  }

  return (
    <div className="language-switcher" aria-label="Language">
      <button
        type="button"
        aria-pressed={locale === "en"}
        className={locale === "en" ? "active" : ""}
        onClick={() => changeLanguage("en")}
      >
        EN
      </button>

      <span aria-hidden="true">/</span>

      <button
        type="button"
        aria-pressed={locale === "ja"}
        className={locale === "ja" ? "active" : ""}
        onClick={() => changeLanguage("ja")}
      >
        日本語
      </button>
    </div>
  );
}
