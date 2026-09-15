'use client'
import { useEffect, useRef, useState } from "react";

export default function ScrollAnimation({ children, className = "", threshold = 0.5, sound }: { children: React.ReactNode; className?: string, threshold?: number, sound?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          const audio = new Audio(`/${sound}`);
          audio.volume = 0.3;
          audio.play().catch(() => { });
          observer.unobserve(element);
        }
      },
      {
        threshold: 0,
        rootMargin: `0px 0px -${threshold * 100}% 0px`,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`w-full opacity-0 ${visible ? 'fadeSlideUp' : ""} ${className}`}
    >
      {children}
    </div>
  );
}