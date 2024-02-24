import React from "react";
import Image from "next/image";
import Link from "next/link";

interface LinkItem {
  title: string;
  link: string;
}

interface DataFooter {
  name: string;
  menu: LinkItem[];
}

interface FooterProps {
  data: DataFooter[];
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ data, className }) => {
  console.log(data.map(item => item));

  return (
    <div className={`bg-slate-900 ${className}`}>
      <div className="container mx-auto w-full py-14 text-white">
        <div className="grid grid-cols-12 gap-20">
          <div className="col-span-4 flex flex-col items-center justify-center gap-2">
            <div className=" flex h-full w-full items-center justify-center rounded-md border-l border-t border-slate-500 bg-slate-800 p-2 ">
              <div className="flex items-center justify-center px-2 py-1">
                <Image src={"/images/logo-footer.png"} width={40} height={40} alt="Footer 0CTS" />
                <div className="ml-4 mr-1 text-3xl font-bold">0CTS</div>
                <div className="border-l-[2px] pl-1 text-sm">
                  Best Technology Education platform
                </div>
              </div>
            </div>
            <div className="w-full text-lg tracking-normal  text-slate-400">
              Copyright 2024 0CTS, Inc all rights reserved
            </div>
          </div>
          <div className="col-span-8 flex justify-end gap-10">
            {data.map((item, index) => (
              <div key={index} className="flex flex-col gap-5">
                <div className=" font-bold">{item.name}</div>
                <div className="flex flex-col gap-2">
                  {item.menu.map((link, index) => (
                    <Link key={index} href={link.link}>
                      <p className="text-sm text-slate-400 hover:text-white">{link.title}</p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
