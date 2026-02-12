import Badge from "./badge";

interface SectionHeaderProps {
  badge?: string;
  badgeVariant?: "green" | "orange" | "blue" | "yellow" | "default";
  title: string;
  titleHighlight?: string;
  highlightColor?: string;
  description?: string;
  centered?: boolean;
}

const SectionHeader = ({
  badge,
  badgeVariant = "default",
  title,
  titleHighlight,
  highlightColor = "text-ssa-green",
  description,
  centered = true,
}: SectionHeaderProps) => {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      {badge && (
        <Badge variant={badgeVariant} className="mb-4">
          {badge}
        </Badge>
      )}

      <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
        {title} {titleHighlight && <span className={highlightColor}>{titleHighlight}</span>}
      </h2>

      {description && (
        <p className={`text-lg text-white/60 ${centered ? "mx-auto max-w-2xl" : ""}`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
