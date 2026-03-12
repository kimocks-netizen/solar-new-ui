import { ReactNode } from "react";

type SectionCardProps = {
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
};

export default function SectionCard({
  title,
  subtitle,
  children,
  className = "",
}: SectionCardProps) {
  return (
    <section
      className={[
        "rounded-lg border bg-[var(--card)] border-[var(--border)] p-3 shadow-sm transition-all duration-300 hover:shadow-md",
        className,
      ].join(" ")}
    >
      <div className="mb-2 flex items-center justify-between gap-3">
        <h3 className="text-sm font-semibold text-[var(--foreground)]">
          {title}
        </h3>
        {subtitle ? (
          <p className="text-xs opacity-60">
            {subtitle}
          </p>
        ) : null}
      </div>

      {children}
    </section>
  );
}
