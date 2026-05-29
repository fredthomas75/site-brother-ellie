import { Container } from "@/components/Container";
import { Plus } from "lucide-react";

const qa = [
  {
    q: "Couvrez-vous toutes les régions du Québec?",
    a: "Oui. Nous intervenons partout — Bas-Saint-Laurent, Saguenay–Lac-Saint-Jean, Capitale-Nationale, Mauricie, Estrie, Montréal, Outaouais, Abitibi-Témiscamingue, Côte-Nord, Nord-du-Québec, Gaspésie–Îles-de-la-Madeleine, Chaudière-Appalaches, Laval, Lanaudière, Laurentides, Montérégie, Centre-du-Québec. Les frais de déplacement sont annoncés dans le devis initial.",
  },
  {
    q: "Combien de temps prend une caractérisation Phase I?",
    a: "Entre 3 et 5 semaines pour la majorité des dossiers, du mandat au rapport déposé. Les délais varient selon la disponibilité des archives municipales et la complexité historique du site.",
  },
  {
    q: "Pouvez-vous accompagner une demande d'autorisation au MELCCFP?",
    a: "Oui. Nous préparons le dossier complet (formulaires REAFIE, art. 22 LQE, avis de projet) et nous prenons en charge les échanges avec les analystes du ministère jusqu'à la délivrance.",
  },
  {
    q: "Avec quels laboratoires travaillez-vous?",
    a: "Uniquement avec des laboratoires accrédités par le CEAEQ (Centre d'expertise en analyse environnementale du Québec). Les rapports d'analyse originaux sont systématiquement annexés à nos rapports.",
  },
  {
    q: "Comment se passe la facturation?",
    a: "Forfait fixe pour les Phases I, taux horaire transparent + débours laboratoire pour les Phases II/III. Un acompte de 30 % au démarrage, le solde à la livraison. Pas de frais cachés.",
  },
  {
    q: "Que faut-il fournir pour démarrer un mandat?",
    a: "Le titre de propriété ou un mandat du propriétaire, les plans du site si disponibles, et toute documentation pertinente (anciens rapports, certificats antérieurs). Si vous n'avez rien : on cherche pour vous.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-24 md:py-32 bg-cream-soft/40 border-y border-moss-100/70">
      <Container className="max-w-4xl">
        <header className="text-center" data-animate>
          <div className="text-[12px] uppercase tracking-[0.2em] text-moss-700 font-medium">
            Questions fréquentes
          </div>
          <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3rem)] leading-[1.04] text-ink">
            Ce qu'on nous demande
          </h2>
        </header>

        <div className="mt-14 divide-y divide-moss-100/80 border-y border-moss-100/80">
          {qa.map((item, i) => (
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
