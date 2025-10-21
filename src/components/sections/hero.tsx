import Button from "../ui/button";
import { Container } from "../ui/container";

const Hero = () => {
  return (
    <section
      className="hero-section relative flex min-h-screen items-center justify-center bg-[url('/images/hero-background.png')] bg-cover bg-center bg-no-repeat pt-32 pb-20 md:pt-8 md:pb-8 lg:pt-20 lg:pb-0"
      id="home"
    >
      <div className="absolute inset-0 bg-black/20 md:hidden" />

      <Container className="relative z-10 w-full px-4 md:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 text-center md:gap-10 lg:gap-12">
          {/* Badge */}
          <div
            className="rounded-lg px-3 py-2 text-xs font-medium shadow-2xl sm:px-4 sm:py-2.5 sm:text-sm md:text-base lg:text-lg"
            style={{
              background:
                "radial-gradient(47.61% 408.42% at 47.72% 18.09%, #0C41D1 0%, #08277F 50%, rgba(6, 33, 107, 0) 85.83%)",
            }}
          >
            <span className="block sm:hidden">Solana Students Africa</span>
            <span className="hidden sm:block">Solana Students Africa</span>
          </div>

          {/* Main heading - wider and less tall */}
          <h1 className="font-poppins max-w-6xl text-4xl leading-[1.15] font-semibold sm:text-5xl sm:leading-[1.2] md:text-6xl md:leading-[1.2] lg:text-7xl lg:leading-[1.2] xl:text-8xl xl:leading-[1.15]">
            <span className="block sm:hidden">Building Africa's Solana Students Layer</span>
            <span className="hidden sm:block">Building Africa's Solana Students Layer</span>
          </h1>

          {/* Description - if you have text, it will show wider */}
          <p className="mx-auto max-w-3xl text-sm leading-6 font-medium sm:text-base sm:leading-7 md:text-lg md:leading-8 lg:text-xl lg:leading-9">
            <span className="block sm:hidden"></span>
            <span className="hidden sm:block"></span>
          </p>

          {/* CTA buttons - horizontal layout prioritized */}
          <div className="flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row sm:gap-4 md:gap-5 lg:gap-6">
            <a href="#about" className="block w-full sm:w-auto"></a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
