import AfricaMap from "@/components/ui/africa-map";
import { AFRICA_VIEWBOX } from "@/components/ui/africa-map-paths";
import { Container } from "@/components/ui/container";
import Tag from "@/components/ui/tag";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

type Part = string | { mark: string };
const MISSION: Part[] = [
  "To cultivate a thriving network of",
  { mark: "African student builders" },
  "who are shaping the future of the",
  { mark: "Solana ecosystem" },
  "through innovation, education, and collaboration.",
];

// RIPPLE_SECONDS must match the duration in the rings' animation class.
const RIPPLES = 4;
const RIPPLE_SECONDS = 8;

const words = (text: string) =>
  text.split(" ").map((word, i) => (
    <span key={i} data-step="word">
      {word}{" "}
    </span>
  ));

const MARK_HEIGHT = "0.38em";
const MARK_SIZE = `100% ${MARK_HEIGHT}`;

const FADED = 0.25;

// Its purple becomes the Campus section's background.
const ZOOM_COUNTRY = "nigeria";
const VIEWBOX_SIZE = Number(AFRICA_VIEWBOX.split(" ")[2]);

const logLerp = (a: number, b: number, t: number) => a * Math.pow(b / a, t);

// Offsets ignore transforms, so this stays accurate mid-zoom.
const offsetWithin = (el: HTMLElement, ancestor: HTMLElement) => {
  let x = 0;
  let y = 0;
  for (let node: HTMLElement | null = el; node && node !== ancestor; ) {
    x += node.offsetLeft;
    y += node.offsetTop;
    node = node.offsetParent as HTMLElement | null;
  }
  return { x, y };
};

const MissionSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const ripplesRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const text = textRef.current;
    const map = mapRef.current;
    const country = map?.querySelector<SVGGraphicsElement>(`[data-country="${ZOOM_COUNTRY}"]`);
    if (!section || !text || !map || !country) return;

    const mm = gsap.matchMedia();
    const conditions = {
      motion: "(prefers-reduced-motion: no-preference)",
      phone: "(max-width: 767.98px)",
    };
    mm.add(conditions, (ctx) => {
      const { motion, phone } = ctx.conditions ?? {};
      if (!motion) return;
      const fill = gsap.timeline({
        defaults: { ease: "none", duration: 0.1 },
        scrollTrigger: { trigger: section, start: "top 85%", end: "top top", scrub: 0.4 },
      });
      text.querySelectorAll<HTMLElement>("[data-step]").forEach((step, i) => {
        const at = i * 0.1;
        const kind = step.dataset.step;
        if (kind === "word") fill.fromTo(step, { opacity: FADED }, { opacity: 1 }, at);
        else
          fill.fromTo(
            step,
            { backgroundSize: `0% ${MARK_HEIGHT}` },
            { backgroundSize: MARK_SIZE, duration: 0.3 },
            at
          );
      });

      const measure = () => {
        const box = country.getBBox();
        const unit = map.offsetWidth / VIEWBOX_SIZE; // px per viewBox unit
        const originX = (box.x + box.width / 2) * unit;
        const originY = (box.y + box.height / 2) * unit;
        const w = section.clientWidth;
        const h = section.clientHeight;
        const at = offsetWithin(map, section);
        return {
          originX,
          originY,
          x: w / 2 - (at.x + originX),
          y: h / 2 - (at.y + originY),
          // Enough that the irregular shape, not just its bounding box, covers the screen.
          scale: (2.5 * Math.max(w, h)) / (Math.min(box.width, box.height) * unit),
        };
      };

      // Redrawing the map at that scale every frame is the worst stutter on phones.
      if (phone) {
        gsap
          .timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              trigger: section,
              pin: true,
              pinSpacing: true,
              start: "top top",
              end: "+=120%",
              scrub: 0.6,
              anticipatePin: 1,
            },
          })
          .to({}, { duration: 0.3 })
          .to(text, { autoAlpha: 0, y: -40, duration: 0.3 })
          .fromTo(fillRef.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.4 }, "<0.1");
        return;
      }

      let m = measure();
      const zoom = { t: 0 };
      const apply = () =>
        gsap.set(map, {
          transformOrigin: `${m.originX}px ${m.originY}px`,
          scale: logLerp(1, m.scale, zoom.t),
          x: m.x * Math.min(1, zoom.t * 3),
          y: m.y * Math.min(1, zoom.t * 3),
        });
      apply();

      gsap
        .timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: section,
            pin: true,
            // The page wrapper is a flex column, where GSAP would otherwise default this to false.
            pinSpacing: true,
            start: "top top",
            end: "+=250%",
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onRefresh: () => {
              m = measure();
              apply();
            },
          },
        })
        // A beat to read the finished statement.
        .to({}, { duration: 0.3 })
        .to(text, { autoAlpha: 0, y: -40, duration: 0.3 }, ">")
        .to(ripplesRef.current, { autoAlpha: 0, duration: 0.3 }, "<")
        .to(zoom, { t: 1, duration: 1.2, ease: "power2.in", onUpdate: apply }, "<")
        // Matches Campus exactly, so the hand-off is invisible.
        .fromTo(fillRef.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.25 }, ">-0.25");
    });
    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="mission-section relative flex h-screen items-center overflow-hidden"
      id="mission"
    >
      <div
        ref={ripplesRef}
        aria-hidden
        className="pointer-events-none absolute inset-0 grid place-items-center max-md:hidden"
      >
        {Array.from({ length: RIPPLES }, (_, i) => (
          <span
            key={i}
            // In the class, not inline, so reduced motion can switch it off.
            className="border-ssa-purple/15 col-start-1 row-start-1 aspect-square w-[120vmax] [animation:mission-ripple_8s_ease-out_infinite] rounded-full border-2 opacity-0 motion-reduce:scale-50 motion-reduce:[animation:none] motion-reduce:opacity-100"
            style={{ animationDelay: `${(-i * RIPPLE_SECONDS) / RIPPLES}s` }}
          />
        ))}
      </div>

      <Container className="relative flex flex-col items-center">
        <div ref={textRef} className="flex flex-col items-center">
          <Tag>Our Mission</Tag>
          <p className="text-ssa-purple mt-8 max-w-[48rem] text-center text-[1.75rem] leading-[1.1] font-extrabold tracking-tight md:text-[2.4rem] lg:text-[2.75rem]">
            {MISSION.map((part, i) => {
              if (typeof part === "string") return <span key={i}>{words(part)}</span>;
              return (
                // box-decoration-clone keeps the band on every line when the phrase wraps.
                <span
                  key={i}
                  data-step="mark"
                  className="[background-image:linear-gradient(var(--color-ssa-green),var(--color-ssa-green))] box-decoration-clone [background-position:0_86%] bg-no-repeat"
                  style={{ backgroundSize: MARK_SIZE }}
                >
                  {words(part.mark)}
                </span>
              );
            })}
          </p>
        </div>

        {/* No will-change: at this zoom the vector must re-rasterise or the borders blur. */}
        <div ref={mapRef} className="mt-12 w-44 md:w-52">
          <AfricaMap
            highlight={[ZOOM_COUNTRY]}
            title="Map of Africa with Nigeria highlighted"
            className="text-ssa-purple/70"
            highlightClassName="fill-ssa-purple text-ssa-purple"
          />
        </div>
      </Container>

      <div ref={fillRef} aria-hidden className="bg-ssa-purple invisible absolute inset-0" />
    </section>
  );
};

export default MissionSection;
