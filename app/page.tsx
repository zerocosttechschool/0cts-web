"use client";

import { WaitList } from "@/app/features/waitlist/components/WaitList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function Home() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <WaitList />
    </QueryClientProvider>
  );
}
