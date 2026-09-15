'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Constants } from '@/app/constants';


export default function ImageSlider() {
  const [sliderPosition, setSliderPosition] = useState<number>(52);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  return (
    <div className="w-full max-w-150 flex flex-col gap-3">
      <div
        className="group relative w-full aspect-975/1345 overflow-hidden select-none cursor-ew-resize rounded-2xl"
        onMouseDown={(e) => {
          setIsDragging(true);
          handleMove(e.clientX, e.currentTarget.getBoundingClientRect());
        }}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={(e) => {
          if (!isDragging && e.buttons !== 1) return;
          handleMove(e.clientX, e.currentTarget.getBoundingClientRect());
        }}
        onTouchMove={(e) => {
          handleMove(e.touches[0].clientX, e.currentTarget.getBoundingClientRect());
        }}
      >
        <Image
          src={`${Constants.ROY_PATH}before.webp`}
          alt="Before"
          fill
          sizes="(max-width: 1200px) 100vw, 1200px"
          className="object-cover pointer-events-none"
          priority
        />

        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
        >

          <Image
            src={`${Constants.ROY_PATH}after.webp`}
            alt="After"
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover pointer-events-none"
            priority
          />
        </div>

        <div
          className="absolute top-0 bottom-0 w-0.5 bg-[#D3D3D3] shadow-[0_0_10px_rgba(0,0,0,0.5)] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 w-8 h-8 flex items-center justify-center minecraftButton">
            <svg
              className="w-4 h-4 text-slate-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M8 9l-4 3 4 3m8-6l4 3-4 3"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}