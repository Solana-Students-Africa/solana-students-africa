const EventCard = () => {
  return (
    <div className="flex w-full flex-col gap-[20px] md:flex-row md:gap-[18px]">
      {/* Event visual card - Mobile: full width, Desktop: 703px */}
      <div className="relative h-[220px] w-full shrink-0 overflow-hidden rounded-[15px] bg-[#141414] md:h-[274px] md:w-[703px]">
        {/* Gradient circles background */}
        <img
          src="/images/event-ellipse-orange.png"
          alt=""
          className="absolute -top-[100px] -left-[150px] h-[300px] w-[450px] opacity-30 md:-top-[157px] md:-left-[278px] md:h-[481px] md:w-[757px]"
        />
        <img
          src="/images/event-ellipse-green.png"
          alt=""
          className="absolute top-[50px] -left-[150px] h-[280px] w-[430px] opacity-20 md:top-[72px] md:-left-[286px] md:h-[457px] md:w-[719px]"
        />

        {/* Top left - Event title */}
        <div className="absolute top-[15px] left-[14px]">
          <div className="flex items-start gap-1">
            <p className="font-gellix w-[120px] text-[16px] leading-[18px] font-semibold tracking-[-0.48px] text-white md:w-[159px] md:text-[23.68px] md:leading-[23.68px] md:tracking-[-0.71px]">
              Solana Student Africa Summit 2025
            </p>
            <img
              src="/images/event-star.png"
              alt=""
              className="h-[20px] w-[20px] -rotate-[24deg] md:h-[25px] md:w-[25px]"
            />
          </div>
          <p className="mt-2 font-serif text-[16px] leading-normal tracking-[-0.48px] text-[#ffc350] italic md:text-[22.5px] md:tracking-[-0.67px]">
            Grandfinale
          </p>
        </div>

        {/* Top right - Logos */}
        <div className="absolute top-[11px] right-[14px] flex items-center gap-[5px] md:gap-[7px]">
          <img
            src="/images/solana-logo-white.png"
            alt="Solana"
            className="h-[14px] w-[80px] object-contain md:h-[18px] md:w-[106px]"
          />
          <img
            src="/images/ssa-logo-small.png"
            alt="SSA"
            className="h-[30px] w-[38px] object-contain md:h-[40px] md:w-[49px]"
          />
        </div>

        {/* Center content - Theme */}
        <div className="absolute bottom-[20px] left-[14px] w-[280px] md:bottom-[36px] md:w-[418px]">
          <p className="text-[11px] font-normal text-white md:text-[13.58px]">THEME:</p>
          <p className="font-gellix text-[50px] leading-[52px] font-semibold tracking-[-1.5px] text-white md:text-[84.15px] md:leading-[87.97px] md:tracking-[-2.52px]">
            Solana x AI
          </p>
          <div className="mt-[12px] flex flex-wrap items-center gap-[2px] p-[3px] md:mt-[19px] md:gap-[2.72px] md:p-[5.43px]">
            <div className="flex items-center gap-[3px] md:gap-[3.8px]">
              <span className="text-[11px] leading-[28px] font-semibold text-white uppercase md:text-[13.58px] md:leading-[38px]">
                HACKATHON
              </span>
              <span className="h-[4px] w-[4px] rounded-full bg-white md:h-[5.43px] md:w-[5.43px]" />
            </div>
            <div className="flex items-center gap-[3px] md:gap-[3.8px]">
              <span className="text-[11px] leading-[28px] font-semibold text-white uppercase md:text-[13.58px] md:leading-[38px]">
                TALKS
              </span>
              <span className="h-[4px] w-[4px] rounded-full bg-white md:h-[5.43px] md:w-[5.43px]" />
            </div>
            <span className="text-[11px] leading-[28px] font-semibold text-white uppercase md:text-[13.58px] md:leading-[38px]">
              NETWORKING
            </span>
          </div>
        </div>
      </div>

      {/* Event details - Mobile: below card, Desktop: beside card */}
      <div className="flex w-full flex-col gap-[15px] md:w-[485px] md:gap-[20px]">
        {/* Venue */}
        <div className="flex w-full flex-col gap-[10px] md:gap-[20px]">
          <div className="flex w-fit items-center justify-center rounded-[50px] border border-solid border-black p-[8px] md:p-[10px]">
            <p className="font-gellix text-[14px] font-medium tracking-[0.7px] text-black capitalize md:text-[16px] md:tracking-[0.8px]">
              Venue
            </p>
          </div>
          <p className="font-gellix text-[14px] leading-[20px] font-semibold tracking-[0.42px] text-black uppercase md:text-[20px] md:leading-[24px] md:tracking-[0.6px]">
            FACULTY OF SOCIAL SCIENCE LECTURE THEATER, UNIVERSITY OF LAGOS
          </p>
        </div>

        {/* Date */}
        <div className="flex flex-col gap-[10px] md:gap-[20px]">
          <div className="flex w-fit items-center justify-center rounded-[50px] border border-solid border-black p-[8px] md:p-[10px]">
            <p className="font-gellix text-[14px] font-medium tracking-[0.7px] text-black capitalize md:text-[16px] md:tracking-[0.8px]">
              Date
            </p>
          </div>
          <p className="font-gellix text-[14px] leading-[20px] font-semibold tracking-[0.42px] text-black uppercase md:text-[20px] md:leading-[24px] md:tracking-[0.6px]">
            SATURDAY 4TH OF OCTOBER, 2025
          </p>
        </div>

        {/* Time */}
        <div className="flex flex-col gap-[10px] md:gap-[20px]">
          <div className="flex w-fit items-center justify-center rounded-[50px] border border-solid border-black p-[8px] md:p-[10px]">
            <p className="font-gellix text-[14px] font-medium tracking-[0.7px] text-black capitalize md:text-[16px] md:tracking-[0.8px]">
              Time
            </p>
          </div>
          <p className="font-gellix text-[14px] leading-[20px] font-semibold tracking-[0.42px] text-black uppercase md:text-[20px] md:leading-[24px] md:tracking-[0.6px]">
            10:00AM UTC
          </p>
        </div>
      </div>
    </div>
  );
};

