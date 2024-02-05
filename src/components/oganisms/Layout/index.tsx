"use client";

import Footer from "@/components/molecules/Footer";
import Header from "@/components/molecules/Header";
import { FC, ReactNode, useEffect } from "react";

interface IProps {
  children: ReactNode;
}

const Layout: FC<IProps> = ({ children }) => {
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
