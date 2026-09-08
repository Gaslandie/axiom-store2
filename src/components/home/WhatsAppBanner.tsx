import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { WHATSAPP_URL } from "@/lib/format";

export function WhatsAppBanner() {
  return (
    <section className="bg-ink py-20 text-white md:py-24">
      <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
        <p className="text-xs font-medium tracking-[0.25em] text-accent">UN CONSEIL, UNE COMMANDE</p>
        <h2 className="mt-5 text-3xl font-semibold tracking-tight md:text-4xl">
          Une question ? Écrivez-nous.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/65 md:text-base">
          Notre équipe vous répond directement sur WhatsApp, du lundi au samedi, de 9h à 20h.
        </p>
        <Button href={WHATSAPP_URL} variant="whatsapp" external className="mt-8 px-8 py-4">
          <WhatsAppIcon className="size-5" />
          Discuter sur WhatsApp
        </Button>
      </div>
    </section>
  );
}
