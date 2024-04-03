"use client";

import React from "react";
import { TypographyH1, TypographyP } from "../ui/Typography";
import ButtonStyle from "../design-system/ButtonStyle";
import Icon from "./Icon";
import { ImageResize } from "./ImageResize";
import CountDownTimer from "./CountDownTimer";

const DiscoundProduct = () => {
  const endDate = new Date("2024-04-01T00:00:00");
  return (
    <div className="container-xxl">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="p-4 max-w-[80%] h-full flex flex-col justify-center">
          <span>Special Offers</span>
          <TypographyH1 className="text-color_1 text-[60px]">{`Flat Discount 50% off now! Don't miss!`}</TypographyH1>
          <TypographyP className="text-xl">
            {`You will learn how to animate shapes like circles, lines, and
            polygons. You'll also learn how to animate.`}
          </TypographyP>
          <CountDownTimer endDate={endDate} />
          <ButtonStyle icon={<Icon name="ShoppingCart" />}>
            Shop Now
          </ButtonStyle>
        </div>
        <div className="p-4">
          <div className="w-full mx-auto">
            <ImageResize
              src={"/images/promotion_4.webp"}
              alt="promotion_4.webp"
              heightSize="pt-[85%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoundProduct;
