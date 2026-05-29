import { Container } from "@/components/Container";
import {
  Layers,
  Microscope,
  Stamp,
  Sprout,
  LineChart,
  Compass,
} from "lucide-react";

const services = [
  {
    icon: Layers,
    title: "Caractérisation Phase I",
    desc: "Revue documentaire, historique du site, identification des sources potentielles de contamination.",
    detail: "Conforme CSA Z768",
  },
  {
    icon: Microscope,
    title: "Caractérisation Phase II / III",
    desc: "Échantillonnage de sols, eaux souterraines et matériaux. Analyses en laboratoires CEAEQ.",
    detail: "Sols, eau, air, sédiments",
  },
  {
    icon: Stamp,
    title: "Demandes d'autorisation",
    desc: "Préparation des dossiers REAFIE, certificats d'autorisation (art. 22), avis de projet.",
    detail: "MELCCFP · LQE",
  },
  {
    icon: Sprout,
    title: "Plans de réhabilitation",
    desc: "Élaboration et suivi des plans pour la réhabilitation des terrains contaminés.",
    detail: "Critères A-B-C",
  },
  {
    icon: LineChart,
    title: "Suivi & rapports",
    desc: "Suivi environnemental, rapports annuels de conformité, accompagnement post-autorisation.",
    detail: "Rapports clés en main",
  },
  {
    icon: Compass,
    title: "Études d'impact (EIE)",
    desc: "Études d'impact pour projets soumis au BAPE. Cadrage, biophysique, social, mesures d'atténuation.",
    detail: "BAPE · Loi sur la qualité de l'environnement",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <Container>
        <header className="max-w-2xl" data-animate>
          <div className="text-[12px] uppercase tracking-[0.2em] text-moss-700 font-medium">
            Services
          </div>
          <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3rem)] leading-[1.04] text-ink">
            Six expertises au service de vos dossiers
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-ink-soft">
            Du diagnostic terrain à l'accompagnement réglementaire — un seul interlocuteur,
            des livrables conformes, des délais tenus.
          </p>
        </header>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-moss-100/60 border border-moss-100/60 rounded-2xl overflow-hidden">
          {services.map((svc, i) => (
            <article
              key={svc.title}
              data-animate
              style={{ "--delay": `${(i % 3) * 80}ms` } as React.CSSProperties}
              className="group relative bg-paper p-7 md:p-9 hover:bg-cream-soft transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-lg bg-moss-50 border border-moss-100 flex items-center justify-center text-moss-700">
                  <svc.icon className="w-5 h-5" strokeWidth={1.5} aria-hidden />
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
          ))}
        </div>
      </Container>
    </section>
  );
}
