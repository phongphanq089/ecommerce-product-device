"use client";
import React, { useState } from "react";
import { Swiper as swiper } from "swiper/types";
import SliderMainThumbs from "./SliderMainThumbs";
import SliderBottomThumbs from "./SliderBottomThumbs";
import { productDetail } from "@/contents/data-product-detail";
import ContentDetail from "./ContentDetail";

const DetailProduct = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<swiper | null>(null);

  const sliderImage: string[] = productDetail.images;

  return (
    <div className="mb-14">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          <SliderMainThumbs
            thumbsSwiper={thumbsSwiper}
            sliderImage={sliderImage}
            setThumbsSwiper={setThumbsSwiper}
          />
          <SliderBottomThumbs
            setThumbsSwiper={setThumbsSwiper}
            sliderImage={sliderImage}
          />
        </div>
        <div>
          <ContentDetail productDetail={productDetail} />
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
