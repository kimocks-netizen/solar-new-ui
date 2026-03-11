import { CloudSun, Wind, Droplets, ThermometerSun } from "lucide-react";
import SectionCard from "@/components/shared/section-card";

export default function WeatherCard() {
  return (
    <SectionCard
      title="Weather Forecast"
      subtitle="Local site weather conditions"
      className="h-full"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <CloudSun className="h-5 w-5 text-cyan-500 dark:text-cyan-300" />
            <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
              Partly Cloudy
            </span>
          </div>

          <div className="mt-3 flex items-end gap-2">
            <span className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
              24°
            </span>
            <span className="pb-1 text-sm text-slate-500 dark:text-slate-400">
              Johannesburg
            </span>
          </div>
        </div>

        <div className="rounded-xl bg-cyan-50 p-3 dark:bg-cyan-500/10">
          <ThermometerSun className="h-6 w-6 text-cyan-600 dark:text-cyan-300" />
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="rounded-xl border border-slate-200 p-3 dark:border-white/10">
          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
            <Wind className="h-4 w-4" />
            <span className="text-xs uppercase tracking-wide">Wind</span>
          </div>
          <p className="mt-2 text-lg font-semibold text-slate-900 dark:text-slate-100">
            12 km/h
          </p>
        </div>

        <div className="rounded-xl border border-slate-200 p-3 dark:border-white/10">
          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
            <Droplets className="h-4 w-4" />
            <span className="text-xs uppercase tracking-wide">Humidity</span>
          </div>
          <p className="mt-2 text-lg font-semibold text-slate-900 dark:text-slate-100">
            58%
          </p>
        </div>
      </div>
    </SectionCard>
  );
}
