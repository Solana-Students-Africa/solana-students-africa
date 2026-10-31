import { explore, socials } from "@/lib/links";
import { scrollToSection } from "@/lib/scroll-to-section";
import { BANDS } from "@/lib/wordmark-cuts";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { useLayoutEffect, useRef } from "react";

import AfricaMap from "./africa-map";
import { Container } from "./container";
import SlantLink from "./slant-link";

gsap.registerPlugin(ScrollTrigger);

const WORDMARK = "SOLANA STUDENTS AFRICA";
const WORDMARK_TEXT =
  "text-ssa-green block text-center text-[calc((100vw-4rem)/15.5)] leading-none font-black whitespace-nowrap";

const ColumnTitle = ({ children }: { children: string }) => (
  <p className="text-ssa-green mb-5 text-xs font-bold tracking-widest uppercase">{children}</p>
);

const Footer = () => {
  const wordmarkRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.utils.toArray<HTMLElement>("[data-band]", wordmarkRef.current).forEach((band, i) => {
        gsap.fromTo(
          band,
          { xPercent: i === 1 ? -6 : 6 },
          {
            xPercent: 0,
            ease: "none",
            scrollTrigger: {
              trigger: wordmarkRef.current,
              start: "top bottom",
              end: "bottom bottom",
              scrub: 0.6,
            },
          }
        );
      });
    });
    return () => mm.revert();
  }, []);

  return (
    <footer className="footer-section pt-16 md:pt-24" id="contact">
      <div className="border-ssa-green bg-ssa-ink overflow-hidden border-4 pt-16 pb-6 text-white md:pt-24">
        <Container>
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="max-w-3xl text-4xl leading-[0.95] font-extrabold md:text-6xl lg:text-7xl">
              Let&apos;s build what&apos;s next, <span className="text-ssa-green">together.</span>
            </h2>
            <div className="flex flex-wrap gap-3">
              <SlantLink href="#get-involved">Bring SSA to your campus</SlantLink>
              <SlantLink href="#get-involved" variant="purple">
                Partner with us
              </SlantLink>
            </div>
          </div>

          <div className="mt-16 grid gap-12 border-t border-white/10 pt-12 sm:grid-cols-2 md:mt-24 lg:grid-cols-[1.3fr_1fr_1fr_1.1fr]">
            <div>
              <ColumnTitle>Get in touch</ColumnTitle>
              <p className="text-2xl font-extrabold">Tobiloba Adedeji</p>
              <p className="text-white/60">Co-lead, Solana Students Africa</p>
              <div className="mt-4 flex gap-4 text-sm">
                <a
                  href="https://x.com/toby_solutions"
                  className="hover:text-ssa-green text-white/80"
                >
                  X
                </a>
                <a
                  href="https://www.linkedin.com/in/tobiloba-adedeji/"
                  className="hover:text-ssa-green text-white/80"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/tobySolutions"
                  className="hover:text-ssa-green text-white/80"
                >
                  GitHub
                </a>
              </div>
            </div>

            <nav aria-label="Footer">
              <ColumnTitle>Explore</ColumnTitle>
              <ul className="space-y-2.5">
                {explore.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        if (scrollToSection(link.href.slice(1))) e.preventDefault();
                      }}
                      className="hover:text-ssa-green group inline-flex items-center gap-1 text-white/80 transition"
                    >
                      {link.label}
                      <ArrowUpRight
                        aria-hidden
                        className="h-4 w-4 opacity-0 transition group-hover:opacity-100"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <ColumnTitle>Follow</ColumnTitle>
              <ul className="space-y-2.5">
                {socials.map((social) => (
                  <li key={social.href}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-ssa-green group inline-flex items-center gap-3 text-white/80 transition"
                    >
                      <span className="border-ssa-green/40 text-ssa-green group-hover:bg-ssa-green group-hover:text-ssa-ink grid h-8 w-8 place-items-center rounded-full border transition">
                        <svg
                          className="h-3.5 w-3.5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden
                        >
                          <path d={social.path} />
                        </svg>
                      </span>
                      {social.label.replace("Follow us on ", "")}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <AfricaMap
              title="Map of Africa"
              className="text-ssa-green/25 hidden w-full max-w-60 justify-self-end lg:block"
            />
          </div>
        </Container>

        <div ref={wordmarkRef} aria-hidden className="relative mt-16 px-8 md:mt-24">
          <span className={WORDMARK_TEXT} style={BANDS[0]} data-band>
            {WORDMARK}
          </span>
          {BANDS.slice(1).map((band, i) => (
            <span
              key={i}
              className={`absolute inset-x-8 top-0 ${WORDMARK_TEXT}`}
              style={band}
              data-band
            >
              {WORDMARK}
            </span>
          ))}
        </div>

        {/* Equal outer columns keep the credit truly centred whatever the side texts' widths. */}
        <Container className="mt-8 flex flex-col items-center gap-4 text-center text-xs text-white/50 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:text-left">
          <p>
            &copy; {new Date().getFullYear()} Solana Students Africa. Built by students, for Africa.
          </p>
          <p>
            Designed &amp; built by{" "}
            <a
              href="https://afrobalogun.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-ssa-green font-semibold text-white/80 underline decoration-white/30 underline-offset-4 transition"
            >
              afrobalogun.com
            </a>
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="hover:text-ssa-green inline-flex items-center gap-2 font-semibold tracking-widest uppercase transition lg:justify-self-end"
          >
            Back to top
            <ArrowUp aria-hidden className="h-4 w-4" />
          </button>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
