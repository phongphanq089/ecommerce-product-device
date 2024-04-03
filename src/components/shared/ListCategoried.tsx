"use client";
import Link from "next/link";
import React from "react";
import { icons } from "lucide-react";
import { ImageResize } from "./ImageResize";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

interface Category {
  name: string;
  icon?: keyof typeof icons;
  image: string;
}

const listCateGoried: Category[] = [
  {
    name: "Headphones",
    icon: "Headphones",
    image: "/images/categoried/cat_1.webp",
  },
  {
    name: "Latops",
    icon: "Laptop",
    image: "/images/categoried/cat_2.webp",
  },
  {
    name: "SmartPhone",
    icon: "TabletSmartphone",
    image: "/images/categoried/cat_3.webp",
  },
  {
    name: "TeleVision",
    icon: "Tv2",
    image: "/images/categoried/cat_4.webp",
  },
  {
    name: "Speakers",
    icon: "MonitorSpeaker",
    image: "/images/categoried/cat_5.webp",
  },
  {
    name: "Games",
    icon: "Gamepad2",
    image: "/images/categoried/cat_6.png",
  },
  {
    name: "Games",
    icon: "Gamepad2",
    image: "/images/categoried/cat_7.webp",
  },
];

const ListCategoried = () => {
  return (
    <div className="container-xxl mb-14 p-4">
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
            slidesPerView: 5,
            spaceBetween: 26,
          },
        }}
        modules={[Pagination]}
        className="slider-product"
      >
        {listCateGoried?.map((item, index) => {
          return (
            <SwiperSlide key={`${item.name}-${index}`}>
              <Link
                href={"#"}
                className="text-md md:text-xl block bg-color_3 p-2  rounded-2xl relative"
              >
                <ImageResize src={item?.image} alt={item.name} />
                <span className="text-2xl font-bold absolute bottom-4 left-1/2 translate-x-[-50%]">
                  {item.name}
                </span>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ListCategoried;
