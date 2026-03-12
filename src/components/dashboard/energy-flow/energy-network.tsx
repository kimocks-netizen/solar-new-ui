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
      {/* Desktop View */}
      <div
        className={[
          "hidden md:block relative h-[600px] overflow-hidden rounded-[28px] border p-6",
          "border-[var(--border)]",
          "bg-[var(--background)]",
        ].join(" ")}
      >
        {/* Scaled network container */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative h-[760px] w-full origin-center scale-[0.79]">


        {/* ---------------- BACKGROUND EFFECTS ---------------- */}

        {/* Energy glow blobs */}
        <div className="pointer-events-none absolute inset-0">

          <div className="absolute left-[10%] top-[15%] h-[400px] w-[400px] rounded-full bg-cyan-400/8 blur-[100px] dark:bg-cyan-400/15" />

          <div className="absolute right-[10%] top-[20%] h-[380px] w-[380px] rounded-full bg-fuchsia-400/8 blur-[100px] dark:bg-fuchsia-400/15" />

          <div className="absolute left-[30%] bottom-[10%] h-[420px] w-[420px] rounded-full bg-violet-400/6 blur-[100px] dark:bg-violet-400/12" />

          <div className="absolute right-[25%] bottom-[15%] h-[360px] w-[360px] rounded-full bg-cyan-300/7 blur-[100px] dark:bg-cyan-400/12" />

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[450px] rounded-full bg-teal-400/5 blur-[120px] dark:bg-teal-400/10" />

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
          />
        </div>

        {/* EV Charger */}
        <div className="absolute right-10 top-[180px] z-20">
          <EnergyNodeCard
            title="EV Charger"
            imageSrc="/images/dashboard/nodes/ev-charger.png"
            tone="ev"
          />
        </div>

        {/* Heat Pump */}
        <div className="absolute bottom-[150px] left-14 z-20">
          <EnergyNodeCard
            title="Heat Pump"
            imageSrc="/images/dashboard/nodes/heat-pump.png"
            tone="heat-pump"
          />
        </div>

        {/* PV Inverter */}
        <div className="absolute bottom-[150px] right-12 z-20">
          <EnergyNodeCard
            title="PV Inverter"
            value="20 kW"
            imageSrc="/images/dashboard/nodes/inverter.png"
            tone="inverter"
          />
        </div>

        {/* ---------------- HOUSE ---------------- */}

        <div className="absolute left-1/2 top-[250px] z-10 -translate-x-1/2">
          <div className="relative animate-pulse-slow">

            {/* glow behind house */}
            <div className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/20 blur-3xl dark:bg-cyan-400/25" />

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

          <div className="text-5xl text-fuchsia-600 dark:text-fuchsia-400 animate-bounce">
            ↓
          </div>

          <div className="mt-2 text-sm text-slate-600 dark:text-slate-400">
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

        <div className="absolute left-1/2 top-[150px] z-10 -translate-x-1/2 text-cyan-500 dark:text-cyan-400">
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
        </div>

      </div>

      {/* Mobile View */}
      <div
        className={[
          "md:hidden relative overflow-hidden rounded-[28px] border p-4",
          "border-[var(--border)]",
          "bg-[var(--background)]",
        ].join(" ")}
      >
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[15%] top-[10%] h-[300px] w-[300px] rounded-full bg-cyan-400/8 blur-[80px] dark:bg-cyan-400/15" />
          <div className="absolute right-[15%] top-[10%] h-[300px] w-[300px] rounded-full bg-fuchsia-400/8 blur-[80px] dark:bg-fuchsia-400/15" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[350px] w-[350px] rounded-full bg-violet-400/6 blur-[100px] dark:bg-violet-400/12" />
          <div className="absolute left-1/2 bottom-[10%] -translate-x-1/2 h-[280px] w-[280px] rounded-full bg-teal-400/7 blur-[80px] dark:bg-teal-400/12" />
        </div>

        {/* Vertical flow layout */}
        <div className="relative flex flex-col items-center gap-4 py-4">
          
          {/* Grid Import */}
          <div className="flex flex-col items-center">
            <EnergyNodeCard
              title="Import"
              value="6.2 kW"
              imageSrc="/images/dashboard/nodes/grid.png"
              tone="grid"
              glow
            />
            <div className="my-2 text-2xl text-cyan-500 dark:text-cyan-400 animate-bounce">↓</div>
          </div>

          {/* House */}
          <div className="relative my-2 animate-pulse-slow">
            <div className="absolute left-1/2 top-1/2 h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/20 blur-3xl dark:bg-cyan-400/25" />
            <Image
              src="/images/dashboard/nodes/house.png"
              alt="House load"
              width={280}
              height={200}
              className="relative z-10 h-auto w-[280px] object-contain"
              priority
            />
          </div>

          {/* Total Load */}
          <div className="flex flex-col items-center mb-4">
            <div className="text-3xl text-fuchsia-600 dark:text-fuchsia-400 animate-bounce">↓</div>
            <div className="mt-1 text-xs text-slate-600 dark:text-slate-400">Total Load</div>
            <div className="text-xl font-semibold text-slate-900 dark:text-white">6.2 kW</div>
          </div>

          {/* Side Assets Grid */}
          <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
            <EnergyNodeCard
              title="BESS"
              value="70 kW"
              subtitle="5%"
              imageSrc="/images/dashboard/nodes/bess.png"
              tone="bess"
            />
            <EnergyNodeCard
              title="EV Charger"
              imageSrc="/images/dashboard/nodes/ev-charger.png"
              tone="ev"
            />
            <EnergyNodeCard
              title="Heat Pump"
              imageSrc="/images/dashboard/nodes/heat-pump.png"
              tone="heat-pump"
            />
            <EnergyNodeCard
              title="PV Inverter"
              value="20 kW"
              imageSrc="/images/dashboard/nodes/inverter.png"
              tone="inverter"
            />
          </div>

        </div>
      </div>
    </SectionCard>
  );
}