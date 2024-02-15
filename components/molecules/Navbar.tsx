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
      <div className={cn(`' container mx-auto w-full max-w-7xl`, className)}>
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center justify-center gap-2 text-black">
            <Image height={25} width={25} src="/images/logo.png" alt="0CT LOGO" />
            <span className="text-lg font-bold">0CTS</span>
          </div>
          <div className="flex gap-5 text-black">
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
