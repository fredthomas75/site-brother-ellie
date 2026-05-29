import { notFound } from "next/navigation";
import { Hero } from "@/components/sections/Hero";
import { Credentials } from "@/components/sections/Credentials";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Commitments } from "@/components/sections/Commitments";
import { FAQ } from "@/components/sections/FAQ";
import { CtaBand } from "@/components/sections/CtaBand";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export default async function LocaleHome({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const t = getDictionary(locale);

  return (
    <>
      <Hero t={t.hero} />
      <Credentials t={t.credentials} />
      <Services t={t.services} />
      <Process t={t.process} />
      <Commitments t={t.commitments} />
      <FAQ t={t.faq} />
      <CtaBand t={t.cta} />
    </>
  );
}
