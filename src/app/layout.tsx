import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
const inter = Inter({ subsets: ["latin"] })
import { Toaster } from "@/components/ui/sonner"
export const metadata: Metadata = {
  title: "Shishir's Portfolio",
  description: "Full-Stack web Developer",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        {children}
        <Analytics />
        <Toaster richColors closeButton />
      </body>
    </html>
  )
}
