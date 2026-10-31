import { cn } from "@/lib/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Fragment, useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const WORDS = ["Learn", "Build", "Ship", "On Solana", "Students", "Across Africa"];

// Enough repeats that the band stays filled while it slides.
const REPEATS = 4;

type BandProps = {
  className: string;
  barClassName: string;
  bandRef: React.Ref<HTMLDivElement>;
};

const Band = ({ className, barClassName, bandRef }: BandProps) => (
  <div className={cn("w-[140vw] -translate-x-[20vw] overflow-hidden py-4 md:py-6", className)}>
    <div
      ref={bandRef}
      className="flex w-max items-center gap-6 text-4xl leading-none font-extrabold whitespace-nowrap uppercase md:gap-10 md:text-7xl"
    >
      {Array.from({ length: REPEATS }, (_, r) =>
        WORDS.map((word) => (
          <Fragment key={`${r}-${word}`}>
            <span>{word}</span>
            <span
              aria-hidden
              className={cn(
                "clip-slant h-6 w-12 shrink-0 [--slant:8px] md:h-10 md:w-20",
                barClassName
              )}
            />
          </Fragment>
        ))
      )}
    </div>
  </div>
);

const TickerSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const topRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const scrollTrigger = {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.5,
      };
      gsap.fromTo(topRef.current, { xPercent: 0 }, { xPercent: -25, ease: "none", scrollTrigger });
      gsap.fromTo(
        bottomRef.current,
        { xPercent: -25 },
        { xPercent: 0, ease: "none", scrollTrigger }
      );
    });
    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Learn, build, ship on Solana"
      className="ticker-section relative flex flex-col justify-center overflow-hidden py-28 md:py-44"
      id="ticker"
    >
      <Band
        bandRef={topRef}
        className="bg-ssa-purple text-ssa-green relative z-10 -rotate-[4deg]"
        barClassName="bg-ssa-green"
      />
      <Band
        bandRef={bottomRef}
        className="bg-ssa-green text-ssa-purple -mt-6 rotate-[3deg] md:-mt-10"
        barClassName="bg-ssa-purple"
      />
    </section>
  );
};

export default TickerSection;
