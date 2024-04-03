"use client";
import React, { Dispatch, SetStateAction } from "react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as swiper } from "swiper/types";
import { ImageResize } from "../shared/ImageResize";

const SliderMainThumbs = ({
  setThumbsSwiper,
  thumbsSwiper,
  sliderImage,
}: {
  setThumbsSwiper: Dispatch<SetStateAction<swiper | null>>;
  thumbsSwiper: swiper | null;
  sliderImage: string[] | [];
}) => {
  return (
    <Swiper
      spaceBetween={10}
      navigation={true}
      thumbs={{ swiper: thumbsSwiper }}
      modules={[FreeMode, Navigation, Thumbs]}
      className="slider-main-thumbs max-w-[600px] lg:max-w-full border border-color_2 mb-6 rounded-2xl"
    >
      {sliderImage?.map((item, index) => {
        return (
          <SwiperSlide key={`${item}-${index}`}>
            <ImageResize src={item} alt={item} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SliderMainThumbs;
