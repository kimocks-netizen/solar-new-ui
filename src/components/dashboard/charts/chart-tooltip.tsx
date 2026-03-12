"use client";

type PayloadItem = {
  name: string;
  value: number | string;
  color?: string;
};

type ChartTooltipProps = {
  active?: boolean;
  payload?: PayloadItem[];
  label?: string;
};

export default function ChartTooltip({
  active,
  payload,
  label,
}: ChartTooltipProps) {
  if (!active || !payload || payload.length === 0) {
    return null;
  }

  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] px-3 py-2 shadow-md">
      <p className="mb-2 text-xs font-medium opacity-60">
        {label}
      </p>

      <div className="space-y-1">
        {payload.map((entry) => (
          <div key={entry.name} className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: entry.color ?? "#999" }}
              />
              <span className="text-xs text-[var(--foreground)] opacity-80">
                {entry.name}
              </span>
            </div>
            <span className="text-xs font-semibold text-[var(--foreground)]">
              {entry.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}