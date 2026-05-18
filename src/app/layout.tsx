import { Footer } from "@/components/marketing/footer"
import { Header } from "@/components/marketing/header"
import { SITEAZY_ORIGIN } from "@/lib/siteazy-url"
import type { Metadata } from "next"
import { Nunito } from "next/font/google"
import "./globals.css"

const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" })


const SITE_FR_URL = process.env.NEXT_PUBLIC_APP_URL || "https://siteasy.fr"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_FR_URL),
  title: {
    absolute:
      "Vous cherchez Siteasy ? C'est Siteazy (avec un Z) — Créez votre site facilement",
  },
  description:
    "Vous avez cherché « siteasy » sur Google ? Le site s'appelle Siteazy (avec un Z). Créez votre site ou boutique en ligne facilement sur siteazy.com.",
  applicationName: "Siteazy",
  authors: [{ name: "Siteazy Team", url: SITEAZY_ORIGIN }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    locale: "fr_FR",
    type: "website",
    siteName: "Siteazy",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="fr"
      className={`${nunito.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
