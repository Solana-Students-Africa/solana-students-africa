import { Container } from "../ui/container";

const PartnersAndCommunities = () => {
  const communities = [
    {
      name: "Web 3 Africa",
      logo: "/images/image 42.png",
      bgColor: "bg-orange-50",
    },
    {
      name: "Web 3 Unilag",
      logo: "🎓",
      bgColor: "bg-blue-50",
    },
    {
      name: "GDSC",
      logo: "/images/image 41.png",
      bgColor: "bg-blue-50",
    },
    {
      name: "WomeninDefi",
      logo: "/images/image 44.png",
      bgColor: "bg-purple-50",
    },
    {
      name: "University Communities",
      logo: "🏛️",
      bgColor: "bg-gray-50",
    },
    {
      name: "Github Campus Experts",
      logo: "/images/gitcamp.png",
      bgColor: "bg-gray-50",
    },
  ];

  const participatingUniversities = [
    {
      name: "University of Lagos",
      logo: "",
      bgColor: "bg-green-50",
    },
    {
      name: "Lagos State University",
      logo: "",
      bgColor: "bg-blue-50",
    },
    {
      name: "Yaba College of Technology",
      logo: "",
      bgColor: "bg-yellow-50",
    },
    {
      name: "University of Ibadan",
      logo: "",
      bgColor: "bg-red-50",
    },
    {
      name: "Ladoke Akintola University",
      logo: "",
      bgColor: "bg-indigo-50",
    },
    {
      name: "And More...",
      logo: "",
      bgColor: "bg-gray-50",
    },
  ];

  return (
    <Container
      className="relative flex flex-col items-center justify-center px-4 py-12 sm:py-16 md:py-20"
      as="section"
      id="partners"
    >
      <div className="z-10 flex w-full max-w-6xl flex-col justify-between gap-12 sm:gap-16 md:gap-20">
        <div className="flex flex-col items-center gap-8 sm:gap-10 md:gap-14">
          <h1 className="font-poppins max-w-4xl text-center text-4xl leading-tight font-semibold sm:text-5xl md:text-6xl lg:text-7xl">
            Partners & <br /> Communities
          </h1>

          <div className="flex w-full flex-wrap items-center justify-center gap-3 sm:w-[90%] sm:gap-4 md:w-[80%] lg:w-[70%]">
            {communities.map((item, index) => (
              <Card title={item.name} logo={item.logo} bgColor={item.bgColor} key={index} />
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-8 sm:gap-10 md:gap-14">
          <h1 className="font-poppins max-w-4xl text-center text-3xl leading-tight font-semibold sm:text-4xl md:text-5xl lg:text-6xl">
            Participating
            <br /> Universities
          </h1>

          <div className="flex w-full flex-wrap items-center justify-center gap-3 sm:w-[95%] sm:gap-4 md:w-[90%] lg:w-[80%]">
            {participatingUniversities.map((item, index) => (
              <Card title={item.name} logo={item.logo} bgColor={item.bgColor} key={index} />
            ))}
          </div>
        </div>
      </div>

      <div
        style={{
          background: "linear-gradient(90deg, #8A19B8 0%, #06216B 100%)",
        }}
        className="absolute top-[25%] left-0 z-0 h-[150px] w-[95vw] rounded-full blur-[200px] sm:top-[28%] sm:-left-5 sm:h-[175px] sm:w-[92vw] sm:blur-[300px] md:top-[30%] md:left-0 md:h-[200px] md:w-[90vw] md:blur-[390px]"
      ></div>
    </Container>
  );
};

export default PartnersAndCommunities;

const Card = ({ title, logo, bgColor }: { title: string; logo: string; bgColor?: string }) => {
  const isImageLogo = logo && (logo.startsWith("/") || logo.startsWith("http"));

  return (
    <div
      className={`text-off-black z-10 rounded-2xl bg-white ${bgColor || ""} border border-gray-100 px-4 py-3 text-center text-sm font-medium whitespace-nowrap shadow-sm transition-all duration-200 hover:scale-105 hover:shadow-lg sm:px-5 sm:py-4 sm:text-base md:px-6 md:py-4 md:text-lg lg:px-8 lg:py-5 lg:text-xl`}
    >
      <div className="flex items-center justify-center gap-2 md:gap-3">
        {/* Logo */}
        <div className="flex-shrink-0">
          {isImageLogo ? (
            <img
              src={logo}
              alt={`${title} logo`}
              className="h-5 w-5 object-contain sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8"
            />
          ) : (
            <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl">{logo}</span>
          )}
        </div>

        {/* Text */}
        <p className="font-medium text-gray-800">{title}</p>
      </div>
    </div>
  );
};
