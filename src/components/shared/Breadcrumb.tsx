import React, { ReactNode } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import Icon from "./Icon";
import { usePathname } from "next/navigation";
import Link from "next/link";

type TBreadCrumbProps = {
  homeElement: ReactNode;
  separator?: ReactNode;
  listClasses?: string;
  activeClasses?: string;
  capitalizeLinks?: boolean;
};

const BreadcrumbnNextPage = ({
  homeElement,
  separator,
  listClasses,
  activeClasses,
  capitalizeLinks,
}: TBreadCrumbProps) => {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);

  return (
    <Breadcrumb className="p-3 mb-4 bg-color_3 rounded-2xl">
      <BreadcrumbList>
        <BreadcrumbItem className={listClasses}>
          <Link href={"/"}>{homeElement}</Link>
        </BreadcrumbItem>
        {pathNames.length > 0 &&
          (separator ? (
            separator
          ) : (
            <BreadcrumbSeparator>
              <Icon name="ChevronRight" />
            </BreadcrumbSeparator>
          ))}

        {pathNames.map((link, index) => {
          let href = `/${pathNames.slice(0, index + 1).join("/")}`;
          let itemClasses =
            paths === href ? `${listClasses} ${activeClasses}` : listClasses;
          let itemLink = capitalizeLinks
            ? link[0].toUpperCase() + link.slice(1, link.length)
            : link;
          return (
            <React.Fragment key={index}>
              <BreadcrumbItem className={itemClasses}>
                <Link href={href}>{itemLink}</Link>
              </BreadcrumbItem>
              {pathNames.length !== index + 1 &&
                (separator ? (
                  separator
                ) : (
                  <BreadcrumbSeparator>
                    <Icon name="ChevronRight" />
                  </BreadcrumbSeparator>
                ))}
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadcrumbnNextPage;
