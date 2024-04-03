import React from "react";
import { ImageResize } from "./ImageResize";
import { Badge } from "../ui/badge";
import { subscribe } from "diagnostics_channel";
import { TypographyH3, TypographyH4 } from "../ui/Typography";

const listProductBigSale = [
  {
    subTitle: "NEW PRODUCT",
    title: "Release Date & Price",
    description: "TODAY'S SUPER OFFER",
    image: "/images/list-product-big-sale/sale-1.jpg",
  },
  {
    subTitle: "BIG SALE",
    title: "Biggest Discount",
    description: "UP TO 75% OFF",
    image: "/images/list-product-big-sale/sale-2.jpg",
  },
  {
    subTitle: "WEEKEND DEAL",
    title: "The Great Sale",
    description: "GIFT CARD $150",
    image: "/images/list-product-big-sale/sale-3.jpg",
  },
  {
    subTitle: "MONTH DEAL",
    title: "Spring Clean Sale",
    description: "UP TO 45% OFF",
    image: "/images/list-product-big-sale/sale-4.jpg",
  },
];

const ListProductBigSale = () => {
  return (
    <div className="container-xxl mb-14">
      <div className="grid grid-cols-1 mg:grid-cols-2 lg:grid-cols-4 gap-6">
        {listProductBigSale?.map((item, index) => {
          return (
            <div
              className="relative rounded-2xl overflow-hidden"
              key={`${item.title}-${index}`}
            >
              <ImageResize
                src={item?.image}
                alt={item?.title}
                heightSize="pt-[120%]"
              />
              <div className="absolute top-4 left-4">
                <Badge className="p-2 mb-4">{item?.subTitle}</Badge>
                <TypographyH3 className="mb-2 font-bold">
                  {item?.title}
                </TypographyH3>
                <TypographyH4 className="text-color_1">
                  {item?.description}
                </TypographyH4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListProductBigSale;
