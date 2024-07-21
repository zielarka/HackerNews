"use client";

import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";
import Link from "next/link";

const HomeHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const currentPath = usePathname();

  const isAboutUsOrContactUs =
    currentPath === "/about-us" || currentPath === "/contact-us";

  return (
      <header
        className={twMerge(
          clsx(
            "sticky top-0 z-50 flex h-auto min-h-[70px] justify-center bg-white py-4 font-raleway tracking-wide shadow-md",
            isAboutUsOrContactUs && "bg-black text-white",
          ),
        )}
      >
        <div className="flex w-3/4 flex-wrap items-center gap-4">

          <div
            id="collapseMenu"
            className={clsx(
              "max-lg:before:fixed max-lg:before:inset-0 max-lg:before:z-50 max-lg:before:bg-black max-lg:before:opacity-50 lg:ml-12 lg:!flex lg:flex-auto",
              mobileMenuOpen ? "" : "max-lg:hidden",
            )}
          >
            <button
              id="toggleClose"
              className="fixed right-4 top-2 z-50 rounded-full bg-white p-3 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            >
              <AiOutlineClose />
            </button>

            <div className="z-50 max-lg:fixed max-lg:left-0 max-lg:top-0 max-lg:h-full max-lg:w-1/2 max-lg:min-w-[300px] max-lg:bg-white max-lg:p-6 max-lg:shadow-md lg:!flex lg:flex-auto">
              <ul
                className={clsx(
                  "font-raleway text-black max-lg:space-y-2 lg:flex lg:gap-x-8",
                  isAboutUsOrContactUs && "lg:text-white",
                )}
              >
                <li className="mb-6 hidden max-lg:block"></li>
                <li className="max-lg:border-b max-lg:py-3">
                  <Link href="/" className="block text-[15px] font-bold">
                    Home
                  </Link>
                </li>
                <li className="max-lg:border-b max-lg:py-3">
                  <Link
                    href="/contact-us"
                    className="block text-[15px] font-bold"
                  >
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="ml-auto flex items-center space-x-6">
            <button
              id="toggleOpen"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(true)}
            >
              <AiOutlineMenu className="scale-150" />
            </button>
          </div>
        </div>
      </header>
    )
};

export default HomeHeader;
