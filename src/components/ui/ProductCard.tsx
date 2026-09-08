import Image from "next/image";
import { MessageCircle } from "lucide-react";
import type { Product } from "@/data/products";
import { formatGNF, whatsappProductUrl } from "@/lib/format";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group min-w-0">
      <div className="relative aspect-square overflow-hidden rounded-xl border border-transparent bg-sand transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-ink/20">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 1024px) 50vw, 25vw"
          className="object-cover p-5 transition-transform duration-500 group-hover:scale-[1.03] md:p-7"
        />
        {product.badge ? (
          <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-[11px] font-medium text-ink">
            {product.badge === "Promo" ? "-20%" : product.badge}
          </span>
        ) : null}
        <a
          href={whatsappProductUrl(product.name)}
          target="_blank"
          rel="noreferrer"
          className="absolute inset-x-3 bottom-3 hidden min-h-10 translate-y-3 items-center justify-center gap-2 rounded-full bg-ink px-3 py-2 text-xs font-medium text-white opacity-0 transition-all duration-300 md:flex md:group-hover:translate-y-0 md:group-hover:opacity-100 md:group-focus-within:translate-y-0 md:group-focus-within:opacity-100"
          aria-label={`Commander ${product.name} sur WhatsApp`}
        >
          <MessageCircle className="size-4" strokeWidth={1.8} />
          Commander
        </a>
      </div>
      <div className="pt-4">
        <p className="text-xs text-graphite">{product.category}</p>
        <h3 className="mt-1 line-clamp-2 min-h-10 text-sm font-medium leading-5">{product.name}</h3>
        <div className="mt-2 flex flex-wrap items-baseline gap-x-2 gap-y-1">
          <p className="text-base font-semibold text-accent">{formatGNF(product.price)}</p>
          {product.oldPrice ? (
            <p className="text-xs text-graphite line-through">{formatGNF(product.oldPrice)}</p>
          ) : null}
        </div>
        <a
          href={whatsappProductUrl(product.name)}
          target="_blank"
          rel="noreferrer"
          className="mt-4 flex min-h-10 w-full items-center justify-center gap-2 rounded-full bg-ink px-3 py-2 text-xs font-medium text-white transition-colors hover:bg-graphite md:hidden"
          aria-label={`Commander ${product.name} sur WhatsApp`}
        >
          <MessageCircle className="size-4" strokeWidth={1.8} />
          Commander
        </a>
      </div>
    </article>
  );
}
