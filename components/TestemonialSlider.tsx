"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import TestemonialSliderItem from "./TestemonialSliderItem";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const TestemonialSlider = () => {
  return (
    <>
      <div className="w-full text-center">
        <h1 className="text-3xl font-bold py-10">
          LATEST NEWS IN THE INDUSTRY{" "}
        </h1>
      </div>
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        spaceBetween={10}
        effect="fade"
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
        }}
        className="mySwiper mb-10"
      >
        <SwiperSlide>
          <TestemonialSliderItem />
        </SwiperSlide>
        <SwiperSlide>
          <TestemonialSliderItem />
        </SwiperSlide>
        <SwiperSlide>
          <TestemonialSliderItem />
        </SwiperSlide>
        <SwiperSlide>
          <TestemonialSliderItem />
        </SwiperSlide>
        <SwiperSlide>
          <TestemonialSliderItem />
        </SwiperSlide>
        <SwiperSlide>
          <TestemonialSliderItem />
        </SwiperSlide>
        <SwiperSlide>
          <TestemonialSliderItem />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default TestemonialSlider;
