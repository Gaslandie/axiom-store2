import { MessageCircle, ShieldCheck, Truck, Wallet } from "lucide-react";

const trustItems = [
  { icon: Truck, title: "Livraison à Conakry", detail: "sous 24 à 48 h" },
  { icon: ShieldCheck, title: "Produits garantis", detail: "authentiques et vérifiés" },
  { icon: MessageCircle, title: "Commande sur WhatsApp", detail: "simple et rapide" },
  { icon: Wallet, title: "Paiement à la livraison", detail: "vous payez à réception" },
];

export function TrustBar() {
  return (
    <section className="border-y border-line bg-white" aria-label="Nos engagements">
      <div className="mx-auto grid max-w-7xl grid-cols-2 px-5 md:grid-cols-4 md:px-8">
        {trustItems.map(({ icon: Icon, title, detail }, index) => (
          <div
            key={title}
            className={`flex flex-col items-start gap-3 py-7 md:flex-row md:items-center md:gap-4 md:px-5 md:py-8 ${
              index % 2 === 0 ? "pr-4" : "border-l border-line pl-4"
            } ${index > 1 ? "border-t border-line md:border-t-0" : ""} ${
              index === 2 ? "md:border-l" : ""
            }`}
          >
            <Icon className="size-5 shrink-0 text-accent" strokeWidth={1.6} />
            <div>
              <h2 className="text-xs font-semibold sm:text-sm">{title}</h2>
              <p className="mt-1 text-[11px] leading-snug text-graphite sm:text-xs">{detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
