import React from "react";
import { ImageResize } from "../shared/ImageResize";
import { TypographyH1, TypographyP } from "../ui/Typography";
import { Button } from "../ui/button";
import { Play } from "lucide-react";
import AnimatedCard from "../ui/AnimatedCard";

const BannerVideo = () => {
  const variantsDesc_1 = {
    hidden: { scale: 0 },
    show: { scale: 1 },
  };
  return (
    <div className="relative mb-16">
      <ImageResize
        src={"/images/banner-video.jpg"}
        alt="banner-video"
        heightSize="pt-[100%] md:pt-[40%]"
      />
      <div className="absolute bottom-0 left-0 bg-color_5 py-12 w-full h-full ">
        <div className="container-xxl relative h-full w-full text-center flex justify-center items-center flex-col">
          <AnimatedCard variants={variantsDesc_1}>
            <TypographyH1 className="text-white text-xl md:text-2xl lg:text-3xl">
              Enjoy the Music
            </TypographyH1>
          </AnimatedCard>
          <AnimatedCard variants={variantsDesc_1}>
            <TypographyP className="text-white max-w-[600px] text-xl mx-auto">
              {`When a naked man's chasing a woman through an alley with a butcher,
            clearly, someone who believes he is above the law.`}
            </TypographyP>
          </AnimatedCard>

          <Button className="w-fit mt-3 button-style rounded-full mx-auto">
            <div className="svg-wrapper">
              <Play />
            </div>
            Play Video
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BannerVideo;
