"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
const getStaleTime = () => {
  const fetchInterval = process.env.NEXT_PUBLIC_FETCH_INTERVAL;
  // With SSR, we usually want to set some default staleTime
  // above 0 to avoid refetching immediately on the client
  const defaultStaleTime = 60 * 1000;

  if (fetchInterval) {
    const parsedInterval = parseInt(fetchInterval, 10);
    if (!isNaN(parsedInterval)) {
      return parsedInterval;
    }
  }

  return defaultStaleTime;
};
export const ReactQueryClientProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: getStaleTime(),
          },
        },
      }),
  );
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
