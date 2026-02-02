// Activity Card Component - for Community page
// Based on Figma design: 3-column grid on desktop

interface ActivityCardProps {
  title: string;
}

const ActivityCard = ({ title }: ActivityCardProps) => (
  <div className="flex h-[120px] w-[calc(50%-7.5px)] items-center justify-center overflow-hidden rounded-[15px] bg-[#0b9444] px-4 md:h-[194px] md:w-[457px]">
    <p className="font-area text-center text-[20px] leading-[28px] font-bold tracking-[-0.6px] whitespace-pre-line text-white md:text-[40px] md:leading-[50px] md:tracking-[-1.2px]">
      {title}
    </p>
  </div>
);

export default ActivityCard;
export type { ActivityCardProps };
