import { Container } from "../ui/container";

const PartnersAndCommunities = () => {
  const communities = [
    {
      name: "Web3 Afrika",
      logo: "/images/image-42.png",
      bgColor: "bg-orange-50",
    },
    {
      name: "Web3Unilag",
      logo: "🎓",
      bgColor: "bg-blue-50",
    },
    {
      name: "GDSC",
      logo: "/images/image-41.png",
      bgColor: "bg-blue-50",
    },
    {
      name: "WomeninDefi",
      logo: "/images/image-44.png",
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
      name: "University of Ilorin",
      logo: "",
      bgColor: "bg-red-50",
    },
    {
      name: "Caleb University",
      logo: "",
      bgColor: "bg-indigo-50",
    },
    {
      name: "Babcock University",
      logo: "",
      bgColor: "bg-yellow-50",
    },
    {
      name: "And More...",
      logo: "",
      bgColor: "bg-gray-50",
    },
  ];

  return (
    <Container
      className="partners-section relative flex flex-col items-center justify-center px-4 py-12 sm:py-16 md:py-20"
      as="section"
      id="partners"
    >
      <div className="z-10 flex w-full max-w-6xl flex-col justify-between gap-12 sm:gap-16 md:gap-20">
        <div className="flex flex-col items-center gap-8 sm:gap-10 md:gap-14">
          <h1 className="font-poppins flex max-w-4xl flex-col items-center text-center text-4xl leading-tight font-semibold sm:text-5xl md:text-6xl lg:text-7xl">
            <h1 data-animate-y-up data-delay="0.2" data-easing="NAVIGATION.button">
              Partners &
            </h1>
            <h1 data-animate-y-up data-delay="0.3" data-easing="NAVIGATION.button">
              Communities
            </h1>
          </h1>

          <div className="flex w-full flex-wrap items-center justify-center gap-3 sm:w-[90%] sm:gap-4 md:w-[90%]">
            {communities.map((item, index) => (
              <Card title={item.name} logo={item.logo} key={index} />
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-8 sm:gap-10 md:gap-14">
          <h1 className="font-poppins flex max-w-4xl flex-col items-center text-center text-3xl leading-tight font-semibold sm:text-4xl md:text-5xl lg:text-6xl">
            <h1 data-animate-y-up data-delay="0.7" data-easing="NAVIGATION.button">
              Participating
            </h1>
            <h1 data-animate-y-up data-delay="0.8" data-easing="NAVIGATION.button">
              Universities
            </h1>
          </h1>

          <div className="flex w-full flex-wrap items-center justify-center gap-2 sm:w-[95%] sm:gap-2.5 md:w-[90%]">
            {participatingUniversities.map((item, index) => (
              <Card title={item.name} logo={item.logo} key={index} />
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

const Card = ({ title, logo }: { title: string; logo: string }) => {
  return (
    <div className="text-off-black z-10 flex items-center gap-3 rounded-3xl bg-white px-3 py-2 text-center text-sm font-medium whitespace-nowrap shadow-sm transition-shadow duration-200 hover:shadow-md sm:px-4 sm:py-3 sm:text-base md:px-6 md:py-3 md:text-lg lg:px-8 lg:py-4 lg:text-2xl">
      {logo &&
        (logo.startsWith("/") ? (
          <div className="h-6 w-6">
            <img src={logo} alt={title} className="mx-auto mb-1 h-full w-full object-contain" />
          </div>
        ) : (
          <span className="mb-1 block text-xl">{logo}</span>
        ))}
      <p>{title}</p>
    </div>
  );
};
