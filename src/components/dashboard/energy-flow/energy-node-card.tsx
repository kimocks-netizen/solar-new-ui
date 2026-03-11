type EnergyNodeCardProps = {
  label: string;
  value: string;
  color?: string;
};

export default function EnergyNodeCard({
  label,
  value,
  color = "bg-slate-100 dark:bg-slate-800",
}: EnergyNodeCardProps) {
  return (
    <div
      className={`flex min-w-[110px] flex-col items-center rounded-xl px-3 py-2 text-center shadow-sm transition-all duration-300 hover:scale-110 hover:shadow-lg ${color}`}
    >
      <span className="text-xs text-slate-500 dark:text-slate-400">
        {label}
      </span>

      <span className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">
        {value}
      </span>
    </div>
  );
}
