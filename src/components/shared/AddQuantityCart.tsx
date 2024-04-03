"use client";
import React from "react";
import ButtonStyle from "../design-system/ButtonStyle";
import Icon from "./Icon";

const AddQuantityCart = () => {
  return (
    <div className="flex items-center gap-5 mb-6">
      <div className="flex items-center justify-between w-[150px] px-5 py-1 bg-color_3 rounded-2xl text-[20px] font-bold">
        <span>-</span>
        <span>1</span>
        <span>+</span>
      </div>
      <ButtonStyle icon={<Icon name="ShoppingCart" />}>Add to cart</ButtonStyle>
    </div>
  );
};

export default AddQuantityCart;
