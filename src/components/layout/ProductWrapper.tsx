"use client";
import React from "react";
import BreadcrumbnNextPage from "../shared/Breadcrumb";

const ProductWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container-xxl lg:mt-[-100px] bg-white py-10 lg:px-10 rounded-2xl">
      <BreadcrumbnNextPage
        homeElement={"Home"}
        activeClasses="text-amber-500"
        listClasses="hover:underline mx-2 font-bold"
        capitalizeLinks
      />
      {children}
    </div>
  );
};

export default ProductWrapper;
