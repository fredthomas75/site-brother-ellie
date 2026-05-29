import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HtmlLang } from "@/components/HtmlLang";
import { siteConfig } from "@/lib/utils";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const locale = raw as Locale;
  const t = getDictionary(locale);

  return {
    title: t.meta.title,
    description: t.meta.description,
    openGraph: {
      type: "website",
      locale: locale === "fr" ? "fr_CA" : "en_CA",
      url: `${siteConfig.url}/${locale}`,
      title: t.meta.title,
      description: t.meta.description,
      siteName: siteConfig.name,
      images: [{ url: `/${locale}/opengraph-image`, width: 1200, height: 630, alt: t.meta.ogAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: t.meta.title,
      description: t.meta.description,
      images: [`/${locale}/twitter-image`],
    },
    alternates: {
      canonical: `${siteConfig.url}/${locale}`,
      languages: {
        "fr-CA": `${siteConfig.url}/fr`,
        "en-CA": `${siteConfig.url}/en`,
        "x-default": `${siteConfig.url}/fr`,
      },
    },
    robots: { index: true, follow: true },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const t = getDictionary(locale);

  return (
    <div lang={locale === "fr" ? "fr-CA" : "en-CA"} className="contents">
      <HtmlLang locale={locale} />
      <Header t={t.nav} locale={locale} />
      <main className="flex-1">{children}</main>
      <Footer t={t.footer} locale={locale} />
    </div>
  );
}
