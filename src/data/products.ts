export type Product = {
  id: string;
  name: string;
  category: "Électronique" | "Vêtements" | "Montres & accessoires" | "Services";
  price: number;
  oldPrice?: number;
  image: string;
  badge?: "Nouveau" | "Promo";
};

export const products: Product[] = [
  {
    id: "ecouteurs-bluetooth",
    name: "Écouteurs sans fil Bluetooth",
    category: "Électronique",
    price: 350000,
    image: "https://images.unsplash.com/photo-1583343894790-5cff219de28a?w=800&q=80",
  },
  {
    id: "chargeur-65w",
    name: "Chargeur rapide 65W USB-C",
    category: "Électronique",
    price: 180000,
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=800&q=80",
  },
  {
    id: "montre-connectee-sport",
    name: "Montre connectée sport",
    category: "Montres & accessoires",
    price: 750000,
    oldPrice: 900000,
    badge: "Promo",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
  },
  {
    id: "enceinte-bluetooth",
    name: "Enceinte Bluetooth portable",
    category: "Électronique",
    price: 420000,
    badge: "Nouveau",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&q=80",
  },
  {
    id: "coque-transparente",
    name: "Coque de protection transparente",
    category: "Électronique",
    price: 65000,
    image: "https://images.unsplash.com/photo-1601593346740-925612772716?w=800&q=80",
  },
  {
    id: "tshirt-premium",
    name: "T-shirt coton premium",
    category: "Vêtements",
    price: 150000,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80",
  },
  {
    id: "cable-usbc",
    name: "Câble USB-C tressé 2 m",
    category: "Électronique",
    price: 85000,
    image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=800&q=80",
  },
  {
    id: "sac-a-dos-urbain",
    name: "Sac à dos urbain",
    category: "Vêtements",
    price: 320000,
    badge: "Nouveau",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
  },
  {
    id: "batterie-externe",
    name: "Batterie externe 20 000 mAh",
    category: "Électronique",
    price: 290000,
    image: "https://images.unsplash.com/photo-1566554738544-d962991c3fee?w=800&q=80",
  },
  {
    id: "chemise-lin",
    name: "Chemise lin manches longues",
    category: "Vêtements",
    price: 240000,
    image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=800&q=80",
  },
  {
    id: "montre-classique",
    name: "Montre classique cuir",
    category: "Montres & accessoires",
    price: 480000,
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80",
  },
  {
    id: "support-telephone-voiture",
    name: "Support téléphone voiture",
    category: "Électronique",
    price: 95000,
    image: "https://images.unsplash.com/photo-1504507533977-0a4b3f61ff36?w=800&q=80",
  },
];

export const featuredProducts = products.slice(0, 8);
export const newArrivals = products.slice(8, 12);
