"use client";

import { useState } from "react";
import AppSidebar from "@/components/layout/app-sidebar";
import AppTopbar from "@/components/layout/app-topbar";
import PageContainer from "@/components/layout/page-container";

import PlatformStatusCard from "@/components/dashboard/cards/platform-status-card";
import WeatherCard from "@/components/dashboard/cards/weather-card";
import EMSSignalCard from "@/components/dashboard/cards/ems-signal-card";
import EnergyConversionCard from "@/components/dashboard/cards/energy-conversion-card";

import EnergyNetwork from "@/components/dashboard/energy-flow/energy-network";

import HourlyGenerationChart from "@/components/dashboard/charts/hourly-generation-chart";
import MonthlyGenerationChart from "@/components/dashboard/charts/monthly-generation-chart";

export default function OverviewPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-slate-100 dark:bg-[#071120]">
      <AppSidebar 
        mobileOpen={mobileMenuOpen}
        onMobileClose={() => setMobileMenuOpen(false)}
      />

      <div className="ml-0 md:ml-[72px] flex min-w-0 flex-1 flex-col">
        <AppTopbar
          title="Overview"
          subtitle="Smart Solar Energy EMS dashboard overview"
          onMenuClick={() => setMobileMenuOpen(true)}
        />

        <PageContainer>
          <div className="grid gap-4">
            {/* Top Row - Status Cards on Left, Energy Flow on Right */}
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
              {/* Left Column - 4 Status Cards */}
              <div className="grid grid-cols-1 gap-4 lg:col-span-5">
                <PlatformStatusCard />
                <EnergyConversionCard />
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <WeatherCard />
                  <EMSSignalCard />
                </div>
              </div>

              {/* Right Column - Energy Flow */}
              <div className="lg:col-span-7">
                <EnergyNetwork />
              </div>
            </div>

            {/* Bottom Row - Charts */}
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <HourlyGenerationChart />
              <MonthlyGenerationChart />
            </div>
          </div>
        </PageContainer>
      </div>
    </div>
  );
}
