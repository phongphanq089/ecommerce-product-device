"use client";
import React from "react";
import { TypographyH1, TypographyP } from "../ui/Typography";
import { ImageResize } from "./ImageResize";
import ButtonStyle from "../design-system/ButtonStyle";
import Icon from "./Icon";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const bannerSlider = [
  {
    sub: "Iphone",
    title: "On Sale At Up To 25% Off",
    description: "By top product on ecomal",
    imageProduct: "/images/banner-slider/slide1-iphone.png",
    bannerBg:
      "https://files.123freevectors.com/wp-content/original/177055-blue-purple-and-white-distressed-watercolour-background-image.jpg",
    height: "pt-[109%]",
  },
  {
    sub: "Iphone",
    title: "On Sale At Up To 25% Off",
    description: "By top product on ecomal",
    imageProduct: "/images/banner-slider/slide1-watches.png",
    bannerBg:
      "https://images.rawpixel.com/image_social_landscape/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjU0NmJhdGNoMy1teW50LTM0LWJhZGdld2F0ZXJjb2xvcl8xLmpwZw.jpg",
    height: "pt-[65%]",
  },
  {
    sub: "Iphone",
    title: "On Sale At Up To 25% Off",
    description: "By top product on ecomal",
    imageProduct: "/images/banner-slider/slide1-audio.png",
    bannerBg:
      "https://images.rawpixel.com/image_social_landscape/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjU0NmJhdGNoMy1teW50LTM0LWJhZGdld2F0ZXJjb2xvcl8xLmpwZw.jpg",
    height: "pt-[100%]",
  },
];
const BannerHome = () => {
  return (
    <div className="container-xxl mb-4">
      <Swiper
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="slider-banner"
      >
        {bannerSlider?.map((item, index) => {
          return (
            <SwiperSlide key={`${item.title}-${index}`}>
              <div
                className="grid grid-cols-1 md:grid-cols-2 gap-3 bg-color_3 rounded-3xl h-[600px] overflow-hidden"
                style={{
                  backgroundImage: `url(${item.bannerBg})`,
                }}
              >
                <div className="p-6 flex flex-col justify-center">
                  <TypographyH1 className="mb-4">
                    <span className="text-color_1">Iphone</span> On Sale At Up
                    To 25% Off
                  </TypographyH1>
                  <TypographyP className="md:[&:not(:first-child)]:mt-0 text-3xl mb-4">
                    By top product on ecomal
                  </TypographyP>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl font-semibold">From: </span>
                    <span className="text-4xl font-bold text-color_1">
                      $399.99
                    </span>
                  </div>
                  <ButtonStyle icon={<Icon name="ShoppingCart" />}>
                    Shop Now
                  </ButtonStyle>
                </div>
                <div className="p-3 relative">
                  <div className="w-full h-full absolute md:top-[65%] translate-y-[-50%] ">
                    <ImageResize
                      src={item.imageProduct}
                      alt="banner-hero"
                      heightSize={item.height}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default BannerHome;
