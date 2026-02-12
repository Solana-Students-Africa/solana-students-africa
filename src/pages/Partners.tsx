import Navbar from "@/components/ui/navbar";
import Footer from "@/components/sections/footer";

const Partners = () => {
  const partners = [
    {
      name: "Superteam",
      description:
        "The largest community of builders on Solana, supporting projects across Africa.",
      logo: "/images/superteam.jpg",
      link: "https://superteam.fun",
    },
    {
      name: "Solana Foundation",
      description: "Supporting the growth and development of the Solana ecosystem globally.",
      logo: "/images/solana-coin.png",
      link: "https://solana.org",
    },
    {
      name: "NitHub",
      description: "Nigeria's premier technology innovation hub fostering digital innovation.",
      logo: "/images/nithub.jpg",
      link: "https://nithub.unilag.edu.ng",
    },
  ];

  const communities = [
    {
      name: "Web3 UNILAG",
      logo: "/images/web3-unilag.jpg",
      link: "#",
    },
    {
      name: "Gitcampus",
      logo: "/images/gitcampus.png",
      link: "#",
    },
    {
      name: "Women in DeFi",
      logo: "/images/women-defi.webp",
      link: "#",
    },
  ];

  return (
    <div className="font-gellix mx-auto flex w-full max-w-[1512px] flex-col bg-black">
      {/* Hero Section */}
      <div className="relative min-h-[350px] w-full bg-black pb-[40px] md:h-[554px] md:pb-0">
        {/* Navbar */}
        <Navbar />

        {/* Decorative shapes - Hidden on mobile */}
        <img
          src="/images/blue-shape.svg"
          alt=""
          className="absolute top-[347px] left-[1217px] hidden h-[229px] w-[268px] md:block"
        />
        <img
          src="/images/star-yellow.svg"
          alt=""
          className="absolute top-[342px] left-[967px] hidden h-[236px] w-[236px] md:block"
        />
        <img
          src="/images/africa-green.svg"
          alt=""
          className="absolute top-[105px] left-[989px] hidden h-[207px] w-[192px] md:block"
        />
        <img
          src="/images/trophy-orange.svg"
          alt=""
          className="absolute top-[105px] left-[1227px] hidden h-[210px] w-[225px] md:block"
        />

        {/* Partners pill */}
        <div className="absolute top-[100px] left-[15px] flex items-center justify-center rounded-[50px] border-2 border-solid border-white px-[15px] py-[12px] md:top-[220px] md:left-[50px] md:px-[20px] md:py-[20px]">
          <p className="font-gellix text-[16px] leading-[28px] font-medium text-white md:text-[20px] md:leading-[45px]">
            Partners
          </p>
        </div>

        {/* Main Heading */}
        <h1 className="font-area absolute top-[170px] left-[15px] w-[calc(100%-30px)] text-[32px] leading-[42px] font-extrabold tracking-[-0.96px] text-white md:top-[310px] md:left-[46px] md:w-[952px] md:text-[60px] md:leading-[78px] md:tracking-[-1.8px]">
          Together We're Building Africa's Web3 Future
        </h1>
      </div>

      {/* Partners Grid Section */}
      <section className="relative w-full bg-[#f5f5f5] px-[15px] py-[60px] md:px-[50px] md:py-[100px]">
        {/* Section Title */}
        <p className="font-area text-[28px] leading-[40px] font-extrabold tracking-[-0.84px] text-[#0b9444] md:text-[40px] md:leading-[100px] md:tracking-[-1.2px]">
          Our Partners
        </p>
        <p className="font-gellix mt-[20px] text-[16px] leading-[32px] font-normal tracking-[0.32px] text-[#0b0b0b] md:w-[693px] md:text-[20px] md:leading-[40px] md:tracking-[0.4px]">
          We collaborate with leading organizations in the Web3 space to bring the best
          opportunities to African students.
        </p>

        {/* Partners Cards */}
        <div className="mt-[40px] grid grid-cols-1 gap-[20px] md:mt-[60px] md:grid-cols-3 md:gap-[30px]">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-[20px] overflow-hidden rounded-[20px] bg-white p-[30px] transition-all hover:shadow-lg"
            >
              <div className="flex h-[80px] w-[80px] items-center justify-center overflow-hidden rounded-[15px] bg-[#f5f5f5]">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-[60px] w-[60px] object-cover"
                />
              </div>
              <h3 className="font-area text-[24px] font-bold text-black transition-colors group-hover:text-[#0b9444] md:text-[30px]">
                {partner.name}
              </h3>
              <p className="font-gellix text-[14px] leading-[24px] text-[#666] md:text-[16px] md:leading-[28px]">
                {partner.description}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* Community Partners Section */}
      <section className="relative w-full bg-black px-[15px] py-[60px] md:px-[50px] md:py-[100px]">
        {/* Section Title */}
        <div className="flex justify-center">
          <div className="flex items-center justify-center rounded-[50px] border-2 border-solid border-white px-[15px] py-[12px] md:px-[20px] md:py-[20px]">
            <p className="font-gellix text-[16px] leading-[14px] font-medium text-white md:text-[20px]">
              Community Partners
            </p>
          </div>
        </div>

        <p className="font-area mt-[30px] text-center text-[28px] leading-[36px] font-extrabold tracking-[-0.84px] text-[#0b9444] md:mt-[50px] md:text-[40px] md:leading-[31px] md:tracking-[-1.2px]">
          Communities We Work With
        </p>

        {/* Community Cards */}
        <div className="mx-auto mt-[40px] flex flex-wrap justify-center gap-[20px] md:mt-[60px] md:max-w-[1000px] md:gap-[30px]">
          {communities.map((community) => (
            <a
              key={community.name}
              href={community.link}
              className="group flex h-[150px] w-[150px] flex-col items-center justify-center gap-[15px] overflow-hidden rounded-[20px] bg-white/10 p-[20px] transition-all hover:bg-white/20 md:h-[200px] md:w-[200px]"
            >
              <div className="flex h-[60px] w-[60px] items-center justify-center overflow-hidden rounded-[10px] bg-white md:h-[80px] md:w-[80px]">
                <img
                  src={community.logo}
                  alt={community.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="font-gellix text-center text-[14px] font-medium text-white md:text-[16px]">
                {community.name}
              </p>
            </a>
          ))}
        </div>

        {/* Become a Partner CTA */}
        <div className="mt-[80px] flex flex-col items-center gap-[30px] md:mt-[120px]">
          <p className="font-area text-center text-[28px] leading-[36px] font-extrabold tracking-[-0.84px] text-white md:text-[40px] md:leading-[50px] md:tracking-[-1.2px]">
            Become a Partner
          </p>
          <p className="font-gellix max-w-[600px] text-center text-[16px] leading-[28px] text-white/70 md:text-[20px] md:leading-[36px]">
            Interested in partnering with Solana Students Africa? We're always looking for
            organizations that share our mission.
          </p>
          <a
            href="mailto:contact@solanastudentsafrica.com"
            className="font-gellix flex items-center justify-center rounded-[50px] bg-[#ffb600] px-[30px] py-[15px] text-[16px] font-medium text-white transition-all hover:bg-[#e6a500] md:py-[20px] md:text-[30px]"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <div className="w-full px-[15px] pb-[30px] md:px-[50px] md:pb-[38px]">
        <Footer />
      </div>
    </div>
  );
};

export default Partners;
