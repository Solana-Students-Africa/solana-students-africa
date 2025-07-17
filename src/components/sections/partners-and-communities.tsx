import { Container } from "../ui/container";

const PartnersAndCommunities = () => {
  const communities = [
    "Web 3 Africa",
    "Web 3 Unilag",
    "GDSC",
    "WomeninDefi",
    "University Communities",
    "Github Campus Experts",
  ];

  const participatingUniversities = [
    "University of Lagos",
    "Lagos State University",
    "Yaba College of Technology",
    "University of Ibadan",
    "Ladoke Akintola University",
    "And More...  ",
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

          <div className="flex w-full flex-wrap items-center justify-center gap-2 sm:w-[90%] sm:gap-2.5 md:w-[80%] lg:w-[70%]">
            {communities.map((item, index) => (
              <Card title={item} key={index} />
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-8 sm:gap-10 md:gap-14">
          <h1 className="font-poppins max-w-4xl text-center text-3xl leading-tight font-semibold sm:text-4xl md:text-5xl lg:text-6xl">
            Participating
            <br /> Universities
          </h1>

          <div className="flex w-full flex-wrap items-center justify-center gap-2 sm:w-[95%] sm:gap-2.5 md:w-[90%] lg:w-[80%]">
            {participatingUniversities.map((item, index) => (
              <Card title={item} key={index} />
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

const Card = ({ title }: { title: string }) => {
  return (
    <div className="text-off-black z-10 rounded-3xl bg-white px-3 py-2 text-center text-sm font-medium whitespace-nowrap shadow-sm transition-shadow duration-200 hover:shadow-md sm:px-4 sm:py-3 sm:text-base md:px-6 md:py-3 md:text-lg lg:px-8 lg:py-4 lg:text-2xl">
      <p>{title}</p>
    </div>
  );
};
