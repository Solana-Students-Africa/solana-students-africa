import { Container } from "@/components/ui/container";
import SolanaAIGrid from "./test";

const TracksSection = () => {
  return (
    <Container
      className="flex flex-col items-center justify-center px-4 py-12 sm:py-16 md:py-20"
      as="section"
      id="tracks"
    >
      <h1 className="font-poppins mb-6 h-auto max-w-4xl text-center text-4xl leading-tight font-semibold sm:h-[200px] sm:text-5xl md:h-[250px] md:text-6xl lg:text-7xl">
        5 Tracks <br />
        Endless Innovation <br />
        One Solana Chain
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
