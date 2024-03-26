import { TypographyH3 } from "@/components/ui/Typography";
import Link from "next/link";
import React from "react";

const ListMenu = () => {
  return (
    <div className="flex justify-center gap-4">
      <ul className="flex  flex-col gap-4">
        <TypographyH3>About</TypographyH3>
        <li>
          <Link href="#" className="text-xl">
            Blog
          </Link>
        </li>
        <li>
          <Link href="#" className="text-xl">
            Meet The Team
          </Link>
        </li>
        <li>
          <Link href="#" className="text-xl">
            Contact Us
          </Link>
        </li>
      </ul>
      <ul className="flex flex-col gap-4">
        <TypographyH3>Support</TypographyH3>
        <li>
          <Link href="#" className="text-xl">
            Contact Us
          </Link>
        </li>
        <li>
          <Link href="#" className="text-xl">
            Shipping
          </Link>
        </li>
        <li>
          <Link href="#" className="text-xl">
            Return
          </Link>
        </li>
        <li>
          <Link href="#" className="text-xl">
            FAQ
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ListMenu;
