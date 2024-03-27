import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "@/providers";
import "../styles/index.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Snoopy",
  description: "Portfolio | Snoopy",
  abstract: "Portfolio | Snoopy",
  viewport:
    "width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1",
  authors: {
    name: "Nguyen Van Long | Snoopy",
    url: "https://github.com/longnv99",
  },
  creator: "Vercel",
  generator: "portfolio, nextjs",
  keywords: "portfolio, https://snoopy.io.vn, snoopy",
  referrer: "origin",
  themeColor: "#00a98e",
  publisher: "index, follow",
  openGraph: {
    type: "website",
    url: "https://snoopy.io.vn",
    title: "Portfolio | Snoopy",
    description: "Portfolio | Snoopy",
    siteName: "Portfolio | Snoopy",
    images: [
      {
        url: "https://res.cloudinary.com/dpkqnzvmx/image/upload/v1711539559/portfolio-seo_z0tz3i.png",
        alt: "Portfolio | Snoopy",
        width: 600,
        height: 600,
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://snoopy.io.vn",
    creator: "Vercel",
    images:
      "https://res.cloudinary.com/dpkqnzvmx/image/upload/v1711539559/portfolio-seo_z0tz3i.png",
  },
  appleWebApp: {
    capable: true,
    title: "Portfolio | Snoopy",
    statusBarStyle: "black-translucent",
  },
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
