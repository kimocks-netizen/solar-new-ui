"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import SectionCard from "@/components/shared/section-card";

export default function EnergyNetwork() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const imageSrc =
    mounted && theme === "dark"
      ? "/images/dashboard/energy-network-dark.png"
      : "/images/dashboard/energy-network-light.png";

  return (
    <SectionCard
      title="Energy Flow"
      subtitle="Real-time energy network overview"
      className="h-full"
    >
      <div className="relative flex min-h-[320px] items-center justify-center rounded-2xl bg-slate-50 p-4 dark:bg-slate-950/40">
        <Image
          src={imageSrc}
          alt="Energy network diagram"
          width={900}
          height={520}
          className="w-full max-w-[900px] object-contain"
          priority
        />
      </div>
    </SectionCard>
  );
}