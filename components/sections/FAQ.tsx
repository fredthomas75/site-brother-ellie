import { Container } from "@/components/Container";
import { Plus } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries";

export function FAQ({ t }: { t: Dictionary["faq"] }) {
  return (
    <section id="faq" className="relative py-24 md:py-32 bg-cream-soft/40 border-y border-moss-100/70">
      <Container className="max-w-4xl">
        <header className="text-center" data-animate>
          <div className="text-[12px] uppercase tracking-[0.2em] text-moss-700 font-medium">
            {t.eyebrow}
          </div>
          <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3rem)] leading-[1.04] text-ink">
            {t.h2}
          </h2>
        </header>

        <div className="mt-14 divide-y divide-moss-100/80 border-y border-moss-100/80">
          {t.items.map((item, i) => (
            <details
              key={item.q}
              className="group py-6"
              data-animate
              style={{ "--delay": `${i * 60}ms` } as React.CSSProperties}
            >
              <summary className="flex items-start justify-between gap-6">
                <h3 className="font-display text-[1.2rem] md:text-[1.35rem] leading-snug text-ink group-hover:text-moss-700 transition-colors">
                  {item.q}
                </h3>
                <Plus
                  className="faq-chevron mt-1 shrink-0 w-5 h-5 text-moss-700 transition-transform duration-300"
                  strokeWidth={1.5}
                  aria-hidden
                />
              </summary>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-soft max-w-3xl">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
