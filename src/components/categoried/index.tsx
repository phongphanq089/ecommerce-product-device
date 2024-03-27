import React from "react";
import ProductItem from "../shared/ProductItem";
import SearchCategoried from "../shared/SearchCategoried";
import ListCategoriedItem from "../shared/ListCategoriedItem";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import PaginationProduct from "../shared/PaginationProduct";

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
    <div>
      <SearchCategoried />
      <ListCategoriedItem />
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
