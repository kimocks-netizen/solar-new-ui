type ChartLegendItem = {
  label: string;
  colorClass: string;
};

type ChartLegendProps = {
  items: ChartLegendItem[];
};

export default function ChartLegend({ items }: ChartLegendProps) {
  return (
    <div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
      {items.map((item) => (
        <div key={item.label} className="flex items-center gap-2">
          <span className={`h-3 w-3 rounded-full ${item.colorClass}`} />
          <span className="text-[var(--foreground)] opacity-80">{item.label}</span>
        </div>
      ))}
    </div>
  );
}
