import Link from "next/link";
import { Construction } from "lucide-react";

export function UnderConstruction() {
  return (
    <main className="flex min-h-[60vh] items-center justify-center bg-sand px-5 pb-20 pt-38 md:pb-28 md:pt-46">
      <div className="max-w-xl text-center">
        <Construction className="mx-auto size-12 text-accent" strokeWidth={1.4} aria-hidden="true" />
        <h1 className="mt-7 text-3xl font-semibold tracking-tight md:text-4xl">
          Cette page est en cours de construction
        </h1>
        <p className="mt-5 text-sm leading-relaxed text-graphite md:text-base">
          Nous finalisons cette section. Elle sera disponible très prochainement.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-ink px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-graphite"
        >
          Retour à l’accueil
        </Link>
      </div>
    </main>
  );
}
