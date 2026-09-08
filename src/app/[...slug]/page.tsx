import { UnderConstruction } from "@/components/UnderConstruction";

const secondaryRoutes = [
  "electronique",
  "vetements",
  "services",
  "contact",
  "recherche",
  "panier",
  "boutique",
  "montres-accessoires",
  "a-propos",
  "livraison",
  "conditions",
  "facebook",
  "instagram",
];

export function generateStaticParams() {
  return secondaryRoutes.map((route) => ({ slug: [route] }));
}

export const dynamicParams = false;

export default function CatchAllPage() {
  return <UnderConstruction />;
}
