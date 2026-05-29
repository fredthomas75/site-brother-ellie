import { Container } from "@/components/Container";
import {
  Layers,
  Microscope,
  Stamp,
  Sprout,
  LineChart,
  Compass,
} from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries";

const icons = [Layers, Microscope, Stamp, Sprout, LineChart, Compass];

export function Services({ t }: { t: Dictionary["services"] }) {
  return (
    <section id="services" className="relative py-24 md:py-32">
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

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-moss-100/60 border border-moss-100/60 rounded-2xl overflow-hidden">
          {t.items.map((svc, i) => {
            const Icon = icons[i] ?? Layers;
            return (
              <article
                key={svc.title}
                data-animate
                style={{ "--delay": `${(i % 3) * 80}ms` } as React.CSSProperties}
                className="group relative bg-paper p-7 md:p-9 hover:bg-cream-soft transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-lg bg-moss-50 border border-moss-100 flex items-center justify-center text-moss-700">
                    <Icon className="w-5 h-5" strokeWidth={1.5} aria-hidden />
                  </div>
                  <div className="text-[11px] uppercase tracking-wider text-ink-muted">
                    {svc.detail}
                  </div>
                </div>
                <h3 className="mt-6 font-display text-[1.4rem] leading-tight text-ink">
                  {svc.title}
                </h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-ink-soft">
                  {svc.desc}
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
