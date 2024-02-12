import { Navbar } from "@/components/Navbar";
import { SectionHero } from "@/components/sectionHero";

export const LandingPage = () => {
  return (
    <>
      <div className='bg-white h-screen overflow-hidden max-h-[730px]'>
        <Navbar />
        <SectionHero />
      </div>
    </>
  );
};
