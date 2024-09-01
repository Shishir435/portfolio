import Navbar from "@/components/blog/Navbar"
import { Metadata } from "next"
import { ThemeProvider } from "../../providers/ThemeProvider"

export const metadata: Metadata = {
  title: {
    template: "%s | Blog",
    default: "Blog",
  },
  description: "Shishir's Blog",
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
