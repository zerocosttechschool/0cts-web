import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/atoms/ui/toaster";
import "./globals.css";

import { Navbar } from "@/components/molecules/Navbar";

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
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
