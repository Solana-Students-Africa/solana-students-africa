import { Container } from "@/components/ui/container";
import TimelineCard from "./timeline-card";

const TimelineSection = () => {
  return (
    <Container
      className="relative flex flex-col items-center justify-center py-20"
      as="section"
      id="timeline"
    >
      <h1 className="font-poppins z-10 text-center text-7xl font-semibold">
        Your Roadmap to <br />
        Greatness
      </h1>
      <p className="z-10 my-6 text-center text-xl font-medium md:w-[40%]">
        From onboarding to Demo Day ,follow the path that turns your ideas into on-chain impact.
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

      <div className="absolute top-36 left-[60%] z-0 h-[400px] w-[40vw] rounded-full bg-[#B020EC] blur-[390px]"></div>
      <div className="absolute right-[60%] bottom-64 z-0 h-[400px] w-[40vw] rounded-full bg-[#0C41D1] blur-[390px]"></div>

      <img
        src="/images/solana-coin.png"
        alt="Solana Coin"
        className="absolute top-40 left-[70%] h-[400px] w-[400px]"
      />

      <img
        src="/images/solana-coin.png"
        alt="Solana Coin"
        className="absolute -bottom-10 -left-5 h-[400px] w-[400px]"
      />
    </Container>
  );
};

export default TimelineSection;
