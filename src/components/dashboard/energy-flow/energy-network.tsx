"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import SectionCard from "@/components/shared/section-card";
// import EnergyNodeCard from "./energy-node-card";

export default function EnergyNetwork() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <SectionCard
      title="Energy Flow"
      subtitle="Real-time energy network overview"
      className="h-full"
    >
      <div className="relative flex h-[520px] w-full items-center justify-center rounded-lg bg-slate-50 p-4 dark:bg-slate-950/40">
        <Image
          src={theme === "dark" ? "/images/dashboard/energy-network-dark.png" : "/images/dashboard/energy-network-light.png"}
          alt="Energy Network"
          fill
          className="object-contain"
        />
      </div>
    </SectionCard>
  );
}