"use client";

import { useState } from "react";
import { CloudSun, Cloud, CloudRain, Sun, CloudSnow, Droplets, CloudDrizzle, Zap } from "lucide-react";
import SectionCard from "@/components/shared/section-card";
import Dropdown from "@/components/shared/dropdown";

type WeatherCondition = "sunny" | "partly-cloudy" | "cloudy" | "rainy" | "drizzle" | "snowy";

type ForecastItem = {
  day: string;
  time?: string;
  temp: number;
  condition: WeatherCondition;
  humidity: number;
  irradiance: number;
};

const getWeatherIcon = (condition: WeatherCondition) => {
  switch (condition) {
    case "sunny":
      return Sun;
    case "partly-cloudy":
      return CloudSun;
    case "cloudy":
      return Cloud;
    case "rainy":
      return CloudRain;
    case "drizzle":
      return CloudDrizzle;
    case "snowy":
      return CloudSnow;
    default:
      return CloudSun;
  }
};

const getWeatherColor = (condition: WeatherCondition) => {
  switch (condition) {
    case "sunny":
      return {
        bg: "bg-amber-100 dark:bg-amber-500/10",
        icon: "text-amber-500 dark:text-amber-400",
      };
    case "partly-cloudy":
      return {
        bg: "bg-orange-100 dark:bg-orange-500/10",
        icon: "text-orange-500 dark:text-orange-400",
      };
    case "cloudy":
      return {
        bg: "bg-slate-200 dark:bg-slate-500/10",
        icon: "text-slate-500 dark:text-slate-400",
      };
    case "rainy":
      return {
        bg: "bg-blue-100 dark:bg-blue-500/10",
        icon: "text-blue-500 dark:text-blue-400",
      };
    case "drizzle":
      return {
        bg: "bg-sky-100 dark:bg-sky-500/10",
        icon: "text-sky-500 dark:text-sky-400",
      };
    case "snowy":
      return {
        bg: "bg-cyan-100 dark:bg-cyan-500/10",
        icon: "text-cyan-500 dark:text-cyan-400",
      };
    default:
      return {
        bg: "bg-orange-100 dark:bg-orange-500/10",
        icon: "text-orange-500 dark:text-orange-400",
      };
  }
};

const dailyForecast: ForecastItem[] = [
  { day: "Mon", temp: 24, condition: "partly-cloudy", humidity: 58, irradiance: 750 },
  { day: "Tue", temp: 26, condition: "sunny", humidity: 52, irradiance: 980 },
  { day: "Wed", temp: 23, condition: "cloudy", humidity: 65, irradiance: 420 },
  { day: "Thu", temp: 22, condition: "rainy", humidity: 78, irradiance: 180 },
  { day: "Fri", temp: 21, condition: "drizzle", humidity: 72, irradiance: 320 },
  { day: "Sat", temp: 25, condition: "partly-cloudy", humidity: 60, irradiance: 680 },
  { day: "Sun", temp: 27, condition: "sunny", humidity: 48, irradiance: 1000 },
];

const hourlyForecast: ForecastItem[] = [
  { day: "Now", time: "14:00", temp: 24, condition: "partly-cloudy", humidity: 58, irradiance: 750 },
  { day: "15:00", temp: 25, condition: "sunny", humidity: 55, irradiance: 820 },
  { day: "16:00", temp: 26, condition: "sunny", humidity: 52, irradiance: 880 },
  { day: "17:00", temp: 25, condition: "partly-cloudy", humidity: 54, irradiance: 650 },
  { day: "18:00", temp: 23, condition: "cloudy", humidity: 60, irradiance: 380 },
  { day: "19:00", temp: 21, condition: "cloudy", humidity: 65, irradiance: 120 },
  { day: "20:00", temp: 20, condition: "drizzle", humidity: 70, irradiance: 0 },
];

const forecastOptions = [
  { label: "7-Day Forecast", value: "daily" },
  { label: "Hourly Forecast", value: "hourly" },
];

export default function WeatherCard() {
  const [viewMode, setViewMode] = useState<"daily" | "hourly">("daily");
  const forecast = viewMode === "daily" ? dailyForecast : hourlyForecast;

  return (
    <SectionCard
      title="Weather Forecast"
      subtitle={
        <div className="flex items-center gap-2">
          <span>Johannesburg, South Africa</span>
          <Dropdown
            options={forecastOptions}
            value={viewMode}
            onChange={(value) => setViewMode(value as "daily" | "hourly")}
            trigger={<span>{viewMode === "daily" ? "7-Day" : "Hourly"}</span>}
            size="sm"
          />
        </div>
      }
      className="h-full"
    >

      {/* Forecast Grid */}
      <div className="grid grid-cols-7 gap-2">
        {forecast.map((item, index) => {
          const Icon = getWeatherIcon(item.condition);
          const colors = getWeatherColor(item.condition);
          return (
            <div
              key={index}
              className="flex flex-col items-center rounded-lg border border-[var(--border)] bg-[var(--card)] p-2 transition-all hover:shadow-md hover:scale-105"
            >
              <p className="text-xs font-medium opacity-60">{item.day}</p>
              {item.time && <p className="text-[10px] opacity-50">{item.time}</p>}
              
              <div className={`my-2 rounded-full p-2 ${colors.bg}`}>
                <Icon className={`h-5 w-5 ${colors.icon}`} />
              </div>
              
              <p className="text-lg font-bold text-[var(--foreground)]">{item.temp}°</p>
              
              <div className="mt-2 flex w-full flex-col gap-1 text-[10px] opacity-60">
                <div className="flex items-center justify-between gap-1">
                  <Droplets className="h-3 w-3" />
                  <span>{item.humidity}%</span>
                </div>
                <div className="flex items-center justify-between gap-1">
                  <Zap className="h-3 w-3" />
                  <span>{item.irradiance}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </SectionCard>
  );
}
