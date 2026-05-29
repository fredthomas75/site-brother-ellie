import { Container } from "@/components/Container";
import { Clock, Eye, Map, ShieldCheck } from "lucide-react";

const items = [
  {
    icon: Clock,
    title: "Délais respectés",
    desc: "Calendrier ferme convenu au devis. Si on prend du retard, on vous l'écrit avant la deadline — jamais après.",
  },
  {
    icon: Eye,
    title: "Transparence totale",
    desc: "Vous voyez les coûts de labo, les heures terrain, les résultats bruts. Pas de boîte noire, pas de surfacturation.",
  },
  {
    icon: Map,
    title: "Couverture provinciale",
    desc: "De Sept-Îles à Gatineau, du Témiscamingue à la Gaspésie. Frais de déplacement annoncés d'avance, pas en bonus.",
  },
  {
    icon: ShieldCheck,
    title: "Conformité garantie",
    desc: "Si un rapport est refusé par le MELCCFP pour un motif technique de notre fait, on le révise sans frais.",
  },
];

export function Commitments() {
  return (
    <section id="engagements" className="relative py-24 md:py-32">
      <Container>
        <header className="max-w-2xl" data-animate>
          <div className="text-[12px] uppercase tracking-[0.2em] text-moss-700 font-medium">
            Engagements
          </div>
          <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3rem)] leading-[1.04] text-ink">
            Ce qu'on tient — par écrit
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-ink-soft">
            Quatre engagements concrets, inscrits au contrat. Pas de promesse marketing :
            des clauses que vous pouvez nous opposer.
          </p>
        </header>

        <div className="mt-14 grid md:grid-cols-2 gap-5">
          {items.map((it, i) => (
            <article
              key={it.title}
              data-animate
              style={{ "--delay": `${(i % 2) * 80}ms` } as React.CSSProperties}
              className="group relative rounded-2xl border border-moss-100 bg-cream-soft/40 p-7 md:p-8 hover:border-moss-300 transition-colors"
            >
              <div className="flex items-start gap-5">
                <div className="shrink-0 w-12 h-12 rounded-full bg-moss-700 text-cream-soft flex items-center justify-center">
                  <it.icon className="w-5 h-5" strokeWidth={1.6} aria-hidden />
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
          ))}
        </div>
      </Container>
    </section>
  );
}
