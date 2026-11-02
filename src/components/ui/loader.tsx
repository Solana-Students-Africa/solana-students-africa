import { reach, STAGES } from "@/lib/loader-stages";
import { cn } from "@/lib/utils";
import { ALL_BANDS, BANDS } from "@/lib/wordmark-cuts";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef, useState } from "react";

import AfricaMap from "./africa-map";

gsap.registerPlugin(ScrollTrigger);

// Keep the loader up at least this long, so it never just flashes and the colour pop-in finishes.
const MIN_SHOW_MS = 1000;

const WORDMARK = "SOLANA STUDENTS AFRICA";

const WORDMARK_GRADIENT =
  "bg-linear-to-r from-[#4d8dff] from-5% via-[#d21fff] via-50% to-[#1fd6a0] to-95%";

const WORDMARK_TEXT =
  "text-[5.6vw] leading-none font-extrabold tracking-[0.02em] whitespace-nowrap md:text-[4.6vw] lg:text-[3.4rem]";

// Sits under the navbar (z-40 vs z-50), so the navbar stays put as it swipes away.
const Loader = ({ onDone }: { onDone: () => void }) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const bandsRef = useRef<HTMLSpanElement[]>([]);
  const edgeRef = useRef<HTMLSpanElement>(null);
  const [gone, setGone] = useState(false);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const html = document.documentElement;
    html.style.overflow = "hidden";
    html.setAttribute(STAGES.reveal.attr, "");
    html.setAttribute(STAGES.done.attr, "");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const pageLoaded = new Promise<void>((resolve) => {
      if (document.readyState === "complete") resolve();
      else window.addEventListener("load", () => resolve(), { once: true });
    });
    const minTime = new Promise<void>((resolve) => setTimeout(resolve, MIN_SHOW_MS));

    const popIn = gsap.fromTo(
      bandsRef.current,
      { autoAlpha: 0, x: (i: number) => (i === 1 ? -14 : 14) },
      { autoAlpha: 1, x: 0, duration: 0.3, ease: "back.out(2)", delay: 0.2, stagger: 0.18 }
    );

    let exit: gsap.core.Timeline | undefined;
    let cancelled = false;

    void Promise.all([pageLoaded, minTime, document.fonts.ready]).then(() => {
      if (cancelled) return;

      exit = gsap.timeline({
        onComplete: () => {
          html.style.overflow = "";
          // What's left is shadowless cream on cream, so removing it is invisible.
          setGone(true);
          onDone();
          reach("done");
          // Pinned sections measured the page while it was locked; measure again.
          ScrollTrigger.refresh();
        },
      });
      if (reducedMotion) {
        exit.call(reach, ["reveal"]).to(root, { autoAlpha: 0, duration: 0.4 });
      } else {
        // Stops at the navbar's bottom edge, so for a moment the loader forms its base.
        const navbar = document.querySelector<HTMLElement>(".navbar-section");
        const keep = navbar?.offsetHeight ?? 0;
        exit
          .to(
            contentRef.current,
            { y: -60, autoAlpha: 0, duration: 0.35, ease: "power2.in" },
            "+=0.1"
          )
          .to(
            root,
            { y: () => keep - root.offsetHeight, duration: 0.8, ease: "power4.inOut" },
            "<0.1"
          )
          // The page starts to show a moment into the swipe: let it begin animating in then.
          .call(reach, ["reveal"], "<0.25")
          .to(edgeRef.current, { autoAlpha: 0, duration: 0.4, ease: "power1.inOut" }, "+=0.1");
      }
    });

    return () => {
      cancelled = true;
      popIn.kill();
      exit?.kill();
      html.style.overflow = "";
      html.removeAttribute(STAGES.reveal.attr);
      html.removeAttribute(STAGES.done.attr);
    };
  }, [onDone]);

  if (gone) return null;

  return (
    <div
      ref={rootRef}
      role="status"
      aria-label="Loading Solana Students Africa"
      className="bg-ssa-cream fixed inset-0 z-40 grid place-items-center"
    >
      {/* Own layer so the edge shadow can fade while the panel stays. */}
      <span ref={edgeRef} aria-hidden className="shadow-nav pointer-events-none absolute inset-0" />
      <div ref={contentRef} className="relative grid place-items-center">
        <AfricaMap
          title="Map of Africa"
          strokeWidth={0.5}
          className="text-ssa-purple/45 w-64 md:w-[24rem] lg:w-[28rem]"
        />
        {/* Gradient copies of each band stack over a purple base to pop in one by one. */}
        <p aria-hidden className="absolute top-1/2 left-1/2 w-max -translate-1/2">
          <span className="relative block">
            <span className={cn("text-ssa-purple block", WORDMARK_TEXT)} style={ALL_BANDS}>
              {WORDMARK}
            </span>
            {BANDS.map((band, i) => (
              <span
                key={i}
                ref={(el) => {
                  if (el) bandsRef.current[i] = el;
                }}
                className={cn(
                  "invisible absolute inset-0 block bg-clip-text text-transparent",
                  WORDMARK_TEXT,
                  WORDMARK_GRADIENT
                )}
                style={band}
              >
                {WORDMARK}
              </span>
            ))}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Loader;
