const About = () => {
  return (
    <section className="about-section relative w-full bg-[#f5f5f5] px-[15px] py-[60px] md:h-[1320px] md:px-0 md:py-0">
      {/* About Us pill button - centered */}
      <div className="flex justify-center md:absolute md:top-[100px] md:left-1/2 md:-translate-x-1/2">
        <div className="flex items-center justify-center rounded-[50px] border-2 border-solid border-black px-[15px] py-[12px] md:px-[20px] md:py-[20px]">
          <p className="font-gellix text-[16px] leading-[14px] font-medium text-black md:text-[20px]">
            About Us
          </p>
        </div>
      </div>

      {/* Content container - Mobile: stacked, Desktop: side by side */}
      <div className="mt-[40px] flex flex-col gap-[40px] md:absolute md:top-[274px] md:left-[50px] md:mt-0 md:w-[1412px] md:flex-row md:items-start md:justify-between md:gap-0">
        {/* Left column - Text content */}
        <div className="flex w-full flex-col gap-[40px] md:w-[696px] md:gap-[60px]">
          {/* Who We Are */}
          <div className="flex w-full flex-col items-start gap-[20px] md:gap-[30px]">
            <p className="font-area text-[28px] leading-[31px] font-extrabold tracking-[-0.84px] text-[#0b9444] md:text-[40px] md:tracking-[-1.2px]">
              Who We Are
            </p>
            <div className="font-gellix w-full text-[16px] leading-[32px] font-normal tracking-[0.32px] text-[#0b0b0b] md:w-[693px] md:text-[20px] md:leading-[40px] md:tracking-[0.4px]">
              <p className="mb-0">
                Solana Students Africa (SSA) is a pan-African student community empowering the next
                generation of builders, creators, and innovators to explore the world of Web3 using
                the Solana blockchain.
              </p>
              <p className="mb-0">&nbsp;</p>
              <p>
                SSA connects students from universities across the continent through hackathons,
                workshops, mentorship programs, and campus chapters all focused on helping them
                learn by building.
              </p>
            </div>
          </div>

          {/* Our Mission */}
          <div className="flex w-full flex-col items-start gap-[20px] md:gap-[30px]">
            <p className="font-area text-[28px] leading-[31px] font-extrabold tracking-[-0.84px] text-[#0b9444] md:text-[40px] md:tracking-[-1.2px]">
              Our Mission
            </p>
            <p className="font-gellix w-full text-[16px] leading-[32px] font-normal tracking-[0.32px] text-[#0b0b0b] md:w-[693px] md:text-[20px] md:leading-[40px] md:tracking-[0.4px]">
              To empower African students to learn, build, and innovate on the Solana blockchain by
              providing access to education, mentorship, and opportunities that turn ideas into
              real-world impact.
            </p>
          </div>

          {/* Our Vision */}
          <div className="flex w-full flex-col items-start gap-[20px] md:gap-[30px]">
            <p className="font-area text-[28px] leading-[31px] font-extrabold tracking-[-0.84px] text-[#0b9444] md:text-[40px] md:tracking-[-1.2px]">
              Our Vision
            </p>
            <p className="font-gellix w-full text-[16px] leading-[32px] font-normal tracking-[0.32px] text-[#0b0b0b] md:w-[689px] md:text-[20px] md:leading-[40px] md:tracking-[0.4px]">
              To build a thriving network of African student builders shaping the future of the
              decentralized web, driving economic inclusion, and positioning Africa as a leading
              force in the global Web3 ecosystem.
            </p>
          </div>
        </div>

        {/* Right column - Image placeholder */}
        <div className="h-[300px] w-full shrink-0 rounded-[30px] bg-[#d9d9d9] md:h-[833px] md:w-[696px] md:rounded-[50px]" />
      </div>
    </section>
  );
};

export default About;
