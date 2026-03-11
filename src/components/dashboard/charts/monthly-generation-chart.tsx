"use client";

import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import ChartCard from "@/components/dashboard/charts/chart-card";
import ChartLegend from "@/components/dashboard/charts/chart-legend";
import ChartTooltip from "@/components/dashboard/charts/chart-tooltip";
import { monthlyGenerationData } from "@/data/mock-dashboard-data";

export default function MonthlyGenerationChart() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <ChartCard
      title="Monthly Generation"
      className="h-full min-h-[400px]"
    >
      <div className="h-[320px] rounded-lg bg-slate-50 p-3 dark:bg-slate-950/40">
        {mounted ? (
          <ResponsiveContainer width="100%" height="100%" minHeight={220}>
            <BarChart data={monthlyGenerationData} barGap={6}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(148,163,184,0.25)" />
              <XAxis
                dataKey="day"
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
              <Bar
                dataKey="thisMonth"
                name="This Month"
                fill="#d946ef"
                radius={[4, 4, 0, 0]}
              />
              <Bar
                dataKey="lastMonth"
                name="Last Month"
                fill="#06b6d4"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <div className="flex h-full items-center justify-center text-slate-400">
            Loading chart...
          </div>
        )}
      </div>

      <ChartLegend
        items={[
          { label: "This Month", colorClass: "bg-fuchsia-500 dark:bg-fuchsia-400" },
          { label: "Last Month", colorClass: "bg-cyan-500 dark:bg-cyan-400" },
        ]}
      />
    </ChartCard>
  );
}