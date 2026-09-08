import Link from "next/link";
import { Search, ShoppingBag } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/format";
import { MobileMenu } from "./MobileMenu";

const links = [
  { label: "Accueil", href: "/" },
  { label: "Électronique", href: "/electronique" },
  { label: "Vêtements", href: "/vetements" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 md:px-8">
        <Link href="/" className="shrink-0 text-sm font-semibold tracking-[0.2em]" aria-label="Axiom Store, accueil">
          AXIOM STORE
        </Link>

        <nav className="hidden lg:block" aria-label="Navigation principale">
          <ul className="flex items-center gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-graphite transition-colors duration-300 hover:text-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <Link
            href="/recherche"
            className="grid size-10 place-items-center rounded-full transition-colors hover:bg-sand"
            aria-label="Rechercher"
          >
            <Search className="size-5" strokeWidth={1.7} />
          </Link>
          <Link
            href="/panier"
            className="relative grid size-10 place-items-center rounded-full transition-colors hover:bg-sand"
            aria-label="Panier, 2 articles"
          >
            <ShoppingBag className="size-5" strokeWidth={1.7} />
            <span className="absolute right-0.5 top-0.5 grid size-4 place-items-center rounded-full bg-accent text-[9px] font-semibold text-ink">
              2
            </span>
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-graphite md:inline-flex"
          >
            Commander
          </a>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
