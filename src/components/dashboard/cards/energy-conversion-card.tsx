import { Leaf, Factory } from "lucide-react";
import SectionCard from "@/components/shared/section-card";

export default function EnergyConversionCard() {
  return (
    <SectionCard
      title="Energy Conversion"
      subtitle="Overall environmental impact"
      className="h-full"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-3 transition-all duration-300 hover:scale-105 hover:shadow-md dark:border-white/10 dark:bg-slate-950/40 dark:hover:border-white/20">
          <div className="flex items-center justify-between gap-2">
            <div className="min-w-0 flex-1">
              <p className="text-xs text-slate-500 dark:text-slate-400">
                CO₂ Saved
              </p>
              <p className="mt-1 text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
                254.78 kg
              </p>
              <p className="mt-0.5 text-xs text-emerald-600 dark:text-emerald-400">
                +8.4% this month
              </p>
            </div>

            <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-50 dark:bg-emerald-500/10">
              <Leaf className="h-4 w-4 text-emerald-600 dark:text-emerald-300" />
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-slate-200 bg-slate-50 p-3 transition-all duration-300 hover:scale-105 hover:shadow-md dark:border-white/10 dark:bg-slate-950/40 dark:hover:border-white/20">
          <div className="flex items-center justify-between gap-2">
            <div className="min-w-0 flex-1">
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Standard Coal Saved
              </p>
              <p className="mt-1 text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
                102.20 kg
              </p>
              <p className="mt-0.5 text-xs text-cyan-600 dark:text-cyan-400">
                Efficient operation
              </p>
            </div>

            <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-cyan-50 dark:bg-cyan-500/10">
              <Factory className="h-4 w-4 text-cyan-600 dark:text-cyan-300" />
            </div>
          </div>
        </div>
      </div>
    </SectionCard>
  );
}
