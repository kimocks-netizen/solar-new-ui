import {
  LayoutDashboard,
  Building2,
  CircuitBoard,
  BarChart3,
  Cpu,
  Map,
  TriangleAlert,
  Siren,
  Settings,
} from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
};

export const navItems: NavItem[] = [
  {
    label: "Overview",
    href: "/overview",
    icon: LayoutDashboard,
  },
  {
    label: "Buildings",
    href: "/buildings",
    icon: Building2,
  },
  {
    label: "Circuits",
    href: "/circuits",
    icon: CircuitBoard,
  },
  {
    label: "Consumption",
    href: "/consumption",
    icon: BarChart3,
  },
  {
    label: "Devices",
    href: "/devices",
    icon: Cpu,
  },
  {
    label: "Regions",
    href: "/regions",
    icon: Map,
  },
  {
    label: "Alarms",
    href: "/alarms",
    icon: TriangleAlert,
  },
  {
    label: "Alarm Events",
    href: "/alarm-events",
    icon: Siren,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: Settings,
  },
];
