import { User, Settings, LogOut } from "lucide-react";

export default function UserMenuDropdown() {
  return (
    <div className="absolute right-0 top-full mt-2 w-56 rounded-lg border border-white/10 bg-slate-950 shadow-2xl">
      <div className="border-b border-white/10 p-4">
        <p className="text-sm font-medium text-slate-100">Brighton</p>
        <p className="text-xs text-slate-400">EMS Admin</p>
        <p className="mt-1 text-xs text-slate-500">brighton@solar.com</p>
      </div>
      <div className="p-2">
        <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white">
          <User className="h-4 w-4" />
          <span>Account</span>
        </button>
        <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white">
          <Settings className="h-4 w-4" />
          <span>Settings</span>
        </button>
        <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-red-400 transition hover:bg-red-500/10 hover:text-red-300">
          <LogOut className="h-4 w-4" />
          <span>Log out</span>
        </button>
      </div>
    </div>
  );
}
