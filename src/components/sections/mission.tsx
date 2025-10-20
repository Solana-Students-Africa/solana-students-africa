import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

type MissionCardProps = React.HTMLAttributes<HTMLDivElement> & {
  description: string;
};

const MissionCard = ({ description, className, ...rest }: MissionCardProps) => {
  return (
    <div {...rest} className={cn("z-10 mx-auto w-full max-w-4xl", className)}>
      <div
        className="flex flex-col justify-center rounded-[20px] px-6 py-8 text-white shadow-2xl backdrop-blur-sm sm:px-8 sm:py-10 md:px-10 md:py-12"
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(153, 153, 153, 0) 60.42%)",
        }}
      >
        <p className="text-center text-lg leading-relaxed font-normal sm:text-xl sm:leading-normal md:text-2xl md:leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

const MissionSection = () => {
  return (
    <Container
      className="mission-section relative flex flex-col items-center justify-center py-20 sm:py-16"
      as="section"
    >
      <h1 className="font-poppins z-10 mb-8 flex max-w-4xl flex-col items-center text-center text-4xl font-semibold sm:text-5xl md:text-6xl lg:text-7xl">
        <h1>Our Mission</h1>
      </h1>

      <MissionCard description="To cultivate a thriving network of African student builders who are shaping the future of the Solana ecosystem through innovation, education, and collaboration." />

      {/* Background decorations */}
      <div className="absolute top-20 left-[40%] z-0 h-[200px] w-[200px] rounded-full bg-[#B020EC] blur-[200px] sm:top-28 sm:left-[50%] sm:h-[300px] sm:w-[300px] sm:blur-[300px] md:top-36 md:left-[60%] md:h-[400px] md:w-[40vw] md:blur-[390px]"></div>

      <div className="absolute right-[40%] bottom-40 z-0 h-[200px] w-[200px] rounded-full bg-[#0C41D1] blur-[200px] sm:right-[50%] sm:bottom-48 sm:h-[300px] sm:w-[300px] sm:blur-[300px] md:right-[60%] md:bottom-64 md:h-[400px] md:w-[40vw] md:blur-[390px]"></div>

      <img
        src="/images/solana-coin.png"
        alt="Solana Coin"
        className="absolute top-24 left-[60%] z-0 h-[150px] w-[150px] opacity-50 sm:top-32 sm:left-[65%] sm:h-[250px] sm:w-[250px] sm:opacity-75 md:top-40 md:left-[70%] md:h-[400px] md:w-[400px] md:opacity-100"
      />

      <img
        src="/images/solana-coin.png"
        alt="Solana Coin"
        className="absolute -bottom-5 -left-3 z-0 h-[150px] w-[150px] opacity-50 sm:-bottom-8 sm:-left-4 sm:h-[250px] sm:w-[250px] sm:opacity-75 md:-bottom-10 md:-left-5 md:h-[400px] md:w-[400px] md:opacity-100"
      />
    </Container>
  );
};

export default MissionSection;
