"use client";
import React from "react";
import { TypographyH1 } from "../ui/Typography";
import { Button } from "../ui/button";
import { ImageResize } from "../shared/ImageResize";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import AnimatedCard from "../ui/AnimatedCard";

const listImage = [
  "/images/fllow-us-5.jpg",
  "/images/fllow-us-4.jpg",
  "/images/fllow-us-3.jpg",
  "/images/fllow-us-2.jpg",
  "/images/fllow-us-1.jpg",
];

const FollowUs = () => {
  const variants = {
    hidden: { scale: 0 },
    show: { scale: 1 },
  };
  return (
    <section className="container-xxl py-6 dark:bg-gray-800 dark:text-gray-50">
      <TypographyH1 className="lg:text-[60px] text-center mb-6">
        Follow us on Instagram
      </TypographyH1>
      <div className="grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
        {listImage?.map((item, index) => {
          return (
            <Link
              href={"#"}
              key={`${item}-${index}`}
              className={cn(
                "w-full h-full overflow-hidden  rounded-3xl  shadow-sm  dark:bg-gray-500 aspect-square",
                index === 0
                  ? "min-h-96 col-span-2 row-span-2 shadow-sm  md:col-start-3 md:row-start-1"
                  : "min-h-48"
              )}
            >
              <AnimatedCard variants={variants} delay={index * 0.2}>
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    textShadow: "0px 0px 4px gray",
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <ImageResize src={item} alt="image" />
                </motion.div>
              </AnimatedCard>
            </Link>
          );
        })}
      </div>
      <div className="flex justify-center mt-9">
        <Button className="h-[70px] px-9 text-xl rounded-full">
          Follow Us
          <ArrowRight className="ml-3" />
        </Button>
      </div>
    </section>
  );
};

export default FollowUs;
