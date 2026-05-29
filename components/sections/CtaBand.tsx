import { Container } from "@/components/Container";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { siteConfig } from "@/lib/utils";
import type { Dictionary } from "@/i18n/dictionaries";

export function CtaBand({ t }: { t: Dictionary["cta"] }) {
  return (
    <section
      id="devis"
      className="relative py-24 md:py-32 overflow-hidden bg-paper"
    >
      <div className="absolute inset-0 bg-topo opacity-50 pointer-events-none" aria-hidden />

      <Container className="relative max-w-4xl">
        <div
          data-animate
          className="relative rounded-3xl bg-moss-700 text-cream-soft p-10 md:p-16 overflow-hidden"
        >
          <div
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{
              background:
                "radial-gradient(circle at 80% 0%, rgba(216,200,158,0.35), transparent 50%)",
            }}
            aria-hidden
          />
          <div className="absolute inset-0 bg-topo opacity-15 pointer-events-none" aria-hidden />

          <div className="relative">
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.02] text-cream max-w-2xl">
              {t.h2}
            </h2>
            <p className="mt-6 max-w-xl text-[16.5px] leading-relaxed text-cream-soft/85">
              {t.p}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <a
                href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(t.h2)}`}
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-cream-soft text-moss-900 px-6 py-3.5 text-[15px] font-medium hover:bg-cream transition-colors"
              >
                <Mail className="w-4 h-4" strokeWidth={1.8} aria-hidden />
                {siteConfig.email}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
              </a>
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center justify-center gap-2.5 rounded-full border border-cream-soft/30 text-cream-soft px-6 py-3.5 text-[15px] font-medium hover:bg-moss-800/50 transition-colors"
              >
                <Phone className="w-4 h-4" strokeWidth={1.8} aria-hidden />
                {siteConfig.phone}
              </a>
            </div>

            <p className="mt-8 text-[13px] text-cream-soft/55">{t.microcopy}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
