import { Container } from "@/components/ui/container";
import SolanaAIGrid from "./test";

const TracksSection = () => {
  return (
    <Container className="flex flex-col items-center justify-center py-20" as="section" id="tracks">
      <h1 className="font-poppins h-[250px] text-center text-7xl font-semibold">
        5 Tracks <br /> Endless Innovation <br /> One Solana Chain
      </h1>
      <p className="my-6 text-center text-xl font-medium md:w-[40%]">
        Choose your track and build innovative solutions using solana and AI technologies
      </p>

      <SolanaAIGrid />
    </Container>
  );
};

export default TracksSection;
