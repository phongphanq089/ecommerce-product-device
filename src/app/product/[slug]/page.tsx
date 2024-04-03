import BannerHero from "@/components/shared/BannerHero";
import React from "react";
import DetailProduct from "@/components/ProductDetail";
import SliderProduct from "@/components/shared/SliderProduct";
import { ListProductItem } from "@/contents/data";
import BreadcrumbnNextPage from "@/components/shared/Breadcrumb";
import ProductWrapper from "@/components/layout/ProductWrapper";

const ProductDetail = () => {
  return (
    <>
      <BannerHero heading="Detail Product" />
      <ProductWrapper>
        <DetailProduct />
        <SliderProduct
          ListProductItem={ListProductItem}
          title="you make also like..."
        />
        <SliderProduct
          ListProductItem={ListProductItem}
          title="Related products"
        />
      </ProductWrapper>
    </>
  );
};

export default ProductDetail;
