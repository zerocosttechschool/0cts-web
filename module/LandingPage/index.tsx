import { Navbar } from "@/components/Navbar";
import { SectionHero } from "@/components/organisms/Hero";

export const LandingPage = () => {
  return (
    <>
      <div className="h-screen max-h-[730px] overflow-hidden bg-white">
        <Navbar />
        <SectionHero />
      </div>
    </>
  );
};
