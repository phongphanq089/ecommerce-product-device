"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { ImageResize } from "@/components/shared/ImageResize";

const SliderImage = () => {
  return (
    <Swiper
      modules={[Pagination]}
      slidesPerView={1}
      pagination={{ clickable: true }}
      className="slider-oustanding-product"
    >
      <SwiperSlide>
        <ImageResize src={"/images/audio-slider-1.jpg"} alt="audio-slider-1" />
      </SwiperSlide>
      <SwiperSlide>
        <ImageResize src={"/images/audio-slider-2.jpg"} alt="audio-slider-1" />
      </SwiperSlide>
      <SwiperSlide>
        <ImageResize src={"/images/audio-slider-2.jpg"} alt="audio-slider-1" />
      </SwiperSlide>
    </Swiper>
  );
};

export default SliderImage;
