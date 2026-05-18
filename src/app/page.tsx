import { SiteasyLandingPage } from "@/components/marketing/siteasy-landing-page"
import {
  buildSiteasyJsonLd,
  SITEASY_CANONICAL_PATH,
  SITEASY_KEYWORDS,
  SITEASY_META_DESCRIPTION,
  SITEASY_META_TITLE,
} from "@/lib/siteasy-seo"
import { SITEAZY_ORIGIN } from "@/lib/siteazy-url"
import type { Metadata } from "next"

const SITE_FR_URL = process.env.NEXT_PUBLIC_APP_URL || "https://siteasy.fr"
const CANONICAL = `${SITE_FR_URL}${SITEASY_CANONICAL_PATH}`

export const metadata: Metadata = {
  title: {
    absolute: SITEASY_META_TITLE,
  },
  description: SITEASY_META_DESCRIPTION,
  keywords: [...SITEASY_KEYWORDS],
  authors: [{ name: "Siteazy Team", url: SITEAZY_ORIGIN }],
  category: "technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: CANONICAL,
    languages: {
      "fr-FR": CANONICAL,
    },
  },
  openGraph: {
    title: SITEASY_META_TITLE,
    description: SITEASY_META_DESCRIPTION,
    url: CANONICAL,
    siteName: "Siteazy",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Siteazy — plateforme boutique en ligne (recherche Siteasy)",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITEASY_META_TITLE,
    description: SITEASY_META_DESCRIPTION,
    creator: "@siteazy",
    images: ["/og-image.png"],
  },
  other: {
    "geo.region": "FR",
    "geo.placename": "France",
  },
}

export default function SiteasyPage() {
  const jsonLd = buildSiteasyJsonLd(SITEAZY_ORIGIN, CANONICAL)

  return (
    <>
      {jsonLd.map((schema) => (
        <script
          key={
            "@type" in schema && typeof schema["@type"] === "string"
              ? schema["@type"]
              : "schema"
          }
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <SiteasyLandingPage />
    </>
  )
}
