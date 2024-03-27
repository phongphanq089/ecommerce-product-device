import BannerHero from "@/components/products/BannerHero";
import React from "react";

const ProductDetail = () => {
  return (
    <>
      <BannerHero heading="Shop Detail" />
      <div className="container-xxl mt-[-100px] bg-white py-10 lg:px-10 rounded-2xl  mb-14">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div>Image</div>
          <div>Content</div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
