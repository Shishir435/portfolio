import { cn } from "@/lib/utils"
import React from "react"

const MarkdownStyles: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className={cn("prose prose-sm md:prose-lg lg:prose-xl mx-auto")}>
      {children}
    </div>
  )
}

export default MarkdownStyles
