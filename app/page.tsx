import { Marque } from "@/components/molecules/Marque";
import { Contributors, SectionHero } from "@/components/organisms";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function Home() {
  // const queryClient = new QueryClient();

  return (
    <>
      {/* <QueryClientProvider client={queryClient}> */}
      {/* <WaitList /> */}
      <SectionHero />
      <div className="overflow-hidden py-20">
        <div className="-ml-9 w-[2000px] -rotate-3  bg-slate-900 py-10 text-2xl font-semibold text-white">
          <Marque />
        </div>
        <Contributors />
      </div>
      {/* </QueryClientProvider> */}
    </>
  );
}
