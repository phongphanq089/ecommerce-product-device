import React from "react";
import { TypographyH2 } from "../ui/Typography";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Search } from "lucide-react";

const SearchCategoried = () => {
  return (
    <div className="flex flex-wrap items-center justify-center md:justify-between mb-9 gap-5">
      <TypographyH2 className="font-bold">Give All You Need</TypographyH2>
      <div className="flex  relative w-full max-w-sm items-center space-x-2  h-[60px] rounded-full ">
        <Search className="absolute top-1/2 translate-y-[-50%] left-6 text-color_4" />
        <Input
          type="text"
          placeholder=" Search All Product"
          className="h-full focus-visible:ring-offset-0 text-xl pl-[50px] rounded-full overflow-hidden "
        />
        <Button
          type="submit"
          className="absolute top-[50%] translate-y-[-50%] right-1 h-[80%] rounded-full"
        >
          Search
        </Button>
      </div>
    </div>
  );
};

export default SearchCategoried;
