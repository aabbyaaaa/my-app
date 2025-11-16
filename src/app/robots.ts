import type { MetadataRoute } from "next";
export const dynamic = "force-static";

const SITE_URL = "https://dgs.com.tw";
const BASE_PATH = "/hotcategory/DLAB-water-analysis";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}${BASE_PATH}/sitemap.xml`,
    host: SITE_URL,
  };
}