const Events = () => {
  return (
    <section className="events-section relative w-full bg-[#f0f0f0] px-[15px] py-[60px] md:h-[1265px] md:px-0 md:py-0">
      {/* Header - centered */}
      <div className="flex flex-col items-center gap-[30px] md:absolute md:top-[64px] md:left-1/2 md:w-[835px] md:-translate-x-1/2 md:gap-[50px]">
        {/* Events pill */}
        <div className="flex items-center justify-center rounded-[50px] border-2 border-solid border-black px-[15px] py-[12px] md:px-[20px] md:py-[20px]">
          <p className="font-gellix text-[16px] leading-[14px] font-medium text-black md:text-[20px]">
            Events
          </p>
        </div>
        {/* Text content */}
        <div className="flex w-full flex-col items-center gap-[20px] md:gap-[30px]">
          <p className="font-area text-[28px] leading-[36px] font-extrabold tracking-[-0.84px] text-[#0b9444] md:text-[40px] md:leading-[31px] md:tracking-[-1.2px]">
            Build. Learn. Connect
          </p>
          <p className="font-gellix w-full text-center text-[16px] leading-[28px] font-normal tracking-[0.32px] text-black md:w-[821px] md:text-[20px] md:leading-[40px] md:tracking-[0.4px]">
            From hackathons to campus tours, our events bring students together to explore, create,
            and shape the future of Web3 across Africa.
          </p>
        </div>
      </div>

      {/* Event cards - Mobile: stacked, Desktop: centered */}
      <div className="mt-[40px] flex flex-col gap-[40px] md:absolute md:top-[383px] md:left-1/2 md:mt-0 md:w-[1206px] md:-translate-x-1/2 md:gap-[60px]">
        <EventCard />
        <EventCard />
      </div>

      {/* See more button */}
      <div className="mt-[40px] flex justify-center md:absolute md:top-[1099px] md:left-1/2 md:mt-0 md:-translate-x-1/2">
        <a
          href="/events"
          className="flex items-center justify-center rounded-[50px] bg-[#0b9444] px-[20px] py-[15px] md:py-[20px]"
        >
          <span className="font-gellix text-[16px] leading-[21px] font-medium text-white md:text-[30px]">
            See more
          </span>
        </a>
      </div>
    </section>
  );
};

export default Events;
