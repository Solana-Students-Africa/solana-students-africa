import Button from "./button";
import { Container } from "./container";

const Footer = () => {
  return (
    <div className="footer-section py-20 sm:py-32 md:py-40">
      <Container
        className="relative flex flex-col items-start justify-between gap-12 px-4 lg:flex-row lg:gap-8"
        as="section"
        id="contact"
      >
        <div className="z-10 flex w-full flex-col items-start justify-start gap-4 text-left lg:w-1/2">
          <h1
            data-animate-text
            className="max-w-2xl text-4xl leading-tight font-semibold sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Get in Touch
          </h1>
          <p
            data-animate-sentences
            data-delay="0.3"
            className="w-full text-base font-medium sm:w-[90%] sm:text-lg md:w-[80%] md:text-xl lg:w-[60%]"
          >
            Ready to Join the future of blockchain development in Africa?
          </p>
          <Button
            data-animate-scale
            data-delay="0.6"
            data-easing="NAVIGATION.button"
            variant="secondary"
            className="mt-2 w-full sm:w-auto"
          >
            <span data-animate-text data-delay="0.7" data-easing="NAVIGATION.button">
              Join our Community
            </span>
          </Button>
        </div>

        <div className="z-10 flex w-full flex-col items-start justify-start gap-4 text-left lg:w-1/2 lg:items-end lg:justify-end lg:text-right">
          <h1
            data-animate-text
            data-delay="0.2"
            className="max-w-2xl text-3xl leading-tight font-semibold sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
          >
            Tobiloba Adedeji
          </h1>
          <p
            data-animate-sentences
            data-delay="0.4"
            className="w-full text-base font-medium sm:w-[90%] sm:text-lg md:w-[80%] md:text-xl lg:w-[60%]"
          >
            Lead Hackathon Organizer and Student Coordinator
          </p>
          <Button
            data-animate-scale
            data-delay="0.6"
            data-easing="NAVIGATION.button"
            variant="secondary"
            className="mt-2 w-full sm:w-auto"
          >
            <span data-animate-text data-delay="0.7" data-easing="NAVIGATION.button">
              Join our Community
            </span>
          </Button>
        </div>

        <div
          style={{
            background: "linear-gradient(180deg, #0C41D1 -9.59%, #9E1DD4 90.41%)",
          }}
          className="absolute top-20 left-0 z-0 h-[120px] w-[95vw] rounded-full blur-[200px] sm:top-28 sm:-left-5 sm:h-[150px] sm:w-[92vw] sm:blur-[300px] md:top-32 md:left-0 md:h-[180px] md:w-[90vw] md:blur-[390px] lg:top-40 lg:h-[200px] lg:w-[90vw]"
        ></div>
      </Container>
    </div>
  );
};

export default Footer;
