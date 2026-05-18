import type { MetadataRoute } from "next"

const SITE_FR_URL = process.env.NEXT_PUBLIC_APP_URL || "https://siteasy.fr"

export default function robots(): MetadataRoute.Robots {
  const base = SITE_FR_URL.replace(/\/$/, "")

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${base}/sitemap.xml`,
  }
}
