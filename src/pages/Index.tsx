import Hero from "@/components/sections/hero";
import Info from "@/components/sections/info";
import PartnersAndCommunities from "@/components/sections/partners-and-communities";
import TimelineSection from "@/components/sections/timeline";
import TracksSection from "@/components/sections/tracks";
import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";

const Home = () => {
  return (
    <div className="font-gellix flex flex-col bg-black">
      <Navbar />
      <Hero />
      <Info />
      <TracksSection />
      <div className="overflow-x-hidden">
        <TimelineSection />
        <PartnersAndCommunities />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
