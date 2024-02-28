import "./globals.css";
import { Navbar, Footer } from "../components";
import React from "react";
import { TopBanner } from "../components";
import { Inter } from "next/font/google";
import { Providers } from "./provider";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Security Camera Vendor",
  description: "Security , Camera , Vendor , Canada , USA ",
  content: "upgrade-insecure-requests",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative bg-bgBackground ">
        <Providers>
          <TopBanner />
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
