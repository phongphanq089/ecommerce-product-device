import React from "react";
import ProductItem from "../shared/ProductItem";

import SearchCategoried from "../shared/SearchCategoried";
import ListCategoriedItem from "../shared/ListCategoriedItem";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const Categoried = () => {
  return (
    <div>
      <SearchCategoried />
      <ListCategoriedItem />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
      <div className="flex justify-center mt-9">
        <Button className="h-[70px] px-9 text-xl rounded-full">
          Browse all product
          <ArrowRight className="ml-3" />
        </Button>
      </div>
    </div>
  );
};

export default Categoried;
