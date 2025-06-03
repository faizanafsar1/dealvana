import Electronics from "./components/Electronics";
import HeroSection from "./components/Hero";
import Jewelery from "./components/Jewelery";
import MensClothing from "./components/MensClothing";
import TrendingDeals from "./components/TrendingDeals";
import WomensClothing from "./components/WomensClothing";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrendingDeals />
      <Electronics />
      <Jewelery />
      <MensClothing />
      <WomensClothing />
    </>
  );
}
