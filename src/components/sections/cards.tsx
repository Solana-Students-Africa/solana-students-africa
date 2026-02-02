const Cards = () => {
  return (
    <section className="cards-section flex w-full flex-col items-center gap-[20px] bg-black px-[15px] md:w-[1472px] md:flex-row md:justify-between md:gap-0 md:px-0">
      {/* Learn Card - Green */}
      <div className="relative h-[390px] w-full shrink-0 overflow-hidden rounded-[20px] bg-[#00652a] md:h-[510px] md:w-[477px]">
        {/* Star decoration - rotated -34deg */}
        <div className="absolute -top-[20px] -left-[150px] flex h-[450px] w-[450px] items-center justify-center md:-top-[25px] md:-left-[229px] md:h-[694px] md:w-[694px]">
          <img
            src="/images/star-yellow.svg"
            alt=""
            className="h-[350px] w-[350px] -rotate-[34deg] object-contain md:h-[500px] md:w-[500px]"
          />
        </div>
        {/* Content */}
        <div className="absolute bottom-[40px] left-[20px] flex w-[calc(100%-40px)] flex-col items-center gap-[12px] text-white md:top-[215px] md:bottom-auto md:left-[20px] md:w-[437px] md:gap-[17px]">
          <p className="font-area text-[40px] leading-none font-bold tracking-[-2.4px] md:text-[60px] md:tracking-[-3.6px]">
            Learn
          </p>
          <p className="font-area text-[16px] md:text-[20px]">(Workshops + Resources)</p>
        </div>
      </div>

      {/* Build Card - Orange */}
      <div className="relative h-[390px] w-full shrink-0 overflow-hidden rounded-[20px] bg-[#f15a24] md:h-[510px] md:w-[471px]">
        {/* Trophy decoration */}
        <img
          src="/images/trophy-orange.svg"
          alt=""
          className="absolute bottom-0 left-[50px] h-[200px] w-[240px] object-contain md:left-[68px] md:h-[286px] md:w-[335px]"
        />
        {/* Content */}
        <div className="absolute bottom-[40px] left-[14px] flex w-[calc(100%-28px)] flex-col items-center gap-[12px] text-white md:top-[176px] md:bottom-auto md:left-[14px] md:w-[437px] md:gap-[17px]">
          <p className="font-area text-[40px] leading-none font-bold tracking-[-2.4px] md:text-[60px] md:tracking-[-3.6px]">
            Build
          </p>
          <p className="font-area text-[16px] md:text-[20px]">(Hackathons + Projects)</p>
        </div>
      </div>

      {/* Connect Card - Yellow */}
      <div className="relative h-[390px] w-full shrink-0 overflow-hidden rounded-[20px] bg-[#ffb703] md:h-[510px] md:w-[470px]">
        {/* Africa shape decoration */}
        <img
          src="/images/africa-green.svg"
          alt=""
          className="absolute top-[10px] left-[80px] h-[300px] w-[280px] object-contain md:top-[20px] md:left-[133px] md:h-[438px] md:w-[405px]"
        />
        {/* Content */}
        <div className="absolute bottom-[40px] left-[20px] flex w-[calc(100%-40px)] flex-col items-center gap-[12px] text-white md:top-[212px] md:bottom-auto md:left-[20px] md:w-[437px] md:gap-[17px]">
          <p className="font-area text-[40px] leading-none font-bold tracking-[-2.4px] md:text-[60px] md:tracking-[-3.6px]">
            Connect
          </p>
          <p className="font-area text-[16px] md:text-[20px]">(Mentors + Partners)</p>
        </div>
      </div>
    </section>
  );
};

export default Cards;
