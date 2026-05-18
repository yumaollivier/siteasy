"use client"

import { CheckList } from "@/components/marketing/check-list"
import { MarketingHero } from "@/components/marketing/marketing-hero"
import { PricingSection } from "@/components/marketing/pricing-section"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MARKETING_FADE_IN, MARKETING_STAGGER_CONTAINER } from "@/lib/motion-variants"
import { SITEASY_FAQ } from "@/lib/siteasy-seo"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2, Globe, Search, Sparkles, Store, Zap } from "lucide-react"
import Image from "next/image"
import { SiteazyLink } from "@/components/siteazy-link"

const clarificationPoints = [
  "Vous avez tapé « siteasy » ou « site easy » dans Google",
  "Vous cherchez une plateforme simple pour vendre en ligne",
  "Vous voulez un site vitrine ou une boutique sans coder",
] as const

const siteazyBenefits = [
  {
    icon: Sparkles,
    title: "Création guidée",
    description:
      "Décrivez votre métier : Siteazy propose structure, textes et visuels adaptés à votre activité.",
  },
  {
    icon: Store,
    title: "Boutique ou vitrine",
    description: "Vendez vos produits, prestations ou forfaits. Paiements sécurisés avec Stripe.",
  },
  {
    icon: Zap,
    title: "En ligne en quelques minutes",
    description:
      "Pas de développeur, pas de WordPress compliqué. Vous vous concentrez sur votre savoir-faire.",
  },
  {
    icon: Globe,
    title: "Visible sur Google",
    description:
      "Pages optimisées pour le référencement local : artisans, commerces, indépendants.",
  },
] as const

