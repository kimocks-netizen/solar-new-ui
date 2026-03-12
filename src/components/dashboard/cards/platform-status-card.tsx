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
      <div className="grid gap-4 sm:grid-cols-3">
        {stats.map((item) => {
          const Icon = item.icon;

          const toneClasses =
            item.tone === "cyan"
              ? "bg-[var(--ems-cyan-soft)] text-[var(--ems-cyan)] ring-[var(--ems-cyan)]/20"
              : item.tone === "magenta"
              ? "bg-[var(--ems-magenta-soft)] text-[var(--ems-magenta)] ring-[var(--ems-magenta)]/20"
              : "bg-[var(--ems-success-soft)] text-[var(--ems-success)] ring-[var(--ems-success)]/20";

          return (
            <div
              key={item.label}
              className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-3 transition-all duration-300 hover:scale-105 hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0 flex-1">
                  <p className="text-xs opacity-60">
                    {item.label}
                  </p>
                  <p className="mt-1 text-2xl font-semibold tracking-tight text-[var(--foreground)]">
                    {item.value}
                  </p>
                  <p className="mt-0.5 text-xs opacity-60">
                    {item.subValue}
                  </p>
                </div>

                <div
                  className={[
                    "flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg ring-1",
                    toneClasses,
                  ].join(" ")}
                >
                  <Icon className="h-4 w-4" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </SectionCard>
  );
}
