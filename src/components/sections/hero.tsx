import Button from "../ui/button";
import { Container } from "../ui/container";

const Hero = () => {
  return (
    <section
      className="hero-section relative flex min-h-screen flex-col items-center justify-center bg-[url('/images/hero-background.png')] bg-cover bg-center bg-no-repeat"
      id="home"
    >
      <div className="absolute inset-0 bg-black/20 md:hidden" />

      <Container className="-pt-8 relative z-10 flex w-full flex-col items-center justify-center gap-4 px-4 text-center md:w-[80%] md:gap-6 md:px-6 md:pt-30 lg:w-[70%] lg:gap-7 lg:px-0 xl:w-[60%]">
        <div
          data-animate-grow-width
          data-duration="0.5"
          data-delay="1.3"
          className="-mt-56 rounded-lg px-3 py-2 text-xs font-medium shadow-2xl sm:mt-0 sm:px-4 sm:py-2.5 sm:text-sm md:mt-6 md:text-xl lg:mt-8"
          style={{
            background:
              "radial-gradient(47.61% 408.42% at 47.72% 18.09%, #0C41D1 0%, #08277F 50%, rgba(6, 33, 107, 0) 85.83%)",
          }}
        >
          <span className="block sm:hidden">September 2025 | University of Lagos</span>
          <span
            data-animate-fadein
            data-delay="1.5"
            data-easing="NAVIGATION.button"
            className="hidden sm:block"
          >
            September 2025 | University of Lagos
          </span>
        </div>

        <h1 className="font-poppins text-3xl leading-tight font-semibold sm:text-4xl sm:leading-tight md:text-6xl md:leading-none lg:text-8xl xl:text-[110px]">
          <span className="block sm:hidden" data-animate-y-up data-delay="0.5">
            Build the Future on
            <br />
            <span className="text-blue-400">Solana</span>
          </span>
          <span data-animate-y-up data-delay="0.5" className="hidden sm:block">
            Build the Future on Solana
          </span>
        </h1>

        <p className="max-w-sm text-sm leading-6 font-medium sm:max-w-md sm:text-base sm:leading-7 md:max-w-2xl md:text-xl md:leading-8 lg:text-2xl">
          <span className="block sm:hidden" data-animate-y-up data-delay="0.9">
            Join Nigeria's premier student hackathon for Solana Blockchain & AI development.
            <br />
            <span className="text-blue-300">No experience needed!</span>
          </span>
          <span className="hidden sm:block" data-animate-sentences data-delay="0.9">
            Join Nigeria's premier student hackathon focused on Solana Blockchain development and AI
            agents. Exclusively for University students - no prior experience needed
          </span>
        </p>

        <div className="flex w-full flex-col items-center gap-3 pt-2 sm:w-auto sm:flex-row sm:gap-4 md:gap-2.5 md:pt-4">
          <Button
            data-animate-scale
            data-delay="0.6"
            data-easing="NAVIGATION.button"
            glowOnHover
            className="w-full text-sm font-semibold hover:shadow-[0_0_20px_#08277F,0_0_40px_#08277F,0_0_60px_#08277F] sm:w-auto sm:text-base md:text-lg"
          >
            Register Now
          </Button>
          <Button
            data-animate-scale
            data-delay="0.7"
            data-easing="CTA.button"
            variant="secondary"
            glowOnHover
            className="w-full text-sm font-semibold hover:opacity-90 sm:w-auto sm:text-base md:text-lg"
          >
            View Details
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
