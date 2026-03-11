import AppSidebar from "@/components/layout/app-sidebar";
import AppTopbar from "@/components/layout/app-topbar";
import PageContainer from "@/components/layout/page-container";

import PlatformStatusCard from "@/components/dashboard/cards/platform-status-card";
import WeatherCard from "@/components/dashboard/cards/weather-card";
import EmsSignalCard from "@/components/dashboard/cards/ems-signal-card";
import EnergyConversionCard from "@/components/dashboard/cards/energy-conversion-card";

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
            <PlatformStatusCard />

            <div className="grid gap-6 xl:grid-cols-12">
              <div className="xl:col-span-4">
                <WeatherCard />
              </div>

              <div className="xl:col-span-4">
                <EmsSignalCard />
              </div>

              <div className="xl:col-span-4">
                <EnergyConversionCard />
              </div>
            </div>
          </div>
        </PageContainer>
      </div>
    </div>
  );
}