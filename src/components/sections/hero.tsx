import Button from "../ui/button";
import { Container } from "../ui/container";

const Hero = () => {
  return (
    <section
      className="relative flex min-h-screen flex-col items-center justify-center bg-[url('/images/hero-background.png')] bg-contain bg-center bg-no-repeat"
      id="home"
    >
      <Container className="flex w-full flex-col items-center justify-center gap-4 px-4 text-center md:w-[60%] md:gap-7 md:px-0">
        <div
          className="p-2 text-sm font-medium shadow-2xl md:text-xl"
          style={{
            background:
              "radial-gradient(47.61% 408.42% at 47.72% 18.09%, #0C41D1 0%, #08277F 50%, rgba(6, 33, 107, 0) 85.83%)",
          }}
        >
          September 2025 | University of Lagos
        </div>

        <h1 className="font-poppins text-4xl leading-tight font-semibold sm:text-6xl md:text-8xl md:leading-none lg:text-[110px]">
          Build the Future on Solana
        </h1>

        <p className="text-lg leading-7 font-medium sm:text-xl md:text-2xl md:leading-8">
          Join Nigeria's premier student hackathon focused on Solana Blockchain development and AI
          agents. Exclusively for University students - no prior experience needed
        </p>

        <div className="flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row md:gap-2.5">
          <Button
            glowOnHover
            className="w-full hover:shadow-[0_0_20px_#08277F,0_0_40px_#08277F,0_0_60px_#08277F] sm:w-auto"
          >
            Register Now
          </Button>
          <Button variant="secondary" className="w-full sm:w-auto">
            View Details
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
