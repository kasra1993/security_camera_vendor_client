"use client";
import React, { useState } from "react";
import Image from "next/image";
import { CustomButton } from ".";

const ProductCard = ({ product }) => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    Picture,
    Series,
    Model,
    Features,
    Lens,
    BuiltInMic,
    AI,
    IO,
    BuiltInSpeaker,
    Protection,
    OnBoardStorage,
    Material,
    Price,
  } = product;

  return (
    <div className="product-card group w-1/4 border border-slate-300 rounded-lg text-center">
      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src={Picture}
          alt="Camera Image"
          width={200}
          height={50}
          priority
          className="object-contain"
        />
      </div>
      <div className="product-card">
        <h2>
          {Series} {Model}
        </h2>
      </div>
      <p className="flex mt-6 text-[32px] font-extrabold">
        {/* <span className="font-medium self-end text-[14px]">$</span> */}
        <span className="self-start text-[14px] font-semibold">$</span>
        {Price}
      </p>
      <div className="product-card-btn border rounded-lg bg-white py-2 w-1/2 mx-auto">
        <CustomButton
          title="View More"
          containerStyles="w-full rounded-full bg-blue "
          textStyles="text-black text-[14px]  font-bold "
          rightIcon="/right-left-icon.gif"
          handleClick={() => setIsOpen(true)}
          link={""}
        />
      </div>
    </div>
  );
};

export default ProductCard;
