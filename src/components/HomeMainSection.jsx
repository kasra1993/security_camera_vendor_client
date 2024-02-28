"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";
import { SectionWrapper } from "./hoc";

const HomeMainSection = () => {
  return (
    <div className="flex justify-between my-32 items-start  p-10 relative h-fit ">
      <motion.div
        className="hero w-1/2 py-10 px-20 "
        variants={fadeIn("right", "spring", 1, 1.5)}
        viewport={{ once: true }}
        initial="offscreen"
        whileInView="onscreen"
      >
        <h1 className="text-4xl font-bold font-helvetica">
          ANABON SECURITY NORTH AMERICA DISTROBUTOR
        </h1>
        <br />
        <h1 className="text-2xl py-2">TINADY PRODUCTS & SOLUTIONS</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa,
          perspiciatis? Doloribus doloremque Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Ipsa, perspiciatis? Doloribus doloremque
        </p>
        <button className="border rounded border-slate-700 px-3 py-2 mt-5 hover:bg-slate-800 hover:text-white">
          EXPLORE
        </button>
      </motion.div>
      <div className="home-image w-1/2 flex justify-between flex-col gap-10">
        <div className="w-full flex gap-10 ">
          <motion.div
            variants={fadeIn("left", "spring", 0.5, 1.5)}
            viewport={{ once: true }}
            initial="offscreen"
            whileInView="onscreen"
            className="box1 absolute top-[-50px] right-10 w-60 border border-solid border-gray-600 h-80 "
            style={{
              backgroundImage: "url(/cccamera1.png)",
              backgroundSize: "cover",
            }}
          ></motion.div>
          <motion.div
            variants={fadeIn("left", "spring", 0.3, 1.5)}
            viewport={{ once: true }}
            initial="offscreen"
            whileInView="onscreen"
            className="box2 absolute top-[0] right-80 w-80 border border-solid border-gray-600 h-96 "
            style={{
              backgroundImage: `url(/cccamera2.png)`,
              backgroundSize: "cover",
            }}
          ></motion.div>
          <motion.div
            variants={fadeIn("left", "spring", 0.8, 2)}
            viewport={{ once: true }}
            initial="offscreen"
            whileInView="onscreen"
            className="box3 absolute top-[280px] right-16 w-60 border border-solid border-gray-600 h-80 "
            style={{
              backgroundImage: `url(/cccamera3.png)`,
              backgroundSize: "cover",
            }}
          ></motion.div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(HomeMainSection, "homecontainer");
