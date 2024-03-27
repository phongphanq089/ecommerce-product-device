import React from "react";
import { TypographyH1 } from "../ui/Typography";
import { Button } from "../ui/button";
import { ImageResize, RemoteImage } from "./ImageResize";
import { CircleCheck } from "lucide-react";
import { Input } from "../ui/input";

const Subscribe = () => {
  return (
    <div className="container-xxl">
      <div className="w-full rounded-[50px] relative overflow-hidden bg-color_3 mb-9">
        <div className="grid grid-cols-1 lg:grid-cols-2 ">
          <div className="py-7 pl-7 flex justify-center flex-col gap-3">
            <TypographyH1 className="lg:text-[60px]">
              Subscribe to our email newsletter and
              <span className="text-color_1">get 10% off</span>
            </TypographyH1>
            <div className="flex relative w-full items-center space-x-2 h-[60px] rounded-full ">
              <Input
                type="email"
                placeholder="Enter your email"
                className="h-full focus-visible:ring-offset-0 text-xl pl-[35px]  rounded-full overflow-hidden "
              />
              <Button
                type="submit"
                className="absolute top-[50%] translate-y-[-50%] right-1 h-[80%] rounded-full"
              >
                Subscribe
              </Button>
            </div>
            <div className="flex items-center gap-3 text-xl">
              <CircleCheck />
              Join the 10,000 users in our newsletter
            </div>
          </div>
          <div className="relative">
            <div className="hidden md:block relative">
              <ImageResize
                src={"/images/earphones_b_3.webp"}
                alt="banner-hero"
                priority={true}
                heightSize="pt-[50%] lg:pt-[70%]"
                sizes="(max-width: 768px) 30vw, (max-width: 1200px) 80vw, 100vw"
              />
            </div>
            <div className="md:absolute md:top-[10%] lg:top-[10%] left-[30%] md:translate-x-[-50%]">
              <RemoteImage
                src={"/images/watch_2.webp"}
                alt="banner-hero"
                priority={true}
                width={400}
                height={400}
                className="w-full md:max-w-[300px] lg:max-w-[300px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
