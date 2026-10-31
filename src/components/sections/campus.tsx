import { photo, type SummitPhoto } from "@/lib/photos";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { type ReactNode, useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

// Scroll (in screen heights) spent on the intro panel before the track starts moving.
const INTRO_HOLD_SCREENS = 0.6;

const activities = ["Intro talks", "Hands-on workshops", "Hackathons", "Builder Q&As"];

const campuses = [
  { name: "Lagos State University", logo: "/images/lasu-logo.jpeg", tilt: "-rotate-6" },
  { name: "University of Ilorin", logo: "/images/ilorin-logo.jpeg", tilt: "rotate-3" },
  { name: "Caleb University", logo: "/images/caleb-logo.png", tilt: "-rotate-2" },
];

// Pieces flow normally on small screens and are placed with lg:absolute on large ones.

const TAPE_EDGE =
  "polygon(0 8%, 4% 0, 8% 10%, 12% 0, 100% 0, 96% 12%, 100% 25%, 96% 40%, 100% 55%, 96% 70%, 100% 85%, 96% 100%, 0 100%, 4% 88%, 0 74%, 4% 60%, 0 46%, 4% 32%, 0 18%)";

const Tape = ({ className }: { className?: string }) => (
  <span
    aria-hidden
    className={cn(
      "absolute z-10 h-6 w-20 bg-white/60 shadow-[0_1px_2px_rgb(0_0_0/0.08)]",
      className
    )}
    style={{ clipPath: TAPE_EDGE }}
  />
);

const Hand = ({ children, className }: { children: ReactNode; className?: string }) => (
  <p className={cn("font-hand text-ssa-ink text-lg leading-snug", className)}>{children}</p>
);

const Marker = ({ children }: { children: ReactNode }) => (
  <span className="bg-[linear-gradient(transparent_55%,rgb(182_232_144/0.85)_55%,rgb(182_232_144/0.85)_90%,transparent_90%)] px-1">
    {children}
  </span>
);

type PhotoProps = {
  src: SummitPhoto;
  alt: string;
  className?: string;
  caption?: string;
  tape?: string;
};

const TapedPhoto = ({
  src,
  alt,
  className,
  caption,
  tape = "-top-3 left-1/3 -rotate-6",
}: PhotoProps) => (
  <figure
    className={cn("relative w-fit bg-white p-2 shadow-[2px_6px_14px_rgb(0_0_0/0.18)]", className)}
  >
    <Tape className={tape} />
    <img
      src={photo(src, "sm")}
      alt={alt}
      loading="lazy"
      className="aspect-[4/3] w-48 object-cover"
    />
    {caption && (
      <figcaption className="font-hand text-ssa-ink/80 mt-1.5 text-center text-sm">
        {caption}
      </figcaption>
    )}
  </figure>
);

const StickyNote = ({ children, className }: { children: ReactNode; className?: string }) => (
  <div
    className={cn(
      "bg-ssa-green font-hand text-ssa-ink relative w-52 p-5 text-lg leading-snug shadow-[3px_8px_14px_rgb(0_0_0/0.2)]",
      className
    )}
  >
    <Tape className="-top-3 left-1/2 -translate-x-1/2 rotate-2" />
    {children}
  </div>
);

const Starburst = ({ className, label }: { className?: string; label: string }) => (
  <div className={cn("relative grid h-24 w-24 place-items-center", className)} aria-hidden>
    <svg viewBox="0 0 100 100" className="text-ssa-purple absolute inset-0 h-full w-full">
      <polygon
        fill="currentColor"
        points="50,0 59,22 82,10 76,35 100,40 80,56 94,78 69,76 64,100 50,82 36,100 31,76 6,78 20,56 0,40 24,35 18,10 41,22"
      />
    </svg>
    <span className="text-ssa-green relative text-sm leading-none font-extrabold uppercase">
      {label}
    </span>
  </div>
);

const HandArrow = ({ className }: { className?: string }) => (
  <svg
    aria-hidden
    viewBox="0 0 120 140"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M104 8C110 46 92 92 26 120" />
    <path d="M26 120L44 92" />
    <path d="M26 120L62 126" />
  </svg>
);

const HandCircle = () => (
  <svg
    aria-hidden
    viewBox="0 0 200 80"
    preserveAspectRatio="none"
    className="text-ssa-green pointer-events-none absolute -inset-x-3 -inset-y-2 h-[calc(100%+1rem)] w-[calc(100%+1.5rem)]"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
  >
    <path d="M150 8C110 -2 30 4 12 30C-4 54 60 76 120 72C178 68 204 46 188 24C174 6 120 2 70 10" />
    <path d="M140 14C100 6 36 12 22 34C10 54 70 70 124 66C170 62 192 44 180 28" opacity="0.7" />
  </svg>
);

type PageProps = {
  children: ReactNode;
  left?: boolean;
  className?: string;
};

const Page = ({ children, left, className }: PageProps) => (
  <div
    className={cn(
      "bg-grid-paper relative bg-[#f8f5ee] px-6 pt-5 pb-10 [--grid-line:rgb(30_30_30/0.07)] [--grid-size:22px]",
      "lg:h-[min(80vh,42rem)] lg:w-[36rem] lg:shrink-0 lg:px-8 lg:pb-0",
      left
        ? "lg:after:absolute lg:after:inset-y-0 lg:after:right-0 lg:after:w-10 lg:after:bg-linear-to-l lg:after:from-black/10 lg:after:to-transparent"
        : "lg:before:absolute lg:before:inset-y-0 lg:before:left-0 lg:before:w-6 lg:before:bg-linear-to-r lg:before:from-black/5 lg:before:to-transparent",
      className
    )}
  >
    <div className="text-ssa-ink/70 flex justify-between text-[0.65rem] font-bold tracking-widest uppercase">
      <span>Campus tour</span>
      <span>SSA Field Notes</span>
      <span>Solana Students Africa</span>
    </div>
    <div className="relative mt-6 flex flex-col gap-8 lg:static lg:mt-0 lg:block">{children}</div>
  </div>
);

const FirstEntryPage = () => (
  <Page left>
    <div className="lg:absolute lg:top-[12%] lg:left-[8%] lg:max-w-[16rem]">
      <Hand className="text-xl">field notes, entry 01:</Hand>
      <Hand className="mt-3">
        did you hear we&apos;ve been taking <Marker>Solana to campus</Marker>, one university at a
        time?
      </Hand>
      <Hand className="mt-3">every school we visit gets its own page in here. keep turning!</Hand>
    </div>

    <Starburst label="SSA" className="rotate-12 lg:absolute lg:top-[10%] lg:right-[10%]" />

    <StickyNote className="-rotate-3 lg:absolute lg:bottom-[9%] lg:left-[7%]">
      <span className="underline decoration-2 underline-offset-4">campus to-do:</span>
      <ul className="mt-2 space-y-0.5">
        {activities.map((activity) => (
          <li key={activity}>&#9745; {activity.toLowerCase()}</li>
        ))}
      </ul>
    </StickyNote>

    <TapedPhoto
      src="dsc08597"
      alt="Students listening during a campus session"
      caption="a full room, every time"
      className="rotate-3 self-end lg:absolute lg:right-[8%] lg:bottom-[12%]"
    />

    <HandArrow className="text-ssa-ink/70 hidden h-20 w-16 -scale-x-100 rotate-[200deg] lg:absolute lg:top-[44%] lg:right-[34%] lg:block" />
  </Page>
);

const UnilagPage = () => (
  <Page>
    <div className="flex items-center gap-3 lg:absolute lg:top-[11%] lg:left-[8%]">
      <img
        src="/images/unilag-logo.jpeg"
        alt="University of Lagos crest"
        className="h-12 w-12 -rotate-6 rounded-full border-4 border-white object-contain shadow-md"
      />
      <Hand className="text-xl">
        and then... we were at
        <br />
        <Marker>University of Lagos!</Marker>
      </Hand>
    </div>

    <Hand className="lg:absolute lg:top-[27%] lg:left-[8%] lg:max-w-[15rem]">
      the SSA Summit grand finale at the Faculty of Social Sciences. hundreds of students &amp;
      devs, a month-long hackathon, and winners announced on the day!
    </Hand>

    <div className="relative h-64 lg:absolute lg:top-[14%] lg:right-[5%] lg:h-[22rem] lg:w-[17rem]">
      <TapedPhoto
        src="dsc08925"
        alt="Panel session at the UNILAG summit"
        className="absolute top-0 right-0 rotate-6"
        tape="-top-3 right-6 rotate-12"
      />
      <TapedPhoto
        src="dsc09147"
        alt="Hackathon winners receiving their prize"
        caption="the winners!!"
        className="absolute bottom-0 left-0 -rotate-6"
      />
    </div>

    <Hand className="text-ssa-ink/85 lg:absolute lg:bottom-[22%] lg:left-[8%] lg:max-w-[14rem]">
      convened by <strong className="font-normal underline">Opeyemi Stephen</strong> &amp;{" "}
      <strong className="font-normal underline">Tobiloba Adedeji</strong> &#9825;
    </Hand>

    <a
      href="#contact"
      className="border-ssa-ink text-ssa-ink hover:bg-ssa-purple hover:text-ssa-green group block w-fit rotate-2 border-2 border-dashed bg-white px-5 py-3 text-center shadow-md transition lg:absolute lg:bottom-[7%] lg:left-[10%]"
    >
      <span className="block text-[0.6rem] font-bold tracking-[0.3em] uppercase">Admit one</span>
      <span className="block text-xl leading-none font-extrabold uppercase">Campus Program</span>
    </a>
  </Page>
);

const CampusesPage = () => (
  <Page left>
    <Hand className="text-xl lg:absolute lg:top-[11%] lg:left-[8%]">
      <span className="underline decoration-2 underline-offset-4">campuses visited:</span>
    </Hand>

    <ul className="flex flex-wrap gap-6 lg:absolute lg:top-[22%] lg:left-[8%] lg:w-[17rem] lg:flex-col lg:gap-5">
      {campuses.map((campus) => (
        <li key={campus.name} className={cn("flex items-center gap-3", campus.tilt)}>
          <span className="border-ssa-purple grid h-16 w-16 shrink-0 place-items-center rounded-full border-2 border-dashed bg-white shadow-md">
            <img src={campus.logo} alt="" loading="lazy" className="h-11 w-11 object-contain" />
          </span>
          <Hand>{campus.name}</Hand>
        </li>
      ))}
    </ul>

    <TapedPhoto
      src="dsc08766"
      alt="Students building together at a campus event"
      caption="builders, building"
      className="-rotate-3 lg:absolute lg:top-[16%] lg:right-[7%]"
      tape="-top-3 right-1/3 rotate-3"
    />

    <Hand className="text-ssa-purple text-xl lg:absolute lg:right-[12%] lg:bottom-[13%]">
      + more on the way &rarr;
    </Hand>
  </Page>
);

const NextCampusPage = () => (
  <Page>
    <div className="relative w-fit rotate-2 bg-white p-2 shadow-[2px_6px_14px_rgb(0_0_0/0.18)] lg:absolute lg:top-[12%] lg:left-[9%]">
      <Tape className="-top-3 left-1/3 -rotate-6" />
      <div className="border-ssa-ink/25 grid aspect-[4/3] w-48 place-items-center border-2 border-dashed">
        <Hand className="text-ssa-ink/45">your campus here?</Hand>
      </div>
    </div>

    <Hand className="text-ssa-purple text-3xl leading-tight lg:absolute lg:top-[16%] lg:right-[8%] lg:max-w-[13rem]">
      Your campus could be{" "}
      <span className="relative inline-block">
        next
        <HandCircle />
      </span>
    </Hand>

    <StickyNote className="rotate-2 lg:absolute lg:bottom-[24%] lg:left-[10%]">
      want SSA at your school?{" "}
      <a href="#contact" className="text-ssa-purple underline decoration-2 underline-offset-4">
        get in touch &rarr;
      </a>
    </StickyNote>

    <Hand className="text-right lg:absolute lg:right-[10%] lg:bottom-[9%]">
      loads of love,
      <br />
      the SSA team x
    </Hand>
  </Page>
);

// Stepped window cut into the poster's panel, in poster-relative coordinates.
const POSTER_WINDOW =
  "polygon(9% 33%, 19% 33%, 19% 27%, 52% 27%, 52% 29.5%, 88% 29.5%, 88% 39%, 92.5% 39%, 92.5% 58%, 88% 58%, 88% 63%, 77% 63%, 77% 66%, 47% 66%, 47% 63%, 7% 63%, 7% 52%, 9% 52%)";

// The window shows a second, identically framed copy of the photo, so it reads as see-through.
const PosterPanel = () => (
  <div className="px-6 pb-16 sm:px-10 lg:flex lg:h-full lg:shrink-0 lg:items-center lg:px-0 lg:pr-24 lg:pb-0">
    <div className="relative aspect-[2/3] w-full overflow-hidden sm:aspect-[4/5] lg:h-[min(86vh,46rem)] lg:w-auto">
      <img
        src={photo("dsc08597", "lg")}
        alt="Students listening during a campus session"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="bg-ssa-purple absolute inset-x-[5.5%] top-[17%] bottom-[5%] shadow-2xl" />
      <img
        src={photo("dsc08597", "lg")}
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ clipPath: POSTER_WINDOW }}
      />

      <div className="absolute inset-x-[11%] top-[21%] flex justify-between text-xs font-semibold md:text-sm">
        <span>Learn.</span>
        <span>Build.</span>
        <span>Connect.</span>
      </div>

      <h2 className="absolute top-[60%] left-[11%] text-2xl leading-[1.02] font-extrabold sm:top-[69%] sm:text-3xl md:text-4xl lg:text-[min(2.25rem,4vh)]">
        Connecting
        <br />
        campuses.
      </h2>

      <span className="text-ssa-green absolute bottom-[9%] left-[11%] text-[0.6rem] font-bold tracking-widest uppercase md:text-xs">
        Building on Solana
      </span>

      <div className="absolute right-[11%] bottom-[9%] max-w-[38%] text-right">
        <p className="text-sm font-extrabold tracking-wide uppercase md:text-base">
          SSA Campus Tour
        </p>
        <p className="mt-1 text-[0.65rem] leading-tight text-white/85 md:text-xs">
          Student builders, one university at a time, across the continent.
        </p>
      </div>
    </div>
  </div>
);

