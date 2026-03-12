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
  grid: "border-[var(--border)] bg-[var(--card)]/60 backdrop-blur-xl",
  bess: "border-[var(--border)] bg-[var(--card)]/60 backdrop-blur-xl",
  ev: "border-[var(--border)] bg-[var(--card)]/60 backdrop-blur-xl",
  inverter: "border-[var(--border)] bg-[var(--card)]/60 backdrop-blur-xl",
  "heat-pump": "border-[var(--border)] bg-[var(--card)]/60 backdrop-blur-xl",
  load: "border-[var(--border)] bg-[var(--card)]/60 backdrop-blur-xl",
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
  // Grid keeps size 76, BESS/EV/Inverter get size 110, others get 96
  const imageSize = tone === "grid" ? 76 : 
                    (tone === "bess" || tone === "ev" || tone === "inverter") ? 110 : 96;

  return (
    <div className="relative">
      {/* Image positioned to overflow at top */}
      <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1/2">
        <EnergyAssetVisual
          src={imageSrc}
          alt={title}
          size={imageSize}
          glow={glow}
          pulse={pulse}
        />
      </div>

      {/* Card content */}
      <div
        className={[
          "flex w-[170px] flex-col items-center rounded-[24px] border px-4 pt-14 pb-4 text-center shadow-xl",
          toneClasses[tone],
          className,
        ].join(" ")}
      >

      <p className="mt-1 text-sm font-medium text-[var(--foreground)]">
        {title}
      </p>

      {value ? (
        <p className="mt-1 text-[20px] font-semibold tracking-tight text-[var(--foreground)]">
          {value}
        </p>
      ) : null}

      {subtitle ? (
        <div className="mt-2 rounded-full bg-slate-200/60 px-3 py-1 text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-300">
          {subtitle}
        </div>
      ) : null}
      </div>
    </div>
  );
}