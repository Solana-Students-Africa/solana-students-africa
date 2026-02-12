import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "green" | "orange" | "blue" | "yellow" | "default";
  className?: string;
  dot?: boolean;
}

const Badge = ({ children, variant = "default", className, dot = true }: BadgeProps) => {
  const variantStyles = {
    green: "bg-ssa-green/10 text-ssa-green",
    orange: "bg-ssa-orange/10 text-ssa-orange",
    blue: "bg-primary-blue/10 text-primary-blue",
    yellow: "bg-ssa-yellow/10 text-ssa-yellow",
    default: "bg-white/5 text-white/70",
  };

  const dotStyles = {
    green: "bg-ssa-green",
    orange: "bg-ssa-orange",
    blue: "bg-primary-blue",
    yellow: "bg-ssa-yellow",
    default: "bg-white/50",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium",
        variantStyles[variant],
        className
      )}
    >
      {dot && <span className={cn("h-2 w-2 rounded-full", dotStyles[variant])} />}
      {children}
    </div>
  );
};

export default Badge;
