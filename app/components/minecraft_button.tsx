"use client"
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";


const MinecraftButton = ({ children, onClick, parentClassName, className, href, }: { children: ReactNode, onClick?: () => void, parentClassName? : string, className?: string, href?: string }) => {

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        onMouseDown={() => {
          new Audio("/click.mp3").play().catch(() => { });
        }}
        className={twMerge("minecraftButtonBorder", parentClassName)}
      >
        <div className={twMerge("minecraftButton flex items-center justify-center p-[clamp(0.5rem,0.1rem+1vw,1.5rem)]", className)}>{children}</div>
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseDown={() => {
        new Audio("/click.mp3").play().catch(() => { });
      }}
      className={twMerge("minecraftButtonBorder", parentClassName)}
    >
      <div className={twMerge("minecraftButton flex items-center justify-center p-[clamp(0.5rem,0.1rem+1vw,1.5rem)]", className)}>{children}</div>
    </button>
  );
};

export default MinecraftButton;