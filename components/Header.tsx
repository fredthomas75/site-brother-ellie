import { Container } from "./Container";
import { Logo } from "./Logo";

const nav = [
  { href: "#services", label: "Services" },
  { href: "#demarche", label: "Démarche" },
  { href: "#engagements", label: "Engagements" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-[color-mix(in_oklab,var(--paper)_82%,transparent)] border-b border-moss-100/70">
      <Container className="flex h-16 items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-8 text-[13px] text-ink-soft">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-moss-700 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#devis"
          className="inline-flex items-center gap-1.5 rounded-full bg-moss-700 px-4 py-2 text-[13px] font-medium text-cream-soft hover:bg-moss-800 transition-colors"
        >
          Demander un devis
          <span aria-hidden>→</span>
        </a>
      </Container>
    </header>
  );
}
