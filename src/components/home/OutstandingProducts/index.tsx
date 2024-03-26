import { TypographyH1, TypographyP } from "@/components/ui/Typography";
import React from "react";
import DetailProduct from "./DetailProduct";
import { outStandingProducts } from "@/contents/data";
import SliderImage from "./SliderImage";

const OutstandingProducts = () => {
  return (
    <div className="container-xxl">
      <div className="flex justify-center items-center flex-col text-center mb-5 md:mb-12">
        <TypographyH1>Deserve Great Sound</TypographyH1>
        <TypographyP className="max-w-lg text-lg">
          {`When a naked man's chasing a woman through an alley with a butcher,
            clearly, someone who believes he is above the law.`}
        </TypographyP>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <DetailProduct data={outStandingProducts.slice(0, 4)} />
        <div className="col-span-6 lg:p-12">
          <SliderImage />
        </div>
        <DetailProduct data={outStandingProducts.slice(4)} />
      </div>
    </div>
  );
};

export default OutstandingProducts;
