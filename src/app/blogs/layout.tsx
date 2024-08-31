import { Metadata } from "next"
import { ThemeProvider } from "../../providers/ThemeProvider"
import ThemeButton from "@/components/blog/ThemeButton"

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
        <body className="relative">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ThemeButton className="absolute left-5 top-5" />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
