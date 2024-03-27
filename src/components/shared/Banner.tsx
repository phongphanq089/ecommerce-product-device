import React from "react";
import { ImageResize } from "./ImageResize";
import { TypographyH1, TypographyP } from "../ui/Typography";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ShoppingCart } from "lucide-react";
import AnimatedCard from "../ui/AnimatedCard";

const Banner = () => {
  const variantsImage = {
    hidden: { scale: 0, x: 700 },
    show: { scale: 1, x: 0 },
  };

  const variantsDesc_1 = {
    hidden: { scale: 0, x: -200 },
    show: { scale: 1, x: 0 },
  };
  return (
    <div className="container-xxl py-10 relative overflow-hidden">
      <div className="absolute top-1/2 translate-y-[-50%] left-1/2 translate-x-[-50%] w-full text-nowrap text-center">
        <TypographyH1 className="xl:text-[200px] 2xl:text-[250px] text-color_3 opacity-[0.7]">
          Commerce X
        </TypographyH1>
      </div>
      <AnimatedCard variants={variantsImage}>
        <div className="max-w-[600px] mx-auto relative ">
          <ImageResize src={"/images/audio-banner.png"} alt="banner-hero" />
          <div className="wrapper-title xl:absolute top-1/2 xl:translate-y-[-50%] left-[90%] xl:translate-x-[-50%] w-full mb-6">
            <Badge className="badge mb-3">SPECIAL EDITION</Badge>
            <TypographyH1>
              <span className="text-color_1">High-quality</span> tech gadgets
              and accessories
            </TypographyH1>
          </div>
        </div>
      </AnimatedCard>

      <div className="description-banner lg:absolute top-[40%] lg:translate-y-[-50%] lg:left-[100px] max-w-80 w-full">
        <AnimatedCard variants={variantsDesc_1}>
          <span className="text-3xl font-bold text-color_6 pb-4 w-full inline-block border-b-2 border-color_6">
            $264*
          </span>
        </AnimatedCard>

        <AnimatedCard variants={variantsDesc_1}>
          <span className="mt-4 block">
            <span className="text-color_6 font-bold mr-1">
              #BESTSPEAKER 2024
            </span>
            AWARDS
          </span>
        </AnimatedCard>
        <AnimatedCard variants={variantsDesc_1}>
          <TypographyP>
            Our store is focused hashtag umami 3 wolf moon , helvetica snackwave
            cold-pressed meggings shaman jlanbing a very small stage in a vast
            cosmic
          </TypographyP>
        </AnimatedCard>
      </div>

      <Button className="w-fit mt-3 button-style rounded-full mx-auto">
        <div className="svg-wrapper">
          <ShoppingCart />
        </div>
        Add to cart
      </Button>
    </div>
  );
};

export default Banner;
