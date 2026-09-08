"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { WHATSAPP_URL } from "@/lib/format";

const links = [
  { label: "Accueil", href: "/" },
  { label: "Électronique", href: "/electronique" },
  { label: "Vêtements", href: "/vetements" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="grid size-10 place-items-center rounded-full transition-colors hover:bg-sand"
        aria-label="Ouvrir le menu"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
      >
        <Menu className="size-5" strokeWidth={1.7} />
      </button>

      <div
        id="mobile-navigation"
        className={`fixed inset-0 z-50 flex flex-col bg-white transition-all duration-300 ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex h-18 items-center justify-between border-b border-line px-5">
          <span className="text-sm font-semibold tracking-[0.2em]">AXIOM STORE</span>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="grid size-10 place-items-center rounded-full transition-colors hover:bg-sand"
            aria-label="Fermer le menu"
          >
            <X className="size-5" strokeWidth={1.7} />
          </button>
        </div>

        <nav className="flex flex-1 flex-col justify-center px-8" aria-label="Navigation mobile">
          <ul className="space-y-6">
            {links.map((link, index) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  tabIndex={isOpen ? 0 : -1}
                  className="group flex items-center gap-4 text-2xl font-medium tracking-tight"
                >
                  <span className="text-xs font-normal text-accent">0{index + 1}</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    {link.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="border-t border-line p-5">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            tabIndex={isOpen ? 0 : -1}
            className="flex min-h-12 items-center justify-center rounded-full bg-ink px-5 py-3 text-sm font-medium text-white"
          >
            Commander sur WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
