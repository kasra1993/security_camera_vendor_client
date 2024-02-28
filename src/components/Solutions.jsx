"use client";
import React from "react";
import { motion } from "framer-motion";
import { Variants } from "framer-motion";
import { fadeIn, slideIn } from "../../utils/motion";
import { Variant } from "framer-motion";
import { SectionWrapper } from "./hoc";
import Link from "next/link";
import Image from "next/image";
const solutions = [
  {
    title: "Title1",
    id: "1",
    image: "/cccamera1.png",
    link: "",
    description:
      "Ut pretium ultricies dignissim. Sed sit amet mi eget urnaplacerat vulputate. Ut vulputate est non quam dignissimelementum. Donec a ullamcorper diam",
  },
  {
    title: "Title2",
    id: "2",
    image: "/cccamera2.png",
    link: "",
    description:
      "Ut pretium ultricies dignissim. Sed sit amet mi eget urnaplacerat vulputate. Ut vulputate est non quam dignissimelementum. Donec a ullamcorper diam",
  },
  {
    title: "Title3",
    id: "3",
    image: "/cccamera3.png",
    link: "",
    description:
      "Ut pretium ultricies dignissim. Sed sit amet mi eget urnaplacerat vulputate. Ut vulputate est non quam dignissimelementum. Donec a ullamcorper diam",
  },
  {
    title: "Title4",
    id: "4",
    image: "/cccamera1.png",
    link: "",
    description:
      "Ut pretium ultricies dignissim. Sed sit amet mi eget urnaplacerat vulputate. Ut vulputate est non quam dignissimelementum. Donec a ullamcorper diam",
  },
];
const SolutionsCard = ({ index, solution }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.5, 0.75)}
      className="w-full xs:w-[250px] green-pink-gradient rounded-[20px] shadow-card"
      viewport={{ once: true }}
      initial="offscreen"
      whileInView="onscreen"
    >
      <div
        className="mb-6 block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 lg:mb-0"
        data-te-ripple-init
        data-te-ripple-color="light"
      >
        <div className="relative overflow-hidden bg-cover bg-no-repeat max-h-80">
          <Image
            src={solution.image}
            className="w-full rounded-t-lg"
            alt={solution.title}
            width={400}
            height={400}
          />
          <Link href={solution.link}>
            <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)]"></div>
          </Link>
          <svg
            className="absolute left-0 bottom-0 text-white dark:text-neutral-700"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="currentColor"
              d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="p-6">
          <h5 className="mb-4 text-lg font-bold">{solution.title}</h5>
          <p className="mb-6">{solution.description}</p>
          <Link
            href="/solutions/123"
            data-te-ripple-init
            data-te-ripple-color="light"
            className="inline-block border rounded border-slate-700 text--slate-700  hover:bg-slate-800 hover:text-white  px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal  shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          >
            Learn more
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
const Solutions = () => {
  return (
    <div className=" my-10 mx-auto md:px-6 ">
      <section className="mb-32 text-center lg:text-left">
        <h2 className="text-4xl font-bold py-20">OUR SOLUTIONS</h2>

        <div className="grid gap-x-6 lg:grid-cols-4 lg:gap-x-12">
          {solutions.map((solution, index) => (
            <SolutionsCard
              solution={solution}
              index={index}
              key={solution.id}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default SectionWrapper(Solutions, "solutions");
