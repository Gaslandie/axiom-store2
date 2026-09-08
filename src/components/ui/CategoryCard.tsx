import Image from "next/image";
import Link from "next/link";
import type { Category } from "@/data/categories";

export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={category.href}
      className="group relative aspect-square overflow-hidden rounded-xl bg-ink"
      aria-label={`Découvrir la catégorie ${category.name}`}
    >
      <Image
        src={category.image}
        alt=""
        fill
        sizes="(max-width: 768px) 50vw, 25vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-4 text-white md:p-6">
        <h3 className="text-base font-semibold tracking-tight md:text-lg">{category.name}</h3>
        <p className="mt-1 text-xs text-white/70">{category.count}</p>
      </div>
    </Link>
  );
}
