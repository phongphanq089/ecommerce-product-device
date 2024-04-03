"use client";
import React, { ReactNode } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface buttonProps {
  className?: string;
  children: ReactNode;
  icon?: JSX.Element;
}

const ButtonStyle = ({ className, children, icon }: buttonProps) => {
  return (
    <Button className={cn("w-fit button-style rounded-full", className)}>
      <div className="svg-wrapper">{icon && icon}</div>
      {children}
    </Button>
  );
};

export default ButtonStyle;
