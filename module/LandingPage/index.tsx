import { Marque } from "@/components/molecules/Marque";
import { Contributors } from "@/components/organisms";
import SectionHero from "@/components/organisms/Hero";

export const LandingPage = () => {
  return (
    <>
      <SectionHero />
      <div className="">
        <div
          style={{
            transform: "rotate(-3deg)",
          }}
          className="mx-auto -ml-9 w-[1440px]  bg-slate-900 py-10 text-2xl font-semibold text-white"
        >
          <Marque />
        </div>
      </div>
      <Contributors />
    </>
  );
};
