import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type HeroSectionChildren = {
  children: ReactNode;
  className?: string;
};

const HeroSection = ({ children, className}: HeroSectionChildren) => {
  return (
    <div className={twMerge(
        "w-full",
        className
      )}>
      {children}
    </div>
  );
};

export default HeroSection;