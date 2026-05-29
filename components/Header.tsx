import { Container } from "./Container";
import { Logo } from "./Logo";
import { LanguageToggle } from "./LanguageToggle";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

export function Header({
  t,
  locale,
}: {
  t: Dictionary["nav"];
  locale: Locale;
}) {
  const nav = [
    { href: "#services", label: t.services },
    { href: "#demarche", label: t.process },
    { href: "#engagements", label: t.commitments },
    { href: "#faq", label: t.faq },
  ];

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-[color-mix(in_oklab,var(--paper)_82%,transparent)] border-b border-moss-100/70">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Logo locale={locale} ariaLabel={t.home} />
        <nav
          className="hidden md:flex items-center gap-7 text-[13px] text-ink-soft"
          aria-label={locale === "fr" ? "Navigation principale" : "Main navigation"}
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-moss-700 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <LanguageToggle locale={locale} />
          <a
            href="#devis"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-moss-700 px-4 py-2 text-[13px] font-medium text-cream-soft hover:bg-moss-800 transition-colors"
          >
            {t.cta}
            <span aria-hidden>→</span>
          </a>
        </div>
      </Container>
    </header>
  );
}
