"use client";

import Image from "next/image";
import SectionCard from "@/components/shared/section-card";
import EnergyNodeCard from "./energy-node-card";

export default function EnergyNetwork() {
  return (
    <SectionCard
      title="Energy Flow"
      subtitle="Real-time energy network overview"
      className="h-full"
    >
      <div className="relative flex h-[520px] w-full items-center justify-center rounded-lg bg-slate-50 p-4 dark:bg-slate-950/40">

        {/* GRID */}
        <div className="absolute top-4">
          <EnergyNodeCard label="Grid Import" value="12 kW" color="bg-cyan-50 dark:bg-cyan-900/30"/>
        </div>

        {/* BESS */}
        <div className="absolute left-8 top-[45%]">
          <EnergyNodeCard label="BESS" value="-4 kW" color="bg-purple-50 dark:bg-purple-900/30"/>
        </div>

        {/* EV */}
        <div className="absolute right-8 top-[45%]">
          <EnergyNodeCard label="EV Charger" value="3 kW" color="bg-fuchsia-50 dark:bg-fuchsia-900/30"/>
        </div>

        {/* HOUSE IMAGE */}
        <div className="relative flex flex-col items-center">
          <Image
            src="/images/dashboard/energy-network-light.png"
            alt="House"
            width={180}
            height={140}
            className="object-contain"
          />

          {/* TOTAL LOAD */}
          <div className="mt-3">
            <EnergyNodeCard
              label="Total Load"
              value="42 kW"
              color="bg-emerald-50 dark:bg-emerald-900/30"
            />
          </div>
        </div>

        {/* PV INVERTER */}
        <div className="absolute bottom-6 left-[40%]">
          <EnergyNodeCard
            label="PV Inverter"
            value="38 kW"
            color="bg-yellow-50 dark:bg-yellow-900/30"
          />
        </div>

        {/* HEAT PUMP */}
        <div className="absolute bottom-6 right-[40%]">
          <EnergyNodeCard
            label="Heat Pump"
            value="5 kW"
            color="bg-blue-50 dark:bg-blue-900/30"
          />
        </div>

      </div>
    </SectionCard>
  );
}