# Axiom Store — Maquette de la page d'accueil

Tu es chargé de construire une **maquette de démonstration** destinée à être présentée à un client.
Seule la **page d'accueil** doit être réellement conçue. Toutes les autres routes affichent une page
« En cours de construction ».

Le rendu doit être **premium, élégant et simple**. Pas de surcharge, pas d'effets gratuits.
La qualité doit venir de l'espace, de la typographie, de la hiérarchie et du soin des détails.

---

## 1. Contexte client

**Axiom Store** est une boutique guinéenne basée à Conakry. Elle vend :

- des accessoires électroniques (écouteurs, chargeurs, câbles, coques, montres connectées, enceintes) ;
- des vêtements (homme et femme) ;
- divers autres produits et services.

**Points essentiels à respecter :**

- Le client commande **via WhatsApp**. Il n'y a **aucun paiement en ligne**. Le bouton principal
  de chaque produit est « Commander sur WhatsApp ».
- Le catalogue est **illimité** et organisé par catégories.
- L'audience est **majoritairement sur téléphone**, souvent en 3G/4G. Le mobile est prioritaire.
- La langue du site est le **français**. Devise : **GNF** (format `1 250 000 GNF`, espaces insécables).
- Marché : Conakry et environs. Livraison à domicile ou retrait sur place.

---

## 2. Benchmark — trois références analysées

Ces trois sites ont été retenus. **Ne les copie pas** : reprends les principes qui fonctionnent.

### Jumia (jumia.com) — la référence du e-commerce africain

Ce qu'on retient :
- **Mobile-first assumé** : tout est pensé pour un écran de téléphone d'abord.
- **Catégories immédiatement visibles** dès l'accueil, en grille d'icônes.
- **Blocs de réassurance très présents** : livraison, retour, paiement à la réception. En Afrique de
  l'Ouest, la confiance est le premier frein à l'achat en ligne — il faut la traiter dès l'accueil.
- **Images légères**, chargement rapide sur connexion lente.

Ce qu'on ne reprend pas : la densité visuelle, l'accumulation de bannières promotionnelles, le côté
« bazar ». Axiom Store doit paraître plus haut de gamme.

### Back Market (backmarket.fr) — accessoires électroniques

Ce qu'on retient :
- **Fiches produits épurées** : une grande image sur fond clair uniforme, le nom, le prix, rien d'autre.
- **Blocs de réassurance sobres**, présentés comme des engagements et non comme des arguments criards.
- **Palette restreinte** : deux couleurs maximum, beaucoup de blanc.
- Grille de produits très aérée, avec des espacements généreux entre les cartes.

### Nomad Goods (nomadgoods.com) — la direction esthétique

Ce qu'on retient :
- **Le luxe par le vide** : de très grandes marges, peu d'éléments par écran.
- **Photographie produit dominante**, texte minimal.
- **Typographie soignée** : titres larges et fins, corps de texte discret, forte hiérarchie.
- **Aucune couleur criarde** : noir, blanc, gris, et une seule teinte d'accent utilisée avec parcimonie.
- Micro-animations discrètes au survol, jamais spectaculaires.

### Synthèse pour Axiom Store

> La structure et la réassurance de Jumia, la clarté produit de Back Market,
> l'élégance et le vide de Nomad Goods.

---

## 3. Stack technique

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS v4**
- **lucide-react** pour les icônes
- Aucune base de données, aucune API, aucun back-end. **Toutes les données sont des fichiers de
  données statiques en TypeScript.**
- Aucune librairie d'animation lourde. Uniquement des transitions CSS Tailwind.
- Les images produits sont des **placeholders** (voir section 8).

### Commandes d'initialisation

```bash
npx create-next-app@latest axiom-store --typescript --tailwind --app --src-dir --use-npm
cd axiom-store
npm install lucide-react
```

---

## 4. Direction artistique

### Palette

