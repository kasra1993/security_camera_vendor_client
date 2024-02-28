"use client";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../components/Loading";
import Image from "next/image";
import { getCategories } from "../../redux/productSlice";
import { useEffect } from "react";

const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.products.categories);
  const categoriesStatus = useSelector(
    (state) => state.products.categoriesStatus
  );

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div className="h-screen">
      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-15 lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl font-bold text-center my-10">Categories</h2>

        {categoriesStatus === "LOADING" ? (
          <Loading />
        ) : (
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 xl:gap-x-8 ">
            {categories?.map((item) => (
              <Link
                key={item.title}
                href={`/categories/${item._id}`}
                className="group border p-5 rounded-2xl"
              >
                <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-3xl  xl:aspect-h-8 xl:aspect-w-7">
                  <Image
                    src={item.image.url}
                    alt={item.title}
                    width={200}
                    height={200}
                    className=" object-contain object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-lg text-center text-gray-700 font-extrabold">
                  {item.title}
                </h3>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default Categories;
