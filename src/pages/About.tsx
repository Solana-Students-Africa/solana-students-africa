import Navbar from "@/components/ui/navbar";
import Footer from "@/components/sections/footer";

const About = () => {
  return (
    <div className="font-gellix about-page mx-auto flex w-full max-w-[1512px] flex-col bg-black">
      {/* Hero Section - Mobile: smaller, Desktop: 554px */}
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

        {/* About Us pill - Mobile: left aligned, Desktop: left positioned */}
        <div className="absolute top-[100px] left-[15px] flex items-center justify-center rounded-[50px] border-2 border-solid border-white px-[15px] py-[12px] md:top-[220px] md:left-[50px] md:px-[20px] md:py-[20px]">
          <p className="font-gellix text-[16px] leading-[28px] font-medium text-white md:text-[20px] md:leading-[45px]">
            About Us
          </p>
        </div>

        {/* Main Heading - Mobile: smaller text, Desktop: 60px */}
        <h1 className="font-area absolute top-[170px] left-[15px] w-[calc(100%-30px)] text-[32px] leading-[42px] font-extrabold tracking-[-0.96px] text-white md:top-[310px] md:left-[46px] md:w-[952px] md:text-[60px] md:leading-[78px] md:tracking-[-1.8px]">
          Building Africa's Web3 Future, One Student at a Time
        </h1>
      </div>

      {/* Mission & Vision Section - Mobile: stacked, Desktop: side by side */}
      <section className="relative w-full bg-[#f5f5f5] px-[15px] py-[60px] md:h-[345px] md:px-0 md:py-0">
        {/* Our Mission */}
        <div className="flex flex-col gap-[20px] md:absolute md:top-[95px] md:left-[48px] md:w-[696px] md:gap-[30px]">
          <p className="font-area text-[28px] leading-[40px] font-extrabold tracking-[-0.84px] text-[#0b9444] md:text-[40px] md:leading-[100px] md:tracking-[-1.2px]">
            Our Mission
          </p>
          <p className="font-gellix w-full text-[16px] leading-[32px] font-normal tracking-[0.32px] text-[#0b0b0b] md:w-[693px] md:text-[20px] md:leading-[40px] md:tracking-[0.4px]">
            To empower African students to learn, build, and innovate on the Solana blockchain by
            providing access to education, mentorship, and opportunities that turn ideas into
            real-world impact.
          </p>
        </div>

        {/* Our Vision */}
        <div className="mt-[40px] flex flex-col gap-[20px] md:absolute md:top-[95px] md:left-[772px] md:mt-0 md:w-[696px] md:gap-[30px]">
          <p className="font-area text-[28px] leading-[40px] font-extrabold tracking-[-0.84px] text-[#0b9444] md:text-[40px] md:leading-[100px] md:tracking-[-1.2px]">
            Our Vision
          </p>
          <p className="font-gellix w-full text-[16px] leading-[32px] font-normal tracking-[0.32px] text-[#0b0b0b] md:w-[689px] md:text-[20px] md:leading-[40px] md:tracking-[0.4px]">
            To build a thriving network of African student builders shaping the future of the
            decentralized web, driving economic inclusion, and positioning Africa as a leading force
            in the global Web3 ecosystem.
          </p>
        </div>
      </section>

      {/* Members Benefit Section */}
      <section className="relative w-full bg-black px-[15px] py-[60px] md:px-0 md:py-0">
        {/* Members Benefit heading */}
        <div className="flex w-full justify-center md:pt-[209px]">
          <h2 className="font-area text-[32px] leading-[42px] font-extrabold tracking-[-0.96px] text-white md:text-[60px] md:leading-[78px] md:tracking-[-1.8px]">
            Members Benefit
          </h2>
        </div>

        {/* Benefit 1: Learn with Experts - Mobile: stacked, Desktop: side by side */}
        <div className="mt-[60px] flex flex-col-reverse gap-[30px] md:mt-[96px] md:flex-row md:items-center md:gap-[53px] md:px-[50px]">
          <p className="font-gellix w-full text-[16px] leading-[32px] font-normal tracking-[0.32px] text-white md:w-[474px] md:text-[20px] md:leading-[40px] md:tracking-[0.4px]">
            Gain hands-on knowledge through bootcamps, workshops, and mentorship sessions led by
            Solana developers and ecosystem professionals.
            <br />
            <br />
            You'll learn how to build real projects using Rust, Anchor, and Solana SDKs — from
            beginner to advanced.
          </p>
          <div className="relative flex h-[300px] w-full items-start overflow-hidden bg-[#0b9444] md:h-[506px] md:w-[935px]">
            <p className="font-area pt-[40px] pl-[20px] text-[40px] leading-[1.2] font-bold text-white md:pt-[57px] md:text-[78px]">
              Learn with Experts
            </p>
          </div>
        </div>

        {/* Benefit 2: Build Real Projects - Orange card on left */}
        <div className="mt-[60px] flex flex-col gap-[30px] md:mt-[119px] md:flex-row md:items-center md:gap-[53px] md:pl-[4px]">
          <div className="relative flex h-[300px] w-full items-start overflow-hidden bg-[#f15a24] md:h-[506px] md:w-[921px]">
            <p className="font-area pt-[40px] pl-[20px] text-[40px] leading-[1.2] font-bold text-white md:pt-[68px] md:pl-[39px] md:text-[78px]">
              Build Real Projects
            </p>
          </div>
          <p className="font-gellix w-full text-[16px] leading-[32px] font-normal tracking-[0.32px] text-white md:w-[474px] md:text-[20px] md:leading-[40px] md:tracking-[0.4px]">
            Turn your ideas into reality.
            <br />
            <br />
            SSA members get to participate in build challenges, hackathons, and team projects,
            collaborating with peers from across Africa to create impactful blockchain solutions.
          </p>
        </div>

        {/* Benefit 3: Connect & Collaborate - Blue card on right */}
        <div className="mt-[60px] flex flex-col-reverse gap-[30px] md:mt-[119px] md:flex-row md:items-center md:gap-[53px] md:px-[50px]">
          <p className="font-gellix w-full text-[16px] leading-[32px] font-normal tracking-[0.32px] text-white md:w-[474px] md:text-[20px] md:leading-[40px] md:tracking-[0.4px]">
            Join a vibrant community of students, builders, and mentors.
            <br />
            <br />
            Network through university chapters, online meetups, and community events, and find
            teammates who share your passion for innovation.
          </p>
          <div className="relative flex h-[300px] w-full items-start overflow-hidden bg-[#0c41d1] md:h-[506px] md:w-[973px]">
            <p className="font-area pt-[40px] pl-[20px] text-[40px] leading-[1.2] font-bold text-white md:pt-[68px] md:text-[78px]">
              Connect & Collaborate
            </p>
          </div>
        </div>

        {/* Benefit 4: Access Opportunities - Yellow card on left */}
        <div className="mt-[60px] flex flex-col gap-[30px] md:mt-[119px] md:flex-row md:items-center md:gap-[53px] md:pl-[4px]">
          <div className="relative flex h-[300px] w-full items-start overflow-hidden bg-[#ffb703] md:h-[506px] md:w-[921px]">
            <p className="font-area pt-[40px] pl-[20px] text-[40px] leading-[1.2] font-bold text-white md:pt-[68px] md:pl-[39px] md:text-[78px]">
              Access Opportunities
            </p>
          </div>
          <p className="font-gellix w-full text-[16px] leading-[32px] font-normal tracking-[0.32px] text-white md:w-[474px] md:text-[20px] md:leading-[40px] md:tracking-[0.4px]">
            Stand out in the Web3 space.
            <br />
            <br />
            Members get exclusive access to internships, grants, job openings, and ecosystem
            partnerships within Solana and beyond.
          </p>
        </div>

        {/* Become a Member button */}
        <div className="mt-[60px] flex w-full justify-center md:mt-[171px]">
          <a
            href="https://x.com/SolanaStudentAf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-[50px] bg-[#0b9444] px-[20px] py-[15px] md:py-[20px]"
          >
            <span className="font-gellix text-[16px] font-medium text-white md:text-[30px]">
              Become a Member
            </span>
          </a>
        </div>

        {/* Footer spacing */}
        <div className="mt-[60px] md:mt-[283px]" />
      </section>

      {/* Footer */}
      <div className="w-full px-[15px] pb-[30px] md:px-[50px] md:pb-[38px]">
        <Footer />
      </div>
    </div>
  );
};

export default About;
