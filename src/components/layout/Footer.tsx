import Link from "next/link";
import { Facebook, Instagram, MapPin, Phone } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/format";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

const categoryLinks = [
  { label: "Électronique", href: "/electronique" },
  { label: "Vêtements", href: "/vetements" },
  { label: "Montres & accessoires", href: "/montres-accessoires" },
  { label: "Services", href: "/services" },
];

const informationLinks = [
  { label: "À propos", href: "/a-propos" },
  { label: "Livraison", href: "/livraison" },
  { label: "Contact", href: "/contact" },
  { label: "Conditions", href: "/conditions" },
];

export function Footer() {
  return (
    <footer className="bg-ink text-white/65">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          <div>
            <Link href="/" className="text-sm font-semibold tracking-[0.2em] text-white">
              AXIOM STORE
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed">
              Technologie, mode et accessoires sélectionnés avec soin, livrés partout à Conakry.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <Link
                href="/facebook"
                aria-label="Facebook"
                className="grid size-10 place-items-center rounded-full border border-white/15 transition-colors hover:border-white/40 hover:text-white"
              >
                <Facebook className="size-4" strokeWidth={1.7} />
              </Link>
              <Link
                href="/instagram"
                aria-label="Instagram"
                className="grid size-10 place-items-center rounded-full border border-white/15 transition-colors hover:border-white/40 hover:text-white"
              >
                <Instagram className="size-4" strokeWidth={1.7} />
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="grid size-10 place-items-center rounded-full border border-white/15 transition-colors hover:border-white/40 hover:text-white"
              >
                <WhatsAppIcon className="size-4" />
              </a>
            </div>
          </div>

          <FooterLinks title="Catégories" links={categoryLinks} />
          <FooterLinks title="Informations" links={informationLinks} />

          <div>
            <h2 className="text-sm font-semibold text-white">Contact</h2>
            <div className="mt-5 space-y-4 text-sm">
              <p className="flex items-start gap-3 leading-relaxed">
                <MapPin className="mt-0.5 size-4 shrink-0 text-accent" strokeWidth={1.7} />
                Conakry, Guinée
              </p>
              <a
                href="tel:+224620343586"
                className="flex items-center gap-3 transition-colors hover:text-white"
              >
                <Phone className="size-4 shrink-0 text-accent" strokeWidth={1.7} />
                +224 620 34 35 86
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 transition-colors hover:text-white"
              >
                <WhatsAppIcon className="size-4 shrink-0 text-accent" />
                Écrivez-nous sur WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-7 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Axiom Store. Tous droits réservés.</p>
          <p>Site réalisé par GassTech Solutions</p>
        </div>
      </div>
    </footer>
  );
}

function FooterLinks({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h2 className="text-sm font-semibold text-white">{title}</h2>
      <ul className="mt-5 space-y-3 text-sm">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="transition-colors hover:text-white">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
