"use client";

import { useEffect, useState } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import ChartCard from "@/components/dashboard/charts/chart-card";
import ChartLegend from "@/components/dashboard/charts/chart-legend";
import ChartTooltip from "@/components/dashboard/charts/chart-tooltip";
import { hourlyGenerationData } from "@/data/mock-dashboard-data";

export default function HourlyGenerationChart() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <ChartCard
      title="Hourly Power Generation Trend Curve"
      className="h-full min-h-[400px]"
    >
      <div className="h-[320px] rounded-lg bg-slate-50 p-3 dark:bg-slate-950/40">
        {mounted ? (
          <ResponsiveContainer width="100%" height="100%" minHeight={200}>
            <LineChart data={hourlyGenerationData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(148,163,184,0.25)" />
              <XAxis
                dataKey="hour"
                tick={{ fontSize: 12, fill: "#94a3b8" }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fontSize: 12, fill: "#94a3b8" }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip content={<ChartTooltip />} />
              <Line
                type="monotone"
                dataKey="today"
                name="Today"
                stroke="#06b6d4"
                strokeWidth={2}
                dot={false}
                strokeLinecap="round"
              />
              <Line
                type="monotone"
                dataKey="yesterday"
                name="Yesterday"
                stroke="#d946ef"
                strokeWidth={2}
                dot={false}
                strokeLinecap="round"
              />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <div className="flex h-full items-center justify-center text-slate-400">
            Loading chart...
          </div>
        )}
      </div>

      <ChartLegend
        items={[
          { label: "Today", colorClass: "bg-cyan-500 dark:bg-cyan-400" },
          { label: "Yesterday", colorClass: "bg-fuchsia-500 dark:bg-fuchsia-400" },
        ]}
      />
    </ChartCard>
  );
}