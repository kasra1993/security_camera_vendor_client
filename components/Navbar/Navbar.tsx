"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import CustomButton from "../CustomButton";
import NavLinks from "./NavLinks";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-blue">
      <nav className="max-w-[1440px] flex justify-around items-center font-medium">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <Link
            href="/"
            className="z-51 flex w-1/8 justify-center items-center md:w-auto "
          >
            <Image
              src="/apple-logo.png"
              alt="cccamera logo"
              width={30}
              height={18}
              className="object-contain"
            />
          </Link>
          <div
            className="text-3xl z-9999 md:hidden "
            onClick={() => setOpen(!open)}
          >
            {open ? <AiOutlineClose /> : <AiOutlineMenu />}
          </div>
        </div>
        <ul className=" md:flex justify-center hidden uppercase items-center gap-8  font-sans z-50">
          <li>
            <Link href="/" className="text-slate-600">
              Home
            </Link>
          </li>
          <NavLinks />
        </ul>
        {/* MOBILE NAVIGATION */}
        <ul
          className={`z-50 md:hidden bg-white absolute w-full h-full bottom-0 py-24 pl-4 duration-500 mt-10 font-sans ${
            open ? "left-0" : "left-[-100%]"
          }`}
        >
          <li>
            <Link href="/" className="py-7 px-3 inline-block ">
              Home
            </Link>
          </li>
          <NavLinks />
          <div className="md:hidden ">
            <CustomButton
              title="Sign Up / Login"
              btnType="button"
              containerStyles="text-sky-500 rounded-lg bg-white min-w-[130px] border p-2 mr-2 "
              link="/signup"
            />
          </div>
        </ul>

        <div className="w-2/8  md:flex hidden">
          <CustomButton
            title="Sign Up"
            btnType="button"
            containerStyles="text-black rounded-lg bg-white min-w-[130px] border p-2 mr-2 hover:bg-black hover:text-white"
            link={"/signup"}
          />
          <CustomButton
            title="Log in"
            btnType="button"
            containerStyles="text-white rounded-lg bg-black min-w-[130px] border p-2 hover:text-black hover:bg-white"
            link={"/signup"}
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
