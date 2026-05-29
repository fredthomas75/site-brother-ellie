import { Container } from "./Container";
import { Logo } from "./Logo";
import { siteConfig } from "@/lib/utils";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

export function Footer({
  t,
  locale,
}: {
  t: Dictionary["footer"];
  locale: Locale;
}) {
  const contactCol = {
    title: locale === "fr" ? "Contact" : "Contact",
    links: [
      { label: siteConfig.email, href: `mailto:${siteConfig.email}` },
      {
        label: siteConfig.phone,
        href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
      },
      {
        label: locale === "fr" ? "Demander un devis" : "Request a quote",
        href: "#devis",
      },
    ],
  };

  const cols = [...t.columns, contactCol];

  return (
    <footer className="relative mt-32 bg-moss-900 text-cream-soft/85 bg-grain">
      <div className="absolute inset-0 bg-topo opacity-30 pointer-events-none" />
      <Container className="relative py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo variant="cream" locale={locale} />
            <p className="mt-5 text-sm leading-relaxed max-w-xs text-cream-soft/65">
              {t.blurb}
            </p>
          </div>
          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="text-[11px] uppercase tracking-[0.18em] text-moss-200/80 mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5 text-sm">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-cream-soft/75 hover:text-cream-soft transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-moss-700/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-cream-soft/55">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. {t.copyright}
          </p>
          <p>
            {t.credits}
            <span className="ml-2 text-clay-soft">{t.creditsTodo}</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}
