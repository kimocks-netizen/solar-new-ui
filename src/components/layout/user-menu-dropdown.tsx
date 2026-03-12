import { User, Settings, LogOut } from "lucide-react";

export default function UserMenuDropdown() {
  return (
    <div className="absolute right-0 top-full mt-2 w-56 rounded-lg border border-[var(--border)] bg-[var(--card)] shadow-2xl">
      <div className="border-b border-[var(--border)] p-4">
        <p className="text-sm font-medium text-[var(--foreground)]">Brighton</p>
        <p className="text-xs opacity-60">EMS Admin</p>
        <p className="mt-1 text-xs opacity-50">brighton@solar.com</p>
      </div>
      <div className="p-2">
        <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm opacity-80 transition hover:bg-[var(--ems-cyan-soft)] hover:opacity-100 hover:text-[var(--ems-cyan)]">
          <User className="h-4 w-4" />
          <span>Account</span>
        </button>
        <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm opacity-80 transition hover:bg-[var(--ems-cyan-soft)] hover:opacity-100 hover:text-[var(--ems-cyan)]">
          <Settings className="h-4 w-4" />
          <span>Settings</span>
        </button>
        <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-red-500 transition hover:bg-red-500/10 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300">
          <LogOut className="h-4 w-4" />
          <span>Log out</span>
        </button>
      </div>
    </div>
  );
}
