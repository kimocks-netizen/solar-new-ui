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
    <div className="rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-md dark:border-white/10 dark:bg-slate-900">
      <p className="mb-2 text-xs font-medium text-slate-500 dark:text-slate-400">
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
              <span className="text-xs text-slate-600 dark:text-slate-300">
                {entry.name}
              </span>
            </div>
            <span className="text-xs font-semibold text-slate-900 dark:text-slate-100">
              {entry.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}