| Rôle | Valeur | Usage |
|---|---|---|
| `ink` | `#0E0E10` | Textes principaux, en-tête, pied de page |
| `graphite` | `#5A5A60` | Textes secondaires, descriptions |
| `line` | `#E6E4E0` | Bordures, séparateurs |
| `canvas` | `#FFFFFF` | Fond principal |
| `sand` | `#F7F5F2` | Fond des sections alternées, fond des images produits |
| `accent` | `#C8A951` | Or discret — prix, liens actifs, détails uniquement |
| `whatsapp` | `#25D366` | Uniquement les boutons WhatsApp |

**Règle stricte :** l'or `accent` ne doit jamais couvrir de grandes surfaces. Il sert de ponctuation :
un prix, un soulignement, une bordure fine. Jamais de bouton or plein en pleine largeur.

Configure ces couleurs dans `globals.css` via `@theme`.

### Typographie

- Titres : **Inter** ou **Geist**, graisse 600, `tracking-tight`.
- Corps : même famille, graisse 400.
- Échelle : `text-5xl md:text-6xl` pour le titre principal, `text-2xl md:text-3xl` pour les titres de
  section, `text-sm` pour le corps.
- **Interlignage généreux** partout : `leading-relaxed` sur les paragraphes.

### Espacement

- Sections : `py-20 md:py-28`. Ne descends jamais en dessous.
- Conteneur : `max-w-7xl mx-auto px-5 md:px-8`.
- Grille produits : `gap-6 md:gap-8`.
- **L'espace est l'élément de design principal.** En cas de doute, ajoute de l'air.

### Détails

- Rayons : `rounded-xl` pour les cartes, `rounded-full` pour les boutons et les pastilles.
- Ombres : quasi inexistantes. Préfère une bordure `border border-line`. Au survol d'une carte :
  `hover:border-ink/20` et une légère élévation `hover:-translate-y-0.5`, transition `duration-300`.
- Aucune ombre portée marquée, aucun dégradé criard.

---

## 5. Structure de la page d'accueil

Dans cet ordre exact.

### 5.1. En-tête (`Header`)

