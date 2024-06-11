import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextUI } from "@/config/providers/NextUIProviderApp";

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
    <html lang="en">
      <body className={inter.className}>
        <NextUI>{children}</NextUI>
      </body>
    </html>
  );
}
