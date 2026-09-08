import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { WHATSAPP_URL } from "@/lib/format";

export function Hero() {
  return (
    <section className="min-h-[80vh] bg-sand pt-18">
      <div className="mx-auto grid min-h-[calc(80vh-4.5rem)] max-w-7xl items-center gap-12 px-5 py-16 md:px-8 md:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="animate-fade-in order-1 max-w-2xl lg:self-start lg:pt-24 xl:pt-28">
          <p className="text-xs font-medium tracking-[0.25em] text-graphite">NOUVEAUTÉS 2026</p>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
            La technologie et le style, livrés à Conakry.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-graphite md:text-lg">
            Accessoires électroniques, vêtements et bien plus. Commandez en quelques secondes sur
            WhatsApp, recevez chez vous.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="#categories">
              Découvrir la boutique
              <ArrowDown className="size-4" strokeWidth={1.8} />
            </Button>
            <Button href={WHATSAPP_URL} variant="outline" external>
              <WhatsAppIcon className="size-4" />
              Commander sur WhatsApp
            </Button>
          </div>
        </div>

        <div className="animate-fade-in order-2 mx-auto w-full max-w-xl [animation-delay:120ms] lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#ebe7e1]">
            <Image
              src="https://images.unsplash.com/photo-1583343894790-5cff219de28a?w=1200&q=85"
              alt="Écouteurs sans fil présentés sur un fond clair"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover"
            />
            <div className="absolute bottom-5 left-5 rounded-full bg-white/90 px-4 py-2 text-xs font-medium backdrop-blur-sm">
              Sélection Axiom Store
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
