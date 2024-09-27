import { Skeleton } from "@/components/ui/skeleton";
import { RepositoryTagsBackgroundColors } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function SkeletonProjectCard() {
  return (
    <div className="h-[300px] rounded-xl bg-gradient-to-r from-[#f6f5fe] to-[#ececec] p-1 shadow-md">
      <div className="mt-5 px-4">
        <div className="flex items-center justify-between">
          <div>
            <Skeleton className="h-6 w-[150px] rounded-sm bg-slate-400/30" />
          </div>
          <div className="inset-0 m-3 flex gap-5">
            <Skeleton className="size-10 rounded-full bg-slate-400/30" />
            <Skeleton className="size-10 rounded-full bg-slate-400/30" />
          </div>
        </div>
        <Skeleton className="mt-2 h-4 w-full bg-slate-300/30" />
        <Skeleton className="mt-2 h-4 w-full bg-slate-300/30" />
        <Skeleton className="mt-2 h-4 w-full bg-slate-300/30" />
        <Skeleton className="mt-2 h-4 w-full bg-slate-300/30" />
      </div>
      <div className="my-4 flex flex-wrap gap-2 px-4">
        {[...Array(10)].map((_, index) => {
          const backgroundColor =
            RepositoryTagsBackgroundColors[
              index % RepositoryTagsBackgroundColors.length
            ];
          return (
            <Skeleton
              key={index}
              className={cn(
                "h-5 w-16 rounded-full px-1.5 py-0.5 text-sm",
                backgroundColor
              )}
            />
          );
        })}
      </div>
    </div>
  );
}
