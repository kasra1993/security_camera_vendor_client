"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

const slides = [
  {
    id: 1,
    image: "/home-carousel1.png",
    title: "Pecan",
    description:
      "Some description about this event that took place and anabon security cameras were used for security reasons along with many switches and PTZ and ... ",
  },
  {
    id: 2,
    image: "/home-carousel2.png",
    title: "beijing",
    description:
      "Some description about this event that took place and anabon security cameras were used for security reasons along with many switches and PTZ and ... ",
  },
  {
    id: 3,
    image: "/home-carousel3.png",
    title: "London",
    description:
      "Some description about this event that took place and anabon security cameras were used for security reasons along with many switches and PTZ and ... ",
  },
];

export default function HomeCarousel() {
  return (
    <>
      <div className="w-full text-center mt-20 ">
        <h1 className="text-4xl font-bold py-10">
          Projects We Are Most Proud Of
        </h1>
      </div>
      <div className="w-3/4 h-[500px]">
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
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
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
          className="mySwiper my-10"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="w-1/2 h-full bg-[#fef2f2] flex justify-center align-middle flex-col px-10">
                <h1 className="font-bold text-center text-[50px] tracking-widest">
                  {slide.title}
                </h1>
                <h3 className="text-[13px]">{slide.description}</h3>
              </div>
              <div className="w-1/2 h-full">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                  width={400}
                  height={400}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
