import type { Locale } from "./config";

export type Dictionary = {
  meta: { title: string; description: string; ogAlt: string };
  nav: {
    services: string;
    process: string;
    commitments: string;
    faq: string;
    cta: string;
    home: string;
  };
  hero: {
    badge: string;
    h1: { line1: string; line2: string; italic: string };
    p: string;
    ctaPrimary: string;
    ctaSecondary: string;
    microcopy: string;
    visual: {
      dossierLabel: string;
      dossierNumber: string;
      statusLabel: string;
      statusValue: string;
      badgeTitle: string;
      badgeSub: string;
    };
  };
  credentials: {
    stats: { value: string; label: string }[];
    disclaimer: string;
  };
  services: {
    eyebrow: string;
    h2: string;
    p: string;
    items: { title: string; desc: string; detail: string }[];
  };
  process: {
    eyebrow: string;
    h2: string;
    p: string;
    steps: { title: string; desc: string; duration: string }[];
  };
  commitments: {
    eyebrow: string;
    h2: string;
    p: string;
    items: { title: string; desc: string }[];
  };
  faq: {
    eyebrow: string;
    h2: string;
    items: { q: string; a: string }[];
  };
  cta: {
    h2: string;
    p: string;
    microcopy: string;
  };
  footer: {
    blurb: string;
    columns: { title: string; links: { label: string; href: string }[] }[];
    copyright: string;
    credits: string;
    creditsTodo: string;
  };
  toggle: { current: string; switchTo: string };
};

