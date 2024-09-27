import Navbar from "@/components/blog/Navbar"
import { Metadata } from "next"
import { ThemeProvider } from "../../providers/ThemeProvider"
import ReactQueryProvider from "@/providers/ReactQueryProvider"

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
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Navbar />
        {children}
      </ThemeProvider>
    </>
  )
}
