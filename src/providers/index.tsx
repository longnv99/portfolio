"use client";

import Layout from "@/components/oganisms/Layout";
import { ThemeProvider } from "next-themes";
import { FC, PropsWithChildren } from "react";

const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="theme">
      <Layout>{children}</Layout>
    </ThemeProvider>
  );
};

export default Providers;
