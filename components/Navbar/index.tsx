import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface dataLink {
  link?: string;
  title?: string;
}

interface NavbarProps {
  className?: string;
  dataLink?: dataLink[];
}

export const Navbar = ({ className, dataLink }: NavbarProps) => {
  return (
    <>
      <div className={cn(`container mx-auto w-full max-w-7xl '`, className)}>
        <div className='flex justify-between items-center py-4'>
          <div className='flex text-black gap-2 justify-center items-center'>
            <Image height={25} width={25} src='/logo.png' alt='0CT LOGO' />
            <span className='font-bold text-lg'>0CTS</span>
          </div>
          <div className='flex text-black gap-5'>
            {dataLink?.map((item, index) => (
              <Link key={index} href={`${item.link}`}>
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
