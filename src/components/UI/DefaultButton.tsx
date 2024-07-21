"use client";

import clsx from "clsx";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

type DefaultButtonProps = {
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
  href?: string;
  isFullWidth?: boolean;
  justifyType?: "justify-center" | "justify-start" | "justify-end";
};

const DefaultButton = ({
  children,
  className,
  onClick,
  disabled,
  href,
  isFullWidth,
  justifyType = "justify-center",
}: DefaultButtonProps) => {
  return (
    <Link
      href={href ?? ""}
      className={clsx("flex", justifyType, isFullWidth && "w-full")}
    >
      <button
        onClick={onClick}
        disabled={disabled}
        type="submit"
        className={twMerge(
          clsx(
            !disabled && "hover:bg-lime-400 hover:text-black",
            disabled && "cursor-not-allowed",
            "cursor-pointer rounded-full bg-blue-700 p-4 text-center text-base font-bold text-white transition-all duration-300 ease-in-out",
            className,
          ),
        )}
      >
        {children}
      </button>
    </Link>
  );
};

export default DefaultButton;
