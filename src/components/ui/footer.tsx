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
            glowOnHover
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

          {/* Social Media Icons */}
          <div className="mt-2 flex items-center gap-3">
            <a
              href="https://x.com/SolanaStudentAf"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white/30"
              aria-label="Twitter"
            >
              <svg
                className="h-5 w-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/solana-students-africa-8454a42a1/"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white/30"
              aria-label="LinkedIn"
            >
              <svg
                className="h-5 w-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>

            <a
              href="https://github.com/tobySolutions"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white/30"
              aria-label="GitHub"
            >
              <svg
                className="h-5 w-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
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
