"use client";

import { cn } from "@/lib/utils";
import { ArrowUpRightIcon } from "lucide-react";
import { useState } from "react";

interface CurriculumProps {
  id: number;
  text: string;
}

const curriculumsList: Array<CurriculumProps> = [
  { id: 1, text: "Artificial Intelligence" },
  { id: 2, text: "Backend" },
  { id: 3, text: "Blockchain" },
  { id: 4, text: "Docker" },
  { id: 5, text: "DevOps" },
  { id: 6, text: "Fullstack" },
  { id: 7, text: "Frontend" },
  { id: 8, text: "Game Development" },
  { id: 9, text: "Machine Learning" },
];

export default function Curriculum() {
  const [selectedCurriculum, setSelectedCurriculum] = useState<string>("");

  return (
    <section className="py-24">
      <div className="mx-auto w-full flex py-[86px] justify-center items-center bg-slate-900 px-8">
        <div className="relative flex w-full justify-center items-center max-w-7xl px-6">
          <div className="text-white w-[726px] flex flex-col justify-center items-center">
            <div className="px-8 text-center w-[581px]">
              <h1 className="text-4xl font-semibold">Apa Saja Yang Ada Dalam Kurikulum Kami</h1>
              <p className="text-slate-400 mt-6">
                Kurikulum yang kami sediakan berfokus pada bidang IT
              </p>
            </div>
            <div className="flex flex-wrap my-6 justify-center gap-3 items-center">
              {curriculumsList.map(item => (
                <button
                  type="button"
                  aria-label={item.text}
                  key={item.id}
                  className={cn(
                    "bg-slate-800 px-5 py-1.5 transition-all border border-[#515151] rounded-full",
                    selectedCurriculum === item.text
                      ? "bg-white border-white text-slate-900"
                      : "text-white",
                  )}
                  onClick={() => setSelectedCurriculum(item.text)}
                >
                  <p>{item.text}</p>
                </button>
              ))}
            </div>
            <button
              type="button"
              aria-label="eksplor kurikulum"
              className={cn(
                "bg-white px-6 py-3 flex justify-center items-center",
                "space-x-2 rounded-full text-slate-900",
              )}
            >
              <span>Eksplor kurikulum</span>
              <ArrowUpRightIcon />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
