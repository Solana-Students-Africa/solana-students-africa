// Startup Card Component - for Community page
// Based on Figma: White card with yellow category tag

interface StartupCardProps {
  name: string;
  description: string;
  category: string;
  image?: string;
}

const StartupCard = ({ name, description, category }: StartupCardProps) => (
  <div className="flex w-[calc(50%-7.5px)] flex-col items-start gap-[15px] md:w-[380px] md:gap-[22px]">
    {/* White card with category tag */}
    <div className="relative h-[150px] w-full overflow-hidden rounded-[15px] bg-white md:h-[241px]">
      <div className="absolute top-[15px] right-[15px] flex items-center justify-center rounded-[100px] bg-[#ffb703] px-[8px] py-[4px] md:top-[19px] md:right-[20px] md:px-[10px] md:py-[5px]">
        <p className="font-area text-[12px] font-bold text-black md:text-[16px]">{category}</p>
      </div>
    </div>
    {/* Name */}
    <p className="font-area w-full text-[20px] leading-[28px] font-extrabold tracking-[-0.6px] text-white md:text-[40px] md:leading-[60px] md:tracking-[-1.2px]">
      {name}
    </p>
    {/* Description */}
    <p className="font-gellix w-full text-[14px] leading-[24px] font-normal tracking-[0.28px] text-white md:text-[20px] md:leading-[40px] md:tracking-[0.4px]">
      {description}
    </p>
  </div>
);

export default StartupCard;
export type { StartupCardProps };
