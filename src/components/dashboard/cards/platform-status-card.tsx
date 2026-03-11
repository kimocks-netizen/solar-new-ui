import { Activity, Gauge, Cpu } from "lucide-react";
import SectionCard from "@/components/shared/section-card";

export default function PlatformStatusCard() {
  const stats = [
    {
      label: "Generating Number",
      value: "28",
      subValue: "6 online",
      icon: Activity,
      tone: "cyan",
    },
    {
      label: "Meter Number",
      value: "624",
      subValue: "18 active",
      icon: Gauge,
      tone: "magenta",
    },
    {
      label: "Connected Devices",
      value: "96",
      subValue: "Stable",
      icon: Cpu,
      tone: "green",
    },
  ] as const;

  return (
    <SectionCard
      title="Platform Operation Status"
      subtitle="High-level system availability and connected assets"
      className="h-full"
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {stats.map((item) => {
          const Icon = item.icon;

          const toneClasses =
            item.tone === "cyan"
              ? "bg-cyan-50 text-cyan-600 ring-cyan-100 dark:bg-cyan-500/10 dark:text-cyan-300 dark:ring-cyan-500/20"
              : item.tone === "magenta"
              ? "bg-fuchsia-50 text-fuchsia-600 ring-fuchsia-100 dark:bg-fuchsia-500/10 dark:text-fuchsia-300 dark:ring-fuchsia-500/20"
              : "bg-emerald-50 text-emerald-600 ring-emerald-100 dark:bg-emerald-500/10 dark:text-emerald-300 dark:ring-emerald-500/20";

          return (
            <div
              key={item.label}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-slate-950/40"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {item.label}
                  </p>
                  <p className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
                    {item.value}
                  </p>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    {item.subValue}
                  </p>
                </div>

                <div
                  className={[
                    "flex h-11 w-11 items-center justify-center rounded-xl ring-1",
                    toneClasses,
                  ].join(" ")}
                >
                  <Icon className="h-5 w-5" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </SectionCard>
  );
}
