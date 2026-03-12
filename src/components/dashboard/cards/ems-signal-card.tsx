"use client";

import { Clock3 } from "lucide-react";
import SectionCard from "@/components/shared/section-card";

export default function EmsSignalCard() {
  const signalValue = 91;
  // Semi-circle: -90 to +90 degrees (180 degrees total)
  const rotation = -90 + (signalValue / 100) * 180;

  return (
    <SectionCard
      title="EMS Signal Strength"
      subtitle="Communication quality"
      className="h-full"
    >
      <div className="flex flex-col items-center justify-center py-2">
        {/* Gauge */}
        <div className="relative h-36 w-full">
          <svg className="h-full w-full" viewBox="0 0 200 120">
            <defs>
              {/* Gradient from red to yellow to green */}
              <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ef4444" />
                <stop offset="40%" stopColor="#f59e0b" />
                <stop offset="70%" stopColor="#fbbf24" />
                <stop offset="100%" stopColor="#10b981" />
              </linearGradient>
              {/* Glossy effect */}
              <radialGradient id="glossy">
                <stop offset="0%" stopColor="white" stopOpacity="0.3" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
              {/* Needle gradient */}
              <linearGradient id="needleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#dc2626" />
                <stop offset="100%" stopColor="#7f1d1d" />
              </linearGradient>
            </defs>
            
            {/* Main semi-circle arc with gradient */}
            <path
              d="M 20 100 A 80 80 0 0 1 180 100"
              fill="none"
              stroke="url(#gaugeGradient)"
              strokeWidth="18"
              strokeLinecap="round"
            />
            
            {/* Glossy overlay */}
            <path
              d="M 20 100 A 80 80 0 0 1 180 100"
              fill="none"
              stroke="url(#glossy)"
              strokeWidth="18"
              strokeLinecap="round"
            />
            
            {/* Center value */}
            <text
              x="100"
              y="75"
              textAnchor="middle"
              className="fill-[var(--foreground)] text-xl font-bold"
            >
              {signalValue}%
            </text>
            
            {/* Needle/Pointer */}
            <g transform={`rotate(${rotation} 100 100)`} className="transition-transform duration-1000 ease-out">
              {/* Needle shadow */}
              <path
                d="M 96 100 L 100 30 L 104 100 Z"
                fill="#000000"
                opacity="0.15"
                transform="translate(1, 1)"
              />
              {/* Needle */}
              <path
                d="M 96 100 L 100 30 L 104 100 Z"
                fill="url(#needleGradient)"
              />
              {/* Needle tip */}
              <circle
                cx="100"
                cy="30"
                r="3"
                fill="#dc2626"
              />
              {/* Center bolt - outer */}
              <circle
                cx="100"
                cy="100"
                r="8"
                fill="currentColor"
                className="text-[var(--foreground)] opacity-80"
              />
              {/* Center bolt - middle */}
              <circle
                cx="100"
                cy="100"
                r="5"
                fill="currentColor"
                className="text-[var(--foreground)] opacity-60"
              />
              {/* Center bolt - inner */}
              <circle
                cx="100"
                cy="100"
                r="2"
                fill="currentColor"
                className="text-[var(--foreground)]"
              />
            </g>
          </svg>
        </div>

        {/* Last updated */}
        <div className="mt-1 flex items-center gap-2 text-xs opacity-60">
          <Clock3 className="h-3 w-3" />
          <span>Last updated: Today, 14:32</span>
        </div>
      </div>
    </SectionCard>
  );
}
