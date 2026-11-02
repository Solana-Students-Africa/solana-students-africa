import { photo, SUMMIT_PHOTOS } from "@/lib/photos";
import { playWhenVisible } from "@/lib/play-when-visible";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useLayoutEffect, useRef, useSyncExternalStore } from "react";

gsap.registerPlugin(ScrollTrigger);

const VIDEO_SRC = "/videos/experience-summit-video.mp4";
// Tile 17 is the centre of both 7 x 5 (desktop) and 5 x 7 (mobile).
const DESKTOP_COLS = 7;
const TILE_COUNT = 35;
const CENTER_TILE = 17;

// The hero's transparent cut-out isn't a tile photo.
const STILLS = SUMMIT_PHOTOS.filter((name) => !name.endsWith("-transparent"));
const tiles = Array.from(
  { length: TILE_COUNT },
  (_, i) => STILLS[(i * 3 + Math.floor(i / DESKTOP_COLS)) % STILLS.length]
);

// Only the 5 x 3 block around the centre plays: at full-grid size the outer tiles read fine as stills.
const isNearCentre = (i: number) =>
  Math.abs(Math.floor(i / DESKTOP_COLS) - Math.floor(CENTER_TILE / DESKTOP_COLS)) <= 1 &&
  Math.abs((i % DESKTOP_COLS) - (CENTER_TILE % DESKTOP_COLS)) <= 2;

// One developer-cohort clip per tile in that block (14), each with a matching .jpg poster.
const cohortClip = new Map(
  Array.from({ length: TILE_COUNT }, (_, i) => i)
    .filter((i) => i !== CENTER_TILE && isNearCentre(i))
    .map((i, n) => [i, `/videos/cohort/cohort-${String(n + 1).padStart(2, "0")}`])
);

// Must match `bg-grid-paper` in index.css, which the Partners section uses.
const PAPER_SIZE = 20;
const PAPER_ALPHA = 0.35;
const LINE_RGB = [182, 232, 144]; // --ssa-green
// The video grid's gaps are purple; its lines turn green as they shrink into Partners' paper.
const GAP_RGB = [153, 69, 255]; // --ssa-purple

// Scroll length of each pinned stage, in screen heights.
const ZOOM_SCREENS = 2.5;
const LINES_SCREENS = 1;

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
// Geometric interpolation, so zooms feel even instead of crawling then rushing.
const logLerp = (a: number, b: number, t: number) => a * Math.pow(b / a, t);
// Wrap `v` into [-m/2, m/2).
const wrap = (v: number, m: number) => ((((v + m / 2) % m) + m) % m) - m / 2;

const paperStyle = (o: {
  size: [number, number];
  pos: [number, number];
  width: number;
  alpha: number;
  rgb?: number[];
}) => {
  const line = `rgb(${(o.rgb ?? LINE_RGB).join(" ")} / ${o.alpha})`;
  return {
    backgroundImage: `linear-gradient(to right, ${line} ${o.width}px, transparent ${o.width}px), linear-gradient(to bottom, ${line} ${o.width}px, transparent ${o.width}px)`,
    backgroundSize: `${o.size[0]}px ${o.size[1]}px`,
    backgroundPosition: `${o.pos[0]}px ${o.pos[1]}px`,
  };
};

// Matches Tailwind's `md` breakpoint, where the grid switches to 7 x 5.
const DESKTOP_QUERY = "(min-width: 768px)";
const subscribeDesktop = (onChange: () => void) => {
  const mql = window.matchMedia(DESKTOP_QUERY);
  mql.addEventListener("change", onChange);
  return () => mql.removeEventListener("change", onChange);
};
const getIsDesktop = () => window.matchMedia(DESKTOP_QUERY).matches;

