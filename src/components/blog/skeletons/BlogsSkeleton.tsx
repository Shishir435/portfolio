import { Skeleton } from "@/components/ui/skeleton"
import React from "react"

const BlogsSkeleton = () => {
  return (
    <div className="flex flex-col gap-2 rounded border p-4 shadow">
      <Skeleton className="h-5 w-9/12 bg-gray-500" />
      <Skeleton className="h-3 w-11/12 bg-gray-300" />
      <Skeleton className="h-3 w-11/12 bg-gray-300" />
    </div>
  )
}

export default BlogsSkeleton
