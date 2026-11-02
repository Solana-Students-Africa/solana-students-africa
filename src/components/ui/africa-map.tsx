import { cn } from "@/lib/utils";
import { AFRICA_COUNTRIES, AFRICA_VIEWBOX } from "./africa-map-paths";

type AfricaMapProps = {
  /** Country ids (see africa-map-paths.ts) to fill with the highlight colour. */
  highlight?: string[];
  className?: string;
  strokeWidth?: number;
  /** Fill for highlighted countries; defaults to the stroke colour (currentColor). */
  highlightClassName?: string;
  title?: string;
};

const AfricaMap = ({
  highlight = [],
  className,
  strokeWidth = 0.75,
  highlightClassName = "fill-current",
  title = "Map of Africa",
}: AfricaMapProps) => {
  return (
    <svg
      viewBox={AFRICA_VIEWBOX}
      role="img"
      aria-label={title}
      className={cn("h-auto w-full", className)}
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
    >
      {AFRICA_COUNTRIES.map((country) => {
        const isHighlighted = highlight.includes(country.id);
        return (
          <path
            key={country.id}
            data-country={country.id}
            d={country.d}
            strokeWidth={strokeWidth}
            vectorEffect="non-scaling-stroke"
            className={cn(
              "transition-[fill,opacity] duration-300",
              isHighlighted ? highlightClassName : "fill-transparent"
            )}
          >
            <title>{country.name}</title>
          </path>
        );
      })}
    </svg>
  );
};

export default AfricaMap;
