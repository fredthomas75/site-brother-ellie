import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const siteConfig = {
  name: "Brother Ellie",
  tagline: "Études environnementales — partout au Québec",
  description:
    "Caractérisation de sites, études d'impact, demandes d'autorisation MELCCFP. Dossiers rigoureux pour municipalités et organismes publics.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://brother-ellie.ca",
  email: "info@brother-ellie.ca",
  phone: "+1 418 555 0142",
  region: "Québec",
};
