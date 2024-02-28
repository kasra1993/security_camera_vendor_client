"use client";
import React from "react";
import { useParams } from "next/navigation";
import ProductsList from "../../../components/products/ProductsList";
import { useSelector, useDispatch } from "react-redux";
import { getSubCategories } from "../../../redux/productSlice";
import { useEffect } from "react";

const SubCategories = () => {
  const params = useParams();
  const id = params.id;

  const dispatch = useDispatch();
  const subCategories = useSelector((state) => state.products.subCategories);
  const subCategoriesStatus = useSelector(
    (state) => state.products.subCategoriesStatus
  );

  useEffect(() => {
    dispatch(getSubCategories(id));
  }, [dispatch, id]);
  // const getCategory = async (id) => {
  //   try {
  //     const respJSON = await fetch(
  //       `http://server.chiliscript.de/server/getCategory/${uid}`
  //     );
  //     const resp = await respJSON.json();
  //     return resp;
  //   } catch (error) {
  //     throw error;
  //   }
  // };

  // const { data, isLoading } = useQuery(["category", uid], getCategory);

  // const isDataEmpty = !Array.isArray(data) || data.length < 1 || !data;
  return (
    <div>
      <ProductsList data={subCategories} status={subCategoriesStatus} />
    </div>
  );
};

export default SubCategories;
