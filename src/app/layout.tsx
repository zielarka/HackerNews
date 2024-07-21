"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import HomeHeader from "~/components/Common/Header/HomeHeader";
import HomeFooter from "~/components/Common/Footer/HomeFooter";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body>
        <HomeHeader />
          <div className="flex w-full flex-col items-center gap-4 bg-white">
            {children}
          </div>
        <HomeFooter />
      </body>
    </html>
  );
}
