import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/utils";
import { locales } from "@/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return locales.flatMap((locale) => {
    const root = `${siteConfig.url}/${locale}`;
    const sections = ["services", "demarche", "engagements", "faq"];

    const alternates = {
      languages: Object.fromEntries(
        locales.map((l) => [
          l === "fr" ? "fr-CA" : "en-CA",
          `${siteConfig.url}/${l}`,
        ]),
      ),
    };

    return [
      {
        url: root,
        lastModified,
        changeFrequency: "monthly" as const,
        priority: 1,
        alternates,
      },
      ...sections.map((s) => ({
        url: `${root}/#${s}`,
        lastModified,
        changeFrequency: "monthly" as const,
        priority: 0.7,
      })),
    ];
  });
}
