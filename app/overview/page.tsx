import AppSidebar from "@/components/layout/app-sidebar";
import AppTopbar from "@/components/layout/app-topbar";
import PageContainer from "@/components/layout/page-container";

import PlatformStatusCard from "@/components/dashboard/cards/platform-status-card";
import WeatherCard from "@/components/dashboard/cards/weather-card";
import EMSSignalCard from "@/components/dashboard/cards/ems-signal-card";
import EnergyConversionCard from "@/components/dashboard/cards/energy-conversion-card";
import DailyGenerationCard from "@/components/dashboard/cards/daily-generation-card";

import EnergyNetwork from "@/components/dashboard/energy-flow/energy-network";

import HourlyGenerationChart from "@/components/dashboard/charts/hourly-generation-chart";
import MonthlyGenerationChart from "@/components/dashboard/charts/monthly-generation-chart";

export default function OverviewPage() {
  return (
    <div className="flex min-h-screen bg-slate-100 dark:bg-[#071120]">
      <AppSidebar />

      <div className="flex min-w-0 flex-1 flex-col">
        <AppTopbar
          title="Overview"
          subtitle="Smart Solar Energy EMS dashboard overview"
        />

        <PageContainer>
          <div className="grid gap-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
              <PlatformStatusCard />
              <WeatherCard />
              <EMSSignalCard />
              <EnergyConversionCard />
            </div>

            <EnergyNetwork />

            <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
              <div className="xl:col-span-5">
                <HourlyGenerationChart />
              </div>

              <div className="xl:col-span-3">
                <DailyGenerationCard />
              </div>

              <div className="xl:col-span-4">
                <MonthlyGenerationChart />
              </div>
            </div>
          </div>
        </PageContainer>
      </div>
    </div>
  );
}
