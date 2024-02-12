import Image from "next/image";
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
  data: DataFooter;
  className?: string;
}

export const Footer: React.FC<Footer> = ({ data, className }) => {
  return (
    <>
      <div className='flex justify-between items-start'>
        <div className='flex flex-col gap-2'>
          <div
            style={{
              borderStyle: "solid",
              borderWidth: "1px",
              borderImage: "linear-gradient(90deg, #0A0A0A 0%, #A3A3A3 100%)",
            }}
          >
            <div className='flex gap-5 justify-center items-center'>
              <Image
                src={"/logo.png"}
                width={100}
                height={100}
                alt='Footer 0CTS'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
