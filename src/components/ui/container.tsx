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
    <Component className={cn("max-w-screen- mx-auto w-[90%] md:w-[95%]", className)} {...props}>
      {children}
    </Component>
  );
}
