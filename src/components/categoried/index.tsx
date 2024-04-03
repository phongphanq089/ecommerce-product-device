import React from "react";
import ProductItem from "../shared/ProductItem";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import PaginationProduct from "../shared/PaginationProduct";
import { TypographyH1 } from "../ui/Typography";

const ListProductItem = [
  {
    badge: "Apple Watch",
    title: "HeadePhone",
    description:
      "orem ipsum dolor sit amet consectetur adipiscing elit tortor ornare mollis nisi odio sit tortor sem est et augue orci fames velit.",
    coin: " $599",
  },
  {
    badge: "Apple Watch",
    title: "HeadePhone",
    description:
      "orem ipsum dolor sit amet consectetur adipiscing elit tortor ornare mollis nisi odio sit tortor sem est et augue orci fames velit.",
    coin: " $599",
  },
  {
    badge: "Apple Watch",
    title: "HeadePhone",
    description:
      "orem ipsum dolor sit amet consectetur adipiscing elit tortor ornare mollis nisi odio sit tortor sem est et augue orci fames velit.",
    coin: " $599",
  },
  {
    badge: "Apple Watch",
    title: "HeadePhone",
    description:
      "orem ipsum dolor sit amet consectetur adipiscing elit tortor ornare mollis nisi odio sit tortor sem est et augue orci fames velit.",
    coin: " $599",
  },
  {
    badge: "Apple Watch",
    title: "HeadePhone",
    description:
      "orem ipsum dolor sit amet consectetur adipiscing elit tortor ornare mollis nisi odio sit tortor sem est et augue orci fames velit.",
    coin: " $599",
  },
  {
    badge: "Apple Watch",
    title: "HeadePhone",
    description:
      "orem ipsum dolor sit amet consectetur adipiscing elit tortor ornare mollis nisi odio sit tortor sem est et augue orci fames velit.",
    coin: " $599",
  },
  {
    badge: "Apple Watch",
    title: "HeadePhone",
    description:
      "orem ipsum dolor sit amet consectetur adipiscing elit tortor ornare mollis nisi odio sit tortor sem est et augue orci fames velit.",
    coin: " $599",
  },
  {
    badge: "Apple Watch",
    title: "HeadePhone",
    description:
      "orem ipsum dolor sit amet consectetur adipiscing elit tortor ornare mollis nisi odio sit tortor sem est et augue orci fames velit.",
    coin: " $599",
  },
];

const Categoried = ({ allProduct }: { allProduct?: boolean }) => {
  return (
    <div className="container-xxl mb-14">
      {/* <SearchCategoried />
      <ListCategoriedItem /> */}
      <div className="my-6 py-6 flex items-center justify-between border-b-2 border-color_2">
        <TypographyH1>Best Sellers</TypographyH1>
        <ul className="flex items-center gap-4 text-2xl font-bold ">
          <li className="active text-color_1">Smartphone</li>
          <li>Laptops</li>
          <li>Iwatch</li>
          <li>Accessories</li>
        </ul>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {ListProductItem?.map((item, index) => {
          return (
            <ProductItem
              key={`${item.title}-${index}`}
              title={item.title}
              badge={item.badge}
              description={item.description}
              coin={item.coin}
              delay={index * 0.1}
              link={`/product/${item.title}`}
            />
          );
        })}
      </div>
      <div className="flex justify-center mt-9">
        {allProduct ? (
          <PaginationProduct />
        ) : (
          <Button className="h-[70px] px-9 text-xl rounded-full">
            Browse all product
            <ArrowRight className="ml-3" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default Categoried;
