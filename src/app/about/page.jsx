"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../../../utils/motion";
const About = () => {
  return (
    <div className=" w-full h-auto">
      <div className="w-2/3 relative mx-auto py-20">
        <motion.div
          variants={fadeIn("left", "spring", 1, 1.5)}
          viewport={{ once: true }}
          initial="offscreen"
          whileInView="onscreen"
        >
          <Image
            src="/about-5.jpg"
            alt="about us"
            width={700}
            height={800}
            className="ml-72 mx-auto object-cover"
          />
        </motion.div>

        <motion.div
          className="w-2/3 h-[350px] bg-[#202938] absolute -left-[50px] top-[150px] p-5"
          variants={fadeIn("right", "spring", 1, 1.5)}
          viewport={{ once: true }}
          initial="offscreen"
          whileInView="onscreen"
        >
          <p className="font-medium text-white dark:text-white">About us</p>

          <h1 className="mt-2 text-2xl font-semibold text-white md:text-3xl dark:text-white">
            Here is all you need to know about us
          </h1>

          <p className="mt-3 text-white dark:text-white text-lg leading-7">
            It&apos;s not every day that you find a group like us _ a direct
            dealer of security cameras with a business to business model,
            supporting all scopes of orders through the whole continent, dealing
            with installers, integrators, and wholesalers. Warning: Please do
            NOT proceed further if you are an END-USER It&apos;s not every day
            that you find a group like us _ a direct dealer of security cameras
            with a business to business model.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
