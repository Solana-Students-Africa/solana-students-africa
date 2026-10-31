import { cn } from "@/lib/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { type CSSProperties, useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

type Corner = "tl" | "tr" | "bl" | "br";

type Partner = {
  name: string;
  logo: string;
  /** Logos with their own transparent background render without the white tile. */
  bare?: boolean;
  /** Position on the desktop board, as percentages of its width/height. */
  x: number;
  y: number;
  /** Anchor horizontally from the right edge instead of the left. */
  fromRight?: boolean;
  label: "top" | "bottom";
  marker: Corner;
};

const partners: Partner[] = [
  {
    name: "GDSC",
    logo: "/images/image-41.png",
    bare: true,
    x: 14.8,
    y: 13.7,
    label: "top",
    marker: "tr",
  },
  {
    name: "Github Campus Experts",
    logo: "/images/gitcamp.png",
    x: 3.1,
    y: 0,
    fromRight: true,
    label: "top",
    marker: "tr",
  },
  {
    name: "Blueshift",
    logo: "/images/blueshift.jpg",
    x: 38.3,
    y: 22.8,
    label: "bottom",
    marker: "br",
  },
  { name: "Rektoff", logo: "/images/rektoff.jpg", x: 71.5, y: 19.3, label: "top", marker: "tl" },
  {
    name: "Web3Unilag",
    logo: "/images/web3-unilag.jpg",
    x: 1.6,
    y: 56,
    label: "top",
    marker: "tl",
  },
  { name: "Nithub", logo: "/images/nithub.jpg", x: 26.7, y: 67.4, label: "bottom", marker: "bl" },
  {
    name: "WomeninDefi",
    logo: "/images/women-defi.webp",
    x: 51.8,
    y: 65.4,
    label: "bottom",
    marker: "bl",
  },
  {
    name: "Web3 Afrika",
    logo: "/images/image-42.png",
    bare: true,
    x: 73.6,
    y: 62.2,
    label: "bottom",
    marker: "bl",
  },
  {
    name: "SuperteamNG",
    logo: "/images/superteam.jpg",
    x: 3.1,
    y: 67.5,
    fromRight: true,
    label: "bottom",
    marker: "br",
  },
];

const markerPosition: Record<Corner, string> = {
  tl: "-left-6 top-0",
  tr: "-right-6 top-0",
  bl: "-left-6 bottom-0",
  br: "-right-6 bottom-0",
};

type PartnerItemProps = { partner: Partner; className?: string; style?: CSSProperties };

const PartnerItem = ({ partner, className, style }: PartnerItemProps) => {
  const label = (
    <span className="text-ssa-ink text-sm font-semibold whitespace-nowrap sm:text-base">
      {partner.name}
    </span>
  );

  return (
    <div
      style={style}
      className={cn(
        "group relative flex flex-col gap-1.5",
        partner.fromRight ? "items-end" : "items-start",
        className
      )}
    >
      <span
        aria-hidden
        className={cn(
          "bg-ssa-purple absolute h-6 w-6 transition-transform duration-300 group-hover:rotate-45",
          markerPosition[partner.marker]
        )}
      />
      {partner.label === "top" && label}
      <div
        className={cn(
          "flex h-28 w-28 items-center justify-center overflow-hidden transition duration-300 group-hover:-translate-y-1.5 xl:h-[clamp(6rem,min(10vw,17vh),10.5rem)] xl:w-[clamp(6rem,min(10vw,17vh),10.5rem)]",
          partner.bare ? "" : "bg-white shadow-sm group-hover:shadow-lg"
        )}
      >
        <img
          src={partner.logo}
          alt={`${partner.name} logo`}
          loading="lazy"
          className={cn(
            "max-h-full max-w-full",
            partner.bare ? "w-full object-contain" : "h-full w-full object-contain"
          )}
        />
      </div>
      {partner.label === "bottom" && label}
    </div>
  );
};

const PartnersAndCommunities = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const boardRef = useRef<HTMLDivElement>(null);

  // Pulled up over Info's last screen and hidden until its pin ends: no extra scroll.
  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const mm = gsap.matchMedia();
    mm.add({ board: "(min-width: 1280px)", grid: "(max-width: 1279.98px)" }, (ctx) => {
      gsap.set(section, { autoAlpha: 0 });
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "max",
        onToggle: (self) => gsap.set(section, { autoAlpha: self.isActive ? 1 : 0 }),
      });

      const board = ctx.conditions?.board;
      gsap
        .timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: section,
            start: "top top",
            scrub: 0.6,
            // The board fits one screen on desktop, so hold it there before Campus.
            ...(board ? { pin: true, pinSpacing: true, end: "+=90%" } : { end: "+=20%" }),
          },
        })
        .fromTo(boardRef.current, { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: 0.2 })
        .to({}, { duration: board ? 0.7 : 0 });
    });
    return () => mm.revert();
  }, []);

  return (
    // Opaque cream so Info doesn't show through; the paper continues Info's grid.
    <section
      ref={sectionRef}
      className="partners-section bg-ssa-cream bg-grid-paper relative z-10 -mt-[100vh] py-16 md:py-24 xl:flex xl:h-screen xl:items-center xl:pt-24 xl:pb-6"
      id="partners"
    >
      <div
        ref={boardRef}
        className="relative px-4 py-10 xl:mx-auto xl:aspect-[1216/622] xl:w-[min(100%,calc((100vh_-_7.5rem)*1216/622))] xl:p-0"
      >
        <h2 className="mb-10 text-3xl leading-[0.95] font-extrabold xl:absolute xl:top-[3%] xl:left-[3%] xl:mb-0 xl:text-[2.2rem]">
          Partners &amp;
          <br />
          Communities
        </h2>

        {/* Desktop: scattered board */}
        <div className="hidden xl:block">
          {partners.map((partner) => (
            <PartnerItem
              key={partner.name}
              partner={partner}
              className="absolute"
              style={{
                top: `${partner.y}%`,
                [partner.fromRight ? "right" : "left"]: `${partner.x}%`,
              }}
            />
          ))}
        </div>

        {/* Mobile / tablet: simple grid */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 px-6 sm:grid-cols-3 xl:hidden">
          {partners.map((partner) => (
            <PartnerItem
              key={partner.name}
              partner={{ ...partner, fromRight: false, label: "bottom", marker: "tl" }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersAndCommunities;
