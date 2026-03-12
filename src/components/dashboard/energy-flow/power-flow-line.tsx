type PowerFlowLineProps = {
  direction?: "down" | "up" | "left" | "right";
  className?: string;
  dashed?: boolean;
  color?: "cyan" | "magenta" | "teal" | "amber" | "violet" | "white";
};

const colorClasses = {
  cyan: "bg-cyan-400/80",
  magenta: "bg-fuchsia-400/80",
  teal: "bg-teal-400/80",
  amber: "bg-amber-400/80",
  violet: "bg-violet-400/80",
  white: "bg-white/60",
};

export default function PowerFlowLine({
  className = "",
  dashed = false,
  color = "cyan",
}: PowerFlowLineProps) {
  return (
    <div
      className={[
        "absolute rounded-full",
        dashed ? "border-2 border-dashed bg-transparent" : colorClasses[color],
        dashed
          ? color === "cyan"
            ? "border-cyan-400/70"
            : color === "magenta"
            ? "border-fuchsia-400/70"
            : color === "teal"
            ? "border-teal-400/70"
            : color === "amber"
            ? "border-amber-400/70"
            : color === "violet"
            ? "border-violet-400/70"
            : "border-white/50"
          : "",
        className,
      ].join(" ")}
    />
  );
}