import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/components/layout/theme-provider";

export const metadata: Metadata = {
  title: "Smart Solar Energy EMS",
  description: "Energy Management System Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-slate-100 text-slate-900 antialiased dark:bg-[#071120] dark:text-slate-50">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}