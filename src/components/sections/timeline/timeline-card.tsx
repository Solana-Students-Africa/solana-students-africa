import { cn } from "@/lib/utils";

type TimelineCardProps = React.HTMLAttributes<HTMLDivElement> & {
  header: string;
  title: string;
  description: string;
};

const TimelineCard = ({
  description,
  header,
  title,
  className,

  ...rest
}: TimelineCardProps) => {
  return (
    <div {...rest} className={cn("z-10 w-full sm:w-3/4 md:w-2/3 lg:w-1/2", className)}>
      <h1 className="font-poppins translate-y-3 text-[60px] leading-none font-light tracking-wide text-white sm:translate-y-4 sm:text-[80px] md:translate-y-5 md:text-[100px] lg:translate-y-7 lg:text-[120px]">
        {header}
      </h1>

      <div
        className="flex h-[180px] flex-col justify-center rounded-[20px] px-4 py-6 text-white shadow-2xl backdrop-blur-sm sm:h-[200px] sm:px-6 md:h-[220px] md:px-8"
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(153, 153, 153, 0) 60.42%)",
        }}
      >
        <h2 className="mb-3 text-lg font-semibold sm:text-xl md:text-2xl">{title}</h2>

        <p className="text-base leading-relaxed font-normal sm:text-lg sm:leading-normal md:text-xl">
          {description}
        </p>
      </div>
    </div>
  );
};

export default TimelineCard;
