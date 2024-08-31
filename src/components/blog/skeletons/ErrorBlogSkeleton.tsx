import { Skeleton } from "@/components/ui/skeleton"
import React from "react"

const ErrorSkeleton = () => {
  return (
    <div className="min-h-dvh">
      <p>Error while fetching blog data</p>
      <Skeleton className="h-24 w-full rounded-md bg-red-400/30" />
      <Skeleton className="h-24 w-full rounded-md bg-red-400/30" />
      <Skeleton className="h-24 w-full rounded-md bg-red-400/30" />
      <Skeleton className="h-24 w-full rounded-md bg-red-400/30" />
      <Skeleton className="h-24 w-full rounded-md bg-red-400/30" />
      <Skeleton className="h-24 w-full rounded-md bg-red-400/30" />
      <Skeleton className="h-24 w-full rounded-md bg-red-400/30" />
    </div>
  )
}

export default ErrorSkeleton