const Info = () => {
  // Many scaling videos are too heavy for phones.
  const isDesktop = useSyncExternalStore(subscribeDesktop, getIsDesktop);
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const paperRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const grid = gridRef.current;
    const center = centerRef.current;
    const paper = paperRef.current;
    if (!section || !grid || !center || !paper) return;

    // Offsets ignore transforms, so re-measuring mid-animation is safe.
    const measure = () => {
      const w = section.clientWidth;
      const h = section.clientHeight;
      const cs = getComputedStyle(grid);
      const gap = parseFloat(cs.columnGap);
      const pitch: [number, number] = [center.offsetWidth + gap, center.offsetHeight + gap];
      const tileScale = Math.max(w / center.offsetWidth, h / center.offsetHeight) * 1.01;
      const fillScale = Math.max(w / grid.offsetWidth, h / grid.offsetHeight) * 1.01;
      const gridCenter: [number, number] = [
        grid.offsetLeft + grid.offsetWidth / 2,
        grid.offsetTop + grid.offsetHeight / 2,
      ];
      // Padding equals the gap, so lines repeat every `pitch` from the grid's edge.
      const linesAt: [number, number] = [
        gridCenter[0] - (fillScale * grid.offsetWidth) / 2,
        gridCenter[1] - (fillScale * grid.offsetHeight) / 2,
      ];
      // Partners overlaps this section exactly when the pin ends, so its lines start at 0, 0.
      const finalAt: [number, number] = [0, 0];
      return { gap, pitch, tileScale, fillScale, gridCenter, linesAt, finalAt };
    };

    let m = measure();
    const state = { zoom: 0, shrink: 0 };

    const applyZoom = () => {
      gsap.set(grid, {
        transformOrigin: "50% 50%",
        scale: logLerp(m.tileScale, m.fillScale, state.zoom),
      });
    };

    const applyPaper = () => {
      const q = state.shrink;
      const size = [0, 1].map((a) => logLerp(m.fillScale * m.pitch[a], PAPER_SIZE, q)) as [
        number,
        number,
      ];
      const pos = [0, 1].map((a) => {
        const startSize = m.fillScale * m.pitch[a];
        // Shrink about the centre, then nudge so the lines land on the final phase.
        const fromCenter = (c: number, s: number) =>
          m.gridCenter[a] - (m.gridCenter[a] - c) * (s / startSize);
        const drift = wrap(m.finalAt[a] - fromCenter(m.linesAt[a], PAPER_SIZE), PAPER_SIZE);
        return fromCenter(m.linesAt[a], size[a]) + drift * q;
      }) as [number, number];

      gsap.set(paper, {
        ...paperStyle({
          size,
          pos,
          width: lerp(m.fillScale * m.gap, 1, q),
          alpha: lerp(1, PAPER_ALPHA, q),
          rgb: GAP_RGB.map((c, k) => Math.round(lerp(c, LINE_RGB[k], q))),
        }),
      });
    };

    const pin = {
      trigger: section,
      pin: true,
      // The page wrapper is a flex column, where GSAP would otherwise default this to false.
      pinSpacing: true,
      start: "top top",
      anticipatePin: 1,
      invalidateOnRefresh: true,
    };

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      applyZoom();
      applyPaper();

      // Separate scrubbed timelines so each stage can be paced and smoothed on its own.
      const screen = () => section.clientHeight;
      const pinned = ScrollTrigger.create({
        ...pin,
        end: () => `+=${(ZOOM_SCREENS + LINES_SCREENS) * screen()}`,
        onRefresh: () => {
          m = measure();
          applyZoom();
          applyPaper();
        },
      });
      const split = () => pinned.start + ZOOM_SCREENS * screen();

      // A heavier scrub keeps the big zoom fluid.
      gsap
        .timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            start: () => pinned.start,
            end: split,
            scrub: 1.5,
            invalidateOnRefresh: true,
          },
        })
        .to(textRef.current, { opacity: 0, duration: 0.15 }, 0)
        .to(overlayRef.current, { opacity: 0, duration: 0.5 }, 0.1)
        .to(state, { zoom: 1, duration: 0.9, ease: "power1.inOut", onUpdate: applyZoom }, 0.1);

      // A lighter scrub so the lines track the scroll closely.
      gsap
        .timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            start: split,
            end: () => pinned.end,
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        })
        // autoAlpha hides the grid outright once faded, so the browser stops painting the videos.
        .to(grid, { autoAlpha: 0, duration: 0.3 }, 0)
        .to(state, { shrink: 1, duration: 1, ease: "power1.inOut", onUpdate: applyPaper }, 0.15)
        // A sliver of hold so the scrub settles before Partners takes over the screen.
        .to({}, { duration: 0.05 });
    });

    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set(paper, {
        ...paperStyle({
          size: [PAPER_SIZE, PAPER_SIZE],
          pos: m.finalAt,
          width: 1,
          alpha: PAPER_ALPHA,
        }),
      });

      gsap
        .timeline({
          defaults: { ease: "none" },
          scrollTrigger: { ...pin, end: "+=150%", scrub: 0.6 },
        })
        .to(textRef.current, { opacity: 0, duration: 0.3 }, 0)
        .to(overlayRef.current, { opacity: 0, duration: 0.5 }, 0)
        .to(grid, { opacity: 0, duration: 0.5 }, 0.5);
    });

    return () => mm.revert();
  }, []);

  // Which tiles are videos changes with the breakpoint.
  useEffect(() => {
    const videos = gridRef.current?.querySelectorAll("video") ?? [];
    const stops = [...videos].map(playWhenVisible);
    return () => stops.forEach((stop) => stop());
  }, [isDesktop]);

  return (
    <section
      ref={sectionRef}
      className="info-section relative flex h-screen items-center justify-center overflow-hidden"
      id="about"
    >
      <div ref={paperRef} className="pointer-events-none absolute inset-0" aria-hidden />

      {/* Tiles share the screen's shape, so the zoomed-in centre tile is exactly the viewport. */}
      <div
        ref={gridRef}
        className="bg-ssa-purple relative grid grid-cols-[repeat(5,12.8vw)] grid-rows-[repeat(7,12.8vh)] gap-1 p-1 will-change-transform md:grid-cols-[repeat(7,12.8vw)] md:grid-rows-[repeat(5,12.8vh)] md:gap-1.5 md:p-1.5"
        aria-hidden
      >
        {tiles.map((name, i) => {
          const clip = isDesktop ? cohortClip.get(i) : undefined;
          return (
            <div
              key={i}
              ref={i === CENTER_TILE ? centerRef : undefined}
              className="bg-ssa-ink overflow-hidden"
            >
              {i === CENTER_TILE || clip ? (
                <video
                  src={clip ? `${clip}.mp4` : VIDEO_SRC}
                  poster={clip ? `${clip}.jpg` : photo(name, "sm")}
                  preload="none"
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover"
                />
              ) : (
                <img src={photo(name, "sm")} alt="" className="h-full w-full object-cover" />
              )}
            </div>
          );
        })}
      </div>

      <div ref={overlayRef} className="bg-ssa-ink/45 pointer-events-none absolute inset-0" />

      {/* Fade in on the wrapper so it doesn't clash with the scroll fade on the text. */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center px-6"
        data-animate-fadein
      >
        <p
          ref={textRef}
          className="max-w-3xl text-center text-lg leading-snug font-semibold text-white md:text-2xl"
        >
          Solana Students Africa (SSA) is a student-led initiative dedicated to advancing blockchain
          education and innovation across Africa through the Solana ecosystem. We provide student
          builders with the knowledge, tools, and opportunities to explore decentralized
          technologies and build impactful solutions on Solana.
        </p>
      </div>
    </section>
  );
};

export default Info;
