import AnimationBase from "@/animations/classes/AnimationBase";
import { customEasings } from "@/animations/constants/easings";
import Hero from "@/components/sections/hero";
import Marquee from "@/components/sections/marquee";
import About from "@/components/sections/about";
import Cards from "@/components/sections/cards";
import Community from "@/components/sections/community";
import Events from "@/components/sections/events";
import FAQ from "@/components/sections/faq";
import Footer from "@/components/sections/footer";
import Navbar from "@/components/ui/navbar";
import { useEffect, useRef } from "react";

const Home = () => {
  const isInitialized = useRef(false);

  useEffect(() => {
    if (!isInitialized.current) {
      new AnimationBase({
        sourceElements: [
          ".navbar-section",
          ".hero-section",
          ".marquee-section",
          ".about-section",
          ".cards-section",
          ".community-section",
          ".events-section",
          ".faq-section",
          ".footer-section",
        ],
        easings: customEasings,
      });

      isInitialized.current = true;
    }
  }, []);

  return (
    <div className="font-gellix landing-page mx-auto flex w-full max-w-[1440px] flex-col bg-black">
      {/* Hero section with Navbar - Mobile: smaller height, Desktop: 806px */}
      <div className="relative h-[500px] w-full bg-black md:h-[806px]">
        <Navbar />
        <Hero />
      </div>

      {/* Marquee - Partner logos strip */}
      <Marquee />

      {/* About section - light gray background */}
      <About />

      {/* Cards section - Learn, Build, Connect */}
      <div className="flex w-full justify-center bg-black py-[40px] md:py-[52px]">
        <Cards />
      </div>

      {/* Community section */}
      <Community />

      {/* Events section */}
      <Events />

      {/* FAQ section */}
      <div className="flex w-full justify-center bg-black py-[40px] md:py-[48px]">
        <FAQ />
      </div>

      {/* Footer */}
      <div className="w-full px-[15px] pb-[30px] md:px-[50px] md:pb-[38px]">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
