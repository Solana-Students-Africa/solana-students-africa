const Community = () => {
  return (
    <section className="community-section relative w-full bg-black px-[15px] py-[60px] md:h-[1080px] md:px-0 md:py-0">
      {/* Header - centered */}
      <div className="flex flex-col items-center gap-[30px] md:absolute md:top-[86px] md:left-1/2 md:w-[835px] md:-translate-x-1/2 md:gap-[50px]">
        {/* Our Community pill */}
        <div className="flex items-center justify-center rounded-[50px] border-2 border-solid border-white px-[15px] py-[12px] md:px-[20px] md:py-[20px]">
          <p className="font-gellix text-[16px] leading-[14px] font-medium text-white md:text-[20px]">
            Our Community
          </p>
        </div>
        {/* Text content */}
        <div className="flex w-full flex-col items-center gap-[20px] md:gap-[30px]">
          <p className="font-area w-full text-center text-[28px] leading-[36px] font-extrabold tracking-[-0.84px] text-[#0b9444] md:text-[40px] md:leading-[31px] md:tracking-[-1.2px]">
            United by Innovation. Driven by Community.
          </p>
          <p className="font-gellix w-full text-center text-[16px] leading-[28px] font-normal tracking-[0.32px] text-white md:w-[821px] md:text-[20px] md:leading-[40px] md:tracking-[0.4px]">
            We connect ambitious students to resources, mentorship, and opportunities to learn,
            build, and thrive in the Solana ecosystem.
          </p>
        </div>
      </div>

      {/* Photo Grid - Mobile: vertical scroll, Desktop: absolute positioned */}
      <div className="mt-[40px] flex flex-col gap-[15px] md:mt-0">
        {/* Mobile grid - 2 columns */}
        <div className="grid grid-cols-2 gap-[15px] md:hidden">
          <div className="h-[150px] w-full overflow-hidden rounded-[15px]">
            <img
              src="/images/community-1.jpg"
              alt="Community event"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="h-[150px] w-full overflow-hidden rounded-[15px]">
            <img
              src="/images/community-2.jpg"
              alt="Community gathering"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="h-[150px] w-full overflow-hidden rounded-[15px]">
            <img
              src="/images/community-3.jpg"
              alt="Workshop"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="h-[150px] w-full overflow-hidden rounded-[15px]">
            <img
              src="/images/community-4.jpg"
              alt="Team photo"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Desktop grid - absolute positioned */}
        {/* Photo 1 - Top left large */}
        <div className="absolute top-[350px] left-[82px] hidden h-[325px] w-[544px] overflow-hidden rounded-[20px] md:block">
          <img
            src="/images/community-1.jpg"
            alt="Community event"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Photo 2 - Bottom left */}
        <div className="absolute top-[617px] left-[200px] hidden h-[245px] w-[504px] overflow-hidden rounded-[20px] md:block">
          <img
            src="/images/community-2.jpg"
            alt="Community gathering"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Photo 3 - Center */}
        <div className="absolute top-[403px] left-[682px] hidden h-[325px] w-[544px] overflow-hidden rounded-[20px] md:block">
          <img
            src="/images/community-3.jpg"
            alt="Workshop"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Photo 4 - Bottom right */}
        <div className="absolute top-[643px] left-[940px] hidden h-[199px] w-[380px] overflow-hidden rounded-[20px] md:block">
          <img
            src="/images/community-4.jpg"
            alt="Team photo"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Photo 5 - Top right small */}
        <div className="absolute top-[325px] left-[1130px] hidden h-[188px] w-[325px] overflow-hidden rounded-[20px] md:block">
          <img
            src="/images/community-5.jpg"
            alt="Award ceremony"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Join the community button */}
      <div className="mt-[40px] flex justify-center md:absolute md:top-[933px] md:left-1/2 md:mt-0 md:-translate-x-1/2">
        <a
          href="https://x.com/SolanaStudentAf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center rounded-[50px] bg-[#0b9444] px-[20px] py-[15px] md:py-[20px]"
        >
          <span className="font-gellix text-[16px] leading-[21px] font-medium text-white md:text-[30px]">
            Join the community
          </span>
        </a>
      </div>
    </section>
  );
};

export default Community;
