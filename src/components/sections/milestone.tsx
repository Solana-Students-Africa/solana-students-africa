import { photo, type SummitPhoto } from "@/lib/photos";
import { Container } from "../ui/container";

const cards: SummitPhoto[] = [
  "dsc08766",
  "dsc08925",
  "dsc09172",
  "dsc08554",
  "dsc09147",
  "dsc08928",
  "dsc09248",
];

const Highlight = ({ children }: { children: string }) => (
  <span className="text-ssa-purple">{children}</span>
);

const MilestoneSection = () => {
  return (
    // Green band that stops 6rem above the bottom, so the photo strip straddles its edge.
    <section
      className="milestone-section bg-[linear-gradient(to_bottom,var(--color-ssa-green)_calc(100%-6rem),transparent_calc(100%-6rem))] pt-24 md:pt-32"
      id="milestone"
    >
      <Container>
        <p
          className="text-ssa-ink mx-auto max-w-[45rem] text-center text-2xl leading-[1.05] font-extrabold md:text-[1.85rem]"
          data-animate-fadein
        >
          By connecting <Highlight>students</Highlight> with <Highlight>mentors</Highlight>,{" "}
          <Highlight>industry experts</Highlight>, and <Highlight>cutting-edge resources</Highlight>
          , we&apos;ve laid the foundation for a vibrant community of blockchain innovators who are
          ready to build the future of decentralized technology.
        </p>

        <div className="-mx-[5vw] mt-16 flex snap-x gap-3 overflow-x-auto px-[5vw] pb-2 md:mx-0 md:mt-24 md:grid md:grid-cols-7 md:gap-2.5 md:overflow-visible md:px-0 md:pb-0">
          {cards.map((name) => (
            <div
              key={name}
              className="clip-slant group h-48 w-36 shrink-0 snap-start overflow-hidden bg-[#d9d9d9] [--slant:10px] md:h-[12.5rem] md:w-auto"
            >
              <img
                src={photo(name, "sm")}
                alt="SSA community moment"
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default MilestoneSection;
