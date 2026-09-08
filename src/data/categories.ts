export type Category = {
  name: string;
  count: string;
  href: string;
  image: string;
};

export const categories: Category[] = [
  {
    name: "Électronique",
    count: "Voir les articles",
    href: "/electronique",
    image: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=900&q=80",
  },
  {
    name: "Vêtements",
    count: "Voir les articles",
    href: "/vetements",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=900&q=80",
  },
  {
    name: "Montres & accessoires",
    count: "Voir les articles",
    href: "/montres-accessoires",
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=900&q=80",
  },
  {
    name: "Services",
    count: "Découvrir nos services",
    href: "/services",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=80",
  },
];
