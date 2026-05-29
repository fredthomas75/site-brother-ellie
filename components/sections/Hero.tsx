import { Container } from "@/components/Container";
import { ArrowRight, MapPin } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries";

export function Hero({ t }: { t: Dictionary["hero"] }) {
  return (
    <section className="relative overflow-hidden bg-paper bg-grain">
      <div className="absolute inset-0 bg-topo opacity-70 pointer-events-none" aria-hidden />
      <div className="absolute inset-x-0 top-0 h-[600px] glow-moss pointer-events-none" aria-hidden />

      <Container className="relative pt-24 pb-28 md:pt-32 md:pb-36">
        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-14 items-center">
          <div data-animate>
            <div className="inline-flex items-center gap-2 rounded-full bg-moss-50 border border-moss-100 px-3 py-1 text-[12px] text-moss-700">
              <MapPin className="w-3.5 h-3.5" aria-hidden />
              {t.badge}
            </div>

            <h1 className="mt-7 font-display text-[clamp(2.6rem,5.6vw,4.5rem)] leading-[0.98] text-ink">
              {t.h1.line1}
              <br />
              {t.h1.line2}
              <br />
              <span className="italic text-moss-700">{t.h1.italic}</span>
            </h1>

            <p className="mt-7 max-w-xl text-[17px] leading-[1.65] text-ink-soft">
              {t.p}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <a
                href="#devis"
                className="group inline-flex items-center gap-2 rounded-full bg-moss-700 px-6 py-3.5 text-[15px] font-medium text-cream-soft hover:bg-moss-800 transition-colors"
              >
                {t.ctaPrimary}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full border border-moss-200 bg-cream-soft/60 px-6 py-3.5 text-[15px] font-medium text-ink hover:border-moss-400 transition-colors"
              >
                {t.ctaSecondary}
              </a>
            </div>

            <p className="mt-6 text-[13px] text-ink-muted">{t.microcopy}</p>
          </div>

          <div data-animate style={{ "--delay": "120ms" } as React.CSSProperties}>
            <HeroVisual t={t.visual} />
          </div>
        </div>
      </Container>
    </section>
  );
}

function HeroVisual({ t }: { t: Dictionary["hero"]["visual"] }) {
  return (
    <div className="relative">
      <div className="relative aspect-[5/6] rounded-2xl overflow-hidden bg-moss-900 shadow-2xl shadow-moss-900/20">
        <svg viewBox="0 0 400 480" className="absolute inset-0 w-full h-full" aria-hidden>
          <defs>
            <linearGradient id="sky" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#1f2a16" />
              <stop offset="55%" stopColor="#131c0e" />
              <stop offset="100%" stopColor="#0d1409" />
            </linearGradient>
            <linearGradient id="ridge" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#3a4a26" />
              <stop offset="100%" stopColor="#1f2a16" />
            </linearGradient>
            <pattern id="dots" width="6" height="6" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="0.6" fill="#9dab7e" opacity="0.18" />
            </pattern>
          </defs>
          <rect width="400" height="480" fill="url(#sky)" />
          <rect width="400" height="480" fill="url(#dots)" />

          <g fill="none" stroke="#5a6a47" strokeOpacity="0.45" strokeWidth="1">
            <path d="M-20 380 Q 80 340 200 360 T 420 350" />
            <path d="M-20 400 Q 80 360 200 380 T 420 370" />
            <path d="M-20 420 Q 80 380 200 400 T 420 390" />
            <path d="M-20 440 Q 80 400 200 420 T 420 410" />
            <path d="M-20 360 Q 80 320 200 340 T 420 330" />
            <path d="M-20 340 Q 80 300 200 320 T 420 310" />
          </g>

          <path
            d="M0 320 L 80 240 L 140 280 L 200 200 L 260 250 L 320 180 L 400 240 L 400 480 L 0 480 Z"
            fill="url(#ridge)"
            opacity="0.85"
          />
          <path
            d="M0 380 L 60 320 L 130 350 L 200 290 L 270 340 L 330 290 L 400 330 L 400 480 L 0 480 Z"
            fill="#2f3d20"
            opacity="0.95"
          />
          <path
            d="M0 440 L 90 390 L 170 420 L 250 380 L 330 410 L 400 380 L 400 480 L 0 480 Z"
            fill="#1f2a16"
          />

          <circle cx="290" cy="120" r="42" fill="#d8c89e" opacity="0.92" />
          <circle cx="290" cy="120" r="42" fill="#fbf8f0" opacity="0.4" />

          <g fill="#0d1409">
            <path d="M70 410 L 75 395 L 80 410 Z" />
            <path d="M100 405 L 106 387 L 112 405 Z" />
            <path d="M280 415 L 285 400 L 290 415 Z" />
            <path d="M340 412 L 346 395 L 352 412 Z" />
          </g>
        </svg>

        <div className="absolute left-5 right-5 bottom-5 flex items-end justify-between text-cream-soft">
          <div>
            <div className="text-[11px] uppercase tracking-[0.18em] text-moss-200/70">
              {t.dossierLabel}
            </div>
            <div className="font-display text-xl mt-1">{t.dossierNumber}</div>
          </div>
          <div className="text-right">
            <div className="text-[11px] uppercase tracking-[0.18em] text-moss-200/70">
              {t.statusLabel}
            </div>
            <div className="mt-1 inline-flex items-center gap-1.5 text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-moss-300" />
              {t.statusValue}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-4 -left-4 hidden sm:flex items-center gap-3 bg-cream-soft border border-moss-100 rounded-xl px-4 py-3 shadow-xl shadow-moss-900/10">
        <div className="w-9 h-9 rounded-full bg-moss-700 text-cream-soft flex items-center justify-center font-display text-lg">
          24h
        </div>
        <div>
          <div className="text-[11px] uppercase tracking-wider text-ink-muted">
            {t.badgeTitle}
          </div>
          <div className="text-[13px] text-ink font-medium leading-tight">
            {t.badgeSub}
          </div>
        </div>
      </div>
    </div>
  );
}
