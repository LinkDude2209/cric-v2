import Navbar from "./components/header/navbar";
import { HeroScrollDemo } from "./components/hero/vid-container-h";
import Hero from "./components/hero/hero";
import { Working } from "./components/working";
import Coaches from "./components/coaches";
import { MarqueeDemo } from "./components/reviews";
import AboutSection from "./components/about";
import SportsParentingSection from "./components/parenting";
import PricingPage from "./components/pricing";
import Footer from "./components/footer/footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <HeroScrollDemo />
      <div className="-mt-44">
        <Hero />
      </div>
      <Working />
      <Coaches />
      <MarqueeDemo />
      <AboutSection />
      <SportsParentingSection />
      <PricingPage />
      <Footer />
    </>
  );
}
