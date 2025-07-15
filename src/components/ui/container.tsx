import { cn } from "@/lib/utils";
import { ElementType, ReactNode } from "react";

interface ContainerProps {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  [key: string]: unknown;
}

export function Container({
  children,
  className,
  as: Component = "div",
  ...props
}: ContainerProps) {
  return (
    <Component className={cn("mx-auto w-[90%] max-w-screen-xl md:w-[95%]", className)} {...props}>
      {children}
    </Component>
  );
}
