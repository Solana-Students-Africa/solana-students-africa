import { useEffect, useRef, ReactNode } from "react";
import AnimationBase from "@/animations/classes/AnimationBase";
import { customEasings } from "@/animations/constants/easings";
import Navbar from "./navbar";
import Footer from "./footer";

interface PageLayoutProps {
  children: ReactNode;
  animationSources?: string[];
  className?: string;
}

const PageLayout = ({ children, animationSources = [], className = "" }: PageLayoutProps) => {
  const isInitialized = useRef(false);

  useEffect(() => {
    if (!isInitialized.current && animationSources.length > 0) {
      new AnimationBase({
        sourceElements: [".navbar-section", ...animationSources, ".footer-section"],
        easings: customEasings,
      });
      isInitialized.current = true;
    }
  }, [animationSources]);

  return (
    <div className={`font-gellix flex min-h-screen flex-col bg-black ${className}`}>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;
