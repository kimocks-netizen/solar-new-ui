"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/constants/nav-items";

function isActive(pathname: string, href: string) {
  if (href === "/overview") {
    return pathname === "/overview" || pathname === "/";
  }
  return pathname.startsWith(href);
}

export default function AppSidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-[260px] flex-col border-r border-white/10 bg-slate-950 text-slate-100">
      <div className="border-b border-white/10 px-6 py-5">
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

      <nav className="flex-1 px-4 py-5">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const active = isActive(pathname, item.href);
            const Icon = item.icon;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={[
                    "group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200",
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
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="border-t border-white/10 px-4 py-4">
        <div className="rounded-xl bg-slate-900/80 p-4 ring-1 ring-white/10">
          <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
            System Status
          </p>
          <div className="mt-3 flex items-center gap-2">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-400" />
            <span className="text-sm font-medium text-slate-200">
              EMS Online
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}
