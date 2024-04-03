"use client";
import React from "react";
import { Badge } from "../ui/badge";
import { TypographyH1, TypographyP } from "../ui/Typography";
import CountDownTimer from "../shared/CountDownTimer";
import AddQuantityCart from "../shared/AddQuantityCart";
import Link from "next/link";
import ShareSocical from "../shared/ShareSocical";
import { productDetailtype } from "@/types";

const ContentDetail = ({
  productDetail,
}: {
  productDetail: productDetailtype;
}) => {
  const endDate = new Date("2024-04-01T00:00:00");
  return (
    <div className="px-3 lg:px-6 py-4">
      <div className="flex items-center gap-3 mb-3">
        <span>{productDetail?.product?.name}</span>
        <Badge>{productDetail?.product?.quantity}</Badge>
      </div>
      <TypographyH1 className="mb-3">
        {productDetail?.product?.title}
      </TypographyH1>

      <CountDownTimer endDate={endDate} />
      <div className="flex items-center gap-3">
        <span className="text-5xl font-bold text-color_1">
          {productDetail?.product?.price}
        </span>
        <span className="line-through text-3xl font-bold text-color_4">
          {productDetail?.product?.discount}
        </span>
      </div>
      <TypographyP className="mb-6 text-xl">
        {productDetail?.product?.productInfomation}
      </TypographyP>
      <div className="bg-color_7 p-4 mb-6">
        <ul className=" text-color_6 text-md ">
          {productDetail?.policy.map((item, index) => {
            return <li key={`${item.title}-${index}`}>{item.title}</li>;
          })}
        </ul>
      </div>

      <AddQuantityCart />

      <div className="flex flex-col gap-4 pt-4  border-t border-color_5">
        <div className="flex items-center gap-4">
          <span className="text-[18px] font-bold">SKU:</span>
          <span>{productDetail?.product?.SKU}</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-[18px] font-bold">Tags:</span>
          <div className="flex flex-wrap gap-1">
            {productDetail?.tags.map((tag) => (
              <Link href={"#"} key={tag}>
                {" "}
                <Badge>{tag}</Badge>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-[18px] font-bold">Share:</span>
          <ShareSocical />
        </div>
      </div>
    </div>
  );
};

export default ContentDetail;
