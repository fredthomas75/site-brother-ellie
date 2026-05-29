"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

export function LanguageToggle({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const [hash, setHash] = useState("");

  useEffect(() => {
    setHash(window.location.hash);
    const onHash = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const target = (l: Locale) => {
    const rest = pathname.replace(/^\/(fr|en)/, "") || "/";
    const base = `/${l}${rest === "/" ? "" : rest}`;
    return `${base}${hash}`;
  };

  const Item = ({ l }: { l: Locale }) => {
    const isActive = l === locale;
    if (isActive) {
      return (
        <span
          aria-current="true"
          className="px-2.5 py-1 text-[12px] font-medium text-moss-900 bg-moss-100 rounded-full"
        >
          {l.toUpperCase()}
        </span>
      );
    }
    return (
      <Link
        href={target(l)}
        scroll={false}
        prefetch
        className="px-2.5 py-1 text-[12px] font-medium text-ink-muted hover:text-moss-700 rounded-full transition-colors"
        aria-label={l === "fr" ? "Passer en français" : "Switch to English"}
      >
        {l.toUpperCase()}
      </Link>
    );
  };

  return (
    <div
      role="group"
      aria-label={locale === "fr" ? "Langue" : "Language"}
      className={cn(
        "inline-flex items-center gap-0.5 rounded-full border border-moss-100 bg-cream-soft/70 p-0.5",
      )}
    >
      <Item l="fr" />
      <Item l="en" />
    </div>
  );
}
