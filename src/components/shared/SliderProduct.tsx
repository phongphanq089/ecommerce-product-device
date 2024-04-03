"use client";
import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductItem from "./ProductItem";
import { listProductType } from "@/types";
import TitleBlock from "./TitleBlock";

interface props {
  ListProductItem: listProductType[];
  title: string;
}

const SliderProduct = ({ ListProductItem, title }: props) => {
  return (
    <div className="mb-14">
      <TitleBlock title={title} className="mb-6" />
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 8,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 16,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 26,
          },
        }}
        modules={[Pagination]}
        className="slider-product"
      >
        {ListProductItem?.map((item, index) => {
          return (
            <SwiperSlide key={`${item.title}-${index}`}>
              <ProductItem
                title={item.title}
                badge={item.badge}
                description={item.description}
                coin={item.coin}
                delay={index * 0.1}
                link={`/product/${item.title}`}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SliderProduct;