export function SiteasyLandingPage() {
  const fadeIn = MARKETING_FADE_IN
  const staggerContainer = MARKETING_STAGGER_CONTAINER

  return (
    <article itemScope itemType="https://schema.org/WebPage">
      <meta itemProp="name" content="Siteazy — vous cherchiez Siteasy ?" />
      <MarketingHero
        backgroundImageSrc="/artisan_hero.png"
        backgroundImageAlt="Artisan au travail — Siteazy boutique en ligne"
        fadeIn={fadeIn}
        staggerContainer={staggerContainer}
        sectionClassName="relative overflow-hidden py-20 lg:py-32 min-h-[85vh] flex items-center justify-center"
        badge={
          <span className="inline-flex items-center gap-2 rounded-full border bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <Search className="h-4 w-4" aria-hidden />
            Recherche : siteasy → Siteazy
          </span>
        }
        title={'Vous cherchiez "Siteasy" ?'}
        description={
          "Pas d'inquiétude, vous êtes au bon endroit ! Beaucoup de gens nous cherchent en tapant « siteasy » ou « site easy ». En réalité, ça s'écrit Siteazy (avec un Z). Vous pouvez maintenant créer votre site internet ou votre boutique facilement, sans aucune connaissance en informatique."
        }
        cta={
          <div className="flex flex-col items-center gap-4 pt-4">
            <Button
              asChild
              size="lg"
              className="h-12 px-8 text-lg rounded-full font-bold bg-accent hover:scale-105 hover:-rotate-1 hover:shadow-lg transition-all duration-300"
            >
              <SiteazyLink href="/onboarding">
                Commencer mon essai gratuit <ArrowRight className="ml-2 h-5 w-5" />
              </SiteazyLink>
            </Button>
            <p className="text-sm text-muted-foreground flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0" aria-hidden />
                14 jours d&apos;essai gratuit
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0" aria-hidden />
                siteazy.com — pas siteasy
              </span>
            </p>
          </div>
        }
      />

      <section
        className="py-20 bg-gradient-to-br from-primary/20 to-accent/10 border-y"
        aria-labelledby="siteasy-clarification-heading"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="container px-4 md:px-6 max-w-4xl mx-auto space-y-8"
        >
          <h2
            id="siteasy-clarification-heading"
            className="text-3xl font-bold sm:text-4xl text-center"
          >
            Pourquoi s&apos;appeler Siteazy avec un Z ?
          </h2>
          <p className="text-lg text-muted-foreground text-center leading-relaxed">
            Parce que créer un site internet doit être &quot;Easy&quot; (facile). Beaucoup de nos futurs
            clients nous cherchent en tapant <strong>&quot;Siteasy&quot;</strong> ou{" "}
            <strong>&quot;Site Easy&quot;</strong>. Pour éviter que vous ne vous perdiez, nous avons créé
            cette page. Vous êtes bien chez le copilote web des artisans et des TPE.
          </p>
          <CheckList items={[...clarificationPoints]} variant="simple" />
        </motion.div>
      </section>

      <section className="py-24 bg-background" aria-labelledby="siteazy-benefits-heading">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="container px-4 md:px-6"
        >
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <h2
              id="siteazy-benefits-heading"
              className="text-3xl font-bold sm:text-4xl md:text-5xl"
            >
              Pourquoi choisir Siteazy après une recherche « siteasy » ?
            </h2>
            <p className="text-lg text-muted-foreground">
              Si vous avez tapé &quot;siteasy&quot;, c&apos;est que vous cherchez quelque chose de simple et
              rapide. C&apos;est exactement pourquoi Siteazy existe : pour que vous puissiez être visible
              sur internet en quelques minutes, sans vous prendre la tête avec la technique.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {siteazyBenefits.map((item) => (
              <Card key={item.title} className="border-2 hover:border-primary/30 transition-colors">
                <CardHeader className="pb-2">
                  <item.icon className="h-8 w-8 text-primary mb-2" aria-hidden />
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </section>

      <section
        className="relative py-24 md:py-40 bg-background overflow-hidden"
        aria-labelledby="siteazy-proof-heading"
      >
        <div className="md:absolute inset-y-0 right-0 md:w-1/2 h-[400px] md:h-auto z-0">
          <div className="relative h-full w-full">
            <Image
              src="/site-introuvable-google.png"
              alt="Visibilité Google pour votre boutique Siteazy"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background md:bg-gradient-to-r md:from-background md:via-background/40 md:to-transparent" />
          </div>
        </div>

        <div className="container px-4 md:px-10 relative z-10">
          <div className="grid md:grid-cols-2 gap-4 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-flex items-center rounded-full border bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <Globe className="h-4 w-4 mr-2" aria-hidden />
                siteazy.com
              </div>
              <h2
                id="siteazy-proof-heading"
                className="text-3xl font-bold sm:text-4xl md:text-5xl leading-tight"
              >
                Le site que vous vouliez
                <br />
                <span className="text-primary italic">en tapant &quot;siteasy&quot;</span>
              </h2>
              <div className="space-y-4 sm:text-lg text-muted-foreground leading-relaxed">
                <p>
                  Torréfacteurs, fleuristes, coiffeurs, artisans du bâtiment… Des entrepreneurs comme
                  vous utilisent déjà Siteazy pour vendre en ligne et être trouvés sur Google.
                </p>
                <p className="font-semibold text-foreground">
                  Si vous avez cherché <strong>site easy</strong>, <strong>site azy</strong> ou{" "}
                  <strong>siteasy</strong>, vous êtes au bon endroit.
                </p>
              </div>
              <CheckList
                variant="simple"
                items={[
                  "Nom officiel : Siteazy — URL : siteazy.com",
                  "Page dédiée : siteazy.com/siteasy (à mettre en favori)",
                  "Support en français, essai gratuit, sans engagement",
                ]}
              />
              <div className="flex flex-wrap gap-4 pt-2">
                <Button
                  asChild
                  size="lg"
                  className="h-12 px-8 rounded-full font-bold bg-accent hover:scale-105 hover:-rotate-1 hover:shadow-lg transition-all duration-300"
                >
                  <SiteazyLink href="/onboarding">
                    Essayer Siteazy gratuitement <ArrowRight className="ml-2 h-5 w-5" />
                  </SiteazyLink>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-12 px-8 rounded-full">
                  <SiteazyLink href="/artisans">Voir les métiers accompagnés</SiteazyLink>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <PricingSection />

      <section
        className="py-24 bg-background"
        aria-labelledby="siteasy-faq-heading"
        id="faq-siteasy-siteazy"
      >
        <div className="container px-4 md:px-6 max-w-3xl mx-auto">
          <h2 id="siteasy-faq-heading" className="text-3xl font-bold text-center mb-4 sm:text-4xl">
            FAQ : Siteasy vs Siteazy
          </h2>
          <p className="text-center text-muted-foreground mb-10">
            Questions fréquentes quand on confond <strong>siteasy</strong> et{" "}
            <strong>siteazy</strong> sur Google.
          </p>
          <Accordion type="single" collapsible className="w-full">
            {SITEASY_FAQ.map((item, index) => (
              <AccordionItem key={item.question} value={`faq-${index}`}>
                <AccordionTrigger className="text-left font-semibold">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6 text-center max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold sm:text-4xl">Enregistrez le bon lien : siteazy.com</h2>
          <p className="text-primary-foreground/90 text-lg">
            Maintenant que vous avez trouvé le bon site, pourquoi ne pas tenter l&apos;aventure ? Créer
            votre site avec Siteazy prend moins de 15 minutes, et les 14 premiers jours sont
            entièrement gratuits. Aucune carte bancaire requise pour commencer.
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="h-12 px-8 text-lg rounded-full font-bold"
          >
            <SiteazyLink href="/onboarding">
              Démarrer sur Siteazy <ArrowRight className="ml-2 h-5 w-5" />
            </SiteazyLink>
          </Button>
        </div>
      </section>
    </article>
  )
}
