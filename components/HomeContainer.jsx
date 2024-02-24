"use client";
import React from "react";
import { useEffect, useRef, useState } from "react";
import CustomSlider from "./CustomSlider";
import Loader from "./CanvasLoader";
import { motion } from "framer-motion";

import Image from "next/image";
import HomeCarousel from "./HomeCarousel";
import HomeMainSection from "./HomeMainSection";
import ProductSlider from "./ProductSlider";
import ProductItem from "./products/ProductItem";
import Solutions from "./Solutions";
import TestemonialSlider from "./TestemonialSlider";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Earth from "./canvas/Earth";
import Hero from "./Hero";
import Qualifications from "./Qualifications";
import Affiliates from "./Affiliates";

const HomeContainer = () => {
  return (
    <>
      <Hero />
      <HomeMainSection />
      <Qualifications />
      <Affiliates />
      <Solutions />
      <HomeCarousel />
      {/* <ProductSlider /> */}
      {/* <TestemonialSlider /> */}
    </>
  );
};

export default HomeContainer;
