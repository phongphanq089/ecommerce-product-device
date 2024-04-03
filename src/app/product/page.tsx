import Categoried from "@/components/categoried";
import BannerHero from "@/components/shared/BannerHero";
import Subscribe from "@/components/shared/Subscribe";
import React from "react";

const ProductPage = () => {
  const allProduct = true;
  return (
    <>
      <BannerHero heading="Shop Now" />
      <div className="container-xxl mt-[-100px] bg-white py-10 lg:px-10 rounded-2xl  mb-14">
        <Categoried allProduct={allProduct} />
      </div>
      <Subscribe />
    </>
  );
};

export default ProductPage;
