import React from "react";

interface typography {
  children: React.ReactNode;
  className?: string;
}

export function TypographyH1({ children, className }: typography) {
  return (
    <h1
      className={`scroll-m-20 text-4xl md:text-5xl font-extrabold tracking-tight lg:text-5xl ${className}`}
    >
      {children}
    </h1>
  );
}

export function TypographyH2({ children, className }: typography) {
  return (
    <h2
      className={`scroll-m-20 border-b-[2px] border-color_2 pb-2 text-3xl font-semibold tracking-tight first:mt-0 ${className}`}
    >
      {children}
    </h2>
  );
}

export function TypographyH3({ children, className }: typography) {
  return (
    <h3
      className={`scroll-m-20 text-2xl font-semibold tracking-tight ${className}`}
    >
      {children}
    </h3>
  );
}

export function TypographyH4() {
  return (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
      People stopped telling jokes
    </h4>
  );
}

export function TypographyP({ children, className }: typography) {
  return (
    <p
      className={`leading-7 [&:not(:first-child)]:mt-2 md:[&:not(:first-child)]:mt-6 ${className}`}
    >
      {children}
    </p>
  );
}

export function TypographyBlockquote() {
  return (
    <blockquote className="mt-6 border-l-2 pl-6 italic">
      {` "After all," he said, "everyone enjoys a good joke, so it's only fair that
      they should pay for the privilege."`}
    </blockquote>
  );
}

export function TypographyLead() {
  return (
    <p className="text-xl text-muted-foreground">
      A modal dialog that interrupts the user with important content and expects
      a response.
    </p>
  );
}

export function TypographySmall() {
  return (
    <small className="text-sm font-medium leading-none">Email address</small>
  );
}
