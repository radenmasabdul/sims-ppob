import { Skeleton } from "@/components/ui/skeleton";

export default function HomeSkeleton() {
  return (
    <div>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
        <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
          <Skeleton className="h-20 w-20 rounded-full md:h-24 md:w-24" />

          <div className="mt-4 space-y-2">
            <Skeleton className="h-4 w-28" />
            <Skeleton className="h-8 w-48" />
          </div>
        </div>

        <div className="flex-1">
          <div className="min-h-35 rounded-2xl border bg-card p-6">
            <div className="space-y-3">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-8 w-40" />
            </div>

            <Skeleton className="mt-8 h-9 w-36 rounded-full" />
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="grid grid-cols-3 gap-5 md:grid-cols-6 lg:grid-cols-12">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <Skeleton className="h-14 w-14 rounded-lg" />

              <Skeleton className="h-3 w-12" />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <Skeleton className="mb-4 h-5 w-48" />

        <div className="flex gap-4 overflow-hidden">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-36 w-64 shrink-0 rounded-2xl" />
          ))}
        </div>
      </div>
    </div>
  );
}
