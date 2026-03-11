import { ReactNode } from "react";

type PageContainerProps = {
  children: ReactNode;
};

export default function PageContainer({ children }: PageContainerProps) {
  return (
    <main className="min-h-screen flex-1 bg-slate-100 dark:bg-slate-950">
      <div className="p-4">{children}</div>
    </main>
  );
}