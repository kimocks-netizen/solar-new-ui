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
            <CloudSun className="h-5 w-5 text-[var(--ems-cyan)]" />
            <span className="text-sm font-medium text-[var(--foreground)] opacity-80">
              Partly Cloudy
            </span>
          </div>

          <div className="mt-3 flex items-end gap-2">
            <span className="text-4xl font-semibold tracking-tight text-[var(--foreground)]">
              24°
            </span>
            <span className="pb-1 text-sm opacity-60">
              Johannesburg
            </span>
          </div>
        </div>

        <div className="rounded-xl bg-[var(--ems-cyan-soft)] p-3">
          <ThermometerSun className="h-6 w-6 text-[var(--ems-cyan)]" />
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="rounded-xl border border-[var(--border)] p-3">
          <div className="flex items-center gap-2 opacity-60">
            <Wind className="h-4 w-4" />
            <span className="text-xs uppercase tracking-wide">Wind</span>
          </div>
          <p className="mt-2 text-lg font-semibold text-[var(--foreground)]">
            12 km/h
          </p>
        </div>

        <div className="rounded-xl border border-[var(--border)] p-3">
          <div className="flex items-center gap-2 opacity-60">
            <Droplets className="h-4 w-4" />
            <span className="text-xs uppercase tracking-wide">Humidity</span>
          </div>
          <p className="mt-2 text-lg font-semibold text-[var(--foreground)]">
            58%
          </p>
        </div>
      </div>
    </SectionCard>
  );
}