export const dictionaries: Record<Locale, Dictionary> = {
  fr: {
    meta: {
      title: "Brother Ellie — Études environnementales partout au Québec",
      description:
        "Caractérisation de sites, études d'impact, demandes d'autorisation MELCCFP. Dossiers rigoureux pour municipalités et organismes publics.",
      ogAlt: "Brother Ellie — Études environnementales partout au Québec",
    },
    nav: {
      services: "Services",
      process: "Démarche",
      commitments: "Engagements",
      faq: "FAQ",
      cta: "Demander un devis",
      home: "Brother Ellie — accueil",
    },
    hero: {
      badge: "Service partout au Québec — Côte-Nord, Gaspésie, Abitibi inclus",
      h1: { line1: "Études", line2: "environnementales", italic: "rigoureuses." },
      p: "Caractérisation de sites, études d'impact, demandes d'autorisation MELCCFP. Pour municipalités et organismes publics qui veulent un dossier solide — et zéro mauvaise surprise au ministère.",
      ctaPrimary: "Demander un devis",
      ctaSecondary: "Voir les services",
      microcopy: "Réponse sous 24 heures ouvrables · Devis gratuit",
      visual: {
        dossierLabel: "Dossier MELCCFP",
        dossierNumber: "№ 2026-0142",
        statusLabel: "Statut",
        statusValue: "Conforme",
        badgeTitle: "Première réponse",
        badgeSub: "Sous 24 heures ouvrables",
      },
    },
    credentials: {
      stats: [
        { value: "17", label: "régions du Québec couvertes" },
        { value: "240+", label: "dossiers MELCCFP livrés" },
        { value: "18 ans", label: "d'expérience terrain" },
        { value: "100 %", label: "labos accrédités CEAEQ" },
      ],
      disclaimer: "Chiffres à valider avec le consultant avant publication.",
    },
    services: {
      eyebrow: "Services",
      h2: "Six expertises au service de vos dossiers",
      p: "Du diagnostic terrain à l'accompagnement réglementaire — un seul interlocuteur, des livrables conformes, des délais tenus.",
      items: [
        {
          title: "Caractérisation Phase I",
          desc: "Revue documentaire, historique du site, identification des sources potentielles de contamination.",
          detail: "Conforme CSA Z768",
        },
        {
          title: "Caractérisation Phase II / III",
          desc: "Échantillonnage de sols, eaux souterraines et matériaux. Analyses en laboratoires CEAEQ.",
          detail: "Sols, eau, air, sédiments",
        },
        {
          title: "Demandes d'autorisation",
          desc: "Préparation des dossiers REAFIE, certificats d'autorisation (art. 22), avis de projet.",
          detail: "MELCCFP · LQE",
        },
        {
          title: "Plans de réhabilitation",
          desc: "Élaboration et suivi des plans pour la réhabilitation des terrains contaminés.",
          detail: "Critères A-B-C",
        },
        {
          title: "Suivi & rapports",
          desc: "Suivi environnemental, rapports annuels de conformité, accompagnement post-autorisation.",
          detail: "Rapports clés en main",
        },
        {
          title: "Études d'impact (EIE)",
          desc: "Études d'impact pour projets soumis au BAPE. Cadrage, biophysique, social, mesures d'atténuation.",
          detail: "BAPE · Loi sur la qualité de l'environnement",
        },
      ],
    },
    process: {
      eyebrow: "Démarche",
      h2: "Quatre étapes, zéro improvisation",
      p: "Une méthode rodée sur 240 dossiers. Vous savez où on en est, ce qui s'en vient, et combien ça coûte — du premier appel jusqu'à l'autorisation finale.",
      steps: [
        {
          title: "Cadrage gratuit",
          desc: "Appel de 30 minutes. On comprend votre site, vos contraintes, vos délais. Vous repartez avec un devis ferme.",
          duration: "1-2 jours",
        },
        {
          title: "Terrain & laboratoire",
          desc: "Visite du site, échantillonnage selon protocoles CEAEQ, envoi en laboratoire accrédité. Vous êtes tenu informé à chaque étape.",
          duration: "1-3 semaines",
        },
        {
          title: "Rapport conforme",
          desc: "Rédaction du rapport selon les normes ministérielles. Relecture interne. Livrable prêt pour dépôt au MELCCFP.",
          duration: "2-4 semaines",
        },
        {
          title: "Accompagnement",
          desc: "Réponses aux commentaires du ministère, ajustements, suivi jusqu'à délivrance de l'autorisation.",
          duration: "Selon dossier",
        },
      ],
    },
    commitments: {
      eyebrow: "Engagements",
      h2: "Ce qu'on tient — par écrit",
      p: "Quatre engagements concrets, inscrits au contrat. Pas de promesse marketing : des clauses que vous pouvez nous opposer.",
      items: [
        {
          title: "Délais respectés",
          desc: "Calendrier ferme convenu au devis. Si on prend du retard, on vous l'écrit avant la deadline — jamais après.",
        },
        {
          title: "Transparence totale",
          desc: "Vous voyez les coûts de labo, les heures terrain, les résultats bruts. Pas de boîte noire, pas de surfacturation.",
        },
        {
          title: "Couverture provinciale",
          desc: "De Sept-Îles à Gatineau, du Témiscamingue à la Gaspésie. Frais de déplacement annoncés d'avance, pas en bonus.",
        },
        {
          title: "Conformité garantie",
          desc: "Si un rapport est refusé par le MELCCFP pour un motif technique de notre fait, on le révise sans frais.",
        },
      ],
    },
    faq: {
      eyebrow: "Questions fréquentes",
      h2: "Ce qu'on nous demande",
      items: [
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
      ],
    },
    cta: {
      h2: "Un dossier à monter? Parlons-en cette semaine.",
      p: "Décrivez-nous le site, l'échéance et le contexte réglementaire. Vous recevez un devis ferme — gratuit, sans engagement — sous 24 h ouvrables.",
      microcopy: "Devis gratuit · Réponse 24 h ouvrables · Service partout au Québec",
    },
    footer: {
      blurb:
        "Études environnementales pour municipalités, MRC et organismes publics. Bureau au Québec, terrain partout dans la province.",
      columns: [
        {
          title: "Services",
          links: [
            { label: "Caractérisation Phase I", href: "#services" },
            { label: "Caractérisation Phase II", href: "#services" },
            { label: "Études d'impact", href: "#services" },
            { label: "Demandes MELCCFP", href: "#services" },
          ],
        },
        {
          title: "À propos",
          links: [
            { label: "Démarche", href: "#demarche" },
            { label: "Engagements", href: "#engagements" },
            { label: "FAQ", href: "#faq" },
          ],
        },
      ],
      copyright: "Tous droits réservés.",
      credits:
        "Membre de l'Ordre des ingénieurs · Membre de l'Association des biologistes du Québec.",
      creditsTodo: "(à remplacer)",
    },
    toggle: { current: "FR", switchTo: "EN" },
  },

  en: {
    meta: {
      title: "Brother Ellie — Environmental studies across Québec",
      description:
        "Site characterization, impact assessments, MELCCFP authorization filings. Solid files for municipalities and public bodies.",
      ogAlt: "Brother Ellie — Environmental studies across Québec",
    },
    nav: {
      services: "Services",
      process: "Approach",
      commitments: "Commitments",
      faq: "FAQ",
      cta: "Request a quote",
      home: "Brother Ellie — home",
    },
    hero: {
      badge: "Service across Québec — Côte-Nord, Gaspésie, Abitibi included",
      h1: { line1: "Rigorous", line2: "environmental", italic: "studies." },
      p: "Site characterization, impact assessments, MELCCFP authorization filings. For municipalities and public bodies that want a solid file — and zero surprises at the ministry.",
      ctaPrimary: "Request a quote",
      ctaSecondary: "View services",
      microcopy: "Reply within 24 business hours · Free quote",
      visual: {
        dossierLabel: "MELCCFP file",
        dossierNumber: "№ 2026-0142",
        statusLabel: "Status",
        statusValue: "Compliant",
        badgeTitle: "First response",
        badgeSub: "Within 24 business hours",
      },
    },
    credentials: {
      stats: [
        { value: "17", label: "Québec regions covered" },
        { value: "240+", label: "MELCCFP files delivered" },
        { value: "18 yrs", label: "of field experience" },
        { value: "100 %", label: "CEAEQ-accredited labs" },
      ],
      disclaimer: "Figures to be validated with the consultant before publication.",
    },
    services: {
      eyebrow: "Services",
      h2: "Six expertises behind your files",
      p: "From field diagnosis to regulatory follow-through — one point of contact, compliant deliverables, deadlines met.",
      items: [
        {
          title: "Phase I assessment",
          desc: "Document review, site history, identification of potential contamination sources.",
          detail: "CSA Z768 compliant",
        },
        {
          title: "Phase II / III assessment",
          desc: "Sampling of soils, groundwater, and materials. Analyses in CEAEQ-accredited labs.",
          detail: "Soil · water · air · sediment",
        },
        {
          title: "Authorization filings",
          desc: "Preparation of REAFIE applications, authorization certificates (s. 22), project notices.",
          detail: "MELCCFP · EQA",
        },
        {
          title: "Rehabilitation plans",
          desc: "Drafting and follow-up of rehabilitation plans for contaminated lands.",
          detail: "A-B-C criteria",
        },
        {
          title: "Monitoring & reporting",
          desc: "Environmental monitoring, annual compliance reports, post-authorization follow-up.",
          detail: "Turnkey reports",
        },
        {
          title: "Impact assessments (EIA)",
          desc: "Environmental impact assessments for BAPE-bound projects. Scoping, biophysical, social, mitigation.",
          detail: "BAPE · Environment Quality Act",
        },
      ],
    },
    process: {
      eyebrow: "Approach",
      h2: "Four steps, zero improvisation",
      p: "A method proven on 240 files. You know where we stand, what's next, and how much it costs — from first call to final authorization.",
      steps: [
        {
          title: "Free scoping",
          desc: "30-minute call. We grasp your site, your constraints, your deadlines. You leave with a firm quote.",
          duration: "1-2 days",
        },
        {
          title: "Field & lab",
          desc: "Site visit, sampling per CEAEQ protocols, shipment to accredited lab. You're kept informed at each step.",
          duration: "1-3 weeks",
        },
        {
          title: "Compliant report",
          desc: "Drafting per ministerial standards. Internal peer-review. Deliverable ready for MELCCFP submission.",
          duration: "2-4 weeks",
        },
        {
          title: "Follow-through",
          desc: "Replies to ministry comments, adjustments, follow-up until authorization is issued.",
          duration: "File-dependent",
        },
      ],
    },
    commitments: {
      eyebrow: "Commitments",
      h2: "What we hold to — in writing",
      p: "Four concrete commitments, written into the contract. No marketing fluff: clauses you can hold us to.",
      items: [
        {
          title: "Deadlines met",
          desc: "Firm calendar agreed in the quote. If we fall behind, we tell you before the deadline — never after.",
        },
        {
          title: "Full transparency",
          desc: "You see lab costs, field hours, raw results. No black box, no markup surprises.",
        },
        {
          title: "Provincial coverage",
          desc: "From Sept-Îles to Gatineau, from Témiscamingue to Gaspésie. Travel costs announced upfront, not as extras.",
        },
        {
          title: "Compliance guaranteed",
          desc: "If a report is rejected by MELCCFP for a technical reason on our end, we revise it at no cost.",
        },
      ],
    },
    faq: {
      eyebrow: "Frequently asked",
      h2: "What clients ask us",
      items: [
        {
          q: "Do you cover all Québec regions?",
          a: "Yes. We work everywhere — Bas-Saint-Laurent, Saguenay–Lac-Saint-Jean, Capitale-Nationale, Mauricie, Estrie, Montréal, Outaouais, Abitibi-Témiscamingue, Côte-Nord, Nord-du-Québec, Gaspésie–Îles-de-la-Madeleine, Chaudière-Appalaches, Laval, Lanaudière, Laurentides, Montérégie, Centre-du-Québec. Travel costs are itemized in the initial quote.",
        },
        {
          q: "How long does a Phase I take?",
          a: "Between 3 and 5 weeks for most files, from mandate to filed report. Timelines depend on municipal-archive availability and the site's historical complexity.",
        },
        {
          q: "Can you accompany a MELCCFP authorization request?",
          a: "Yes. We prepare the full file (REAFIE forms, s. 22 EQA, project notice) and handle the back-and-forth with ministry analysts until the authorization is issued.",
        },
        {
          q: "Which labs do you work with?",
          a: "Only labs accredited by CEAEQ (Centre d'expertise en analyse environnementale du Québec). Original lab reports are systematically attached to our reports.",
        },
        {
          q: "How does billing work?",
          a: "Fixed fee for Phase I, transparent hourly rate plus lab disbursements for Phase II/III. 30% deposit at kickoff, balance on delivery. No hidden fees.",
        },
        {
          q: "What do we need to provide to start?",
          a: "The title of ownership or owner mandate, site plans if available, and any relevant documentation (previous reports, prior certificates). If you have nothing: we dig it up for you.",
        },
      ],
    },
    cta: {
      h2: "Have a file to build? Let's talk this week.",
      p: "Tell us about the site, the deadline, and the regulatory context. You'll receive a firm quote — free, no strings — within 24 business hours.",
      microcopy: "Free quote · Reply within 24 business hours · Service across Québec",
    },
    footer: {
      blurb:
        "Environmental studies for municipalities, RCMs and public bodies. Office in Québec, fieldwork province-wide.",
      columns: [
        {
          title: "Services",
          links: [
            { label: "Phase I assessment", href: "#services" },
            { label: "Phase II assessment", href: "#services" },
            { label: "Impact assessments", href: "#services" },
            { label: "MELCCFP filings", href: "#services" },
          ],
        },
        {
          title: "About",
          links: [
            { label: "Approach", href: "#demarche" },
            { label: "Commitments", href: "#engagements" },
            { label: "FAQ", href: "#faq" },
          ],
        },
      ],
      copyright: "All rights reserved.",
      credits:
        "Member of the Order of Engineers · Member of the Association of Quebec Biologists.",
      creditsTodo: "(to be replaced)",
    },
    toggle: { current: "EN", switchTo: "FR" },
  },
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
