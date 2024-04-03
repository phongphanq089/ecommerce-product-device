import React from "react";
import { TypographyH2 } from "../ui/Typography";

const TitleBlock = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return <TypographyH2 className={className}>{title}</TypographyH2>;
};

export default TitleBlock;
