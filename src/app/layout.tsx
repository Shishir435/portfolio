import { Toaster } from "@/components/ui/sonner"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ReactQueryClientProvider } from "./providers/ReactQueryClientProvider"
const inter = Inter({ subsets: ["latin"] })

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
    <ReactQueryClientProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className}`}>
          {children}
          <Analytics />
          <SpeedInsights />
          <Toaster richColors closeButton />
        </body>
      </html>
    </ReactQueryClientProvider>
  )
}
