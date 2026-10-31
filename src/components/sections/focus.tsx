import { Container } from "@/components/ui/container";
import Tag from "@/components/ui/tag";
import { photo, type SummitPhoto } from "@/lib/photos";
import { cn } from "@/lib/utils";
import { GraduationCap, type LucideIcon, Rocket, Trophy, Users } from "lucide-react";
import { useState } from "react";

// How long each card stays open before auto-advancing, in ms. Must match the progress bar.
const CYCLE_MS = 6000;

const focusAreas: {
  title: string;
  description: string;
  icon: LucideIcon;
  photo: SummitPhoto;
}[] = [
  {
    title: "Education & Training",
    description:
      "Equipping students with practical blockchain development skills through workshops, bootcamps, and hands-on learning.",
    icon: GraduationCap,
    photo: "dsc08705",
  },
  {
    title: "Hackathons & Summits",
    description:
      "Creating platforms that inspire innovation and collaboration among Africa's brightest minds through competitions and events.",
    icon: Trophy,
    photo: "dsc09147",
  },
  {
    title: "Community Building",
    description:
      "Nurturing vibrant, student-led communities across campuses that foster knowledge sharing, inclusion, and peer-to-peer learning.",
    icon: Users,
    photo: "dsc08766",
  },
  {
    title: "Ecosystem Growth",
    description:
      "Connecting African talents to global opportunities and supporting builders as they scale their projects on Solana.",
    icon: Rocket,
    photo: "dsc08554",
  },
];

const FocusSection = () => {
  const [active, setActive] = useState(1);
  const [paused, setPaused] = useState(false);

  const next = () => setActive((i) => (i + 1) % focusAreas.length);

  return (
    <section className="focus-section py-16 md:py-24" id="focus">
      <Container className="max-w-6xl">
        <Tag className="mb-10 md:mb-16">Our Focus</Tag>

        <div
          className="flex flex-col gap-4 lg:h-[21.25rem] lg:flex-row lg:gap-4"
          data-animate-fadein
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          {focusAreas.map((area, index) => {
            const isActive = index === active;
            const Icon = area.icon;
            return (
              <button
                key={area.title}
                type="button"
                aria-expanded={isActive}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                onClick={() => setActive(index)}
                className={cn(
                  "clip-slant group relative isolate flex cursor-pointer flex-col overflow-hidden text-left text-white transition-[flex-grow,background-color,clip-path] duration-500 ease-out focus-visible:outline-none lg:h-full",
                  "px-8 py-6 lg:py-10",
                  isActive
                    ? "bg-ssa-purple min-h-64 [--slant:24px] lg:flex-[2.8] lg:pr-10 lg:pl-16 lg:[--slant:46px]"
                    : "bg-ssa-green min-h-36 pb-14 [--slant:12px] lg:flex-1 lg:pr-5 lg:pl-7 lg:[--slant:20px]"
                )}
              >
                {/* Own layer: tailwind-merge treats bg-grid-paper as a colour and would drop bg-ssa-green. */}
                <span
                  aria-hidden
                  className={cn(
                    "bg-grid-paper absolute inset-0 -z-10 transition-opacity duration-500 [--grid-line:rgb(255_255_255/0.35)]",
                    isActive ? "opacity-0" : "opacity-100"
                  )}
                />
                <img
                  src={photo(area.photo, "sm")}
                  alt=""
                  aria-hidden
                  loading="lazy"
                  className={cn(
                    "absolute inset-0 -z-10 h-full w-full object-cover mix-blend-multiply grayscale transition-[opacity,transform] duration-[1400ms] ease-out",
                    isActive ? "scale-100 opacity-50" : "scale-110 opacity-0"
                  )}
                />
                <div
                  aria-hidden
                  className={cn(
                    "from-ssa-purple via-ssa-purple/80 absolute inset-0 -z-10 bg-linear-to-r to-transparent transition-opacity duration-500",
                    isActive ? "opacity-100" : "opacity-0"
                  )}
                />

                <Icon
                  aria-hidden
                  strokeWidth={2.25}
                  className={cn(
                    "mb-5 shrink-0 transition-all duration-500",
                    isActive
                      ? "text-ssa-green h-9 w-9 rotate-0"
                      : "text-ssa-purple h-7 w-7 -rotate-12 group-hover:rotate-0"
                  )}
                />

                <h3
                  className={cn(
                    "text-2xl leading-none font-extrabold text-balance",
                    isActive
                      ? "lg:text-[1.6rem] lg:whitespace-nowrap"
                      : "lg:text-[clamp(1rem,1.6vw,1.35rem)]"
                  )}
                >
                  {area.title}
                </h3>

                <p
                  className={cn(
                    "max-w-64 text-lg leading-tight transition-opacity duration-500 lg:mt-8 lg:text-xl",
                    isActive ? "mt-5 opacity-100 delay-200" : "hidden opacity-0 lg:block"
                  )}
                >
                  {area.description}
                </p>

                <span
                  aria-hidden
                  className={cn(
                    "absolute font-extrabold transition-all duration-500",
                    isActive
                      ? "-right-2 -bottom-8 -z-10 text-[9rem] leading-none text-transparent [-webkit-text-stroke:2px_rgb(255_255_255/0.35)] lg:right-8 lg:text-[11rem]"
                      : "text-ssa-purple/40 bottom-3 left-8 text-4xl lg:bottom-4 lg:left-6"
                  )}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Its animation ending advances the card; hidden under reduced motion so it never fires. */}
                {isActive && (
                  <span
                    aria-hidden
                    key={active}
                    onAnimationEnd={next}
                    className="bg-ssa-green absolute inset-x-0 bottom-0 h-1.5 origin-left motion-reduce:hidden"
                    style={{
                      animation: `focus-progress ${CYCLE_MS}ms linear forwards`,
                      animationPlayState: paused ? "paused" : "running",
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default FocusSection;
