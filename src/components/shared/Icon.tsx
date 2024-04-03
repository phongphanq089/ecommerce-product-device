"use client";
import React from "react";
import { icons } from "lucide-react";

interface props {
  name: keyof typeof icons;
  color?: string;
  size?: string;
  className?: string;
}

const Icon = ({ name, color, size, className }: props) => {
  const LucideIcon = icons[name];
  return <LucideIcon color={color} size={size} className={className} />;
};

export default Icon;
