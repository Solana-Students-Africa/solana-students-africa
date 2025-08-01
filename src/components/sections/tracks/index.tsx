import { Container } from "@/components/ui/container";
import SolanaAIGrid from "./test";

const TracksSection = () => {
  return (
    <Container
      className="tracks-section flex flex-col items-center justify-center px-4 py-12 sm:py-16 md:py-20"
      as="section"
      id="tracks"
    >
      <h1 className="font-poppins mb-6 flex h-auto max-w-4xl flex-col items-center text-center text-4xl leading-tight font-semibold sm:h-[200px] sm:text-5xl md:h-[250px] md:text-6xl lg:text-7xl">
        <h1>5 Tracks</h1>
        <h1>Endless Innovation</h1>
        <h1>One Solana Chain</h1>
      </h1>

      <p className="mb-8 w-full max-w-2xl px-2 text-center text-base font-medium sm:w-[80%] sm:px-4 sm:text-lg md:w-[60%] md:px-0 md:text-xl lg:w-[40%]">
        Choose your track and build innovative solutions using solana and AI technologies
      </p>

      <div className="w-full max-w-7xl">
        <SolanaAIGrid />
      </div>
    </Container>
  );
};

export default TracksSection;
