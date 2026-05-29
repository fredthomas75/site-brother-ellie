import { Container } from "@/components/Container";

const stats = [
  { value: "17", label: "régions du Québec couvertes" },
  { value: "240+", label: "dossiers MELCCFP livrés" },
  { value: "18 ans", label: "d'expérience terrain" },
  { value: "100 %", label: "labos accrédités CEAEQ" },
];

export function Credentials() {
  return (
    <section className="relative border-y border-moss-100/70 bg-cream-soft/60">
      <Container className="py-14 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              data-animate
              style={{ "--delay": `${i * 80}ms` } as React.CSSProperties}
              className="text-center md:text-left md:border-r md:border-moss-100/70 md:last:border-r-0 md:pr-4"
            >
              <div className="font-display text-[2.4rem] leading-none text-moss-700">
                {s.value}
              </div>
              <div className="mt-2.5 text-[13px] text-ink-soft leading-snug">
                {s.label}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-[12px] text-ink-muted text-center md:text-left">
          Chiffres à valider avec le consultant avant publication.
        </p>
      </Container>
    </section>
  );
}
