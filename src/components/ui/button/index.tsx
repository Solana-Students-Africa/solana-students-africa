import { cn } from "@/lib/utils";
import type React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  loading?: boolean;
  variant?: "primary" | "secondary" | "danger" | "ghost" | "link";
  glowOnHover?: boolean;
  /**
   * Custom glow color. Can be any valid CSS color string (e.g., "#FF00FF", "blue-500", "rgba(0,255,0,0.5)").
   * Overrides default variant glow colors when `glowOnHover` is true.
   */
  glowColor?: string;
};

const Button = ({
  children,
  disabled,
  variant = "primary",
  loading = false,
  glowOnHover = false,
  glowColor, // Destructure the new prop
  className = "",
  ...rest
}: ButtonProps) => {
  const buttonStyles = {
    variants: {
      primary: "bg-primary-blue text-white",
      secondary: "text-off-black bg-white",
      link: "bg-transparent text-away-base underline underline-offset-2 p-0",
      danger: "bg-transparent border border-error-base text-error-base",
      ghost: "bg-transparent text-away-base",
    },
  };

  const isDisabled = loading || disabled;
  const isLink = variant === "link";

  // Determine the glow shadow class based on glowColor or variant
  const getGlowShadowClass = () => {
    if (glowColor) {
      // Use the custom glowColor directly for the shadow
      return `hover:shadow-[0_0_20px_${glowColor},0_0_40px_${glowColor},0_0_60px_${glowColor}]`;
    }

    // Fallback to variant-specific glow colors if no custom glowColor is provided
    switch (variant) {
      case "primary":
        return "hover:shadow-[0_0_20px_#0C41D1,0_0_40px_#0C41D1,0_0_60px_#0C41D1]";
      case "secondary":
        return "hover:shadow-[0_0_20px_rgba(156,163,175,0.5),0_0_40px_rgba(156,163,175,0.3),0_0_60px_rgba(156,163,175,0.1)]";
      case "danger":
        return "hover:shadow-[0_0_20px_rgba(239,68,68,0.5),0_0_40px_rgba(239,68,68,0.3),0_0_60px_rgba(239,68,68,0.1)]";
      case "ghost":
        return "hover:shadow-[0_0_20px_rgba(107,114,128,0.5),0_0_40px_rgba(107,114,128,0.3),0_0_60px_rgba(107,114,128,0.1)]";
      default:
        return ""; // No glow for 'link' or other variants by default
    }
  };

  return (
    <button
      disabled={isDisabled}
      className={cn(
        "flex w-full cursor-pointer items-center justify-center gap-2 rounded-2xl text-base font-medium capitalize",
        "transition-all duration-300 ease-in-out",
        "disabled:bg-bg-soft-200 disabled:cursor-not-allowed disabled:text-white",
        buttonStyles.variants[variant],
        !isLink ? "px-4 py-2.5" : "",
        // Glow effect on hover (only when glowOnHover is true and not loading or disabled)
        !loading && !isDisabled && glowOnHover
          ? [
              "hover:opacity-90",
              "hover:scale-[1.02]",
              getGlowShadowClass(), // Apply the determined glow shadow class
            ]
          : !loading && !isDisabled
            ? "hover:opacity-80"
            : "",
        className
      )}
      {...rest}
    >
      {loading ? (
        <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
