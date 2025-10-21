import AnimationBase from "@/animations/classes/AnimationBase";
import { customEasings } from "@/animations/constants/easings";
import Hero from "@/components/sections/hero";
import Info from "@/components/sections/info";
import FocusSection from "@/components/sections/focus";
import MissionSection from "@/components/sections/mission";
import SummitSection from "@/components/sections/summit";
import PartnersAndCommunities from "@/components/sections/partners-and-communities";
import Footer from "@/components/ui/footer";
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
          ".info-section",
          ".focus-section",
          ".mission-section",
          ".summit-section",
          ".partners-section",
          ".footer-section",
        ],
        easings: customEasings,
      });

      isInitialized.current = true;
    }
  }, []);

  return (
    <div className="font-gellix landing-page flex flex-col overflow-x-hidden bg-black">
      <Navbar />
      <Hero />
      <Info />
      <FocusSection />
      <MissionSection />
      <SummitSection />
      <PartnersAndCommunities />
      <Footer />
    </div>
  );
};

export default Home;
