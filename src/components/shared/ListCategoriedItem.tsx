"use client";
import React from "react";

import { ImageResize, RemoteImage } from "./ImageResize";

const listCategoried = [
  "/images/categoried/pc.png",
  "/images/categoried/phone.png",
  "/images/categoried/ipad.png",
  "/images/categoried/phone_d.png",
  "/images/categoried/store-card.png",
  "/images/categoried/audio.png",
];

const ListCategoriedItem = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
        {listCategoried?.map((item, index) => {
          return (
            <div
              key={`${item}-${index}`}
              className="py-2 px-4 rounded-full bg-color_2 w-[100px] h-auto cursor-pointer transition ease-in-out delay-150 hover:bg-color_3 hover:translate-y-[-5px] hover:scale-110"
            >
              <ImageResize src={item} alt="banner-hero" heightSize="pt-[70%]" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ListCategoriedItem;
