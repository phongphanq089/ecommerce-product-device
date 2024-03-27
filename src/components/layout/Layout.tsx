"use client";
import React from "react";
import Header from "../shared/Header";
import Footer from "../shared/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className="flex-col flex-1 min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
