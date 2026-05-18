export const SITEAZY_SITEASY_PATH = "/siteasy" as const

export const SITEASY_CANONICAL_PATH = "/" as const

export const SITEASY_KEYWORDS = [
  "siteasy",
  "site easy",
  "siteasy.lu",
  "siteasy lu",
  "siteazy",
  "siteazy.com",
  "site azy",
  "site a easy",
  "siteazy siteasy",
  "siteasy siteazy",
  "boutique en ligne siteazy",
  "créer site internet siteazy",
  "alternative siteasy",
  "plateforme e-commerce française",
  "site internet artisan",
  "siteazy france",
  "siteazy luxembourg",
  "confusion siteasy siteazy",
] as const

export interface SiteasyFaqItem {
  readonly question: string
  readonly answer: string
}

export const SITEASY_FAQ: readonly SiteasyFaqItem[] = [
  {
    question: "Je cherche « Siteasy » sur Google : quel est le bon site ?",
    answer:
      "Si vous voulez créer un site internet facilement pour votre activité (artisan, commerçant), le bon outil est Siteazy sur siteazy.com. « Siteasy » est une petite faute de frappe que beaucoup de gens font !",
  },
  {
    question: "Siteazy et Siteasy, est-ce la même entreprise ?",
    answer:
      "Non ! Siteazy (siteazy.com) est notre outil conçu spécialement pour vous aider à créer votre site vous-même, très simplement. Il peut exister d'autres agences qui utilisent le mot Siteasy, mais elles n'ont rien à voir avec nous.",
  },
  {
    question: "Pourquoi tant de gens tapent « siteasy » au lieu de « siteazy » ?",
    answer:
      "Parce que notre but est de rendre la création de votre site 'easy' (facile) ! Ça se prononce pareil, mais pour nous trouver, il faut juste penser à mettre un 'Z'.",
  },
  {
    question: "Concrètement, comment Siteazy m'aide à faire mon site ?",
    answer:
      "Vous n'avez besoin d'aucune compétence en informatique. Vous nous dites quel est votre métier, et notre outil prépare les textes, la mise en page et les images pour vous. Ensuite, vous pouvez tout modifier simplement en discutant avec notre assistant.",
  },
  {
    question: "Est-ce que je dois payer un devis d'agence ?",
    answer:
      "Non, surtout pas. Vous ne payez pas des milliers d'euros pour la création. Siteazy fonctionne avec un petit abonnement mensuel (à partir de 15€) qui inclut tout : l'outil, l'hébergement de votre site sur internet et l'assistance.",
  },
] as const

export const SITEASY_META_TITLE =
  "Vous cherchez Siteasy ? C'est Siteazy (avec un Z) — Créez votre site facilement"

export const SITEASY_META_DESCRIPTION =
  "Vous avez cherché « siteasy » sur Google ? Bonne direction ! Le site s'appelle Siteazy (avec un Z). Créez votre site ou boutique en ligne facilement. Essai gratuit 14 jours."
  
export function buildSiteasyJsonLd(siteazyUrl: string, pageUrl: string) {

  return [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: SITEASY_META_TITLE,
      description: SITEASY_META_DESCRIPTION,
      inLanguage: "fr-FR",
      isPartOf: {
        "@type": "WebSite",
        "@id": `${siteazyUrl}#website`,
        url: siteazyUrl,
        name: "Siteazy",
        alternateName: ["Siteazy.com", "Site Azy"],
      },
      about: {
        "@type": "SoftwareApplication",
        name: "Siteazy",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "EUR",
          description: "Essai gratuit 14 jours",
        },
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${siteazyUrl}/og-image.png`,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Accueil",
          item: siteazyUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Siteazy — vous cherchiez Siteasy ?",
          item: pageUrl,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: SITEASY_FAQ.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${siteazyUrl}#organization`,
      name: "Siteazy",
      url: siteazyUrl,
      logo: `${siteazyUrl}/og-image.png`,
      sameAs: [],
      description:
        "Plateforme française de création de boutiques en ligne et sites vitrines pour artisans, créateurs et indépendants.",
    },
  ]
}
