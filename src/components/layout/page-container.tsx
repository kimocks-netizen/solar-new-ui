import { ReactNode } from "react";

type PageContainerProps = {
  children: ReactNode;
};

export default function PageContainer({ children }: PageContainerProps) {
  return (
    <main className="min-h-screen flex-1 bg-[var(--background)]">
      <div className="p-4">{children}</div>
    </main>
  );
}