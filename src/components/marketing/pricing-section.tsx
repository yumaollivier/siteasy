"use client"

import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import {
  getPricingYearlySavings,
  getPricingYearlyStrikethrough,
  PLANS,
  PRICING_CONFIG,
} from "@/lib/pricing"
import { cn } from "@/lib/utils"
import { SiteazyLink } from "@/components/siteazy-link"
import { motion } from "framer-motion"
import { CheckCircle2, Gift, Palette, X } from "lucide-react"
import { useState } from "react"
import { PricingPlanHelper } from "./pricing-plan-helper"

export function PricingSection() {
  const [interval, setInterval] = useState<"monthly" | "yearly">("monthly")

  return (
    <section id="pricing" className="py-20 lg:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center rounded-full border border-primary/10 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-4"
          >
            <Palette className="h-4 w-4 mr-2" />
            Un investissement serein pour votre art
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-bold sm:text-4xl md:text-5xl"
          >
            Des tarifs <span className="text-primary italic">justes et transparents</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="sm:text-lg text-muted-foreground max-w-[800px] mx-auto leading-relaxed"
          >
            Pas de frais de mise en service, <span className="text-foreground font-medium">sans engagement</span>. Choisissez le plan qui accompagnera la croissance de votre atelier.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 rounded-full bg-green-500/10 border border-green-500/20 px-5 py-2 text-sm font-semibold text-green-600 dark:text-green-400"
          >
            <Gift className="h-4 w-4" />
            14 jours d&apos;essai gratuit sur tous les plans — carte bancaire requise, aucun débit immédiat
          </motion.div>
        </div>

        <div className="flex flex-col items-center gap-4 mb-8">
          <div className="flex items-center justify-center gap-4">
            <span
              className={cn(
                "text-sm transition-colors",
                interval === "monthly" ? "font-bold text-foreground" : "text-muted-foreground"
              )}
            >
              Mensuel
            </span>
            <Switch
              checked={interval === "yearly"}
              onCheckedChange={(checked) => setInterval(checked ? "yearly" : "monthly")}
            />
            <span
              className={cn(
                "text-sm transition-colors",
                interval === "yearly" ? "font-bold text-foreground" : "text-muted-foreground"
              )}
            >
              Annuel <span className="text-green-500 font-medium">(-20%)</span>
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-2 text-xs font-medium text-muted-foreground bg-muted/50 px-3 py-1 rounded-full"
          >
            <CheckCircle2 className="h-3 w-3 text-primary" />
            Sans engagement · Annulable à tout moment · Carte bancaire requise pour l&apos;essai
          </motion.div>
        </div>

        {/* <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 hidden lg:block overflow-x-auto"
        >
          <div className="max-w-4xl mx-auto rounded-xl border bg-background overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="text-left py-3 px-4 font-semibold text-muted-foreground w-[180px]">
                    Critère
                  </th>
                  <th className="text-center py-3 px-4 font-semibold">Site vitrine</th>
                  <th className="text-center py-3 px-4 font-semibold">Boutique</th>
                  <th className="text-center py-3 px-4 font-semibold bg-primary/5">Premium</th>
                </tr>
              </thead>
              <tbody>
                {PRICING_COMPARISON_ROWS.map((row) => (
                  <tr key={row.label} className="border-b last:border-0">
                    <td className="py-2.5 px-4 text-muted-foreground">{row.label}</td>
                    <td className="py-2.5 px-4 text-center">
                      {row.landing === true && (
                        <CheckCircle2 className="h-4 w-4 text-green-500 inline-block" />
                      )}
                      {row.landing === false && (
                        <X className="h-4 w-4 text-muted-foreground inline-block" />
                      )}
                      {typeof row.landing === "string" && row.landing}
                    </td>
                    <td className="py-2.5 px-4 text-center">
                      {row.boutique === true && (
                        <CheckCircle2 className="h-4 w-4 text-green-500 inline-block" />
                      )}
                      {row.boutique === false && (
                        <X className="h-4 w-4 text-muted-foreground inline-block" />
                      )}
                      {typeof row.boutique === "string" && row.boutique}
                    </td>
                    <td className="py-2.5 px-4 text-center bg-primary/5">
                      {row.domain === true && (
                        <CheckCircle2 className="h-4 w-4 text-green-500 inline-block" />
                      )}
                      {row.domain === false && (
                        <X className="h-4 w-4 text-muted-foreground inline-block" />
                      )}
                      {typeof row.domain === "string" && row.domain}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div> */}

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {PLANS.map((plan, index) => {
            const config = PRICING_CONFIG[plan.key]
            const price = interval === "monthly" ? config.monthly.price : config.yearly.price
            const strikethrough = getPricingYearlyStrikethrough(plan.key)
            const savings = getPricingYearlySavings(plan.key)

            return (
              <motion.div
                key={plan.key}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className={cn(
                  "relative transition-all duration-300",
                  plan.highlighted
                    ? "hover:scale-105 hover:rotate-1"
                    : "hover:scale-105 hover:-rotate-1"
                )}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    <span
                      className={cn(
                        "text-sm font-semibold px-4 py-1.5 rounded-full shadow-lg",
                        plan.badge === "14 jours offerts"
                          ? "bg-green-500 text-white"
                          : "bg-primary text-primary-foreground"
                      )}
                    >
                      {plan.badge}
                    </span>
                  </div>
                )}
                <div
                  className={cn(
                    "relative overflow-hidden rounded-3xl border-2 bg-background p-8 shadow-xl h-full transition-colors",
                    plan.highlighted ? "border-primary" : "border-border hover:border-primary/50"
                  )}
                >
                  <div className="relative flex flex-col h-full">
                    <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{plan.subtitle}</p>
                    <div className="flex flex-col gap-1 mb-6">
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-bold">{price}€</span>
                        <span className="text-muted-foreground">
                          /{interval === "monthly" ? "mois" : "an"}
                        </span>
                      </div>
                      {interval === "yearly" && savings > 0 && (
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-muted-foreground line-through">
                            {strikethrough}€/an
                          </span>
                          <span className="text-xs text-green-500 font-medium">
                            Économisez {savings}€
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="space-y-3 text-sm flex-1">
                      <ul className="space-y-2">
                        {config.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      {config.limitations.length > 0 && (
                        <ul className="space-y-2 pt-2 border-t border-border">
                          {config.limitations.map((limitation) => (
                            <li
                              key={limitation}
                              className="flex items-start gap-2 text-muted-foreground"
                            >
                              <X className="h-4 w-4 shrink-0 mt-0.5" />
                              <span>{limitation}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    <div className="mt-6 flex flex-col gap-2">
                      <Button
                        asChild
                        size="lg"
                        variant={plan.highlighted ? "default" : "outline"}
                        className={cn(
                          "w-full h-12 text-lg font-semibold transition-all duration-300",
                          plan.highlighted &&
                          "bg-linear-to-r from-primary to-accent hover:scale-105 hover:-rotate-1 hover:shadow-lg",
                          !plan.highlighted && "hover:scale-105 hover:rotate-1 hover:shadow-lg"
                        )}
                      >
                        <SiteazyLink href="/onboarding">{plan.cta}</SiteazyLink>
                      </Button>
                      <p className="text-center text-xs text-muted-foreground">
                        Aucun débit pendant 14 jours · Annulable à tout moment
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-muted-foreground">
            Sites supplémentaires : {PRICING_CONFIG.additionalShop.price}€/mois chacun
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 max-w-2xl mx-auto"
        >
          <h3 className="text-center text-lg font-semibold mb-4">
            Vous hésitez ? Trouvez le plan adapté en 3 questions
          </h3>
          <PricingPlanHelper />
        </motion.div>
      </div>
    </section>
  )
}
