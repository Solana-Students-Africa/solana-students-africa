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
          className="mt-0 rounded-lg px-3 py-2 text-xs font-medium shadow-2xl sm:mt-0 sm:px-4 sm:py-2.5 sm:text-sm md:mt-6 md:text-xl lg:mt-8"
          style={{
            background:
              "radial-gradient(47.61% 408.42% at 47.72% 18.09%, #0C41D1 0%, #08277F 50%, rgba(6, 33, 107, 0) 85.83%)",
          }}
        >
          <span className="block sm:hidden">Solana Students Africa</span>
          <span className="hidden sm:block">Solana Students Africa</span>
        </div>

        <h1 className="font-poppins text-3xl leading-tight font-semibold sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight lg:text-7xl xl:text-8xl">
          <span className="block sm:hidden">Building Africa's Solana Students Layer</span>
          <span className="hidden sm:block">Building Africa's Solana Students Layer</span>
        </h1>

        <p className="max-w-sm text-sm leading-6 font-medium sm:max-w-md sm:text-base sm:leading-7 md:max-w-2xl md:text-lg md:leading-8 lg:text-xl">
          <span className="block sm:hidden"></span>
          <span className="hidden sm:block"></span>
        </p>

        <div className="flex w-full flex-col items-center gap-3 pt-2 sm:w-auto sm:flex-row sm:gap-4 md:gap-2.5 md:pt-4">
          <a href="#about" className="block w-full sm:w-auto"></a>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
