import Image from "next/image";
import React from "react";

const News = () => {
  return (
    <div className="">
      <div className="w-full h-72">
        <Image
          src="/home-carousel1.png"
          alt=""
          className="w-full object-cover h-full"
          width={400}
          height={400}
        />
      </div>
      <div className="p-10">
        <h1 className="text-3xl font-extrabold my-10 text-slate-700">
          Project WORLD CUP
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
          officiis. Ipsa blanditiis, perspiciatis fugit quasi, magnam doloremque
          soluta sed laudantium corrupti eius iste sint illo, minus inventore
          natus numquam suscipit!
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
          officiis. Ipsa blanditiis, perspiciatis fugit quasi, magnam doloremque
          soluta sed laudantium corrupti eius iste sint illo, minus inventore
          natus numquam suscipit!
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
          officiis. Ipsa blanditiis, perspiciatis fugit quasi, magnam doloremque
          soluta sed laudantium corrupti eius iste sint illo, minus inventore
          natus numquam suscipit!
        </p>
      </div>
    </div>
  );
};

export default News;
