"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

type EmsLoaderProps = {
  size?: number;
  showText?: boolean;
  text?: string;
};

export default function EmsLoader({
  size = 140,
  showText = true,
  text = "Loading dashboard...",
}: EmsLoaderProps) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === "dark";

  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className="relative flex items-center justify-center"
        style={{ width: size, height: size }}
      >
        {/* Background glow */}
        <div
          className={[
            "absolute rounded-full blur-2xl transition-all duration-500",
            isDark
              ? "bg-gradient-to-br from-cyan-500/20 via-fuchsia-500/20 to-cyan-400/10"
              : "bg-gradient-to-br from-cyan-400/15 via-fuchsia-400/15 to-cyan-300/10",
          ].join(" ")}
          style={{
            width: size * 0.78,
            height: size * 0.78,
          }}
        />

        {/* Outer rotating ring */}
        <div
          className={[
            "absolute rounded-full border-[2px] border-transparent animate-spin",
            isDark
              ? "bg-[conic-gradient(from_0deg,#22d3ee,transparent_25%,transparent_60%,#d946ef,transparent_85%)]"
              : "bg-[conic-gradient(from_0deg,#06b6d4,transparent_25%,transparent_60%,#d946ef,transparent_85%)]",
          ].join(" ")}
          style={{
            width: size,
            height: size,
            padding: "2px",
            animationDuration: "2.6s",
          }}
        >
          <div
            className={[
              "h-full w-full rounded-full",
              isDark ? "bg-[#071120]" : "bg-[#f6f8fb]",
            ].join(" ")}
          />
        </div>

        {/* Middle dashed ring */}
        <div
          className={[
            "absolute rounded-full border-2 border-dashed animate-[spin_1.8s_linear_reverse_infinite]",
            isDark
              ? "border-fuchsia-400/40"
              : "border-fuchsia-500/35",
          ].join(" ")}
          style={{
            width: size * 0.82,
            height: size * 0.82,
          }}
        />

        {/* Inner soft ring */}
        <div
          className={[
            "absolute rounded-full border",
            isDark ? "border-cyan-400/20" : "border-cyan-500/20",
          ].join(" ")}
          style={{
            width: size * 0.62,
            height: size * 0.62,
          }}
        />

        {/* Orbit dots */}
        <div
          className="absolute animate-spin"
          style={{
            width: size * 0.92,
            height: size * 0.92,
            animationDuration: "3.2s",
          }}
        >
          <span
            className={[
              "absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full",
              isDark ? "bg-cyan-400 shadow-[0_0_16px_rgba(34,211,238,0.8)]" : "bg-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.45)]",
            ].join(" ")}
          />
          <span
            className={[
              "absolute bottom-0 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full",
              isDark ? "bg-fuchsia-400 shadow-[0_0_14px_rgba(232,121,249,0.8)]" : "bg-fuchsia-500 shadow-[0_0_10px_rgba(217,70,239,0.35)]",
            ].join(" ")}
          />
        </div>

        {/* Center logo pulse */}
        <div className="relative z-10 animate-pulse">
          <Image
            src="/logos/ems-mark.png"
            alt="EMS Loader"
            width={size * 0.34}
            height={size * 0.34}
            className="h-auto w-auto object-contain"
            priority
          />
        </div>
      </div>

      {showText ? (
        <p
          className={[
            "mt-5 text-sm font-medium tracking-wide",
            isDark ? "text-slate-300" : "text-slate-600",
          ].join(" ")}
        >
          {text}
        </p>
      ) : null}
    </div>
  );
}