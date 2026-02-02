import { Link } from "react-router-dom";
import { Container } from "@/components/ui/container";

const CTA = () => {
  return (
    <section className="cta-section relative overflow-hidden py-20 lg:py-32">
      {/* Background Gradients */}
      <div className="from-ssa-green/10 to-primary-blue/10 absolute inset-0 bg-gradient-to-br via-transparent" />
      <div className="bg-ssa-green/10 absolute -top-20 right-0 h-96 w-96 rounded-full blur-3xl" />
      <div className="bg-primary-blue/10 absolute -bottom-20 left-0 h-96 w-96 rounded-full blur-3xl" />

      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="bg-ssa-green/10 text-ssa-green mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium">
            <span className="bg-ssa-green h-2 w-2 animate-pulse rounded-full" />
            Join 5000+ Students
          </div>

          {/* Heading */}
          <h2 className="mb-6 text-4xl leading-tight font-bold text-white sm:text-5xl lg:text-6xl">
            Ready to Start Your <span className="text-ssa-green">Web3 Journey?</span>
          </h2>

          {/* Description */}
          <p className="mx-auto mb-10 max-w-2xl text-lg text-white/70 sm:text-xl">
            Join the largest community of African students learning, building, and innovating in the
            blockchain space. It's free to join and the opportunities are endless.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://x.com/SolanaStudentAf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-ssa-green hover:bg-ssa-green/90 inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white transition-all sm:w-auto"
            >
              Join Community
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <Link
              to="/events"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/10 sm:w-auto"
            >
              View Upcoming Events
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-white/40">
            <div className="flex items-center gap-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              100% Free
            </div>
            <div className="flex items-center gap-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              Supportive Community
            </div>
            <div className="flex items-center gap-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
              Pan-African
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTA;
