import { Link } from "react-router-dom";
import Footer from "@/components/sections/footer";
import Navbar from "@/components/ui/navbar";

// Event Poster Component - Responsive
const EventPoster = () => (
  <div className="relative h-[220px] w-full overflow-clip rounded-[15px] bg-[#141414] md:h-[274px] md:w-[703px]">
    {/* Background Ellipses */}
    <div className="absolute -top-[100px] -left-[150px] h-[300px] w-[450px] md:-top-[157px] md:-left-[278px] md:h-[481px] md:w-[757px]">
      <img
        src="/images/event-ellipse-green.png"
        alt=""
        className="h-full w-full object-contain opacity-50"
      />
    </div>
    <div className="absolute top-[50px] -left-[150px] h-[280px] w-[430px] md:top-[72px] md:-left-[286px] md:h-[457px] md:w-[720px]">
      <img
        src="/images/event-ellipse-orange.png"
        alt=""
        className="h-full w-full object-contain opacity-50"
      />
    </div>

    {/* Event Header - Top Left */}
    <div className="absolute top-[15px] left-[14px]">
      <p className="font-gellix w-[120px] text-[16px] leading-[18px] font-semibold tracking-[-0.48px] text-white md:w-[159px] md:text-[23.681px] md:leading-[23.681px] md:tracking-[-0.7104px]">
        Zero To Shipped
      </p>
      <p className="font-gellix mt-[20px] text-[16px] tracking-[-0.48px] text-[#ffc350] italic md:mt-[33px] md:text-[22.497px] md:tracking-[-0.6749px]">
        Ongoing
      </p>
    </div>

    {/* Solana Coin Icon */}
    <div className="absolute top-[20px] left-[120px] h-[25px] w-[25px] -rotate-[24deg] md:top-[24px] md:left-[148px] md:h-[33px] md:w-[33px]">
      <img src="/images/solana-coin.png" alt="" className="h-full w-full object-cover" />
    </div>

    {/* Sponsor Logos - Top Right */}
    <div className="absolute top-[11px] right-[14px] flex items-center gap-[5px] md:gap-[7px]">
      <img
        src="/images/solana-logo-white.png"
        alt="Solana"
        className="h-[14px] w-auto md:h-[18px]"
      />
      <img src="/images/ssa-logo-small.png" alt="SSA" className="h-[30px] w-auto md:h-[40px]" />
    </div>

    {/* Event Content - Bottom Left */}
    <div className="absolute bottom-[20px] left-[14px] flex w-[280px] flex-col gap-[12px] md:bottom-[30px] md:w-[418px] md:gap-[19px]">
      <p className="font-gellix text-[11px] font-normal text-white md:text-[13.575px]">FORMAT:</p>
      <p className="font-gellix text-[50px] leading-[52px] font-semibold tracking-[-1.5px] text-white md:text-[84.148px] md:leading-[87.966px] md:tracking-[-2.5244px]">
        X Spaces
      </p>
      {/* Tags */}
      <div className="flex flex-wrap items-center gap-[3px] p-[3px] md:p-[5px]">
        <span className="font-gellix text-[11px] font-semibold text-white uppercase md:text-[13.575px]">
          DISCUSSIONS
        </span>
        <span className="h-[4px] w-[4px] rounded-full bg-white md:h-[5px] md:w-[5px]"></span>
        <span className="font-gellix text-[11px] font-semibold text-white uppercase md:text-[13.575px]">
          LEARNING
        </span>
        <span className="h-[4px] w-[4px] rounded-full bg-white md:h-[5px] md:w-[5px]"></span>
        <span className="font-gellix text-[11px] font-semibold text-white uppercase md:text-[13.575px]">
          SHIPPING
        </span>
      </div>
    </div>
  </div>
);

