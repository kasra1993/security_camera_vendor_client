"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
// import ProductsList from "../../../../components/products/ProductsList";
import { useParams } from "next/navigation";
import ProductsList from "../../../../components/products/ProductsList";

const Categories = () => {
  const params = useParams();

  const uid = params.id;

  const getCategory = async (id: any) => {
    try {
      const respJSON = await fetch(`http://localhost:8080/getCategory/${uid}`);
      const resp = await respJSON.json();
      return resp;
    } catch (error) {
      throw error;
    }
  };

  const { data, isLoading } = useQuery(["category", uid], getCategory);

  const isDataEmpty = !Array.isArray(data) || data.length < 1 || !data;
  return (
    <div>
      <ProductsList data={data} isLoading={isLoading} />
    </div>
  );
};

export default Categories;
