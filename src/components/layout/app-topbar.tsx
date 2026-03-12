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
      if (
        showUserMenu &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setShowUserMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showUserMenu]);

  return (
    <header
      className={[
        "sticky top-0 z-30 flex items-center justify-between px-6 py-3 backdrop-blur-md",

        /* Light mode topbar background
           Use: soft floating header surface */
        "bg-[#f6f8fb]/80",

        /* Dark mode topbar background
           Use: soft floating header surface in dark mode */
        "dark:bg-[#071120]/80",
      ].join(" ")}
    >
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className={[
            "flex items-center justify-center rounded-lg border p-2 transition md:hidden",

            /* Light mode button colours
               Use: mobile menu button */
            "border-slate-200 bg-white text-slate-600 hover:bg-slate-50",

            /* Dark mode button colours
               Use: mobile menu button in dark mode */
            "dark:border-white/10 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800",
          ].join(" ")}
          aria-label="Toggle menu"
        >
          <Menu className="h-5 w-5" />
        </button>

        <div>
          <h2
            className={[
              "text-2xl font-semibold tracking-tight",

              /* Light mode heading colour
                 Use: page title */
              "text-slate-900",

              /* Dark mode heading colour
                 Use: page title in dark mode */
              "dark:text-slate-50",
            ].join(" ")}
          >
            {title}
          </h2>

          {subtitle ? (
            <p
              className={[
                "mt-1 hidden text-sm sm:block",

                /* Light mode subtitle colour
                   Use: page subtitle */
                "text-slate-500",

                /* Dark mode subtitle colour
                   Use: page subtitle in dark mode */
                "dark:text-slate-400",
              ].join(" ")}
            >
              {subtitle}
            </p>
          ) : null}
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          className={[
            "hidden items-center gap-2 rounded-xl border px-3 py-2 text-sm transition md:flex",

            /* Light mode search button
               Use: desktop search action */
            "border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100",

            /* Dark mode search button
               Use: desktop search action in dark mode */
            "dark:border-white/10 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800",
          ].join(" ")}
        >
          <Search className="h-4 w-4" />
          Search
        </button>

        <ThemeToggle />

        <button
          type="button"
          className={[
            "relative rounded-xl border p-2.5 transition",

            /* Light mode notification button
               Use: notification action */
            "border-slate-200 bg-white text-slate-600 hover:bg-slate-50",

            /* Dark mode notification button
               Use: notification action in dark mode */
            "dark:border-white/10 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800",
          ].join(" ")}
          aria-label="Notifications"
        >
          <Bell className="h-4 w-4" />
          <span
            className={[
              "absolute right-2 top-2 h-2 w-2 rounded-full",

              /* Magenta notification dot
                 Use: unread notifications */
              "bg-fuchsia-500",
            ].join(" ")}
          />
        </button>

        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setShowUserMenu(!showUserMenu)}
            className={[
              "flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold text-white transition hover:opacity-90",

              /* User avatar gradient
                 Use: brand identity in header */
              "bg-gradient-to-br from-cyan-500 to-fuchsia-500",
            ].join(" ")}
          >
            BC
          </button>

          {showUserMenu && <UserMenuDropdown />}
        </div>
      </div>
    </header>
  );
}