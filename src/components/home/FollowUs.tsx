import React from "react";
import { TypographyH1 } from "../ui/Typography";
import { Button } from "../ui/button";
import { ImageResize } from "../shared/ImageResize";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const FollowUs = () => {
  return (
    <section className="container-xxl py-6 dark:bg-gray-800 dark:text-gray-50">
      <TypographyH1 className="lg:text-[60px] text-center mb-6">
        Follow us on Instagram
      </TypographyH1>
      <div className="grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
        <Link
          href={"#"}
          className="w-full overflow-hidden h-full rounded-3xl  col-span-2 row-span-2 shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
        >
          <ImageResize src={"/images/fllow-us-5.jpg"} alt="fllow-us-1.jpg" />
        </Link>
        <Link
          href={"#"}
          className="w-full h-full overflow-hidden  rounded-3xl  shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
        >
          <ImageResize src={"/images/fllow-us-2.jpg"} alt="fllow-us-1.jpg" />
        </Link>
        <Link
          href={"#"}
          className="w-full h-full  overflow-hidden rounded-3xl  shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
        >
          <ImageResize src={"/images/fllow-us-3.jpg"} alt="fllow-us-1.jpg" />
        </Link>
        <Link
          href={"#"}
          className="w-full h-full overflow-hidden  rounded-3xl  shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
        >
          <ImageResize src={"/images/fllow-us-4.jpg"} alt="fllow-us-1.jpg" />
        </Link>
        <Link
          href={"#"}
          className="w-full h-full overflow-hidden  rounded-3xl  shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
        >
          <ImageResize src={"/images/fllow-us-1.jpg"} alt="fllow-us-1.jpg" />
        </Link>
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
