import { Container } from "../ui/container";

const PartnersAndCommunities = () => {
  const communities = [
    {
      name: "SuperteamNG",
      logo: "/images/superteam.jpg",
      bgColor: "bg-orange-50",
    },
    {
      name: "Web3 Afrika",
      logo: "/images/image-42.png",
      bgColor: "bg-orange-50",
    },
    {
      name: "WomeninDefi",
      logo: "/images/women-defi.webp",
      bgColor: "bg-purple-50",
    },
    {
      name: "Web3Unilag",
      logo: "/images/web3-unilag.jpg",
      bgColor: "bg-blue-50",
    },
    {
      name: "GDSC",
      logo: "/images/image-41.png",
      bgColor: "bg-blue-50",
    },
    {
      name: "Github Campus Experts",
      logo: "/images/gitcamp.png",
      bgColor: "bg-gray-50",
    },
    {
      name: "Nithub",
      logo: "/images/nithub.jpg",
      bgColor: "bg-gray-50",
    },
  ];

  const participatingUniversities = [
    {
      name: "University of Lagos",
      logo: "/images/unilag-logo.jpeg",
      bgColor: "bg-green-50",
    },
    {
      name: "Lagos State University",
      logo: "/images/lasu-logo.jpeg",
      bgColor: "bg-blue-50",
    },
    {
      name: "University of Ilorin",
      logo: "/images/ilorin-logo.jpeg",
      bgColor: "bg-red-50",
    },
    {
      name: "Caleb University",
      logo: "/images/caleb-logo.png",
      bgColor: "bg-indigo-50",
    },
    {
      name: "Babcock University",
      logo: "/images/babcock-logo.png",
      bgColor: "bg-yellow-50",
    },
    {
      name: "And More...",
      logo: "🎓",
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
            <h1>Partners &</h1>
            <h1>Communities</h1>
          </h1>

          {/*change col-start when adding a new community*/}
          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:[&>:nth-child(7)]:col-start-2 lg:[&>:nth-child(7)]:w-full lg:[&>:nth-child(7)]:max-w-none lg:[&>:nth-child(7)]:justify-self-center">
            {communities.map((item, index) => (
              <CommunityCard title={item.name} logo={item.logo} key={index} />
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-8 sm:gap-10 md:gap-14">
          <h1 className="font-poppins flex max-w-4xl flex-col items-center text-center text-3xl leading-tight font-semibold sm:text-4xl md:text-5xl lg:text-6xl">
            <h1>Participating</h1>
            <h1>Universities</h1>
          </h1>

          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

const CommunityCard = ({ title, logo }: { title: string; logo: string }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-gray-200/20 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-gray-200/30 hover:bg-white/10">
      <div className="flex flex-col items-center space-y-4 text-center">
        <div className="flex h-24 w-24 items-center justify-center">
          {logo &&
            (logo.startsWith("/") ? (
              <img src={logo} alt={title} className="h-16 w-16 object-contain" />
            ) : (
              <span className="text-5xl">{logo}</span>
            ))}
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
        </div>
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
    </div>
  );
};

const Card = ({ title, logo }: { title: string; logo: string }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-gray-200/20 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-gray-200/30 hover:bg-white/10">
      <div className="flex flex-col items-center space-y-4 text-center">
        <div className="flex h-24 w-24 items-center justify-center">
          {logo &&
            (logo.startsWith("/") ? (
              <img src={logo} alt={title} className="h-16 w-16 object-contain" />
            ) : (
              <span className="text-5xl">{logo}</span>
            ))}
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
        </div>
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
    </div>
  );
};
