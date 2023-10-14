"use client";
import React from "react";
import { motion } from "framer-motion";

const loadingContainer = {
  width: "8rem",
  height: "4rem",
  display: "flex",
  justifyContent: "space-around",
};
const firstloadingCircle = {
  display: "block",
  width: "2rem",
  height: "2rem",
  backgroundColor: "#FFCC00",
  borderRadius: "1rem",
};
const secondloadingCircle = {
  display: "block",
  width: "2rem",
  height: "2rem",
  backgroundColor: "#EF036C",
  borderRadius: "1rem",
};
const thirdloadingCircle = {
  display: "block",
  width: "2rem",
  height: "2rem",
  backgroundColor: "#009B4D",
  borderRadius: "1rem",
};

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const loadingCircleVariants = {
  start: {
    y: "0%",
  },
  end: {
    y: "60%",
  },
};
const loadingCircleTransition = {
  duration: 0.4,
  yoyo: Infinity,
  ease: "easeInOut",
};

const Loading = () => {
  return (
    <div className="h-screen w-full">
      {/* <div className="absolute top-0 left-60 w-full h-screen  z-50  " /> */}
      <div className="flex top-10  w-full justify-center items-center h-[500px]">
        <motion.div
          style={loadingContainer}
          variants={loadingContainerVariants}
          initial="start"
          animate="end"
        >
          <motion.span
            style={firstloadingCircle}
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          ></motion.span>
          <motion.span
            style={secondloadingCircle}
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          ></motion.span>
          <motion.span
            style={thirdloadingCircle}
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          ></motion.span>
        </motion.div>
      </div>
    </div>
  );
};

export default Loading;
