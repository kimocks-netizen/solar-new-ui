"use client";

import { Bell, Search } from "lucide-react";
import ThemeToggle from "@/components/layout/theme-toggle";

type AppTopbarProps = {
  title: string;
  subtitle?: string;
};

export default function AppTopbar({
  title,
  subtitle,
}: AppTopbarProps) {
  return (
    <header className="flex min-h-[88px] items-center justify-between border-b border-slate-200 bg-white px-6 dark:border-white/10 dark:bg-slate-950">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
          {title}
        </h2>
        {subtitle ? (
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            {subtitle}
          </p>
        ) : null}
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          className="hidden items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-600 transition hover:bg-slate-100 md:flex dark:border-white/10 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
        >
          <Search className="h-4 w-4" />
          Search
        </button>

        <ThemeToggle />

        <button
          type="button"
          className="relative rounded-xl border border-slate-200 bg-white p-2.5 text-slate-600 transition hover:bg-slate-50 dark:border-white/10 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
          aria-label="Notifications"
        >
          <Bell className="h-4 w-4" />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-fuchsia-500" />
        </button>

        <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-2 dark:border-white/10 dark:bg-slate-900">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-fuchsia-500 text-sm font-semibold text-white">
            BC
          </div>
          <div className="hidden text-left sm:block">
            <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
              Brighton
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              EMS Admin
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}