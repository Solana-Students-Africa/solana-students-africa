const Hero = () => {
  return (
    <section className="hero-section absolute inset-0 overflow-hidden bg-black" id="home">
      {/* Yellow Star - Top left */}
      <img
        src="/images/star-yellow.svg"
        alt=""
        className="absolute top-[100px] left-[10px] h-[150px] w-[150px] opacity-50 md:top-[152px] md:left-[113px] md:h-[334px] md:w-[334px] md:opacity-100"
      />

      {/* Green Africa Shape - Top right */}
      <img
        src="/images/africa-green.svg"
        alt=""
        className="absolute top-[80px] right-[-30px] h-[120px] w-[110px] opacity-50 md:top-[186px] md:right-[198px] md:h-[297px] md:w-[275px] md:opacity-100"
      />

      {/* Blue Shape - Bottom left */}
      <img
        src="/images/blue-shape.svg"
        alt=""
        className="absolute top-[650px] -left-[61px] hidden h-[229px] w-[268px] md:block"
      />

      {/* Orange Trophy - Bottom right */}
      <img
        src="/images/trophy-orange.svg"
        alt=""
        className="absolute top-[671px] right-[-84px] hidden h-[250px] w-[269px] md:block"
      />

      {/* Content Container */}
      <div className="absolute top-[150px] left-[15px] flex w-[calc(100%-30px)] flex-col items-center gap-[30px] md:top-[281px] md:left-1/2 md:w-[952px] md:-translate-x-1/2 md:gap-[50px]">
        {/* Headline */}
        <h1 className="font-area w-full text-center text-[40px] leading-[48px] font-extrabold tracking-[-1.2px] text-white md:text-[80px] md:leading-[90px] md:tracking-[-2.4px]">
          Students building Web3 for Africa on Solana
        </h1>

        {/* Subheadline */}
        <p className="font-gellix w-full text-center text-[16px] leading-[28px] font-normal tracking-[0.32px] text-white md:w-[840px] md:text-[25px] md:leading-[40px] md:tracking-[0.5px]">
          Empowering students across Africa to learn, build, and innovate with Web3 through hands-on
          workshops, hackathons, and real-world projects on the Solana blockchain.
        </p>

        {/* CTA Button */}
        <a
          href="https://x.com/SolanaStudentAf"
          target="_blank"
          rel="noopener noreferrer"
          className="font-gellix rounded-[50px] bg-[#ffb600] px-[20px] py-[15px] text-[16px] font-medium text-white transition-all hover:bg-[#e6a500] md:py-[20px] md:text-[30px]"
        >
          Join the community
        </a>
      </div>
    </section>
  );
};

export default Hero;
