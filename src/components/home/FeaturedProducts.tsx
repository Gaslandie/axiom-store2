import { featuredProducts } from "@/data/products";
import { ProductCard } from "@/components/ui/ProductCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FeaturedProducts() {
  return (
    <section className="bg-sand py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          title="Sélection du moment"
          link={{ label: "Voir tout", href: "/boutique" }}
        />
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:gap-x-8 md:gap-y-12 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
