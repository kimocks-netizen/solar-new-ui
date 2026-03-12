"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import { navItems } from "@/lib/constants/nav-items";

function isActive(pathname: string, href: string) {
  if (href === "/overview") {
    return pathname === "/overview" || pathname === "/";
  }
  return pathname.startsWith(href);
}

type AppSidebarProps = {
  mobileOpen?: boolean;
  onMobileClose?: () => void;
};

export default function AppSidebar({ mobileOpen = false, onMobileClose }: AppSidebarProps) {
  const pathname = usePathname();
  const [isExpanded, setIsExpanded] = useState(false);
  const sidebarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (isExpanded && sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setIsExpanded(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isExpanded]);

  return (
    <>
      {/* Mobile Overlay */}
      {mobileOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={onMobileClose}
        />
      )}

      {/* Sidebar */}
      <aside
        ref={sidebarRef}
        className={[
          "fixed left-0 top-0 z-50 flex h-screen flex-col border-r transition-all duration-300",
          "bg-[var(--sidebar-bg)] text-[var(--sidebar-text)] border-[var(--border)]",
          "md:z-40",
          mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
          isExpanded ? "w-[260px]" : "w-[260px] md:w-[72px]"
        ].join(" ")}>
      {/* Logo Section */}
      <div className="border-b border-[var(--border)] px-4 py-5">
        <div className="flex items-center justify-between">
          {isExpanded || mobileOpen ? (
            <div className="flex-1">
              <div className="text-xs font-medium uppercase tracking-[0.22em] text-[var(--ems-cyan)]">
                Smart Solar Energy
              </div>
              <h1 className="mt-2 text-xl font-semibold tracking-tight text-[var(--sidebar-text)]">
                EMS Dashboard
              </h1>
              <p className="mt-1 text-sm opacity-60">
                Energy Management System
              </p>
            </div>
          ) : (
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-fuchsia-500 text-sm font-bold text-white">
              SE
            </div>
          )}
          
          {mobileOpen && (
            <button
              onClick={onMobileClose}
              className="flex items-center justify-center rounded-lg p-2 opacity-60 transition hover:bg-white/5 hover:opacity-100 md:hidden"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-5">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const active = isActive(pathname, item.href);
            const Icon = item.icon;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={[
                    "group relative flex items-center rounded-xl p-3 text-sm font-medium transition-all duration-200",
                    isExpanded || mobileOpen ? "gap-3" : "justify-center",
                    active
                      ? "bg-[var(--ems-cyan-soft)] text-[var(--ems-cyan)] ring-2 ring-[var(--ems-cyan)] shadow-sm"
                      : "opacity-80 hover:bg-[var(--ems-cyan-soft)]/50 hover:opacity-100",
                  ].join(" ")}
                >
                  <Icon
                    className={[
                      "h-5 w-5 transition-colors",
                      active
                        ? "text-[var(--ems-cyan)]"
                        : "opacity-60 group-hover:text-[var(--ems-cyan)] group-hover:opacity-100",
                    ].join(" ")}
                  />
                  {(isExpanded || mobileOpen) ? (
                    <span>{item.label}</span>
                  ) : (
                    <span className="absolute left-full ml-2 hidden whitespace-nowrap rounded-lg bg-[var(--card)] px-3 py-2 text-sm font-medium text-[var(--foreground)] shadow-lg ring-1 ring-[var(--border)] group-hover:block">
                      {item.label}
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bottom Section - Toggle Button */}
      <div className="border-t border-[var(--border)] px-3 py-4">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex w-full items-center justify-center rounded-lg bg-[var(--card)] p-3 opacity-80 ring-1 ring-[var(--border)] transition hover:opacity-100 hover:text-[var(--ems-cyan)]"
          title={isExpanded ? "Collapse sidebar" : "Expand sidebar"}
        >
          <div className="flex flex-col gap-1">
            <span className="h-0.5 w-4 bg-current transition-all" />
            <span className="h-0.5 w-4 bg-current transition-all" />
            <span className="h-0.5 w-4 bg-current transition-all" />
          </div>
        </button>
      </div>
    </aside>
    </>
  );
}
