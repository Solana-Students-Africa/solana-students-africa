// Engagement Card Component - for Community page
// Based on Figma: Green cards with title inside, description below

interface EngagementCardProps {
  title: string;
  description: string;
}

const EngagementCard = ({ title, description }: EngagementCardProps) => (
  <div className="flex w-full flex-col gap-[15px] md:w-[340px] md:gap-[20px]">
    {/* Green card with title */}
    <div className="relative h-[180px] w-full overflow-hidden rounded-[15px] bg-[#0b9444] md:h-[318px] md:rounded-[20px]">
      <div className="absolute top-[30px] left-[20px] md:top-[40px] md:left-[25px]">
        <p className="font-area text-[24px] leading-[30px] font-bold text-white md:text-[40px] md:leading-[50px]">
          {title}
        </p>
      </div>
    </div>
    {/* Description below card */}
    <p className="font-gellix text-[14px] leading-[24px] font-normal tracking-[0.28px] text-white md:text-[16px] md:leading-[28px] md:tracking-[0.32px]">
      {description}
    </p>
  </div>
);

export default EngagementCard;
export type { EngagementCardProps };
