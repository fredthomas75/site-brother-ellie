import { Container } from "@/components/Container";

const steps = [
  {
    n: "01",
    title: "Cadrage gratuit",
    desc: "Appel de 30 minutes. On comprend votre site, vos contraintes, vos délais. Vous repartez avec un devis ferme.",
    duration: "1-2 jours",
  },
  {
    n: "02",
    title: "Terrain & laboratoire",
    desc: "Visite du site, échantillonnage selon protocoles CEAEQ, envoi en laboratoire accrédité. Vous êtes tenu informé à chaque étape.",
    duration: "1-3 semaines",
  },
  {
    n: "03",
    title: "Rapport conforme",
    desc: "Rédaction du rapport selon les normes ministérielles. Relecture interne. Livrable prêt pour dépôt au MELCCFP.",
    duration: "2-4 semaines",
  },
  {
    n: "04",
    title: "Accompagnement",
    desc: "Réponses aux commentaires du ministère, ajustements, suivi jusqu'à délivrance de l'autorisation.",
    duration: "Selon dossier",
  },
];

export function Process() {
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
            Démarche
          </div>
          <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3rem)] leading-[1.04] text-cream">
            Quatre étapes, zéro improvisation
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-cream-soft/70">
            Une méthode rodée sur 240 dossiers. Vous savez où on en est, ce qui s'en vient,
            et combien ça coûte — du premier appel jusqu'à l'autorisation finale.
          </p>
        </header>

        <ol className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-moss-700/40">
          {steps.map((s, i) => (
            <li
              key={s.n}
              data-animate
              style={{ "--delay": `${i * 100}ms` } as React.CSSProperties}
              className="relative bg-moss-900 p-7 md:p-8"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-display text-[3.5rem] leading-none text-moss-300/40">
                  {s.n}
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
