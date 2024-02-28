"use client";
import Link from "next/link";

import { useQuery } from "@tanstack/react-query";
import Loading from "./Loading";
import Image from "next/image";

export const Categories = () => {
  const {
    isLoading,
    data: categoryItems,
    isError,
    isFetching,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: async () =>
      await fetch("http://server.chiliscript.de/server/categories").then(
        (res) => res.json()
      ),
  });

  return (
    <div className="">
      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-15 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Categories</h2>

        {isLoading || isFetching || !categoryItems ? (
          <Loading />
        ) : (
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">
            {categoryItems.map((item) => (
              <Link
                key={item.title}
                href={`/categories/${item._id}`}
                className="group"
              >
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-3xl bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={400}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-lg text-center text-gray-700 font-extrabold">
                  {item.title}
                </h3>
                {/* <p className="mt-1 text-lg font-medium text-gray-900">{item.}</p> */}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
