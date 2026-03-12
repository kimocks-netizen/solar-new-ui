import EnergyAssetVisual from "@/components/dashboard/energy-flow/energy-asset-visual";

type EnergyNodeTone =
  | "grid"
  | "bess"
  | "ev"
  | "inverter"
  | "heat-pump"
  | "load";

type EnergyNodeCardProps = {
  title: string;
  value?: string;
  subtitle?: string;
  imageSrc: string;
  tone: EnergyNodeTone;
  glow?: boolean;
  pulse?: boolean;
  className?: string;
};

const toneClasses: Record<EnergyNodeTone, string> = {
  grid: "border-cyan-200 bg-white dark:border-cyan-500/20 dark:bg-slate-900",
  bess: "border-violet-200 bg-white dark:border-violet-500/20 dark:bg-slate-900",
  ev: "border-teal-200 bg-white dark:border-teal-500/20 dark:bg-slate-900",
  inverter: "border-amber-200 bg-white dark:border-amber-500/20 dark:bg-slate-900",
  "heat-pump": "border-sky-200 bg-white dark:border-sky-500/20 dark:bg-slate-900",
  load: "border-fuchsia-200 bg-white dark:border-fuchsia-500/20 dark:bg-slate-900",
};

export default function EnergyNodeCard({
  title,
  value,
  subtitle,
  imageSrc,
  tone,
  glow = false,
  pulse = false,
  className = "",
}: EnergyNodeCardProps) {
  return (
    <div
      className={[
        "flex w-[170px] flex-col items-center rounded-[24px] border px-4 py-4 text-center shadow-[0_10px_30px_rgba(15,23,42,0.08)]",
        toneClasses[tone],
        className,
      ].join(" ")}
    >
      <EnergyAssetVisual
        src={imageSrc}
        alt={title}
        size={76}
        glow={glow}
        pulse={pulse}
      />

      <p className="mt-3 text-sm font-medium text-slate-800 dark:text-slate-200">
        {title}
      </p>

      {value ? (
        <p className="mt-1 text-[20px] font-semibold tracking-tight text-slate-900 dark:text-slate-50">
          {value}
        </p>
      ) : null}

      {subtitle ? (
        <div className="mt-2 rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-300">
          {subtitle}
        </div>
      ) : null}
    </div>
  );
}