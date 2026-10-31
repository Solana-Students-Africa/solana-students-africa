import { whenLoaded } from "@/lib/loader-stages";
import { photo } from "@/lib/photos";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

import { Container } from "../ui/container";
import SlantLink from "../ui/slant-link";
import Tag from "../ui/tag";

gsap.registerPlugin(ScrollTrigger);

const HEADLINE = ["Building", "Africa’s", "Solana", "Students", "Layer"];

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const q = gsap.utils.selector(section);

    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const bars = q("[data-bar]");

      // Starts on the loader's reveal, not its end, so the page arrives already moving.
      const intro = gsap
        .timeline({ paused: true })
        .fromTo(
          q("[data-word]"),
          { yPercent: 110 },
          { yPercent: 0, duration: 0.75, ease: "expo.out", stagger: 0.04 }
        )
        .fromTo(
          bars,
          { xPercent: (i: number) => (i === 1 ? -30 : 30), autoAlpha: 0 },
          { xPercent: 0, autoAlpha: 1, duration: 0.85, ease: "expo.out", stagger: 0.07 },
          0.05
        )
        .fromTo(
          q("[data-bar-img]"),
          { scale: 1.25 },
          { scale: 1, duration: 1.1, ease: "expo.out" },
          0.05
        )
        .fromTo(
          q("[data-cutout]"),
          { yPercent: 35, autoAlpha: 0 },
          { yPercent: 0, autoAlpha: 1, duration: 0.6, ease: "back.out(1.6)" },
          0.4
        )
        .fromTo(
          q("[data-cta]"),
          { y: 20, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.5, ease: "power3.out", stagger: 0.06 },
          0.3
        );
      const stopWaiting = whenLoaded(() => intro.play(), "reveal");

      const scrollOut = { trigger: section, start: "top top", end: "bottom top", scrub: true };
      gsap.to(q("[data-drift]"), {
        xPercent: (i: number) => (i === 1 ? 8 : -8),
        ease: "none",
        scrollTrigger: scrollOut,
      });
      gsap.to(q("h1"), { y: -60, ease: "none", scrollTrigger: scrollOut });

      return () => stopWaiting?.();
    });
    return () => mm.revert();
  }, []);

  return (
    // `isolate` keeps the -z-10 grid behind the content but above the page's cream background.
    <section
      ref={sectionRef}
      className="hero-section relative isolate pt-32 pb-16 md:pt-44 md:pb-20"
      id="home"
    >
      <div
        aria-hidden
        className="bg-grid-paper absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_80%)] [--grid-line:rgb(153_69_255/0.08)] [--grid-size:28px]"
      />
      <Container className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-8">
        <div className="flex flex-col items-start gap-5">
          <Tag>Solana Student Africa</Tag>
          <h1 className="text-ssa-purple text-[2.6rem] leading-[1.02] font-extrabold tracking-tight sm:text-6xl lg:text-[4.8rem]">
            {/* Padding leaves room for descenders inside each word's mask. */}
            {HEADLINE.map((word, i) => (
              <span key={word}>
                <span className="inline-block overflow-hidden pb-[0.08em] align-bottom">
                  <span data-word className="inline-block">
                    {word}
                  </span>
                </span>
                {i < HEADLINE.length - 1 && " "}
              </span>
            ))}
          </h1>
          <div className="mt-3 flex flex-wrap gap-3">
            <SlantLink href="#get-involved" variant="purple" className="px-4" data-cta>
              Get involved
            </SlantLink>
            <SlantLink href="#contact" className="px-3" sweep data-cta>
              Contact
            </SlantLink>
          </div>
        </div>

        {/* Wrappers drift on scroll and the bars inside animate in, so the transforms don't clash. */}
        <div className="flex flex-col gap-5 [--slant:8%]" aria-hidden>
          <div data-drift>
            <div data-bar className="clip-slant aspect-[46/10] overflow-hidden">
              <img
                data-bar-img
                src={photo("dsc09248", "lg")}
                alt=""
                className="h-full w-full object-cover object-[50%_35%]"
              />
            </div>
          </div>
          {/* Clipped separately so the cut-out can rise above the band. */}
          <div data-drift className="relative z-10 aspect-[46/10]">
            <div data-bar className="clip-slant-reverse bg-ssa-green absolute inset-0" />
            <img
              data-cutout
              src={photo("dsc07959-transparent", "sm")}
              alt=""
              className="absolute bottom-0 left-[28%] h-[140%] w-auto max-w-none"
            />
          </div>
          <div data-drift>
            <div data-bar className="clip-slant aspect-[46/10] overflow-hidden">
              <img
                data-bar-img
                src={photo("dsc08597", "lg")}
                alt=""
                className="h-full w-full object-cover object-[50%_45%]"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
