import Navbar from "@/components/ui/navbar";
import Footer from "@/components/sections/footer";
import { EngagementCard, StartupCard, ActivityCard, UniversityTag } from "@/components/shared";
import { ENGAGEMENT_ITEMS, ACTIVITIES, STARTUPS } from "@/data";
import { SOCIAL_LINKS } from "@/constants";

const Community = () => {
  // Use imported data or override with display values
  const universities = [
    "University Of Lagos",
    "Lagos State University",
    "Yaba College Of Technology",
    "University Of Ibadan",
    "Ladoke Akintola University",
    "And More..",
  ];

  return (
    <div className="font-gellix mx-auto flex w-full max-w-[1512px] flex-col bg-black">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[400px] w-full overflow-hidden md:h-[642px]">
        {/* Background Image with overlay */}
        <div className="absolute inset-0">
          <img
            src="/images/community-1.jpg"
            alt="Community"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/54" />
        </div>

        {/* Content */}
        <div className="absolute top-[150px] left-1/2 flex w-[90%] -translate-x-1/2 flex-col items-center gap-[20px] px-4 md:top-[213px] md:w-[952px] md:gap-[36px] md:px-0">
          {/* Badge */}
          <div className="flex items-center justify-center rounded-[50px] border-2 border-white px-[20px] py-[10px] md:p-[20px]">
            <p className="font-gellix text-[14px] leading-[20px] font-medium text-white md:text-[20px] md:leading-[45px]">
              Community
            </p>
          </div>

          {/* Title */}
          <h1 className="font-area w-full text-center text-[28px] leading-[36px] font-extrabold tracking-[-0.8px] text-white md:text-[60px] md:leading-[78px] md:tracking-[-1.8px]">
            Where Africa's Future Builders Connect
          </h1>
        </div>
      </section>

      {/* Join Section */}
      <section className="relative w-full overflow-hidden bg-[#f5f5f5] px-[15px] py-[60px] md:h-[709px] md:px-0 md:py-0">
        {/* Title */}
        <p className="font-area text-[24px] leading-[32px] font-bold tracking-[-0.8px] text-black md:absolute md:top-[96px] md:left-[47px] md:w-[952px] md:text-[40px] md:leading-[60px] md:tracking-[-1.2px]">
          Join students across Africa learning, building, and innovating on Solana.
        </p>

        {/* Image Grid */}
        <div className="mt-[30px] flex flex-col items-center gap-[15px] md:absolute md:top-[254px] md:left-[50px] md:mt-0 md:flex-row md:gap-[21px]">
          {/* Image 1 */}
          <div className="h-[200px] w-full overflow-hidden rounded-[20px] md:h-[262px] md:w-[457px]">
            <img
              src="/images/community-1.jpg"
              alt="Community event"
              className="h-full w-full object-cover"
            />
          </div>
          {/* Image 2 */}
          <div className="h-[200px] w-full overflow-hidden rounded-[20px] md:h-[262px] md:w-[457px]">
            <img
              src="/images/community-2.jpg"
              alt="Community event"
              className="h-full w-full object-cover"
            />
          </div>
          {/* Image 3 */}
          <div className="h-[200px] w-full overflow-hidden rounded-[20px] md:h-[262px] md:w-[457px]">
            <img
              src="/images/community-3.jpg"
              alt="Community event"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Join Now Button */}
        <div className="mt-[30px] md:absolute md:top-[583px] md:left-[47px] md:mt-0">
          <a
            href={SOCIAL_LINKS.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-fit items-center justify-center rounded-[50px] bg-[#ffb600] px-[30px] py-[15px] transition-colors hover:bg-[#e5a400] md:p-[20px]"
          >
            <p className="font-gellix text-[18px] font-medium text-white md:text-[30px]">
              Join Now
            </p>
          </a>
        </div>
      </section>

      {/* Get Involved Badge */}
      <div className="mt-[80px] flex justify-center md:mt-[138px]">
        <div className="flex items-center justify-center rounded-[50px] border-2 border-white px-[20px] py-[10px] md:p-[20px]">
          <p className="font-gellix text-[14px] leading-[20px] font-medium text-white md:text-[20px] md:leading-[45px]">
            Get Involved
          </p>
        </div>
      </div>

      {/* Engagement Cards Section */}
      <section className="mt-[40px] flex justify-center px-[15px] md:mt-[72px] md:px-0">
        <div className="grid w-full max-w-[1413px] grid-cols-2 gap-[15px] md:flex md:flex-row md:gap-[25px]">
          {ENGAGEMENT_ITEMS.map((item, index) => (
            <EngagementCard key={index} {...item} />
          ))}
        </div>
      </section>

      {/* Startups Section */}
      <section className="mt-[80px] flex justify-center px-[15px] md:mt-[138px] md:px-0">
        <div className="flex w-full max-w-[1189px] flex-col items-center gap-[40px] md:gap-[72px]">
          {/* Title */}
          <p className="font-gellix w-full text-center text-[32px] leading-[40px] font-semibold tracking-[-0.6px] text-white md:w-[936px] md:text-[60px] md:leading-[70px]">
            Startups Founders From Our Community
          </p>

          {/* Startups Grid - All in one flex wrap on mobile */}
          <div className="flex w-full flex-wrap justify-center gap-[15px] md:gap-[25px]">
            {STARTUPS.map((startup, index) => (
              <StartupCard key={index} {...startup} />
            ))}
          </div>
        </div>
      </section>

      {/* Join Now Button (second one) */}
      <div className="mt-[60px] flex justify-center px-[15px] md:mt-[92px] md:px-0">
        <a
          href={SOCIAL_LINKS.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center rounded-[50px] bg-[#ffb600] px-[30px] py-[15px] transition-colors hover:bg-[#e5a400] md:p-[20px]"
        >
          <p className="font-gellix text-[18px] font-medium text-white md:text-[30px]">Join Now</p>
        </a>
      </div>

      {/* Our Activities Section Title */}
      <div className="mt-[80px] flex justify-center px-[15px] md:mt-[167px] md:px-0">
        <p className="font-area text-[28px] leading-[36px] font-bold tracking-[-0.8px] text-white md:text-[40px] md:leading-[60px] md:tracking-[-1.2px]">
          Our Activities
        </p>
      </div>

      {/* Activities Grid */}
      <section className="mx-auto mt-[40px] flex w-full max-w-[1512px] flex-wrap justify-center gap-[15px] px-[15px] md:mt-[72px] md:gap-[20px] md:px-[47px]">
        {ACTIVITIES.map((activity, index) => (
          <ActivityCard key={index} title={activity.name} />
        ))}
      </section>

      {/* Universities Section */}
      <section className="mt-[80px] flex justify-center px-[15px] md:mt-[167px] md:px-0">
        <div className="flex w-full max-w-[1189px] flex-col items-center gap-[40px] md:gap-[60px]">
          {/* Title */}
          <p className="font-gellix text-center text-[32px] leading-[40px] font-semibold tracking-[-0.6px] text-white md:text-[60px] md:leading-[70px]">
            Universities
          </p>

          {/* Universities Grid */}
          <div className="flex w-full flex-wrap justify-center gap-[10px] md:gap-[20px]">
            {universities.map((uni, index) => (
              <UniversityTag key={index} name={uni} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="mt-[80px] w-full px-[15px] pb-[30px] md:mt-[167px] md:px-[50px] md:pb-[38px]">
        <Footer />
      </div>
    </div>
  );
};

export default Community;
