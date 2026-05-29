import { Container } from "@/components/Container";
import type { Dictionary } from "@/i18n/dictionaries";

export function Process({ t }: { t: Dictionary["process"] }) {
  return (
    <section
      id="demarche"
      className="relative py-24 md:py-32 bg-moss-900 text-cream-soft overflow-hidden"
    >
      <div className="absolute inset-0 bg-topo opacity-25 pointer-events-none" aria-hidden />
      <div
        className="absolute inset-x-0 -top-32 h-96 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 80% at 50% 0%, rgba(157,171,126,0.15), transparent 70%)",
        }}
        aria-hidden
      />

      <Container className="relative">
        <header className="max-w-2xl" data-animate>
          <div className="text-[12px] uppercase tracking-[0.2em] text-moss-200/80 font-medium">
            {t.eyebrow}
          </div>
          <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3rem)] leading-[1.04] text-cream">
            {t.h2}
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-cream-soft/70">{t.p}</p>
        </header>

        <ol className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-moss-700/40">
          {t.steps.map((s, i) => (
            <li
              key={s.title}
              data-animate
              style={{ "--delay": `${i * 100}ms` } as React.CSSProperties}
              className="relative bg-moss-900 p-7 md:p-8"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-display text-[3.5rem] leading-none text-moss-300/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[11px] uppercase tracking-wider text-moss-200/60">
                  {s.duration}
                </span>
              </div>
              <h3 className="mt-6 font-display text-[1.35rem] leading-tight text-cream">
                {s.title}
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-cream-soft/70">
                {s.desc}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
