import { Container } from "@/components/ui/container";
import TimelineCard from "./timeline-card";

const TimelineSection = () => {
  return (
    <Container
      className="timeline-section relative flex flex-col items-center justify-center py-20 sm:py-16"
      as="section"
      id="timeline"
    >
      <h1 className="font-poppins z-10 flex max-w-4xl flex-col items-center text-center text-4xl font-semibold sm:text-5xl md:text-6xl lg:text-7xl">
        <h1>Your Roadmap to</h1>
        <h1>Greatness</h1>
      </h1>
      <p className="z-10 my-6 w-full max-w-2xl px-2 text-center text-base font-medium sm:w-[80%] sm:px-4 sm:text-lg md:w-[60%] md:px-0 md:text-xl lg:w-[40%]">
        From onboarding to Demo Day, follow the path that turns your ideas into on-chain impact.
      </p>

      <div className="flex flex-col">
        <TimelineCard
          description="Join our Discord community, meet your team, and attend hands-on workshops introducing Solana development, smart contracts, and building with AI."
          header="Pre-Week"
          title="Onboarding and Workshop"
        />
        <TimelineCard
          description="The hackathon officially begins! Form your teams, choose a track, brainstorm project ideas, and start building."
          header="Week 1"
          title="Kickoff & Ideation"
          className="self-end"
        />
        <TimelineCard
          description="This is your core development week. You’ll dive deep into coding, test your solutions, and join mentor office hours for feedback."
          header="Week 2"
          title="Deep Build & Mentorship"
        />
        <TimelineCard
          description="Present your project to our panel of judges. Winners will be selected based on creativity, usability, technical execution, and impact."
          header="Week 3"
          title="Demo Day & Judging"
          className="self-end"
        />
      </div>

      <div className="absolute top-20 left-[40%] z-0 h-[200px] w-[200px] rounded-full bg-[#B020EC] blur-[200px] sm:top-28 sm:left-[50%] sm:h-[300px] sm:w-[300px] sm:blur-[300px] md:top-36 md:left-[60%] md:h-[400px] md:w-[40vw] md:blur-[390px]"></div>

      <div className="absolute right-[40%] bottom-40 z-0 h-[200px] w-[200px] rounded-full bg-[#0C41D1] blur-[200px] sm:right-[50%] sm:bottom-48 sm:h-[300px] sm:w-[300px] sm:blur-[300px] md:right-[60%] md:bottom-64 md:h-[400px] md:w-[40vw] md:blur-[390px]"></div>

      <img
        src="/images/solana-coin.png"
        alt="Solana Coin"
        className="absolute top-24 left-[60%] z-0 h-[150px] w-[150px] opacity-50 sm:top-32 sm:left-[65%] sm:h-[250px] sm:w-[250px] sm:opacity-75 md:top-40 md:left-[70%] md:h-[400px] md:w-[400px] md:opacity-100"
      />

      <img
        src="/images/solana-coin.png"
        alt="Solana Coin"
        className="absolute -bottom-5 -left-3 z-0 h-[150px] w-[150px] opacity-50 sm:-bottom-8 sm:-left-4 sm:h-[250px] sm:w-[250px] sm:opacity-75 md:-bottom-10 md:-left-5 md:h-[400px] md:w-[400px] md:opacity-100"
      />
    </Container>
  );
};

export default TimelineSection;
