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
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-slate-950/40">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                CO₂ Saved
              </p>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
                254.78 kg
              </p>
              <p className="mt-1 text-sm text-emerald-600 dark:text-emerald-400">
                +8.4% this month
              </p>
            </div>

            <div className="rounded-xl bg-emerald-50 p-3 dark:bg-emerald-500/10">
              <Leaf className="h-6 w-6 text-emerald-600 dark:text-emerald-300" />
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-slate-950/40">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Standard Coal Saved
              </p>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
                102.20 kg
              </p>
              <p className="mt-1 text-sm text-cyan-600 dark:text-cyan-400">
                Efficient operation
              </p>
            </div>

            <div className="rounded-xl bg-cyan-50 p-3 dark:bg-cyan-500/10">
              <Factory className="h-6 w-6 text-cyan-600 dark:text-cyan-300" />
            </div>
          </div>
        </div>
      </div>
    </SectionCard>
  );
}
