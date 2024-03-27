import AnimatedCard from "@/components/ui/AnimatedCard";
import { TypographyP } from "@/components/ui/Typography";
import { Check } from "lucide-react";
import React from "react";

interface dataProps {
  title: string;
  description: string;
}

const DetailProduct = ({ data }: { data: dataProps[] }) => {
  return (
    <div className="col-span-3">
      <ul className="space-y-3 text-sm">
        {data?.map((item, index) => {
          return (
            <li className="flex flex-col" key={`${item.title}-${index}`}>
              <AnimatedCard delay={index * 0.2}>
                <div className="flex items-center space-x-3">
                  <span className="w-fit p-1 flex justify-center items-center rounded-full bg-color_3 ">
                    <Check className="w-4 h-4" />
                  </span>
                  <span className="text-color_6 text-xl font-bold dark:text-gray-400">
                    {item?.title}
                  </span>
                </div>
                <TypographyP>{item?.description}</TypographyP>
              </AnimatedCard>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DetailProduct;
