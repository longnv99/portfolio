import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    host: "https://snoopy.io.vn",
    sitemap: "https://snoopy.io.vn/sitemap.xml",
  };
}
