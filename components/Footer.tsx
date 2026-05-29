import { Container } from "./Container";
import { Logo } from "./Logo";
import { siteConfig } from "@/lib/utils";

const cols: { title: string; links: { label: string; href: string }[] }[] = [
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
  {
    title: "Contact",
    links: [
      { label: siteConfig.email, href: `mailto:${siteConfig.email}` },
      { label: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/\s/g, "")}` },
      { label: "Demander un devis", href: "#devis" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative mt-32 bg-moss-900 text-cream-soft/85 bg-grain">
      <div className="absolute inset-0 bg-topo opacity-30 pointer-events-none" />
      <Container className="relative py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo variant="cream" />
            <p className="mt-5 text-sm leading-relaxed max-w-xs text-cream-soft/65">
              Études environnementales pour municipalités, MRC et organismes publics. Bureau au Québec, terrain partout dans la province.
            </p>
          </div>
          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="text-[11px] uppercase tracking-[0.18em] text-moss-200/80 mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5 text-sm">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-cream-soft/75 hover:text-cream-soft transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-moss-700/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-cream-soft/55">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Tous droits réservés.
          </p>
          <p>
            Membre de l'Ordre des ingénieurs · Membre de l'Association des biologistes du Québec.
            <span className="ml-2 text-clay-soft">(à remplacer)</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}
