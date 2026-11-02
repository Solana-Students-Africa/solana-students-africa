import { whenLoaded } from "@/lib/loader-stages";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { type ReactNode, useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

// The bar draws from empty to full as the tag's top rises between these points of the viewport.
const SCRUB_START = 0.92;
const SCRUB_END = 0.6;

const Tag = ({ children, className }: { children: ReactNode; className?: string }) => {
  const rootRef = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // Wait for the reveal, or tags already in view would draw unseen behind the loader.
      const draw = gsap.fromTo(
        barRef.current,
        { scaleX: 0, transformOrigin: "left center" },
        { scaleX: 1, ease: "none", paused: true }
      );

      // Created outside this context's lifetime (after the loader), so kill it explicitly.
      let trigger: ScrollTrigger | undefined;
      const stopWaiting = whenLoaded(() => {
        const root = rootRef.current;
        if (!root) return;

        // Already past the scrub range on load (the hero's): no scroll left to drive it.
        if (root.getBoundingClientRect().top < window.innerHeight * SCRUB_END) {
          gsap.to(draw, { progress: 1, duration: 0.7, ease: "power3.inOut" });
          return;
        }

        trigger = ScrollTrigger.create({
          trigger: root,
          start: `top ${SCRUB_START * 100}%`,
          end: `top ${SCRUB_END * 100}%`,
          scrub: 0.5,
          animation: draw,
        });
      }, "reveal");
      return () => {
        stopWaiting?.();
        trigger?.kill();
      };
    });
    return () => mm.revert();
  }, []);

  return (
    <span
      ref={rootRef}
      className={cn(
        "text-ssa-purple relative inline-flex items-center py-0.5 pr-1 pl-7 text-xs font-bold tracking-wide uppercase sm:text-sm",
        className
      )}
    >
      <span
        ref={barRef}
        aria-hidden
        className="clip-slant bg-ssa-green absolute inset-y-0 left-0 w-[70%] [--slant:8px]"
      />
      <span className="relative">{children}</span>
    </span>
  );
};

export default Tag;
