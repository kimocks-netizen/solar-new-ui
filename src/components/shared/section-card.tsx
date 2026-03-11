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
        "rounded-lg border border-slate-200 bg-white p-3 shadow-sm transition-all duration-300 hover:shadow-md hover:border-slate-300 dark:border-white/10 dark:bg-slate-900 dark:hover:border-white/20",
        className,
      ].join(" ")}
    >
      <div className="mb-2 flex items-center justify-between gap-3">
        <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
          {title}
        </h3>
        {subtitle ? (
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {subtitle}
          </p>
        ) : null}
      </div>

      {children}
    </section>
  );
}
