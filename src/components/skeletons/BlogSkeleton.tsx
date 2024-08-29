import React from "react"
import { Skeleton } from "../ui/skeleton"

const BlogSkeleton = () => {
  return (
    <div className="min-h-dvh">
      <Skeleton className="h-24 w-full rounded-sm bg-slate-400/30" />
      <Skeleton className="h-24 w-full rounded-sm bg-slate-400/30" />
      <Skeleton className="h-24 w-full rounded-sm bg-slate-400/30" />
      <Skeleton className="h-24 w-full rounded-sm bg-slate-400/30" />
      <Skeleton className="h-24 w-full rounded-sm bg-slate-400/30" />
      <Skeleton className="h-24 w-full rounded-sm bg-slate-400/30" />
      <Skeleton className="h-24 w-full rounded-sm bg-slate-400/30" />
    </div>
  )
}

export default BlogSkeleton
