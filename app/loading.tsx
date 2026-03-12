import EmsLoader from "@/components/shared/ems-loader";

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--background)]">
      <EmsLoader text="Preparing EMS interface..." />
    </div>
  );
}