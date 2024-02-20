"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Kurikulum {
  title: string;
  link: string;
}

interface TentangKami {
  title: string;
  link: string;
}

interface IkutKontribusi {
  title: string;
  link: string;
}

interface SocialMedia {
  title: string;
  link: string;
}

interface Support {
  title: string;
  link: string;
}

interface DataFooter {
  kurikulum: Kurikulum[];
  tentangKami: TentangKami[];
  ikutKontribusi: IkutKontribusi[];
  socialMedia: SocialMedia[];
  support: Support[];
}

interface Footer {
  data: DataFooter[];
  className?: string;
}

const Footer: React.FC<Footer> = ({ data, className }) => {
  const [ajgdata, setdata] = React.useState<DataFooter[]>([]);
  return (
    <div className="bg-slate-900">
      <div className="container mx-auto w-full py-14 text-white">
        <div className=" grid w-full grid-cols-12 gap-20 ">
          <div className="col-span-4 flex w-auto flex-col items-center justify-center gap-2">
            <div className="h-auto w-full  rounded-md bg-gradient-to-br from-gray-300 from-0% to-slate-900 to-75% p-[2px]">
              <div className="back flex h-full w-full items-center justify-center rounded-md bg-slate-800 p-2 ">
                <div className="flex items-center justify-center px-4 py-1">
                  <Image src={"/images/logo-footer.png"} width={50} height={50} alt="Footer 0CTS" />
                  <div className="ml-4 mr-1 text-5xl font-bold">0CTS</div>
                  <div className=" border-l-[3px] pl-1">Best Technology Education platform</div>
                </div>
              </div>
            </div>
            <div className="w-full text-lg tracking-normal">
              Copyright 2024 0CTS, Inc all rights reserved
            </div>
          </div>
          <div className="col-span-8 ml-20 flex w-full  gap-3">
            {data.map((item, index) => (
              <div key={`footer-${index}`} className="flex w-full flex-row gap-14 ">
                <ul className="flex flex-col gap-1">
                  <li className="font-semibold">Kurikulum</li>
                  {item.kurikulum.map((subItem, subIndex) => (
                    <li className="text-slate-500" key={`footer-${index}-${subIndex}`}>
                      <Link href={subItem.link}>{subItem.title}</Link>
                    </li>
                  ))}
                </ul>
                <ul className="flex flex-col gap-1">
                  <li className="font-semibold">Tentang Kami</li>
                  {item.tentangKami.map((subItem, subIndex) => (
                    <li className="text-slate-500" key={`footer-${index}-${subIndex}`}>
                      <Link href={subItem.link}>{subItem.title}</Link>
                    </li>
                  ))}
                </ul>
                <ul className="flex flex-col gap-1">
                  <li className="font-semibold">Ikut Kontribusi</li>
                  {item.ikutKontribusi.map((subItem, subIndex) => (
                    <li className="text-slate-500" key={`footer-${index}-${subIndex}`}>
                      <Link href={subItem.link}>{subItem.title}</Link>
                    </li>
                  ))}
                </ul>
                <ul className="flex flex-col gap-1">
                  <li className="font-semibold">Sosial Media</li>
                  {item.socialMedia.map((subItem, subIndex) => (
                    <li className="text-slate-500" key={`footer-${index}-${subIndex}`}>
                      <Link href={subItem.link}>{subItem.title}</Link>
                    </li>
                  ))}
                </ul>
                <ul className="flex flex-col gap-1">
                  <li className="font-semibold">Support</li>
                  {item.support.map((subItem, subIndex) => (
                    <li className="text-slate-500" key={`footer-${index}-${subIndex}`}>
                      <Link href={subItem.link}>{subItem.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
