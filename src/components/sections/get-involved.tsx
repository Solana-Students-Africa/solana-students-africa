import { Container } from "@/components/ui/container";
import Tag from "@/components/ui/tag";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const paths = [
  {
    who: "Students",
    title: "Join the community",
    description:
      "Learn Solana with your peers, get hands-on at workshops and hackathons, and ship your first project.",
    href: "https://x.com/SolanaStudentAf",
    external: true,
  },
  {
    who: "Campuses",
    title: "Bring SSA to your campus",
    description: "Host intro talks, hands-on workshops and builder Q&As at your university.",
    href: "#contact",
  },
  {
    who: "Partners",
    title: "Partner with us",
    description:
      "Back the next generation of African builders with mentorship, resources and sponsorship.",
    href: "#contact",
  },
];

const GetInvolvedSection = () => {
  const listRef = useRef<HTMLUListElement>(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(
        listRef.current?.querySelectorAll("[data-card]") ?? [],
        { y: 80, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          ease: "none",
          stagger: 0.15,
          scrollTrigger: { trigger: listRef.current, start: "top 90%", end: "top 45%", scrub: 0.6 },
        }
      );
    });
    return () => mm.revert();
  }, []);

  return (
    <section
      className="get-involved-section relative isolate overflow-hidden py-16 md:py-28"
      id="get-involved"
    >
      <div
        aria-hidden
        className="bg-grid-paper absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_80%)] [--grid-line:rgb(153_69_255/0.08)] [--grid-size:28px]"
      />
      <p
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-[6%] -z-10 text-center text-[22vw] leading-none font-extrabold whitespace-nowrap text-transparent uppercase select-none [-webkit-text-stroke:1.5px_rgb(153_69_255/0.18)] md:bottom-[4%]"
      >
        Join us
      </p>

      <Container className="max-w-6xl">
        <Tag>Get Involved</Tag>
        <h2 className="text-ssa-purple mt-6 text-4xl leading-none font-extrabold md:text-6xl">
          Three ways in.
        </h2>

        <ul ref={listRef} className="mt-12 grid gap-4 md:mt-16 md:grid-cols-3 md:gap-5">
          {paths.map((path, i) => {
            const purple = i === 1;
            return (
              <li key={path.who} data-card>
                <a
                  href={path.href}
                  {...(path.external ? { target: "_blank", rel: "noreferrer" } : {})}
                  className={cn(
                    "group border-ssa-ink/10 text-ssa-ink relative isolate flex min-h-80 flex-col overflow-hidden border bg-white p-7 transition-colors duration-500 focus-visible:outline-none md:min-h-[28rem] md:p-8",
                    purple && "hover:text-white focus-visible:text-white"
                  )}
                >
                  {/* 250% tall so its ends never show once widened. */}
                  <span
                    aria-hidden
                    className={cn(
                      "absolute top-1/2 left-1/2 -z-10 h-[250%] w-14 -translate-1/2 scale-x-0 rotate-[38deg] transition-[scale] duration-700 ease-[cubic-bezier(0.7,0,0.2,1)] group-hover:scale-x-[22] group-focus-visible:scale-x-[22] md:w-16",
                      purple ? "bg-ssa-purple" : "bg-ssa-green"
                    )}
                  />

                  <div className="flex items-start justify-between gap-4">
                    <span className="text-xs font-bold tracking-widest uppercase opacity-70">
                      {String(i + 1).padStart(2, "0")} / {path.who}
                    </span>
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-current md:h-14 md:w-14">
                      <ArrowUpRight
                        aria-hidden
                        className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </span>
                  </div>

                  <span className="mt-6 block text-5xl leading-[0.88] font-extrabold uppercase [font-stretch:62%] md:text-4xl lg:text-5xl xl:text-6xl">
                    {path.title}
                  </span>

                  <span className="mt-auto block max-w-[18rem] pt-8 text-base leading-snug font-semibold">
                    {path.description}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
};

export default GetInvolvedSection;
