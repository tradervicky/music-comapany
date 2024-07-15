import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vicky k. Gupta",
  description: "I am fullstack developer(MERN) also well known of Next Js and Blockchain Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
   
      <body className={inter.className}>
        <div className="relative w-full flex items-center justify-center">
       <Navbar/>
        </div>
        {children}
        </body>
    </html>
  );
}
