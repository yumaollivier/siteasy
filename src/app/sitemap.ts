import { SITEASY_CANONICAL_PATH } from "@/lib/siteasy-seo"
import type { MetadataRoute } from "next"

const SITE_FR_URL = process.env.NEXT_PUBLIC_APP_URL || "https://siteasy.fr"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_FR_URL.replace(/\/$/, "")

  return [
    {
      url: `${base}${SITEASY_CANONICAL_PATH}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ]
}
