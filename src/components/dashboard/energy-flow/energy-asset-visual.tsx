import Image from "next/image";

type EnergyAssetVisualProps = {
  src: string;
  alt: string;
  size?: number;
  glow?: boolean;
  pulse?: boolean;
  className?: string;
};

export default function EnergyAssetVisual({
  src,
  alt,
  size = 48,
  glow = false,
  pulse = false,
  className = "",
}: EnergyAssetVisualProps) {
  return (
    <div
      className={[
        "relative flex items-center justify-center",
        pulse ? "animate-pulse" : "",
        className,
      ].join(" ")}
      style={{ width: size, height: size }}
    >
      {glow ? (
        <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-xl dark:bg-cyan-400/25" />
      ) : null}

      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="relative z-10 h-auto w-auto object-contain"
      />
    </div>
  );
}