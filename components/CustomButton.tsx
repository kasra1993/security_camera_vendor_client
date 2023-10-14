"use client";
import React from "react";
import { CustomButtonProps } from "../types";
import Image from "next/image";
import Link from "next/link";
const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  btnType,
  textStyles,
  rightIcon,
  link,
}: CustomButtonProps) => {
  return (
    <Link href={link ? link : "/"}>
      <button
        disabled={false}
        type={"button"}
        className={`custom-btn ${containerStyles} flex justify-center align-middle`}
        onClick={handleClick}
      >
        <span className={`flex-1 ${textStyles}`}>{title}</span>
        {rightIcon && (
          <div className="relative w-6 h-6">
            <Image
              src={rightIcon}
              alt="right icon"
              fill
              className="object-contain"
              width={400}
              height={400}
            />
          </div>
        )}
      </button>
    </Link>
  );
};

export default CustomButton;
