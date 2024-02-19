import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "@/providers";
import "../styles/index.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Snoopy",
  description: "Portfolio | Snoopy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Warning: Extra attributes from the server: cz-shortcut-listen
    // https://stackoverflow.com/questions/75337953/what-causes-nextjs-warning-extra-attributes-from-the-server-data-new-gr-c-s-c
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
