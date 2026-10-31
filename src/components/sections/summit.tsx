import { Container } from "@/components/ui/container";
import Tag from "@/components/ui/tag";
import { photo } from "@/lib/photos";
import { playWhenVisible } from "@/lib/play-when-visible";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Play, Volume2, VolumeX, X } from "lucide-react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const CARD_TILT = 7; // degrees of rotateX on the resting card
const CARD_RADIUS = 18;

// Must match the summit panel's top margin (mt-[60vh]).
const DWELL_SCREENS = 0.6;

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

const WORD_CLASS =
  "pointer-events-none absolute inset-x-0 -bottom-[0.18em] text-center text-[24vw] leading-none font-extrabold tracking-tighter select-none";

const SummitStage = () => {
  const stageRef = useRef<HTMLDivElement>(null);
  const slotRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);
  const bandRef = useRef<HTMLDivElement>(null);
  const gridWordRef = useRef<HTMLParagraphElement>(null);
  const dimRef = useRef<HTMLDivElement>(null);
  const actions = useRef({ expand: () => {}, collapse: () => {} });

  const [expanded, setExpanded] = useState(false);
  const [muted, setMuted] = useState(true);

  const setSound = (on: boolean) => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !on;
    setMuted(!on);
  };

  useLayoutEffect(() => {
    const stage = stageRef.current;
    const slot = slotRef.current;
    const frame = frameRef.current;
    if (!stage || !slot || !frame) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const place = () => {
      const s = stage.getBoundingClientRect();
      const r = slot.getBoundingClientRect();
      gsap.set(frame, {
        position: "absolute",
        zIndex: 20,
        top: r.top - s.top,
        left: r.left - s.left,
        width: r.width,
        height: r.height,
        rotateX: CARD_TILT,
        borderRadius: CARD_RADIUS,
        transformPerspective: 900,
      });
    };
    place();

    // Follows the slot's live position, so it lands right even if the page scrolls.
    const lift = { p: 0 };
    const applyLift = () => {
      const r = slot.getBoundingClientRect();
      const p = lift.p;
      gsap.set(frame, {
        position: "fixed",
        zIndex: 60,
        top: lerp(r.top, 0, p),
        left: lerp(r.left, 0, p),
        width: lerp(r.width, window.innerWidth, p),
        height: lerp(r.height, window.innerHeight, p),
        rotateX: lerp(CARD_TILT, 0, p),
        borderRadius: lerp(CARD_RADIUS, 0, p),
      });
    };

    let tween: gsap.core.Tween | undefined;
    actions.current = {
      expand: () => {
        tween?.kill();
        setExpanded(true);
        gsap.to(cursorRef.current, { autoAlpha: 0, duration: 0.2 });
        tween = gsap.to(lift, {
          p: 1,
          duration: reducedMotion ? 0 : 0.85,
          ease: "power3.inOut",
          onUpdate: applyLift,
          onComplete: applyLift,
        });
      },
      collapse: () => {
        tween?.kill();
        setSound(false);
        tween = gsap.to(lift, {
          p: 0,
          duration: reducedMotion ? 0 : 0.6,
          ease: "power3.inOut",
          onUpdate: applyLift,
          onComplete: () => {
            place();
            setExpanded(false);
            gsap.to(cursorRef.current, { autoAlpha: 1, duration: 0.3 });
          },
        });
      },
    };

    const onRefresh = () => {
      if (lift.p === 0) place();
    };
    ScrollTrigger.addEventListener("refresh", onRefresh);

    // Dimmed with a layer, not scaled: a transform would break the fixed player inside.
    const pin = ScrollTrigger.create({
      trigger: stage,
      pin: true,
      pinSpacing: false,
      start: "top top",
      end: `+=${(DWELL_SCREENS + 1) * 100}%`,
      animation: gsap
        .timeline()
        .to({}, { duration: DWELL_SCREENS })
        .fromTo(dimRef.current, { opacity: 0 }, { opacity: 1, ease: "none", duration: 1 }),
      scrub: true,
    });

    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // The grid copy opens from the centre, as the ribbon grows from it.
      const revealIn = gsap
        .timeline({ paused: true })
        .fromTo(bandRef.current, { scale: 0 }, { scale: 1, duration: 1.1, ease: "expo.out" }, 0)
        .fromTo(
          gridWordRef.current,
          { clipPath: "inset(-20% 50% -20% 50%)" },
          { clipPath: "inset(-20% 0% -20% 0%)", duration: 1.1, ease: "expo.out" },
          0
        );
      ScrollTrigger.create({
        trigger: stage,
        start: "top top",
        onEnter: () => revealIn.play(),
        onLeaveBack: () => revealIn.reverse(),
      });
    });

    return () => {
      tween?.kill();
      pin.kill();
      mm.revert();
      ScrollTrigger.removeEventListener("refresh", onRefresh);
    };
  }, []);

  useEffect(() => (videoRef.current ? playWhenVisible(videoRef.current) : undefined), []);

  // Scrolling means the visitor wants to move on.
  useEffect(() => {
    if (!expanded) return;
    const close = () => actions.current.collapse();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    // Ignore any scroll still settling from the click.
    const armed = setTimeout(() => window.addEventListener("scroll", close, { once: true }), 400);
    window.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(armed);
      window.removeEventListener("scroll", close);
      window.removeEventListener("keydown", onKey);
    };
  }, [expanded]);

  const play = () => {
    const video = videoRef.current;
    if (!video) return;
    actions.current.expand();
    video.currentTime = 0;
    setSound(true);
    void video.play();
  };

  const followCursor = (e: React.PointerEvent) => {
    const frame = frameRef.current;
    if (!frame || expanded || e.pointerType !== "mouse") return;
    const r = frame.getBoundingClientRect();
    gsap.to(cursorRef.current, {
      x: e.clientX - r.left - r.width / 2,
      y: e.clientY - r.top - r.height / 2,
      duration: 0.4,
      ease: "power3.out",
    });
  };
  const recenterCursor = () =>
    gsap.to(cursorRef.current, { x: 0, y: 0, duration: 0.5, ease: "power3.out" });

  return (
    <div ref={stageRef} className="relative h-screen overflow-hidden">
      <div ref={bandRef} aria-hidden className="absolute inset-0">
        <div className="bg-ssa-purple/15 absolute inset-0 [clip-path:polygon(58%_0,88%_0,42%_100%,12%_100%)]" />
      </div>
      <p aria-hidden className={cn(WORD_CLASS, "text-ssa-purple")}>
        SUMMIT
      </p>
      {/* Same grid paper as the rest of the page, clipped to the letters and outlined like the focus numbers. */}
      <p
        ref={gridWordRef}
        aria-hidden
        className={cn(
          WORD_CLASS,
          "bg-grid-paper [background-color:color-mix(in_srgb,var(--color-ssa-purple)_14%,var(--color-ssa-cream))] bg-clip-text text-transparent [--grid-line:rgb(153_69_255/0.55)] [--grid-size:0.06em] [-webkit-text-stroke:0.006em_var(--color-ssa-purple)]"
        )}
      >
        SUMMIT
      </p>

      <Container className="relative flex h-full max-w-6xl flex-col pt-28 pb-10 md:pt-32">
        <h2 className="text-ssa-purple text-center text-3xl font-extrabold md:text-[2.1rem]">
          See where it started
        </h2>

        <div className="text-ssa-ink/80 grid flex-1 content-center items-center gap-6 text-center text-sm md:grid-cols-[1fr_minmax(0,28rem)_1fr] md:gap-10 md:text-base">
          <p className="order-2 md:order-none md:text-left">Where the builders showed up.</p>
          <div ref={slotRef} className="aspect-[3/2] w-full" />
          <p className="order-3 md:order-none md:text-right">200+ students. One day. Press play.</p>
        </div>
      </Container>

      <div
        ref={frameRef}
        className={cn(
          "bg-ssa-ink overflow-hidden shadow-[0_18px_40px_-20px_rgb(153_69_255/0.6)]",
          !expanded && "cursor-none"
        )}
        onPointerMove={followCursor}
        onPointerLeave={recenterCursor}
      >
        <video
          ref={videoRef}
          preload="none"
          loop
          playsInline
          muted
          poster={photo("dsc08705", "lg")}
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/experience-summit-video.mp4" type="video/mp4" />
        </video>

        <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span
            ref={cursorRef}
            className="bg-ssa-green text-ssa-ink flex items-center gap-2 rounded-full px-5 py-3 text-sm font-extrabold tracking-wide uppercase shadow-lg"
          >
            <Play aria-hidden className="h-4 w-4 fill-current" />
            Play
          </span>
        </span>

        {!expanded && (
          <button
            type="button"
            onClick={play}
            className="focus-visible:ring-ssa-green absolute inset-0 focus-visible:ring-4 focus-visible:outline-none focus-visible:ring-inset"
            aria-label="Play the summit video with sound"
          />
        )}

        <div
          className={cn(
            "absolute inset-x-0 top-0 flex justify-end p-5 transition-opacity duration-500 md:p-8",
            expanded ? "opacity-100 delay-500" : "pointer-events-none opacity-0"
          )}
        >
          <button
            type="button"
            onClick={() => actions.current.collapse()}
            className="bg-ssa-ink/60 hover:bg-ssa-purple flex h-11 w-11 items-center justify-center rounded-full text-white backdrop-blur-sm transition hover:scale-110"
            aria-label="Close video"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div
          className={cn(
            "absolute inset-x-0 bottom-0 flex items-end justify-between p-5 text-white transition-opacity duration-500 md:p-8",
            expanded ? "opacity-100 delay-500" : "pointer-events-none opacity-0"
          )}
        >
          <span className="text-xs font-semibold tracking-widest uppercase opacity-80">
            Scroll or Esc to close
          </span>
          <button
            type="button"
            onClick={() => setSound(muted)}
            className="bg-ssa-ink/60 hover:bg-ssa-purple flex h-11 w-11 items-center justify-center rounded-full backdrop-blur-sm transition hover:scale-110"
            aria-label={muted ? "Unmute video" : "Mute video"}
          >
            {muted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        ref={dimRef}
        aria-hidden
        className="bg-ssa-ink/60 pointer-events-none absolute inset-0 z-30 opacity-0"
      />
    </div>
  );
};

