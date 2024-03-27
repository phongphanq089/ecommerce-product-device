import { AlignJustify, PhoneCall, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { Button } from "../ui/button";

const menuItem = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Product",
    link: "/product",
  },
  {
    title: "Blog",
    link: "/blog",
  },
  {
    title: "Contcat",
    link: "/contact",
  },
];

const Header = () => {
  const pathname = usePathname();

  const activeLink = (path: string) => path === pathname;

  return (
    <header className="container-xxl mb-5 bg-white rounded-full">
      <nav className=" py-2 flex justify-between items-center">
        <Link href={"/"} className="flex items-center gap-1">
          <Image src={"/logo.svg"} alt="logo-image" width={70} height={70} />
          <span className="text-2xl font-bold">Commerce X</span>
        </Link>
        <ul className="xl:flex item-center gap-5">
          {menuItem?.map((item, index) => {
            return (
              <li
                className={`hidden  text-xl xl:flex items-center hover:text-color_1 ${
                  activeLink(item.link) ? "text-color_1 font-bold" : ""
                }`}
                key={`${item.title}-${index}`}
              >
                <Link href={item.link}>{item.title}</Link>
              </li>
            );
          })}

          <div className="flex items-center gap-1 lx:gap-3 cursor-pointer">
            <AlignJustify className="w-[35px]  h-[35px] xl:hidden" />
            <span className="flex items-center gap-1 cursor-pointer ml-5">
              <ShoppingCart />
              <span className="flex items-center justify-center p-2 bg-color_1 text-white rounded-full w-auto h-5">
                5
              </span>
            </span>

            <div className="hidden md:block">
              <Button
                className="md:flex w-fit button-style rounded-full ml-7 "
                size={"lg"}
              >
                <div className="svg-wrapper">
                  <PhoneCall className="text-white" />
                </div>
                <span className="font-bold text-md lg:text-xl text-white">
                  (025) 3686 25 16
                </span>
              </Button>
            </div>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
