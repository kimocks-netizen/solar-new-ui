"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import SectionCard from "@/components/shared/section-card";
import EnergyNodeCard from "@/components/dashboard/energy-flow/energy-node-card";
import PowerFlowLine from "@/components/dashboard/energy-flow/power-flow-line";

export default function EnergyNetwork() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === "dark";

  return (
    <SectionCard
      title="Energy Network"
      subtitle="Live microgrid asset topology"
      className="h-full"
    >
      <div
        className={[
          "relative h-[760px] overflow-hidden rounded-[28px] border p-6",
          "border-slate-200",
          "bg-gradient-to-br from-slate-50 via-white to-slate-100",
          "dark:border-white/10",
          "dark:bg-gradient-to-br dark:from-[#071120] dark:via-[#0b1628] dark:to-[#050b18]",
        ].join(" ")}
      >

        {/* ---------------- BACKGROUND EFFECTS ---------------- */}

        {/* Energy glow blobs */}
        <div className="pointer-events-none absolute inset-0">

          <div className="absolute left-[20%] top-[30%] h-[280px] w-[280px] rounded-full bg-cyan-400/10 blur-3xl dark:bg-cyan-400/20" />

          <div className="absolute right-[15%] top-[40%] h-[260px] w-[260px] rounded-full bg-fuchsia-400/10 blur-3xl dark:bg-fuchsia-400/20" />

          <div className="absolute left-1/2 bottom-[20%] h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-cyan-300/10 blur-3xl dark:bg-cyan-400/15" />

        </div>

        {/* subtle grid pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05] dark:opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* ---------------- ASSETS ---------------- */}

        {/* Grid */}
        <div className="absolute left-1/2 top-6 z-20 -translate-x-1/2">
          <EnergyNodeCard
            title="Import"
            value="6.2 kW"
            imageSrc="/images/dashboard/nodes/grid.png"
            tone="grid"
            glow
          />
        </div>

        {/* BESS */}
        <div className="absolute left-10 top-[180px] z-20">
          <EnergyNodeCard
            title="BESS"
            value="70 kW"
            subtitle="5%"
            imageSrc="/images/dashboard/nodes/bess.png"
            tone="bess"
            pulse
          />
        </div>

        {/* EV Charger */}
        <div className="absolute right-10 top-[180px] z-20">
          <EnergyNodeCard
            title="EV Charger"
            imageSrc="/images/dashboard/nodes/grid.png"
            tone="ev"
          />
        </div>

        {/* Heat Pump */}
        <div className="absolute bottom-[150px] left-14 z-20">
          <EnergyNodeCard
            title="Heat Pump"
            imageSrc="/images/dashboard/nodes/grid.png"
            tone="heat-pump"
          />
        </div>

        {/* PV Inverter */}
        <div className="absolute bottom-[150px] right-12 z-20">
          <EnergyNodeCard
            title="PV Inverter"
            value="20 kW"
            imageSrc="/images/dashboard/nodes/grid.png"
            tone="inverter"
          />
        </div>

        {/* ---------------- HOUSE ---------------- */}

        <div className="absolute left-1/2 top-[250px] z-10 -translate-x-1/2">
          <div className="relative">

            {/* glow behind house */}
            <div className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/20 blur-3xl animate-pulse dark:bg-cyan-400/25" />

            <Image
              src="/images/dashboard/nodes/house.png"
              alt="House load"
              width={420}
              height={300}
              className="relative z-10 h-auto w-[420px] object-contain"
              priority
            />

          </div>
        </div>

        {/* ---------------- TOTAL LOAD ---------------- */}

        <div className="absolute bottom-16 left-1/2 z-20 -translate-x-1/2 flex flex-col items-center">

          <div className="text-5xl text-fuchsia-500 dark:text-fuchsia-400 animate-bounce">
            ↓
          </div>

          <div className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Total Load
          </div>

          <div className="text-2xl font-semibold text-slate-900 dark:text-white">
            6.2 kW
          </div>

        </div>

        {/* ---------------- CONNECTIONS ---------------- */}

        {/* Grid to house */}
        <PowerFlowLine
          color="cyan"
          className="left-1/2 top-[132px] z-0 h-[120px] w-[4px] -translate-x-1/2"
        />

        <div className="absolute left-1/2 top-[150px] z-10 -translate-x-1/2 text-cyan-400">
          <div className="animate-bounce text-2xl">↓</div>
        </div>

        {/* BESS to house */}
        <PowerFlowLine
          dashed
          color="violet"
          className="left-[180px] top-[265px] z-0 h-[110px] w-[120px] rounded-r-none rounded-t-none border-l-2 border-b-2"
        />

        {/* EV to house */}
        <PowerFlowLine
          dashed
          color="teal"
          className="right-[180px] top-[265px] z-0 h-[110px] w-[120px] rounded-l-none rounded-t-none border-r-2 border-b-2"
        />

        {/* Heat pump */}
        <PowerFlowLine
          dashed
          color="amber"
          className="left-[170px] bottom-[210px] z-0 h-[80px] w-[170px] rounded-r-none rounded-b-none border-l-2 border-t-2"
        />

        {/* PV inverter */}
        <PowerFlowLine
          dashed
          color="teal"
          className="right-[170px] bottom-[210px] z-0 h-[80px] w-[170px] rounded-l-none rounded-b-none border-r-2 border-t-2"
        />

      </div>
    </SectionCard>
  );
}