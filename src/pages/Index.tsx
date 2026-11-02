import AnimationBase from "@/animations/classes/AnimationBase";
import { customEasings } from "@/animations/constants/easings";
import CampusSection from "@/components/sections/campus";
import FocusSection from "@/components/sections/focus";
import GetInvolvedSection from "@/components/sections/get-involved";
import Hero from "@/components/sections/hero";
import Info from "@/components/sections/info";
import MilestoneSection from "@/components/sections/milestone";
import MissionSection from "@/components/sections/mission";
import PartnersAndCommunities from "@/components/sections/partners-and-communities";
import SummitSection from "@/components/sections/summit";
import TickerSection from "@/components/sections/ticker";
import Footer from "@/components/ui/footer";
import Loader from "@/components/ui/loader";
import Navbar from "@/components/ui/navbar";
import { useCallback, useEffect, useRef, useState } from "react";

const Home = () => {
  const isInitialized = useRef(false);
  const [loaded, setLoaded] = useState(false);
  const handleLoaded = useCallback(() => setLoaded(true), []);

  // Entrance animations wait for the loader to leave, so the hero's are actually seen.
  useEffect(() => {
    if (loaded && !isInitialized.current) {
      new AnimationBase({
        sourceElements: [
          ".navbar-section",
          ".hero-section",
          ".info-section",
          ".partners-section",
          ".focus-section",
          ".summit-section",
          ".milestone-section",
          ".mission-section",
          ".campus-section",
          ".ticker-section",
          ".get-involved-section",
          ".footer-section",
        ],
        easings: customEasings,
      });

      isInitialized.current = true;
    }
  }, [loaded]);

  return (
    <div className="landing-page bg-ssa-cream font-anybody text-ssa-ink flex flex-col overflow-x-clip">
      <Loader onDone={handleLoaded} />
      <Navbar />
      <Hero />
      <Info />
      <PartnersAndCommunities />
      <FocusSection />
      <SummitSection />
      <MilestoneSection />
      <MissionSection />
      <CampusSection />
      <TickerSection />
      <GetInvolvedSection />
      <Footer />
    </div>
  );
};

export default Home;
