import { Wifi, WifiHigh, Clock3 } from "lucide-react";
import SectionCard from "@/components/shared/section-card";

export default function EmsSignalCard() {
  return (
    <SectionCard
      title="EMS Signal Strength"
      subtitle="Communication quality and last refresh"
      className="h-full"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
            <WifiHigh className="h-4 w-4" />
            Strong
          </div>

          <div className="mt-4 flex items-baseline gap-2">
            <p className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
              92%
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Signal quality
            </p>
          </div>
        </div>

        <div className="rounded-xl bg-fuchsia-50 p-3 dark:bg-fuchsia-500/10">
          <Wifi className="h-6 w-6 text-fuchsia-600 dark:text-fuchsia-300" />
        </div>
      </div>

      <div className="mt-5 rounded-xl border border-slate-200 p-3 dark:border-white/10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
            <Clock3 className="h-4 w-4" />
            <span className="text-sm">Last updated</span>
          </div>
          <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
            Today, 14:32
          </p>
        </div>
      </div>
    </SectionCard>
  );
}
