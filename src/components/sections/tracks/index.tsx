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

      {/* Prize Pool Badge */}
      <div className="relative mb-6">
        <div
          className="rounded-full border-2 border-yellow-400/50 px-6 py-3 text-center shadow-2xl"
          style={{
            background: "linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FFD700 100%)",
          }}
        >
          <span className="text-lg font-bold text-yellow-900 sm:text-xl md:text-2xl">
            💰 $10,000 Prize Pool 💰
          </span>
        </div>
        {/* Static glow effect */}
        <div
          className="absolute inset-0 -z-10 rounded-full opacity-40 blur-lg"
          style={{
            background: "linear-gradient(135deg, #FFD700, #FFA500)",
          }}
        />
      </div>

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
