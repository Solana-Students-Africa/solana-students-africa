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
      className="relative flex flex-col items-center justify-center py-20"
      as="section"
      id="partners"
    >
      <div className="z-10 flex flex-col justify-between gap-20">
        <div className="flex flex-col items-center gap-14">
          <h1 className="font-poppins text-center text-7xl font-semibold">
            Partners & <br /> Communities
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-2.5 md:w-[70%]">
            {communities.map((item, index) => (
              <Card title={item} key={index} />
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-14">
          <h1 className="font-poppins text-center text-6xl font-semibold">
            Participating
            <br /> Universities
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-2.5 md:w-[80%]">
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
        className="absolute top-[30%] left-0 z-0 h-[200px] w-[90vw] rounded-full blur-[390px]"
      ></div>
    </Container>
  );
};

export default PartnersAndCommunities;

const Card = ({ title }: { title: string }) => {
  return (
    <div className="text-off-black z-10 rounded-3xl bg-white px-8 py-4 text-center text-2xl font-medium">
      <p>{title}</p>
    </div>
  );
};
