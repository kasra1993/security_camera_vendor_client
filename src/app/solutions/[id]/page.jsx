"use client";
import React from "react";
import ProductSlider from "../../../components/ProductSlider";
import { products } from "../../../../utils";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../utils/motion";
import Image from "next/image";
import { SectionWrapper } from "../../../components/hoc";

const SolutionItem = () => {
  return (
    <section className="text-gray-600 body-font flex flex-col md:pb-20 md:px-10">
      <div className=" w-full h-auto">
        <div className="w-full  mx-auto pb-20">
          <motion.div
            className="w-full h-[500px] relative z-10 "
            variants={fadeIn("left", "spring", 1, 1.5)}
            viewport={{ once: true }}
            initial="offscreen"
            whileInView="onscreen"
          >
            <Image
              src="/about-5.jpg"
              alt="about us"
              className="object-contain"
              width={1280}
              height={300}
            />
          </motion.div>

          <motion.div
            className="w-full h-[350px] bg-[#202938] p-5 z-50 relative"
            variants={fadeIn("right", "spring", 1, 1.5)}
            viewport={{ once: true }}
            initial="offscreen"
            whileInView="onscreen"
          >
            <p className="font-medium text-white dark:text-white">Solution</p>

            <h1 className="mt-2 text-2xl font-semibold text-white md:text-3xl dark:text-white">
              Here is all you need to know about this Solution
            </h1>

            <p className="mt-3 text-white dark:text-white text-lg leading-7">
              It&apos;s not every day that you find a group like us _ a direct
              dealer of security cameras with a business to business model,
              supporting all scopes of orders through the whole continent,
              dealing with installers, integrators, and wholesalers. Warning:
              Please do NOT proceed further if you are an END-USER It&apos;s not
              every day that you find a group like us _ a direct dealer of
              security cameras with a business to business model.
            </p>
          </motion.div>
        </div>
      </div>
      <div>
        <div className="w-full text-center my-20">
          <h1 className="text-5xl font-bold pb-16">Related Products</h1>
        </div>
        <ProductSlider products={products} />
      </div>
    </section>
  );
};
export default SectionWrapper(SolutionItem, "SolutionItem");
