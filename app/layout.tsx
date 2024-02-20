import { Toaster } from "@/components/atoms/ui/toaster";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/components/molecules/Navbar";
import { Footer } from "@/components/organisms";
import { FooterData as data } from "@/constants/general";
import Providers from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zero-Cost Tech School",
  description: "#1 Free Tech School",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Providers>{children}</Providers>
        <Footer data={data} />
        <Toaster />
      </body>
    </html>
  );
}
