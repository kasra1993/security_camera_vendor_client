"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import ProductItem from "./products/ProductItem";
import "swiper/css/navigation";

// import required modules
import { Pagination, Scrollbar, Navigation, Autoplay } from "swiper/modules";

export default function ProductSlider({ products }: any) {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
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
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination, Navigation, Scrollbar]}
        navigation={true}
        scrollbar={{ draggable: true }}
        className="mySwiper"
      >
        {products.map((product: any, index: any) => (
          <SwiperSlide>
            <div className="w-full h-full" key={index}>
              <ProductItem product={product} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
