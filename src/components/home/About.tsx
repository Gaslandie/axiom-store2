import Image from "next/image";

const stats = [
  { value: "500+", label: "produits" },
  { value: "1 200+", label: "clients" },
  { value: "24-48h", label: "de livraison" },
];

export function About() {
  return (
    <section className="bg-sand py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-20">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#ebe7e1] lg:aspect-[5/6]">
          <Image
            src="https://images.unsplash.com/photo-1556740758-90de374c12ad?w=1200&q=85"
            alt="Un service client attentif préparant une commande"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div>
          <p className="text-xs font-medium tracking-[0.25em] text-accent">NOTRE HISTOIRE</p>
          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
            Axiom Store, votre boutique à Conakry
          </h2>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-graphite md:text-base">
            <p>
              Nous sélectionnons des produits authentiques et utiles, de la technologie du quotidien
              aux pièces qui complètent votre style.
            </p>
            <p>
              Notre équipe vous accompagne avec un service client réactif et une livraison rapide
              partout dans Conakry.
            </p>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-line pt-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-xl font-semibold tracking-tight text-ink sm:text-2xl">{stat.value}</dt>
                <dd className="mt-1 text-[11px] leading-snug text-graphite sm:text-xs">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
