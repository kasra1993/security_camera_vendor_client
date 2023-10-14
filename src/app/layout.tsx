import "./globals.css";
import type { Metadata } from "next";
import { Navbar, Footer } from "../../components";
import React from "react";
import Providers from "./providers";

import { TopBanner, BreadCrumb } from "../../components";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Security Camera Vendor",
  description: "Security , Camera , Vendor , Canada , USA ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative bg-bgBackground ">
        <Providers>
          <TopBanner />
          <Navbar />
          {/* <BreadCrumb /> */}

          {children}

          <Footer />
        </Providers>
      </body>
    </html>
  );
}
