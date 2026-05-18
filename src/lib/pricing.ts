export type PricingPlanKey = "landingPage" | "essential" | "domain"

export const PRICING_CONFIG = {
  landingPage: {
    name: "Site vitrine",
    monthly: { price: 15 },
    yearly: { price: 144 },
    features: [
      "Site vitrine professionnel",
      "Présentation de vos services & tarifs",
      "Éditeur de site complet et intuitif",
      "Nom de domaine personnalisable",
      "Générations IA (10 par jour)",
      "Support par email réactif",
    ],
    limitations: ["Pas de vente en ligne (panier / paiement)", "Accès IA limité"],
  },
  essential: {
    name: "Boutique",
    monthly: { price: 25 },
    yearly: { price: 240 },
    features: [
      "Boutique e-commerce complète",
      "Sous-domaine .siteazy.com",
      "Hébergement ultra-rapide",
      "IA illimitée",
      "Support par email standard",
    ],
    limitations: ["Nom de domaine non inclus"],
  },
  domain: {
    name: "Boutique + Domaine",
    monthly: { price: 30 },
    yearly: { price: 288 },
    features: [
      "Boutique e-commerce complète",
      "Produits illimités",
      "Domaine (.fr, .com...) inclus",
      "Hébergement ultra-rapide",
      "IA illimitée",
      "Support prioritaire",
    ],
    limitations: [],
  },
  additionalShop: {
    price: 10,
  },
} as const

export const PLANS: ReadonlyArray<{
  key: PricingPlanKey
  title: string
  subtitle: string
  cta: string
  highlighted?: boolean
  badge?: string
}> = [
  {
    key: "landingPage",
    title: "Site vitrine",
    subtitle: "Présentez votre activité sans vente en ligne",
    cta: "Essayer 14 jours gratuit",
    highlighted: false,
    badge: "14 jours offerts",
  },
  {
    key: "essential",
    title: "Boutique",
    subtitle: "Vendez en ligne avec un sous-domaine",
    cta: "Essayer 14 jours gratuit",
    highlighted: false,
    badge: "14 jours offerts",
  },
  {
    key: "domain",
    title: "Boutique + Domaine",
    subtitle: "Boutique + domaine .fr ou .com inclus",
    cta: "Essayer 14 jours gratuit",
    highlighted: true,
    badge: "Le plus complet",
  },
]

export function getPricingYearlyStrikethrough(planKey: PricingPlanKey): number {
  const plan = PRICING_CONFIG[planKey]
  return plan.monthly.price * 12
}

export function getPricingYearlySavings(planKey: PricingPlanKey): number {
  const plan = PRICING_CONFIG[planKey]
  return plan.monthly.price * 12 - plan.yearly.price
}
