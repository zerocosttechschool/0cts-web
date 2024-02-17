import { Button } from "@/components/atoms/ui/button";
import Image from "next/image";
import { CgLoadbarDoc } from "react-icons/cg";

const SectionHero = () => {
  return (
    <>
      <div className="container mx-auto flex h-full w-full max-w-7xl items-start justify-start">
        <div className="grid h-full w-full grid-cols-2 items-center justify-center  bg-white py-10">
          <div className="flex h-full w-full  flex-col  items-start justify-start gap-16">
            <div className="rounded-lg border-t border-slate-400 bg-slate-900 px-4 py-2 text-white">
              Free Resource Belajar IT
            </div>
            <div className="text-6xl font-bold text-black sm:text-8xl  ">
              Zero Cost Tech{" "}
              <span className="relative z-20 bg-gradient-to-b from-neutral-800 to-white bg-clip-text py-8 text-6xl font-bold text-transparent sm:text-8xl">
                School
              </span>
            </div>
            <div className="text-md  break-words text-slate-900">
              Selamat datang di <span className="font-bold">Zero Cost Te School</span> (0CTS),
              platform dokumentasi IT gratis yang menyediakan akses tanpa biaya kepada berbagai
              materi terkait teknologi informasi. Bergabunglah dengan komunitas kami yang dinamis
              dan mulailah perjalanan belajar Anda hari ini.
            </div>
            <Button variant={"default"} className="rounded-full px-10 py-7">
              <span>Mulai Belajar Sekarang</span> <CgLoadbarDoc size={25} />
            </Button>
          </div>
          <div className="relative flex h-full  w-full items-start justify-center  bg-white py-24 ">
            <Image className="z-20" width={300} height={300} alt="gatau" src="/images/logo.png" />
            <Image
              className="absolute top-0"
              width={701.35}
              height={694.87}
              alt="gatau"
              src="/images/pattern.png"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionHero;
