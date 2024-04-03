import React from "react";
import { ImageResize } from "./ImageResize";
import { TypographyH1 } from "../ui/Typography";

const BannerHero = ({ heading }: { heading: string }) => {
  return (
    <div className="relative lg:mt-[-120px] z-[-1]">
      <ImageResize
        src={"/images/banner-product.jpg"}
        alt="banner-page-product"
        heightSize="pt-[40%]"
      />
      <div className="absolute bottom-[30px]  md:bottom-[100px] left-1/2 translate-x-[-50%] w-full text-nowrap text-center">
        <TypographyH1 className="xl:text-[200px] 2xl:text-[250px] text-white opacity-[0.7]">
          {heading}
        </TypographyH1>
      </div>
    </div>
  );
};

export default BannerHero;
