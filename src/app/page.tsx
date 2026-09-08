import { About } from "@/components/home/About";
import { Categories } from "@/components/home/Categories";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { Hero } from "@/components/home/Hero";
import { NewArrivals } from "@/components/home/NewArrivals";
import { TrustBar } from "@/components/home/TrustBar";
import { WhatsAppBanner } from "@/components/home/WhatsAppBanner";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <Categories />
      <FeaturedProducts />
      <WhatsAppBanner />
      <NewArrivals />
      <About />
    </main>
  );
}