- Fixe en haut, fond blanc, bordure basse `border-line`, léger flou au défilement.
- Gauche : logotype texte **AXIOM STORE** en `tracking-[0.2em]`, graisse 600. (Pas d'image de logo.)
- Centre (desktop uniquement) : liens `Accueil` · `Électronique` · `Vêtements` · `Services` · `Contact`.
- Droite : icône recherche, icône panier avec pastille `2`, et un bouton `Commander` en `bg-ink text-white rounded-full px-5 py-2 text-sm`.
- Mobile : menu hamburger ouvrant un panneau plein écran, fond blanc, liens en `text-2xl`, animation d'ouverture douce.

### 5.2. Hero

- Pleine largeur, hauteur `min-h-[80vh]`, fond `sand`.
- Disposition en deux colonnes sur desktop, empilée sur mobile (texte au-dessus).
- Colonne gauche :
  - Surtitre discret : `NOUVEAUTÉS 2026` en `text-xs tracking-[0.25em] text-graphite`.
  - Titre : **« La technologie et le style, livrés à Conakry. »**
  - Sous-titre : « Accessoires électroniques, vêtements et bien plus. Commandez en quelques secondes sur WhatsApp, recevez chez vous. »
  - Deux boutons : `Découvrir la boutique` (fond `ink`, texte blanc) et `Commander sur WhatsApp` (bordure fine, icône WhatsApp).
- Colonne droite : une grande image produit sur fond `sand`, format `aspect-[4/5]`, `rounded-2xl`.
- Aucune animation d'entrée agressive. Un simple `fade-in` au chargement suffit.

### 5.3. Bande de réassurance

Juste sous le hero, une bande fine `border-y border-line`, quatre éléments alignés (deux colonnes sur
mobile), chacun avec une icône `lucide-react` fine et un court libellé :

- `Truck` — **Livraison à Conakry** · sous 24 à 48 h
- `ShieldCheck` — **Produits garantis** · authentiques et vérifiés
- `MessageCircle` — **Commande sur WhatsApp** · simple et rapide
- `Wallet` — **Paiement à la livraison** · vous payez à réception

*Ce bloc est essentiel : c'est lui qui lève le frein de confiance sur le marché guinéen.*

### 5.4. Catégories

- Titre de section : « Nos catégories », sous-titre discret.
- Grille de 4 cartes : `grid-cols-2 md:grid-cols-4`.
- Chaque carte : image en fond `aspect-square`, léger voile sombre, nom de la catégorie en blanc en bas
  à gauche, et le nombre d'articles en petit.
- Catégories : **Électronique**, **Vêtements**, **Montres & accessoires**, **Services**.
- Au survol : zoom très léger de l'image (`scale-105`, `duration-500`).

### 5.5. Produits en vedette

- Titre : « Sélection du moment ». À droite du titre, un lien texte `Voir tout →`.
- Grille `grid-cols-2 lg:grid-cols-4`, 8 produits.
- **Carte produit** (composant `ProductCard`) :
  - Image sur fond `sand`, `aspect-square`, `rounded-xl`, avec un padding interne pour que le produit
    « respire ».
  - Badge optionnel en haut à gauche : `Nouveau` ou `-20%`, très discret, fond blanc, texte `ink`.
  - Nom du produit en `text-sm font-medium`, sur deux lignes maximum.
  - Catégorie en `text-xs text-graphite`.
  - Prix en `text-base font-semibold text-accent`. Prix barré à côté si promotion.
  - Au survol : apparition d'un bouton `Commander` en bas de la carte, translation douce.

### 5.6. Bannière WhatsApp

- Section pleine largeur, fond `ink`, texte blanc, `py-20`.
- Titre centré : **« Une question ? Écrivez-nous. »**
- Texte : « Notre équipe vous répond directement sur WhatsApp, du lundi au samedi, de 9h à 20h. »
- Un seul bouton, fond `whatsapp`, texte blanc, icône, `rounded-full px-8 py-4` :
  **« Discuter sur WhatsApp »**.
- Lien : `https://wa.me/224620343586`

### 5.7. Nouveautés

- Même grille que la section 5.5, mais 4 produits seulement.
- Titre : « Derniers arrivages ».

### 5.8. À propos

- Deux colonnes. À gauche une image, à droite le texte.
- Titre : « Axiom Store, votre boutique à Conakry ».
- Deux courts paragraphes présentant la boutique : sélection de produits authentiques, service client
  réactif, livraison rapide dans Conakry.
- Trois chiffres alignés en dessous : `500+ produits`, `1 200+ clients`, `24-48h de livraison`.

### 5.9. Pied de page

- Fond `ink`, texte blanc atténué.
- Quatre colonnes sur desktop, empilées sur mobile :
  1. Logotype **AXIOM STORE** + une phrase de description + icônes réseaux sociaux (Facebook, Instagram, WhatsApp).
  2. **Catégories** : liens vers les 4 catégories.
  3. **Informations** : À propos, Livraison, Contact, Conditions.
  4. **Contact** : adresse à Conakry, numéro WhatsApp `+224 620 34 35 86`, e-mail.
- Barre inférieure : `© 2026 Axiom Store. Tous droits réservés.` et à droite, discrètement :
  `Site réalisé par GassTech Solutions`.

---

## 6. Les autres pages

**Toutes** les routes autres que `/` affichent la même page « En cours de construction ».

Crée un composant `UnderConstruction` et une route attrape-tout `src/app/[...slug]/page.tsx` qui
l'affiche.

Contenu de cette page :

- L'en-tête et le pied de page du site restent visibles.
- Au centre, sur fond `sand`, hauteur `min-h-[60vh]` :
  - Une icône `Hammer` ou `Construction` de `lucide-react`, taille 48, couleur `accent`.
  - Titre : **« Cette page est en cours de construction »**
  - Texte : « Nous finalisons cette section. Elle sera disponible très prochainement. »
  - Un bouton `Retour à l'accueil` en `bg-ink text-white rounded-full`.

Les liens de navigation doivent tous pointer vers des routes réelles (`/electronique`,
`/vetements`, etc.) afin que le client puisse cliquer et voir cette page.

---

## 7. Structure des fichiers

```
src/
  app/
    layout.tsx                 # métadonnées, police, Header + Footer
    page.tsx                   # page d'accueil (assemble les sections)
    globals.css                # thème Tailwind, couleurs, polices
    [...slug]/page.tsx         # attrape-tout → UnderConstruction
  components/
    layout/
      Header.tsx
      Footer.tsx
      MobileMenu.tsx
    home/
      Hero.tsx
      TrustBar.tsx
      Categories.tsx
      FeaturedProducts.tsx
      WhatsAppBanner.tsx
      NewArrivals.tsx
      About.tsx
    ui/
      ProductCard.tsx
      CategoryCard.tsx
      SectionHeading.tsx
      Button.tsx
    UnderConstruction.tsx
  data/
    products.ts
    categories.ts
  lib/
    format.ts                  # formatage des prix en GNF
```

---

## 8. Données de démonstration

Dans `src/data/products.ts`, crée un tableau de **12 produits** typés :

```ts
export type Product = {
  id: string;
  name: string;
  category: "Électronique" | "Vêtements" | "Montres & accessoires" | "Services";
  price: number;          // en GNF
  oldPrice?: number;
  image: string;
  badge?: "Nouveau" | "Promo";
};
```

Produits à créer, avec des prix réalistes pour le marché guinéen :

1. Écouteurs sans fil Bluetooth — Électronique — 350 000
2. Chargeur rapide 65W USB-C — Électronique — 180 000
3. Montre connectée sport — Montres & accessoires — 750 000 (ancien prix 900 000, badge Promo)
4. Enceinte Bluetooth portable — Électronique — 420 000 (badge Nouveau)
5. Coque de protection transparente — Électronique — 65 000
6. T-shirt coton premium — Vêtements — 150 000
7. Câble USB-C tressé 2 m — Électronique — 85 000
8. Sac à dos urbain — Vêtements — 320 000 (badge Nouveau)
9. Batterie externe 20 000 mAh — Électronique — 290 000
10. Chemise lin manches longues — Vêtements — 240 000
11. Montre classique cuir — Montres & accessoires — 480 000
12. Support téléphone voiture — Électronique — 95 000

**Images :** utilise des URL Unsplash de la forme
`https://images.unsplash.com/photo-XXXXX?w=800&q=80` avec des photos correspondant réellement au
produit. Configure `images.remotePatterns` pour `images.unsplash.com` dans `next.config.ts`.

**Formatage des prix** dans `lib/format.ts` :

```ts
export const formatGNF = (n: number) =>
  new Intl.NumberFormat("fr-FR").format(n).replace(/\u202f|\u00a0/g, " ") + " GNF";
```

---

## 9. Exigences transverses

- **Mobile-first strict.** Développe d'abord la version téléphone, puis élargis. Teste mentalement à
  375 px de large.
- **Accessibilité** : contrastes suffisants, `alt` sur toutes les images, navigation au clavier
  possible, `aria-label` sur les boutons à icône seule.
- **Performance** : composants serveur par défaut, `"use client"` uniquement pour le menu mobile.
  Utilise `next/image` partout, avec `priority` sur l'image du hero uniquement.
- **SEO** : dans `layout.tsx`, `title` = `Axiom Store — Accessoires électroniques et mode à Conakry`,
  `description` cohérente, `lang="fr"`.
- **Aucun texte en anglais** visible à l'écran.
- **Aucune donnée inventée au-delà de ce document** : pas de faux avis clients, pas de fausses marques
  partenaires, pas de chiffres non listés ici.
- Le code doit être **propre et commenté sobrement**, chaque composant dans son fichier.

---

## 10. Critère de réussite

Le client doit ouvrir la page sur son téléphone et penser :
**« C'est beau, c'est clair, et je vois exactement comment commander. »**

Si un élément n'apporte rien à cette impression, il ne doit pas exister.

---

## 11. Livrable

Une fois terminé :

```bash
npm run build   # doit passer sans erreur ni avertissement bloquant
npm run dev
```

Affiche l'arborescence finale des fichiers créés et signale tout choix technique que tu aurais dû
trancher toi-même.
