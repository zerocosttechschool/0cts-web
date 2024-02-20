import { Marque } from "@/components/molecules/Marque";
import { Contributors, About } from "@/components/organisms";
import SectionHero from "@/components/organisms/Hero";

export const LandingPage = () => {
  return (
    <div className="padding-container">
      <SectionHero />
      <div className=" overflow-hidden py-24">
        <div
          style={{
            transform: "rotate(-3deg)",
            width: "2000px",
            marginLeft: "-50px",
          }}
          className="mx-auto -ml-9 bg-slate-900 py-10 text-2xl font-semibold text-white"
        >
          <Marque />
        </div>
      </div>
      <About />
      <Contributors />
    </div>
  );
};
