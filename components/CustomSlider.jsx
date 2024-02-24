import React from "react";
import { useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";
import CustomButton from "./CustomButton";
import Image from "next/image";
const CustomSlider = () => {
  const [width, setWidth] = useState(0);
  // const carousel = useRef();
  // useEffect(() => {
  //   setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  // }, []);
  return (
    <div className="main-slider border border-slate-300 rounded-2xl text-center my-10">
      <h1 className="text-3xl font-bold font-mono mt-10">Main Slider</h1>
      {/* <motion.div className="carousel" ref={carousel}> */}
      <motion.div className="carousel">
        <motion.div
          className="inner-carousel"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          whileTap={{ cursor: "grabbing" }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div className="item">
            <Image
              src="/home-carousel1.png"
              alt="camera1"
              className="item"
              width={400}
              height={400}
            />
          </motion.div>
          <motion.div className="item">
            <Image
              src="/home-carousel2.png"
              alt="camera1"
              className="item"
              width={400}
              height={400}
            />
          </motion.div>
          <motion.div className="item">
            <Image
              src="/home-carousel3.png"
              alt="camera1"
              className="item"
              width={400}
              height={400}
            />
          </motion.div>
          <motion.div className="item">
            <Image
              src="/home-carousel1.png"
              alt="camera1"
              className="item"
              width={400}
              height={400}
            />
          </motion.div>
          <motion.div className="item">
            <Image
              src="/home-carousel2.png"
              alt="camera1"
              className="item"
              width={400}
              height={400}
            />
          </motion.div>
          <motion.div className="item">
            <Image
              src="/home-carousel3.png"
              alt="camera1"
              className="item"
              width={400}
              height={400}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CustomSlider;
