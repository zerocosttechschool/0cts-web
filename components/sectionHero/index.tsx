import { Button } from "@/components/ui/button";
import Image from "next/image";
import { CgLoadbarDoc } from "react-icons/cg";

export const SectionHero = () => {
  return (
    <>
      <div className='w-full h-full container mx-auto max-w-7xl flex justify-start items-start'>
        <div className='grid-cols-2 grid bg-white h-full w-full py-10 flex justify-center items-center'>
          <div className='flex flex-col gap-16 flex justify-start  w-full h-full items-start'>
            <Button className='pointer-events-none'>
              Free Resource Belajar IT
            </Button>
            <div className='text-black text-6xl sm:text-8xl font-bold  '>
              Zero Cost Tech{" "}
              <span className='text-6xl sm:text-8xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-white py-8'>
                School
              </span>
            </div>
            <div className='text-black  break-words text-md'>
              Selamat datang di{" "}
              <span className='font-bold'>Zero Cost Te School</span> (0CTS),
              platform dokumentasi IT gratis yang menyediakan akses tanpa biaya
              kepada berbagai materi terkait teknologi informasi. Bergabunglah
              dengan komunitas kami yang dinamis dan mulailah perjalanan belajar
              Anda hari ini.
            </div>
            <Button className='py-6 px-5 rounded-full text-md gap-2 justify-center items-center'>
              <span>Mulai Belajar Sekarang</span> <CgLoadbarDoc size={25} />
            </Button>
          </div>

          <div className='h-full w-full   dark:bg-black bg-white absolute dark:bg-grid-white/[0.02] bg-grid-black/[0.2] relative flex items-start justify-center py-24'>
            <Image
              className='z-20'
              width={300}
              height={300}
              alt='gatau'
              src='/logo.png'
            />
            <div className='absolute pointer-events-none -top-5 overflow-hidden inset-0 w-full h-full flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(circle,transparent_20%,white_66%)]'></div>
          </div>
        </div>
      </div>
    </>
  );
};
