import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Axiom Store — Accessoires électroniques et mode à Conakry",
  description:
    "Découvrez les accessoires électroniques, vêtements et services Axiom Store. Commandez simplement sur WhatsApp et faites-vous livrer à Conakry.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className={geist.variable}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
