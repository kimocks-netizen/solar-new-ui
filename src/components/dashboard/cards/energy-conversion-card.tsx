import { Leaf, Factory } from "lucide-react";
import SectionCard from "@/components/shared/section-card";

export default function EnergyConversionCard() {
  return (
    <SectionCard
      title="Energy Conversion"
      className="h-full"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg border border-[var(--ems-success)]/20 bg-[var(--ems-success-soft)] p-3 transition-all duration-300 hover:scale-105 hover:shadow-md">
          <div className="flex items-center justify-between gap-2">
            <div className="min-w-0 flex-1">
              <p className="text-xs opacity-60">
                CO₂ Saved
              </p>
              <p className="mt-1 text-2xl font-semibold tracking-tight text-[var(--foreground)]">
                254.78 kg
              </p>
              <p className="mt-0.5 text-xs text-[var(--ems-success)] font-medium">
                +8.4% this month
              </p>
            </div>

            <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--ems-success)]/10 ring-1 ring-[var(--ems-success)]/30">
              <Leaf className="h-4 w-4 text-[var(--ems-success)]" />
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-[var(--ems-cyan)]/20 bg-[var(--ems-cyan-soft)] p-3 transition-all duration-300 hover:scale-105 hover:shadow-md">
          <div className="flex items-center justify-between gap-2">
            <div className="min-w-0 flex-1">
              <p className="text-xs opacity-60">
                Coal Saved
              </p>
              <p className="mt-1 text-2xl font-semibold tracking-tight text-[var(--foreground)]">
                102.20 kg
              </p>
              <p className="mt-0.5 text-xs text-[var(--ems-cyan)] font-medium">
                Efficient operation
              </p>
            </div>

            <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--ems-cyan)]/10 ring-1 ring-[var(--ems-cyan)]/30">
              <Factory className="h-4 w-4 text-[var(--ems-cyan)]" />
            </div>
          </div>
        </div>
      </div>
    </SectionCard>
  );
}
