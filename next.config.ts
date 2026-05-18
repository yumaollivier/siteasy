import type { NextConfig } from "next"

const SITEAZY = "https://siteazy.com"

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/onboarding", destination: `${SITEAZY}/onboarding`, permanent: true },
      { source: "/login", destination: `${SITEAZY}/login`, permanent: true },
      { source: "/dashboard", destination: `${SITEAZY}/dashboard`, permanent: true },
      { source: "/pricing", destination: `${SITEAZY}/pricing`, permanent: true },
      { source: "/artisans", destination: `${SITEAZY}/artisans`, permanent: true },
      { source: "/a-propos", destination: `${SITEAZY}/a-propos`, permanent: true },
      { source: "/contact", destination: `${SITEAZY}/contact`, permanent: true },
      { source: "/blog", destination: `${SITEAZY}/blog`, permanent: true },
      { source: "/blog/:path*", destination: `${SITEAZY}/blog/:path*`, permanent: true },
      { source: "/siteasy", destination: `${SITEAZY}/siteasy`, permanent: true },
      { source: "/legal/:path*", destination: `${SITEAZY}/legal/:path*`, permanent: true },
      {
        source: "/site-internet/:path*",
        destination: `${SITEAZY}/site-internet/:path*`,
        permanent: true,
      },
    ]
  },
}

export default nextConfig
