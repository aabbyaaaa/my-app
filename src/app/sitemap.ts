import type { MetadataRoute } from "next";
export const dynamic = "force-static";

const SITE_URL = "https://dgs.com.tw";
const BASE_PATH = "/hotcategory/DLAB-water-analysis";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: `${SITE_URL}${BASE_PATH}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
