"use client";
import React from "react";
import { ImageResize } from "./ImageResize";
import { TypographyH3, TypographyP } from "../ui/Typography";
import { Button } from "../ui/button";
import { ShoppingCart } from "lucide-react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";
import { Badge } from "../ui/badge";
import AnimatedCard from "../ui/AnimatedCard";

interface productItems {
  title: string;
  badge: string;
  description: string;
  coin: string;
  delay?: number;
  link: string;
}

const ProductItem = ({
  title,
  description,
  badge,
  coin,
  delay,
  link,
}: productItems) => {
  return (
    <AnimatedCard delay={delay}>
      <CardContainer className="inter-var animate-out">
        <CardBody className="relative  bg-color_9 shadow-style group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto  h-auto rounded-3xl p-6 border  ">
          <Link href={link} className="relative">
            <CardItem translateZ="100" className="w-full">
              <ImageResize
                src={"/images/watch_2.webp"}
                alt="Headsound"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              />
            </CardItem>
            <Badge className="badge absolute top-0 right-4"> {badge}</Badge>
          </Link>
          <CardItem translateZ="50">
            <TypographyH3>{title}</TypographyH3>
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 line-clamp-2"
          >
            {description}
          </CardItem>
          <div className="flex justify-between items-center mt-3">
            <CardItem
              translateZ={20}
              as={"span"}
              className="text-3xl font-bold text-gray-900 dark:text-white"
            >
              {coin}
            </CardItem>
            <CardItem translateZ={20} as="div">
              <Button className="w-fit mt-3 button-style rounded-full">
                <div className="svg-wrapper">
                  <ShoppingCart />
                </div>
                Add to cart
              </Button>
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </AnimatedCard>
  );
};

export default ProductItem;
