"use client";

import { useState, useEffect, useRef } from "react";
import { Bell, Search, Menu } from "lucide-react";
import ThemeToggle from "@/components/layout/theme-toggle";
import UserMenuDropdown from "@/components/layout/user-menu-dropdown";

type AppTopbarProps = {
  title: string;
  subtitle?: string;
  onMenuClick?: () => void;
};

export default function AppTopbar({
  title,
  subtitle,
  onMenuClick,
}: AppTopbarProps) {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (showUserMenu && menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowUserMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showUserMenu]);

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between bg-slate-100/80 px-6 py-3 backdrop-blur-md dark:bg-[#071120]/80">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="flex items-center justify-center rounded-lg border border-slate-200 bg-white p-2 text-slate-600 transition hover:bg-slate-50 md:hidden dark:border-white/10 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
          aria-label="Toggle menu"
        >
          <Menu className="h-5 w-5" />
        </button>
        
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-1 hidden text-sm text-slate-500 sm:block dark:text-slate-400">
              {subtitle}
            </p>
          ) : null}
        </div>
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

        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setShowUserMenu(!showUserMenu)}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-fuchsia-500 text-sm font-semibold text-white transition hover:opacity-90"
          >
            BC
          </button>

          {showUserMenu && <UserMenuDropdown />}
        </div>
      </div>
    </header>
  );
}