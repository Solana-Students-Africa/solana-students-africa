import { cn } from "@/lib/utils";
import type { AnchorHTMLAttributes } from "react";

type SlantLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "purple" | "green";
  /** Hover sweeps the opposite colour across and rolls the label. */
  sweep?: boolean;
};

// Same easing for the fill and the label so they land together.
const SWEEP_EASE = "duration-500 ease-[cubic-bezier(0.7,0,0.2,1)]";

/** Parallelogram-shaped link used for nav items and calls to action. */
const SlantLink = ({
  variant = "green",
  sweep = false,
  className,
  children,
  ...rest
}: SlantLinkProps) => {
  const purple = variant === "purple";

  return (
    <a
      className={cn(
        "clip-slant focus-visible:outline-ssa-purple inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold transition-all duration-200 [--slant:6px] focus-visible:outline-2 focus-visible:outline-offset-4",
        purple ? "bg-ssa-purple text-white" : "bg-ssa-green text-ssa-purple uppercase",
        sweep
          ? "group relative isolate overflow-hidden"
          : "hover:bg-ssa-green hover:text-ssa-purple",
        className
      )}
      {...rest}
    >
      {sweep ? (
        <>
          <span
            aria-hidden
            className={cn(
              "absolute inset-0 -z-10 -translate-x-[135%] scale-x-125 -skew-x-[20deg] transition-transform group-hover:translate-x-0 group-focus-visible:translate-x-0",
              SWEEP_EASE,
              purple ? "bg-ssa-green" : "bg-ssa-purple"
            )}
          />
          <span className="relative inline-flex overflow-hidden">
            <span
              className={cn(
                "block transition-transform group-hover:-translate-y-full group-focus-visible:-translate-y-full",
                SWEEP_EASE
              )}
            >
              {children}
            </span>
            <span
              aria-hidden
              className={cn(
                "absolute inset-0 block translate-y-full transition-transform group-hover:translate-y-0 group-focus-visible:translate-y-0",
                SWEEP_EASE,
                purple ? "text-ssa-purple" : "text-ssa-green"
              )}
            >
              {children}
            </span>
          </span>
        </>
      ) : (
        children
      )}
    </a>
  );
};

export default SlantLink;