// Campus Tour Card Component - Responsive
const CampusTourCard = ({
  day,
  university,
  date,
}: {
  day: string;
  university: string;
  date: string;
}) => (
  <div className="flex w-full flex-col gap-[15px] md:w-auto md:gap-[20px]">
    {/* Card Image */}
    <div className="relative h-[280px] w-full overflow-clip rounded-[15px] bg-[#f4f4f4] md:h-[425px] md:w-[699px]">
      {/* Background pattern */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="px-[30px] text-center md:px-[60px]">
          <h4 className="font-gellix mt-[60px] text-[36px] leading-[40px] font-bold tracking-[-1.08px] text-black md:mt-[80px] md:text-[70px] md:leading-[73px] md:tracking-[-2.1px]">
            Solana Nigeria
            <br />
            Developer Cohort
          </h4>
          <p className="font-gellix mt-[12px] text-[14px] font-medium text-[#313131] capitalize md:mt-[18px] md:text-[20px]">
            Building the Next Generation of Solana Developers in Nigeria
          </p>
          <div className="mt-[25px] inline-flex rounded-[7px] bg-black px-[7px] py-[8px] md:mt-[40px] md:py-[10px]">
            <span className="font-gellix text-[12px] leading-[1.5] font-medium text-white md:text-[20px]">
              {date}
            </span>
          </div>
        </div>
      </div>
    </div>

    {/* Card Footer */}
    <div className="flex w-full flex-col gap-[10px] md:w-[688px] md:gap-[20px]">
      <div className="inline-flex w-fit items-center justify-center rounded-[100px] bg-[#ffb703] px-[10px] py-[8px] md:py-[10px]">
        <span className="font-gellix text-[18px] leading-[40px] font-light tracking-[1.8px] text-[#020202] md:text-[26px] md:leading-[65.589px] md:tracking-[2.6px]">
          {day}
        </span>
      </div>
      <p className="font-gellix text-[28px] leading-[32px] font-semibold text-white md:text-[50px] md:leading-[45px]">
        {university}
      </p>
    </div>
  </div>
);

const Events = () => {
  // University tabs data
  const universityTabs = [
    { name: "UNILAG", active: true },
    { name: "UNIUYO", active: false },
    { name: "UNIABUJA", active: false },
    { name: "OOU", active: false },
    { name: "FUNAAB", active: false },
  ];

  // Campus tour days
  const campusTourDays = [
    { day: "DAY 1", university: "UNILAG", date: "November 15 – November 21, 2025" },
    { day: "DAY 2", university: "UNILAG", date: "November 15 – November 21, 2025" },
    { day: "DAY 3", university: "UNILAG", date: "November 15 – November 21, 2025" },
    { day: "DAY 4", university: "UNILAG", date: "November 15 – November 21, 2025" },
  ];

  return (
    <div className="font-gellix mx-auto flex w-full max-w-[1512px] flex-col bg-black">
      {/* Hero Section - Responsive */}
      <div className="relative min-h-[350px] w-full bg-black pb-[40px] md:h-[582px] md:pb-0">
        {/* Navbar */}
        <Navbar />

        {/* Decorative Elements - Hidden on mobile */}
        <div className="absolute top-[105px] right-[72px] hidden h-[207.484px] w-[192px] md:block">
          <img
            src="/images/hero-africa-green.svg"
            alt=""
            className="h-full w-full object-contain"
          />
        </div>
        <div className="absolute top-[105px] right-[-4px] hidden h-[209.61px] w-[225px] md:block">
          <img src="/images/hero-blue-shape.svg" alt="" className="h-full w-full object-contain" />
        </div>
        <div className="absolute top-[343px] right-[20px] hidden h-[236px] w-[236px] md:block">
          <img src="/images/hero-star-yellow.svg" alt="" className="h-full w-full object-contain" />
        </div>
        <div className="absolute top-[347px] right-[-16px] hidden h-[228.687px] w-[268.396px] md:block">
          <img
            src="/images/hero-trophy-orange.svg"
            alt=""
            className="h-full w-full object-contain"
          />
        </div>

        {/* Hero Content - Responsive */}
        <div className="absolute top-[100px] left-[15px] flex w-[calc(100%-30px)] flex-col gap-[20px] md:top-[221px] md:left-[50px] md:w-[952px] md:gap-[36px]">
          {/* Events Badge */}
          <div className="inline-flex w-fit items-center justify-center rounded-[50px] border-2 border-white px-[15px] py-[12px] md:px-[20px] md:py-[20px]">
            <span className="font-gellix text-[16px] leading-[28px] font-medium text-white md:text-[20px] md:leading-[45px]">
              Events
            </span>
          </div>

          {/* Hero Title */}
          <h1 className="font-area text-[32px] leading-[42px] font-extrabold tracking-[-0.96px] text-white md:text-[60px] md:leading-[78px] md:tracking-[-1.8px]">
            Building, Learning, and Connecting — One Event at a Time
          </h1>
        </div>
      </div>

      {/* Upcoming Events Section - Responsive */}
      <div className="relative w-full overflow-clip bg-[#f5f5f5] px-[15px] py-[60px] md:h-[1032px] md:px-0 md:py-0">
        {/* Section Title */}
        <h2 className="font-area text-center text-[28px] leading-[36px] font-extrabold tracking-[-0.84px] text-black md:absolute md:top-[114px] md:left-[469px] md:text-[60px] md:leading-[78px] md:tracking-[-1.8px]">
          Upcoming Events
        </h2>

        {/* Event Cards Container */}
        <div className="mt-[40px] flex flex-col gap-[40px] md:absolute md:top-[239px] md:left-[53px] md:mt-0 md:gap-[56px]">
          {/* Event Card 1 */}
          <div className="flex w-full flex-col gap-[20px] md:w-[1206px] md:flex-row md:gap-[18px]">
            <EventPoster />

            {/* Event Details */}
            <div className="flex w-full flex-col gap-[15px] md:w-[485px] md:gap-[20px]">
              {/* Venue */}
              <div className="flex flex-col gap-[10px] md:gap-[20px]">
                <div className="inline-flex w-fit items-center justify-center rounded-[50px] border border-black px-[10px] py-[8px] md:py-[10px]">
                  <span className="font-gellix text-[14px] font-medium tracking-[0.7px] text-black capitalize md:text-[16px] md:tracking-[0.8px]">
                    Platform
                  </span>
                </div>
                <p className="font-gellix text-[14px] leading-[20px] font-semibold tracking-[0.42px] text-black uppercase md:text-[20px] md:leading-[24px] md:tracking-[0.6px]">
                  X SPACES (FORMERLY TWITTER)
                </p>
              </div>

              {/* Status */}
              <div className="flex flex-col gap-[10px] md:gap-[20px]">
                <div className="inline-flex w-fit items-center justify-center rounded-[50px] border border-black px-[10px] py-[8px] md:py-[10px]">
                  <span className="font-gellix text-[14px] font-medium tracking-[0.7px] text-black capitalize md:text-[16px] md:tracking-[0.8px]">
                    Status
                  </span>
                </div>
                <p className="font-gellix text-[14px] leading-[20px] font-semibold tracking-[0.42px] text-black uppercase md:text-[20px] md:leading-[24px] md:tracking-[0.6px]">
                  ONGOING - CHECK X FOR SCHEDULE
                </p>
              </div>

              {/* Frequency */}
              <div className="flex flex-col gap-[10px] md:gap-[20px]">
                <div className="inline-flex w-fit items-center justify-center rounded-[50px] border border-black px-[10px] py-[8px] md:py-[10px]">
                  <span className="font-gellix text-[14px] font-medium tracking-[0.7px] text-black capitalize md:text-[16px] md:tracking-[0.8px]">
                    Frequency
                  </span>
                </div>
                <p className="font-gellix text-[14px] leading-[20px] font-semibold tracking-[0.42px] text-black uppercase md:text-[20px] md:leading-[24px] md:tracking-[0.6px]">
                  REGULAR SESSIONS
                </p>
              </div>
            </div>
          </div>

          {/* Event Card 2 */}
          <div className="flex w-full flex-col gap-[20px] md:w-[1206px] md:flex-row md:gap-[18px]">
            {/* Builder Program 2026 Poster */}
            <div className="relative h-[220px] w-full overflow-clip rounded-[15px] bg-[#141414] md:h-[274px] md:w-[703px]">
              {/* Background Ellipses */}
              <div className="absolute -top-[100px] -left-[150px] h-[300px] w-[450px] md:-top-[157px] md:-left-[278px] md:h-[481px] md:w-[757px]">
                <img
                  src="/images/event-ellipse-orange.png"
                  alt=""
                  className="h-full w-full object-contain opacity-50"
                />
              </div>
              <div className="absolute top-[50px] -left-[150px] h-[280px] w-[430px] md:top-[72px] md:-left-[286px] md:h-[457px] md:w-[720px]">
                <img
                  src="/images/event-ellipse-green.png"
                  alt=""
                  className="h-full w-full object-contain opacity-50"
                />
              </div>

              {/* Event Header - Top Left */}
              <div className="absolute top-[15px] left-[14px]">
                <p className="font-gellix w-[180px] text-[14px] leading-[16px] font-semibold tracking-[-0.42px] text-white md:w-[200px] md:text-[18px] md:leading-[20px] md:tracking-[-0.54px]">
                  Builder Program 2026
                </p>
                <p className="font-gellix mt-[8px] text-[14px] tracking-[-0.42px] text-[#ffc350] italic md:mt-[12px] md:text-[18px] md:tracking-[-0.54px]">
                  Coming Soon
                </p>
              </div>

              {/* Sponsor Logos - Top Right */}
              <div className="absolute top-[11px] right-[14px] flex items-center gap-[5px] md:gap-[7px]">
                <img
                  src="/images/solana-logo-white.png"
                  alt="Solana"
                  className="h-[14px] w-auto md:h-[18px]"
                />
                <img
                  src="/images/ssa-logo-small.png"
                  alt="SSA"
                  className="h-[30px] w-auto md:h-[40px]"
                />
              </div>

              {/* Event Content - Bottom Left */}
              <div className="absolute bottom-[20px] left-[14px] flex w-[280px] flex-col gap-[8px] md:bottom-[30px] md:w-[418px] md:gap-[12px]">
                <p className="font-gellix text-[11px] font-normal text-white md:text-[13.575px]">
                  FOCUS:
                </p>
                <p className="font-gellix text-[42px] leading-[44px] font-semibold tracking-[-1.26px] text-white md:text-[70px] md:leading-[73px] md:tracking-[-2.1px]">
                  Build & Ship
                </p>
                {/* Tags */}
                <div className="flex flex-wrap items-center gap-[3px] p-[3px] md:p-[5px]">
                  <span className="font-gellix text-[11px] font-semibold text-white uppercase md:text-[13.575px]">
                    MENTORSHIP
                  </span>
                  <span className="h-[4px] w-[4px] rounded-full bg-white md:h-[5px] md:w-[5px]"></span>
                  <span className="font-gellix text-[11px] font-semibold text-white uppercase md:text-[13.575px]">
                    PROJECTS
                  </span>
                  <span className="h-[4px] w-[4px] rounded-full bg-white md:h-[5px] md:w-[5px]"></span>
                  <span className="font-gellix text-[11px] font-semibold text-white uppercase md:text-[13.575px]">
                    GROWTH
                  </span>
                </div>
              </div>
            </div>

            {/* Event Details */}
            <div className="flex w-full flex-col gap-[15px] md:w-[485px] md:gap-[20px]">
              {/* Program Type */}
              <div className="flex flex-col gap-[10px] md:gap-[20px]">
                <div className="inline-flex w-fit items-center justify-center rounded-[50px] border border-black px-[10px] py-[8px] md:py-[10px]">
                  <span className="font-gellix text-[14px] font-medium tracking-[0.7px] text-black capitalize md:text-[16px] md:tracking-[0.8px]">
                    Program Type
                  </span>
                </div>
                <p className="font-gellix text-[14px] leading-[20px] font-semibold tracking-[0.42px] text-black uppercase md:text-[20px] md:leading-[24px] md:tracking-[0.6px]">
                  INTENSIVE BUILDER PROGRAM
                </p>
              </div>

              {/* Status */}
              <div className="flex flex-col gap-[10px] md:gap-[20px]">
                <div className="inline-flex w-fit items-center justify-center rounded-[50px] border border-black px-[10px] py-[8px] md:py-[10px]">
                  <span className="font-gellix text-[14px] font-medium tracking-[0.7px] text-black capitalize md:text-[16px] md:tracking-[0.8px]">
                    Status
                  </span>
                </div>
                <p className="font-gellix text-[14px] leading-[20px] font-semibold tracking-[0.42px] text-black uppercase md:text-[20px] md:leading-[24px] md:tracking-[0.6px]">
                  COMING SOON - STAY TUNED
                </p>
              </div>

              {/* Duration */}
              <div className="flex flex-col gap-[10px] md:gap-[20px]">
                <div className="inline-flex w-fit items-center justify-center rounded-[50px] border border-black px-[10px] py-[8px] md:py-[10px]">
                  <span className="font-gellix text-[14px] font-medium tracking-[0.7px] text-black capitalize md:text-[16px] md:tracking-[0.8px]">
                    Duration
                  </span>
                </div>
                <p className="font-gellix text-[14px] leading-[20px] font-semibold tracking-[0.42px] text-black uppercase md:text-[20px] md:leading-[24px] md:tracking-[0.6px]">
                  MULTI-WEEK PROGRAM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Event Section - Responsive */}
      <div className="relative bg-black px-[15px] py-[60px] md:px-0 md:pt-[162px] md:pb-[127px]">
        {/* Recent Event Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center justify-center rounded-[50px] border-2 border-white px-[15px] py-[12px] md:px-[20px] md:py-[20px]">
            <span className="font-gellix text-[16px] leading-[28px] font-medium text-white md:text-[20px] md:leading-[45px]">
              Recent Event
            </span>
          </div>
        </div>

        {/* Section Title */}
        <h2 className="font-area mt-[30px] text-center text-[28px] leading-[36px] font-extrabold tracking-[-0.84px] text-white md:mt-[40px] md:text-[60px] md:leading-[78px] md:tracking-[-1.8px]">
          Solana Nigeria Developer Cohort
        </h2>

        {/* Cohort Card - Responsive */}
        <div className="relative mx-auto mt-[30px] h-[400px] w-full overflow-clip rounded-[15px] bg-[#f4f4f4] md:mt-[44px] md:h-[599px] md:w-[1413px] md:rounded-[20px]">
          {/* Main Content */}
          <div className="flex h-full flex-col items-center justify-center px-[20px] md:absolute md:top-[115px] md:left-[124px] md:w-[765px] md:items-start md:justify-start md:gap-[29px] md:px-0">
            <h3 className="font-gellix text-center text-[40px] leading-[44px] font-bold tracking-[-1.2px] text-black md:text-left md:text-[100px] md:leading-[97px] md:tracking-[-3px]">
              Solana Nigeria Developer Cohort
            </h3>
            <p className="font-gellix mt-[15px] text-center text-[16px] leading-[1.4] font-medium text-[#313131] capitalize md:mt-0 md:text-left md:text-[30px] md:leading-[1.16]">
              Building the Next Generation of Solana Developers in Nigeria
            </p>
            {/* Date Badge */}
            <div className="mt-[20px] rounded-[10px] bg-black px-[10px] py-[12px] md:absolute md:top-[308px] md:left-0 md:mt-0 md:py-[15px]">
              <span className="font-gellix text-[14px] leading-[1.5] font-medium text-white md:text-[30px]">
                November 15th – December 20th, 2025
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Highlights Section - Responsive */}
      <div className="relative bg-black px-[15px] py-[60px] md:px-0 md:pt-[80px] md:pb-[100px]">
        {/* Highlights Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center justify-center rounded-[50px] border-2 border-white px-[15px] py-[12px] md:px-[20px] md:py-[20px]">
            <span className="font-gellix text-[16px] leading-[28px] font-medium text-white md:text-[20px] md:leading-[45px]">
              Highlights
            </span>
          </div>
        </div>

        {/* Gallery Images - Responsive */}
        <div className="mt-[40px] flex flex-col gap-[20px] md:mt-[62px] md:flex-row md:gap-[29px]">
          <div className="h-[220px] w-full overflow-clip rounded-[15px] md:h-[533px] md:w-[892px] md:rounded-[20px]">
            <img
              src="/images/community-photo-1.jpg"
              alt="Event highlight 1"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="h-[220px] w-full overflow-clip rounded-[15px] md:h-[531px] md:w-[889px] md:rounded-[20px]">
            <img
              src="/images/community-photo-2.jpg"
              alt="Event highlight 2"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* University Tabs - Responsive (horizontal scroll on mobile) */}
        <div className="mt-[40px] flex items-center gap-[10px] overflow-x-auto md:mt-[92px] md:ml-[50px] md:gap-0">
          {universityTabs.map((tab) => (
            <div
              key={tab.name}
              className={`flex shrink-0 cursor-pointer items-center justify-center px-[15px] py-[12px] md:px-[20px] md:py-[20px] ${
                tab.active ? "border-b-2 border-white" : ""
              }`}
            >
              <span className="font-gellix text-[14px] leading-[28px] font-medium text-white md:text-[20px] md:leading-[45px]">
                {tab.name}
              </span>
            </div>
          ))}
        </div>

        {/* Campus Tour Cards - Responsive */}
        <div className="mt-[30px] flex flex-col gap-[40px] md:mt-[21px] md:ml-[50px] md:w-[1422px] md:gap-[80px]">
          {/* Mobile: All cards in column */}
          <div className="flex flex-col gap-[30px] md:hidden">
            {campusTourDays.map((item, index) => (
              <CampusTourCard
                key={index}
                day={item.day}
                university={item.university}
                date={item.date}
              />
            ))}
          </div>

          {/* Desktop: 2 per row */}
          <div className="hidden gap-[20px] md:flex">
            {campusTourDays.slice(0, 2).map((item, index) => (
              <CampusTourCard
                key={index}
                day={item.day}
                university={item.university}
                date={item.date}
              />
            ))}
          </div>
          <div className="hidden gap-[20px] md:flex">
            {campusTourDays.slice(2, 4).map((item, index) => (
              <CampusTourCard
                key={index}
                day={item.day}
                university={item.university}
                date={item.date}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full px-[15px] pb-[30px] md:px-[50px] md:pb-[38px]">
        <Footer />
      </div>
    </div>
  );
};

export default Events;
