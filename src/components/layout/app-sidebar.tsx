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
          "fixed left-0 top-0 z-50 flex h-screen flex-col border-r border-white/10 bg-slate-950 text-slate-100 transition-all duration-300",
          "md:z-40",
          mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
          isExpanded ? "w-[260px]" : "w-[260px] md:w-[72px]"
        ].join(" ")}>
      {/* Logo Section */}
      <div className="border-b border-white/10 px-4 py-5">
        <div className="flex items-center justify-between">
          {isExpanded || mobileOpen ? (
            <div className="flex-1">
              <div className="text-xs font-medium uppercase tracking-[0.22em] text-cyan-400">
                Smart Solar Energy
              </div>
              <h1 className="mt-2 text-xl font-semibold tracking-tight">
                EMS Dashboard
              </h1>
              <p className="mt-1 text-sm text-slate-400">
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
              className="flex items-center justify-center rounded-lg p-2 text-slate-400 transition hover:bg-white/5 hover:text-white md:hidden"
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
                      ? "bg-cyan-500/15 text-cyan-300 ring-1 ring-cyan-400/30"
                      : "text-slate-300 hover:bg-white/5 hover:text-white",
                  ].join(" ")}
                >
                  <Icon
                    className={[
                      "h-5 w-5 transition-colors",
                      active
                        ? "text-cyan-300"
                        : "text-slate-400 group-hover:text-cyan-300",
                    ].join(" ")}
                  />
                  {(isExpanded || mobileOpen) ? (
                    <span>{item.label}</span>
                  ) : (
                    <span className="absolute left-full ml-2 hidden whitespace-nowrap rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white shadow-lg ring-1 ring-white/10 group-hover:block">
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
      <div className="border-t border-white/10 px-3 py-4">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex w-full items-center justify-center rounded-lg bg-slate-900/80 p-3 text-slate-300 ring-1 ring-white/10 transition hover:bg-slate-800 hover:text-cyan-300"
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
