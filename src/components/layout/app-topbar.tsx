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
        "bg-[var(--sidebar-bg)]/95 border-b border-[var(--border)]",
      ].join(" ")}
    >
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className={[
            "flex items-center justify-center rounded-lg p-2.5 transition md:hidden",
            "opacity-80 hover:bg-[var(--ems-cyan-soft)]/50 hover:opacity-100",
          ].join(" ")}
          aria-label="Toggle menu"
        >
          <Menu className="h-5 w-5" />
        </button>

        <div>
          <h2
            className={[
              "text-2xl font-semibold tracking-tight text-[var(--foreground)]",
            ].join(" ")}
          >
            {title}
          </h2>

          {subtitle ? (
            <p
              className={[
                "mt-1 hidden text-sm opacity-60 sm:block",
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
            "border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] opacity-80 hover:opacity-100 hover:bg-[var(--ems-cyan-soft)]",
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
            "border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] opacity-80 hover:opacity-100 hover:bg-[var(--ems-cyan-soft)]",
          ].join(" ")}
          aria-label="Notifications"
        >
          <Bell className="h-4 w-4" />
          <span
            className={[
              "absolute right-2 top-2 h-2 w-2 rounded-full bg-[var(--ems-magenta)]",
            ].join(" ")}
          />
        </button>

        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setShowUserMenu(!showUserMenu)}
            className={[
              "flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold text-white transition hover:opacity-90",
              "bg-gradient-to-br from-[var(--ems-cyan)] to-[var(--ems-magenta)]",
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