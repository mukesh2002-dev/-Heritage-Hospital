import { Cross } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4">
      <div className="relative flex h-16 w-16 items-center justify-center">
        <div className="absolute inset-0 animate-spin-slow rounded-full border border-primary/20 border-t-primary" />
        <Cross className="h-7 w-7 text-primary" />
      </div>
      <p className="text-sm font-medium text-muted-foreground">Loading…</p>
    </div>
  );
}
