"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../atoms/ui/dialog";
import { WaitList } from "@/features/waitlist/components/WaitList";
import { HiOutlineUsers } from "react-icons/hi2";

const ModalJoin = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger className="flex gap-3 rounded-full bg-white px-5 py-2 font-semibold text-slate-900 hover:bg-slate-50 dark:bg-gray-50 ">
          Join Project
          <HiOutlineUsers size={20} />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Yuk, ikutan berkontribusi 🥳</DialogTitle>
            <DialogDescription>
              Bergabunglah dengan kami menjadi kontributor dan bantu kami membangun projek ini
            </DialogDescription>
          </DialogHeader>
          <WaitList />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ModalJoin;
