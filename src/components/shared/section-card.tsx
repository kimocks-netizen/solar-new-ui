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
        "rounded-2xl border border-slate-200 bg-white p-5 shadow-sm",
        "dark:border-white/10 dark:bg-slate-900",
        className,
      ].join(" ")}
    >
      <div className="mb-4">
        <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
          {title}
        </h3>
        {subtitle ? (
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            {subtitle}
          </p>
        ) : null}
      </div>

      {children}
    </section>
  );
}
