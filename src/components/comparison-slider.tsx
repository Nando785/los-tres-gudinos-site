"use client";

import {useState} from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface ComparisonSliderProps {
    beforeFileName: string;
    afterFileName: string;
};

export const ComparisonSlider = ({ beforeFileName, afterFileName }: ComparisonSliderProps) => {
    const [position, setPosition] = useState(50);

    function updateFromPointer(e: React.PointerEvent<HTMLDivElement>) {
          const rect = e.currentTarget.getBoundingClientRect();
          const percent = ((e.clientX - rect.left) / rect.width) * 100;
          setPosition(Math.max(0, Math.min(100, percent)));
      }

    return(
        <div 
            className="relative w-full max-w-[600px] aspect-[16/10] overflow-hidden rounded-[12px] cursor-ew-resize select-none touch-none"
            onPointerDown={(e) => {
                e.currentTarget.setPointerCapture(e.pointerId);
                updateFromPointer(e);
            }}
            onPointerMove={(e) => {
                if (e.currentTarget.hasPointerCapture(e.pointerId)) updateFromPointer(e);
            }}
        >

            {/* <!-- Back layer: AFTER image --> */}
            <div className="absolute inset-0 z-1">
                <img src={`/images/${afterFileName}.jpg`} alt="After" draggable={false} className="w-full h-full object-cover"/>
            </div>

            {/* <!-- Front layer: BEFORE image (masked) --> */}
            <div className="absolute inset-0 z-2" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
                <img src={`/images/${beforeFileName}.jpg`} alt="Before" draggable={false} className="w-full h-full object-cover"/>
            </div>

            {/* <!-- Draggable handle --> */}
            <div
                className="absolute inset-y-0 z-10 w-1 -translate-x-1/2 bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)]"
                style={{ left: `${position}%` }}
            >
                <div className="absolute top-1/2 left-1/2 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[1.2rem] text-[#333] shadow-[0_2px_12px_rgba(0,0,0,0.4)]">
                    <ChevronLeft className="size-5"/><ChevronRight className="size-5"/>
                </div>
            </div>

            {/* <!-- Optional labels --> */}
            <span className="absolute top-3 left-3 z-20 bg-black/60 px-2 py-1 text-white rounded-2xl">Before</span>
            <span className="absolute top-3 right-3 z-20 bg-black/60 px-2 py-1 text-white rounded-2xl">After</span>
        </div>
    );
}