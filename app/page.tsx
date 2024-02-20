import { LandingPage } from "@/module/LandingPage";

export default function Home() {
  // const queryClient = new QueryClient();

  return (
    <>
      {/* <QueryClientProvider client={queryClient}> */}
      {/* <WaitList /> */}
      <div className="">
        <LandingPage />
      </div>
      {/* </QueryClientProvider> */}
    </>
  );
}
