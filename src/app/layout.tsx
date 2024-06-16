import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { NextUI } from "@/config/providers/NextUIProviderApp";
import { NavBar } from "@/components/NavBar/NavBar";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Franzua Plasencia",
  description: "Portfolio made by Franzua Plasencia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <NextUI>
          <div className="background-gradient-radius">
            <NavBar />
            {children}
          </div>
        </NextUI>
      </body>
    </html>
  );
}
