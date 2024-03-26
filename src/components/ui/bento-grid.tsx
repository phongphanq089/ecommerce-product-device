import { cn } from "@/lib/utils";
import { ImageResize } from "../shared/ImageResize";
import Image from "next/image";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white  justify-between flex flex-col space-y-4 ",
        className
      )}
    >
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {/* <ImageResize
          src={"/images/banner-video.jpg"}
          alt="banner-video"
          heightSize="pt-[40%]"
        /> */}
        <Image
          src={"/images/banner-video.jpg"}
          alt="banner-video"
          width={600}
          height={600}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};
