const partners = [
  {
    name: "Partner 1",
    logo: "/images/marquee-1.png",
    width: 57.076,
    height: 91.16,
  },
  {
    name: "Partner 2",
    logo: "/images/marquee-2.png",
    width: 52.763,
    height: 51.838,
  },
  {
    name: "Partner 3",
    logo: "/images/marquee-3.png",
    width: 138.851,
    height: 55.54,
  },
  {
    name: "Partner 4",
    logo: "/images/marquee-4.png",
    width: 91.642,
    height: 54.412,
  },
  {
    name: "Partner 5",
    logo: "/images/marquee-5.png",
    width: 112.932,
    height: 67.759,
  },
  {
    name: "Partner 6",
    logo: "/images/marquee-6.png",
    width: 39.804,
    height: 66.038,
  },
  {
    name: "Partner 7",
    logo: "/images/marquee-7.png",
    width: 63.244,
    height: 22.667,
  },
];

const Marquee = () => {
  return (
    <section className="marquee-section h-[87px] w-full overflow-hidden bg-black">
      {/* Animated marquee container */}
      <div className="relative flex h-full items-center">
        {/* First set of logos */}
        <div className="animate-marquee flex shrink-0 items-center gap-[120px] pr-[120px]">
          {partners.map((partner, index) => (
            <img
              key={`set1-${index}`}
              src={partner.logo}
              alt={partner.name}
              style={{
                width: `${partner.width}px`,
                height: `${partner.height}px`,
              }}
              className="shrink-0 object-contain"
            />
          ))}
        </div>
        {/* Duplicate set for seamless loop */}
        <div className="animate-marquee flex shrink-0 items-center gap-[120px] pr-[120px]">
          {partners.map((partner, index) => (
            <img
              key={`set2-${index}`}
              src={partner.logo}
              alt={partner.name}
              style={{
                width: `${partner.width}px`,
                height: `${partner.height}px`,
              }}
              className="shrink-0 object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marquee;
