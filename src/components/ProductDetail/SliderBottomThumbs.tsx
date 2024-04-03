"use client";
import React, { Dispatch, SetStateAction } from "react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as swiper } from "swiper/types";
import { ImageResize } from "../shared/ImageResize";

const SliderBottomThumbs = ({
  setThumbsSwiper,
  sliderImage,
}: {
  setThumbsSwiper: Dispatch<SetStateAction<swiper | null>>;
  sliderImage: string[] | [];
}) => {
  return (
    <Swiper
      onSwiper={(swiper: any) => setThumbsSwiper(swiper)}
      spaceBetween={10}
      slidesPerView={4}
      freeMode={true}
      watchSlidesProgress={true}
      modules={[FreeMode, Navigation, Thumbs]}
      className="slider-bottom-thumbs"
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

export default SliderBottomThumbs;
