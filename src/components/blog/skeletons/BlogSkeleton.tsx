import { Skeleton } from "@/components/ui/skeleton"
import React from "react"

const BlogSkeleton = () => {
  return (
    <div className="mt-6 flex flex-col gap-y-6">
      {Array.from({ length: 6 }).map((_, index) => (
        <Skeleton
          key={index}
          className="h-20 w-[28rem] bg-slate-200 dark:bg-slate-600 sm:w-[38rem] md:w-[47rem] lg:w-[70rem]"
        />
      ))}
    </div>
  )
}

export default BlogSkeleton