const IntroPanel = () => (
  <div className="flex flex-col justify-center gap-8 px-6 py-20 sm:px-10 lg:h-full lg:w-[min(48rem,70vw)] lg:shrink-0 lg:py-0 lg:pl-[8vw]">
    <h2
      data-intro
      className="text-ssa-green text-4xl leading-[1.02] font-extrabold md:text-[2.75rem]"
    >
      Building on{" "}
      <span className="relative inline-block">
        Solana
        <HandCircle />
      </span>
      ,
      <br />
      one campus at a time.
    </h2>
    <p data-intro className="max-w-lg text-lg leading-tight font-bold md:text-xl">
      Solana Students Africa brings hands-on blockchain learning and a community of student builders
      to universities across the continent.
    </p>
    <div data-intro className="flex items-end gap-3">
      <p className="font-hand text-ssa-green text-2xl">here are our field notes, keep scrolling</p>
      <HandArrow className="text-ssa-green h-14 w-12 -rotate-[100deg]" />
    </div>
  </div>
);

const CampusSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
      const track = trackRef.current;
      if (!track) return;
      const distance = () => track.scrollWidth - window.innerWidth;

      // Hold on the intro so it isn't scrolled straight past.
      const hold = () => INTRO_HOLD_SCREENS * window.innerHeight;

      gsap
        .timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: sectionRef.current,
            pin: true,
            // The page wrapper is a flex column, where GSAP would otherwise default this to false.
            pinSpacing: true,
            scrub: 0.6,
            end: () => `+=${hold() + distance()}`,
            invalidateOnRefresh: true,
          },
        })
        // Durations in px of scroll, so the hold and the travel split the pin proportionally.
        .to({}, { duration: hold() })
        .to(track, { x: () => -distance(), duration: distance() });
    });

    // Pulled up over Mission's last screen and hidden until its pin ends: no extra scroll.
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const section = sectionRef.current;
      if (!section) return;
      gsap.set(section, { autoAlpha: 0 });
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "max",
        onToggle: (self) => {
          gsap.set(section, { autoAlpha: self.isActive ? 1 : 0 });
          if (!self.isActive) return;
          gsap.fromTo(trackRef.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.4 });
          gsap.fromTo(
            section.querySelectorAll("[data-intro]"),
            { autoAlpha: 0, y: 40 },
            { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out", delay: 0.1 }
          );
        },
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="campus-section bg-ssa-purple relative z-10 overflow-hidden text-white motion-safe:-mt-[100vh] motion-reduce:overflow-x-auto"
      id="campus"
    >
      <div
        ref={trackRef}
        className="flex flex-col lg:h-screen lg:w-max lg:flex-row lg:items-center"
      >
        <IntroPanel />
        <PosterPanel />

        <div className="mx-6 mb-24 flex flex-col gap-6 sm:mx-10 lg:mr-[8vw] lg:mb-0 lg:ml-0 lg:flex-row lg:gap-0 lg:overflow-hidden lg:rounded-[1.75rem]">
          <FirstEntryPage />
          <UnilagPage />
          <CampusesPage />
          <NextCampusPage />
        </div>
      </div>
    </section>
  );
};

export default CampusSection;
