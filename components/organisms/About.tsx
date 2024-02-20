import Image from "next/image";
import React from "react";
import { Button } from "../atoms/ui/button";
import { HiOutlineUsers } from "react-icons/hi2";
import { CgFileDocument } from "react-icons/cg";
import Link from "next/link";
import { PDF_PROJECT_PROFILE } from "@/constants/general";
import ModalJoin from "../molecules/ModalJoin";

const About = () => {
  return (
    <div className="mx-auto max-w-7xl px-8">
      <div className="relative flex h-[430px] w-full rounded-[50px] bg-slate-900 p-16">
        <div className="w-6/12 text-white">
          <h2 className="text-3xl font-bold ">
            Apa Si <span className="text-teal-500">0CTS</span> Itu Bang?
          </h2>
          <p className="mt-5 text-justify">
            Jadi gini,<span className="font-bold">0CTS</span> atau{" "}
            <span className="font-bold">Zero Cost Tech School</span> adalah sebuah projek yang
            berfokus pada bidang pendidikan atau Education, disini kami menyediakan resource belajar
            berupa dokumentasi dan juga online sharing secara gratis, dokumentasi bisa diakses
            secara publik untuk siapa saja, dan bagi yang mau ikutan berkontribusi dalam projek ini
            kalian bisa langsung saja klik tombol dibawah untuk melakukan pendaftaran.{" "}
          </p>
          <div className="mt-10 flex items-center gap-5">
            <ModalJoin />
            <Button variant={"dark"} className=" rounded-full">
              <Link
                className="flex items-center gap-3 space-x-2  font-semibold"
                download
                target="_blank"
                href={PDF_PROJECT_PROFILE}
              >
                Download Panduan
                <CgFileDocument size={20} />
              </Link>
            </Button>
          </div>
        </div>
        <div className="">
          <Image
            src={"/images/character.png"}
            alt="character"
            width={500}
            height={500}
            className="absolute bottom-0 right-0"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
