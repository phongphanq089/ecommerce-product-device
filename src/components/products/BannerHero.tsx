import React from "react";
import { ImageResize } from "../shared/ImageResize";
import { TypographyH1 } from "../ui/Typography";

const BannerHero = ({ heading }: { heading: string }) => {
  return (
    <div className="relative mt-[-120px] z-[-1]">
      <ImageResize
        src={"/images/banner-product.jpg"}
        alt="banner-page-product"
        heightSize="pt-[40%]"
      />
      <div className="absolute bottom-[100px] left-1/2 translate-x-[-50%] w-full text-nowrap text-center">
        <TypographyH1 className="xl:text-[200px] 2xl:text-[250px] text-white opacity-[0.7]">
          {heading}
        </TypographyH1>
      </div>
    </div>
  );
};

export default BannerHero;
