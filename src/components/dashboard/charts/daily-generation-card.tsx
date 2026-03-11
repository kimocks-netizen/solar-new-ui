import SectionCard from "@/components/shared/section-card";

export default function DailyGenerationCard() {
  return (
    <SectionCard
      title="Daily Power Generation"
      subtitle="Current day generation summary"
      className="h-full"
    >
      <div className="flex h-[260px] flex-col justify-between rounded-2xl bg-slate-50 p-5 dark:bg-slate-950/40">
        <div>
          <p className="text-sm text-slate-500 dark:text-slate-400">Today</p>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
            539 kWh
          </p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 dark:border-white/10 dark:bg-slate-900">
            <span className="text-sm text-slate-500 dark:text-slate-400">Yesterday</span>
            <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">
              942 kWh
            </span>
          </div>

          <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 dark:border-white/10 dark:bg-slate-900">
            <span className="text-sm text-slate-500 dark:text-slate-400">Change</span>
            <span className="text-sm font-semibold text-rose-500">-42.8%</span>
          </div>

          <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 dark:border-white/10 dark:bg-slate-900">
            <span className="text-sm text-slate-500 dark:text-slate-400">Peak Hour</span>
            <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">
              12:00
            </span>
          </div>
        </div>
      </div>
    </SectionCard>
  );
}