const details = [
  { label: "Theme", value: "Solana x AI" },
  { label: "Venue", value: "Faculty of Social Sciences, UNILAG" },
  { label: "Format", value: "Workshops, hackathon finale, networking" },
];

const notes = [
  { value: "200+", text: "students from across the continent," },
  { value: "01", text: "month of hackathon, one grand finale." },
];

const SummitPanel = () => {
  const panelRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;

    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const band = panel.querySelector<HTMLElement>("[data-band]");
      gsap.fromTo(
        panel.querySelector("[data-drift]"),
        { yPercent: -10 },
        {
          yPercent: 10,
          ease: "none",
          scrollTrigger: { trigger: band, start: "top bottom", end: "bottom top", scrub: true },
        }
      );

      gsap.utils.toArray<HTMLElement>("[data-rise-group]", panel).forEach((group) => {
        gsap.fromTo(
          group.querySelectorAll("[data-rise]"),
          { y: 30, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.08,
            scrollTrigger: { trigger: group, start: "top 80%", once: true },
          }
        );
      });
    });
    return () => mm.revert();
  }, []);

  return (
    // At least a screen tall so it hides the stage parked behind it after the pin.
    <div
      ref={panelRef}
      className="bg-ssa-ink relative isolate z-40 mt-[60vh] min-h-screen overflow-hidden py-20 text-white shadow-[0_-10px_28px_rgb(30_20_50/0.16),0_-2px_6px_rgb(30_20_50/0.08)] md:py-28"
    >
      <div
        aria-hidden
        className="bg-grid-paper absolute inset-0 -z-10 [--grid-line:rgb(255_255_255/0.07)] [--grid-size:48px]"
      />

      <Container
        data-rise-group
        className="grid max-w-5xl gap-10 md:grid-cols-[1fr_auto] md:items-end md:gap-16"
      >
        <div>
          <Tag>The SSA Summit</Tag>
          <h3
            data-rise
            className="mt-6 text-4xl leading-[0.95] font-semibold tracking-tight md:text-6xl"
          >
            The inaugural
            <br />
            summit<span className="text-ssa-green">.</span>
          </h3>
        </div>

        <dl data-rise className="grid gap-4 text-sm md:min-w-[18rem] md:text-base">
          {details.map((detail) => (
            <div key={detail.label} className="border-t border-white/20 pt-3">
              <dt className="text-ssa-green text-xs font-bold tracking-widest uppercase">
                {detail.label}
              </dt>
              <dd className="mt-1 text-white/90">{detail.value}</dd>
            </div>
          ))}
        </dl>
      </Container>

      <div data-band className="mt-12 h-[38vh] overflow-hidden md:mt-16 md:h-[48vh]">
        <img
          data-drift
          src={photo("dsc09172", "lg")}
          alt="Summit attendees gathered for a group photo outside the venue"
          loading="lazy"
          className="h-full w-full scale-[1.25] object-cover object-[50%_70%]"
        />
      </div>

      <Container data-rise-group className="mt-14 max-w-5xl md:mt-20">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <p
              data-rise
              className="text-6xl leading-[0.88] font-semibold tracking-tighter lowercase md:text-7xl lg:text-8xl"
            >
              where
              <br />
              the
              <br />
              builders
              <br />
              showed up<span className="text-ssa-green">.</span>
            </p>
          </div>

          <div className="relative">
            <dl data-rise className="space-y-3">
              {notes.map((note) => (
                <div key={note.value} className="flex items-start gap-4">
                  <dt className="w-16 shrink-0 text-3xl font-semibold tracking-tight">
                    {note.value}
                  </dt>
                  <dd className="max-w-[14rem] pt-1.5 text-sm leading-snug text-white/85">
                    {note.text}
                  </dd>
                </div>
              ))}
            </dl>

            <div data-rise className="relative mt-10 px-6 py-7">
              <span
                aria-hidden
                className="absolute top-0 right-0 h-5 w-5 border-t-2 border-r-2 border-white/80"
              />
              <span
                aria-hidden
                className="absolute bottom-0 left-0 h-5 w-5 border-b-2 border-l-2 border-white/80"
              />
              <p className="text-base leading-relaxed text-pretty text-white/90 md:text-lg">
                The first-ever Solana Students Africa Summit brought together over 200 students from
                across the continent, held with leading universities and blockchain organisations.
              </p>
              <p className="mt-5 text-base leading-relaxed text-pretty text-white/90 md:text-lg">
                Workshops, the hackathon finale and a day of networking opened up what Web3 on
                Solana can be, and where Africa&apos;s student builders can take it.
              </p>
            </div>
          </div>
        </div>

        <p data-rise className="mt-16 text-right text-sm text-white/70 md:mt-24">
          archive by SSA
        </p>
      </Container>
    </div>
  );
};

const SummitSection = () => {
  return (
    <section className="summit-section" id="summit">
      <SummitStage />
      <SummitPanel />
    </section>
  );
};

export default SummitSection;
