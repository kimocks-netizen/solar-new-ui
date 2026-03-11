import { ReactNode } from "react";

type PageContainerProps = {
  children: ReactNode;
};

export default function PageContainer({ children }: PageContainerProps) {
  return (
    <main className="min-h-screen flex-1 bg-slate-100 dark:bg-[#071120]">
      <div className="p-6">{children}</div>
    </main>
  );
}