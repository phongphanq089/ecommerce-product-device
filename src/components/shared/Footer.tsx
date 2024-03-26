import Link from "next/link";
import React from "react";
import { TypographyH1, TypographyH3 } from "../ui/Typography";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import ListMenu from "./Footer/ListMenu";
import SocialMedia from "./Footer/SocialMedia";

const Footer = () => {
  return (
    <footer className="overflow-hidden">
      <div className="container-xxl relative ">
        <div className="absolute top-1/2 translate-y-[-50%] left-1/2 translate-x-[-50%] w-full text-nowrap text-center z-[-1]">
          <TypographyH1 className="text-[100px] md:text-[200px] lg:text-[250px] text-color_3 opacity-[0.6]">
            Commerce X
          </TypographyH1>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between w-full">
          <ListMenu />
          <SocialMedia />
        </div>

        <div className="w-full text-center md:flex md:items-center md:justify-between py-10">
          <span className="text-xl text-color_6 sm:text-center ">
            © 2023{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Flowbite™
            </a>
            . All Rights Reserved.
          </span>
          <ul className="flex justify-center flex-wrap items-center mt-3 text-sm font-medium text-color_6  sm:mt-0">
            <li>
              <a href="#" className="text-xl hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>

            <li>
              <a href="#" className="text-xl hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
