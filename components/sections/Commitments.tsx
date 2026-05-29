import { Container } from "@/components/Container";
import { Clock, Eye, Map, ShieldCheck } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries";

const icons = [Clock, Eye, Map, ShieldCheck];

export function Commitments({ t }: { t: Dictionary["commitments"] }) {
  return (
    <section id="engagements" className="relative py-24 md:py-32">
      <Container>
        <header className="max-w-2xl" data-animate>
          <div className="text-[12px] uppercase tracking-[0.2em] text-moss-700 font-medium">
            {t.eyebrow}
          </div>
          <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3rem)] leading-[1.04] text-ink">
            {t.h2}
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-ink-soft">{t.p}</p>
        </header>

        <div className="mt-14 grid md:grid-cols-2 gap-5">
          {t.items.map((it, i) => {
            const Icon = icons[i] ?? Clock;
            return (
              <article
                key={it.title}
                data-animate
                style={{ "--delay": `${(i % 2) * 80}ms` } as React.CSSProperties}
                className="group relative rounded-2xl border border-moss-100 bg-cream-soft/40 p-7 md:p-8 hover:border-moss-300 transition-colors"
              >
                <div className="flex items-start gap-5">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-moss-700 text-cream-soft flex items-center justify-center">
                    <Icon className="w-5 h-5" strokeWidth={1.6} aria-hidden />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-[1.4rem] leading-tight text-ink">
                      {it.title}
                    </h3>
                    <p className="mt-2.5 text-[15px] leading-relaxed text-ink-soft">
                      {it.desc}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
