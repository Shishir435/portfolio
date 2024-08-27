import { usePathname } from "next/navigation"
import React from "react"
import type { Metadata } from "next"
export const metadata: Metadata = {
  title: {
    template: "%s | Blog",
    default: "Blog",
  },
  description: "Shishir's Blog",
}
function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <body>{children}</body>
    </>
  )
}

export default Layout
