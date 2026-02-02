import Navbar from "@/components/ui/navbar";
import Footer from "@/components/sections/footer";

// Team member data based on Figma design
const teamMembers = [
  // Row 1
  { name: "Tobiloba", role: "CO-FOUNDER", twitter: "#", linkedin: "#" },
  { name: "Opeyemi", role: "CO-FOUNDER", twitter: "#", linkedin: "#" },
  { name: "Oreoluwa", role: "DESIGN", twitter: "#", linkedin: "#" },
  // Row 2
  {
    name: "Confidence",
    role: "COMMUNITY MANAGER",
    twitter: "#",
    linkedin: "#",
  },
  { name: "Teledua", role: "DESIGN", twitter: "#", linkedin: "#" },
  { name: "Habeeb", role: "SOCIALS MANAGER", twitter: "#", linkedin: "#" },
  // Row 3
  { name: "Lanre", role: "ENGINEER", twitter: "#", linkedin: "#" },
  { name: "ClassyDev", role: "ENGINEER", twitter: "#", linkedin: "#" },
  { name: "Industry Exp", role: "DATA ANALYST", twitter: "#", linkedin: "#" },
];

// Team member card component - responsive
const TeamMemberCard = ({
  name,
  role,
  twitter,
  linkedin,
}: {
  name: string;
  role: string;
  twitter: string;
  linkedin: string;
}) => (
  <div className="flex h-[350px] w-full flex-col items-center justify-between md:h-[543px] md:w-[460px]">
    {/* Photo placeholder with social icons */}
    <div className="relative h-[300px] w-full overflow-hidden rounded-[15px] bg-[#a7a7a7] md:h-[494px] md:rounded-[20px]">
      {/* Social icons - top right corner */}
      <div className="absolute top-[15px] right-[15px] flex items-end gap-[8px] md:top-[25px] md:right-[25px] md:gap-[12px]">
        <a
          href={twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-opacity hover:opacity-80"
        >
          <img
            src="/images/x-icon.svg"
            alt="X (Twitter)"
            className="h-[28px] w-[28px] md:h-[37px] md:w-[37px]"
          />
        </a>
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-opacity hover:opacity-80"
        >
          <img
            src="/images/linkedin-icon.svg"
            alt="LinkedIn"
            className="h-[30px] w-[30px] md:h-[39px] md:w-[39px]"
          />
        </a>
      </div>
    </div>

    {/* Name and role - responsive text */}
    <div className="font-gellix flex w-full flex-col gap-[5px] font-semibold md:flex-row md:items-end md:justify-between md:gap-0">
      <p className="text-[20px] text-[#ffc350] md:text-[30px]">{name}</p>
      <p className="text-[14px] text-black md:text-[25px]">{role}</p>
    </div>
  </div>
);

const Team = () => {
  return (
    <div className="font-gellix mx-auto flex w-full max-w-[1512px] flex-col bg-black">
      {/* Hero Section - Mobile: smaller, Desktop: 582px */}
      <div className="relative min-h-[300px] w-full bg-black pb-[40px] md:h-[582px] md:pb-0">
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
          className="absolute top-[343px] left-[967px] hidden h-[236px] w-[236px] md:block"
        />
        <img
          src="/images/africa-green.svg"
          alt=""
          className="absolute top-[105px] left-[974px] hidden h-[207px] w-[192px] md:block"
        />
        <img
          src="/images/trophy-orange.svg"
          alt=""
          className="absolute top-[105px] left-[1227px] hidden h-[210px] w-[225px] md:block"
        />

        {/* Hero content - responsive positioning */}
        <div className="absolute top-[100px] left-[15px] flex w-[calc(100%-30px)] flex-col gap-[20px] md:top-[221px] md:left-[50px] md:w-[952px] md:gap-[36px]">
          {/* Meet the Team pill */}
          <div className="flex w-fit items-center justify-center rounded-[50px] border-2 border-solid border-white px-[15px] py-[12px] md:px-[20px] md:py-[20px]">
            <p className="font-gellix text-[16px] leading-[28px] font-medium text-white md:text-[20px] md:leading-[45px]">
              Meet the Team
            </p>
          </div>

          {/* Main Heading */}
          <h1 className="font-area text-[32px] leading-[42px] font-extrabold tracking-[-0.96px] text-white md:text-[60px] md:leading-[78px] md:tracking-[-1.8px]">
            The Builders Behind the Movement
          </h1>
        </div>
      </div>

      {/* Team Grid Section - responsive height */}
      <section className="relative w-full overflow-hidden bg-[#f5f5f5] px-[15px] py-[60px] md:h-[2238px] md:px-0 md:py-0">
        {/* Team grid container - responsive grid */}
        <div className="flex flex-col gap-[30px] md:absolute md:top-[103px] md:left-[47px] md:w-[1418px] md:gap-[63px]">
          {/* Mobile: 2 column grid, Desktop: 3 column rows */}
          <div className="grid grid-cols-2 gap-[15px] md:hidden">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} {...member} />
            ))}
          </div>

          {/* Desktop: Row layout */}
          <div className="hidden w-full items-center gap-[19px] md:flex">
            {teamMembers.slice(0, 3).map((member, index) => (
              <TeamMemberCard key={index} {...member} />
            ))}
          </div>

          <div className="hidden w-full items-center gap-[19px] md:flex">
            {teamMembers.slice(3, 6).map((member, index) => (
              <TeamMemberCard key={index} {...member} />
            ))}
          </div>

          <div className="hidden w-full items-center gap-[19px] md:flex">
            {teamMembers.slice(6, 9).map((member, index) => (
              <TeamMemberCard key={index} {...member} />
            ))}
          </div>
        </div>

        {/* Join the Community button */}
        <div className="mt-[40px] flex justify-center md:absolute md:top-[1996px] md:left-1/2 md:mt-0 md:-translate-x-1/2">
          <a
            href="https://x.com/SolanaStudentAf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-[50px] bg-[#0b9444] px-[20px] py-[15px] transition-opacity hover:opacity-90 md:py-[20px]"
          >
            <span className="font-gellix text-[16px] font-medium text-white md:text-[30px]">
              Join the Community
            </span>
          </a>
        </div>
      </section>

      {/* Footer Section */}
      <div className="w-full bg-black px-[15px] pt-[60px] pb-[30px] md:px-[55px] md:pt-[130px] md:pb-[38px]">
        <Footer />
      </div>
    </div>
  );
};

export default Team;
