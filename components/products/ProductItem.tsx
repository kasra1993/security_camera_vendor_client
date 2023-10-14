import React from "react";
import Image from "next/image";
import CustomButton from "../CustomButton";
const ProductItem = ({ product }: any) => {
  const { description, image, instock, subcategories, model, _id } = product;

  return (
    <div className="flex  items-center justify-center bg-neutral ">
      <div className="grid grid-cols-2 lg:grid-cols-1 gap-5">
        <div className="group relative items-center justify-center overflow-hidden cursor-pointer">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href={`/product/${_id}`}>
              <Image
                className="rounded-t-lg"
                src={image}
                alt={model}
                width={200}
                height={200}
              />
            </a>
            <div className="p-5">
              <a href={`/product/${_id}`}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {model}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {description}
              </p>
              <a
                href={`/product/${_id}`}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Explore
                <svg
                  className="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
              <div className=" pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">
                  #photography
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">
                  #travel
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">
                  #fall
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;

// <div className="h-96 w-72 ">
//   <Image
//     src={image}
//     alt={model}
//     width={400}
//     height={400}
//     className="h-full w-full object-cover group-hover:rotate-3  group-hover:scale-125 transition-transform "
//   />
// </div>
// <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
// <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[65%] group-hover:translate-y-10 transition-all">
//   <h1 className="text-3xl font-bold text-white mb-10 group-hover:mb-0">
//     {model}
//   </h1>
//   {/* <p className="text-lg italic text-white mb-3">{description}</p> */}
//   <CustomButton
//     title="See More"
//     link={`/product/${_id}`}
//     containerStyles="text-white border border-white py-3 px-5 rounded"
//   />
// </div>
