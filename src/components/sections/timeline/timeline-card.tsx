import { cn } from "@/lib/utils";

interface TimelineCardProps {
  header: string;
  title: string;
  description: string;
  className?: string;
}

const TimelineCard = ({ description, header, title, className }: TimelineCardProps) => {
  return (
    <div className={cn("z-10 w-1/2", className)}>
      <h1 className="font-poppins translate-y-7 text-[120px] leading-none font-light tracking-wide text-white">
        {header}
      </h1>

      <div
        className="flex h-[220px] flex-col justify-center rounded-[20px] px-4 text-white shadow-2xl backdrop-blur-sm"
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(153, 153, 153, 0) 60.42%)",
        }}
      >
        <h2 className="mb-3 text-2xl font-semibold">{title}</h2>

        <p className="text-xl font-normal">{description}</p>
      </div>
    </div>
  );
};

export default TimelineCard;
