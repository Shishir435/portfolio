import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { Toaster } from "@/components/ui/sonner";
import ReactQueryProvider from "@/providers/react-query-provider";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shishir's Portfolio",
  description: "Full-Stack web Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <link rel="icon" href="/favicon.svg" />
      <body className={`${inter.className}`}>
        <ReactQueryProvider>
          {children}
          <Analytics />
          <SpeedInsights />
          <Toaster richColors closeButton />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
