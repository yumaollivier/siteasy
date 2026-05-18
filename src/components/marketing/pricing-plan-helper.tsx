import { SiteazyLink } from "@/components/siteazy-link"
import { PLANS, PRICING_CONFIG, PricingPlanKey } from "@/lib/pricing"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2, HelpCircle, Sparkles } from "lucide-react"
import { useState } from "react"
import { Button } from "../ui/button"

type PlanHelperAnswer = "vitrine" | "boutique" | "few" | "many" | "domainYes" | "domainNo"

function getRecommendedPlan(answers: PlanHelperAnswer[]): PricingPlanKey | null {
  const a1 = answers[0]
  if (a1 === "vitrine") return "landingPage"
  if (a1 !== "boutique") return null
  const a2 = answers[1]
  if (a2 === "many") return "domain"
  if (a2 === "few") {
    const a3 = answers[2]
    if (a3 === "domainYes") return "domain"
    if (a3 === "domainNo") return "essential"
  }
  return null
}

const PLAN_HELPER_QUESTIONS: ReadonlyArray<{
  id: string
  question: string
  options: ReadonlyArray<{ value: PlanHelperAnswer; label: string; next?: number }>
}> = [
    {
      id: "q1",
      question: "Quel est votre objectif principal ?",
      options: [
        { value: "vitrine", label: "Présenter mon activité (site vitrine)", next: -1 },
        { value: "boutique", label: "Vendre en ligne (boutique)", next: 1 },
      ],
    },
    {
      id: "q2",
      question: "Combien de produits souhaitez-vous proposer ?",
      options: [
        { value: "few", label: "Moins de 50", next: 2 },
        { value: "many", label: "50 ou plus", next: -1 },
      ],
    },
    {
      id: "q3",
      question: "Voulez-vous une adresse à votre nom (ex: maboutique.fr) ?",
      options: [
        { value: "domainYes", label: "Oui, un domaine .fr ou .com", next: -1 },
        { value: "domainNo", label: "Non, un sous-domaine suffit", next: -1 },
      ],
    },
  ]

export function PricingPlanHelper() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<PlanHelperAnswer[]>([])
  const recommended = answers.length > 0 ? getRecommendedPlan(answers) : null
  const planInfo = recommended ? PLANS.find((p) => p.key === recommended) : null
  const config = recommended ? PRICING_CONFIG[recommended] : null

  const handleAnswer = (value: PlanHelperAnswer, next: number) => {
    setAnswers((prev) => [...prev, value])
    setStep(next === -1 ? 999 : next)
  }

  const reset = () => {
    setStep(0)
    setAnswers([])
  }

  if (recommended !== null && planInfo && config) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl border bg-background p-6 sm:p-8 shadow-sm"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <p className="text-sm font-medium text-primary mb-1">Recommandé pour vous</p>
            <h3 className="text-xl font-bold">{planInfo.title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{planInfo.subtitle}</p>
            <div className="mt-2 space-y-1">
              <p className="text-lg font-semibold">
                {config.monthly.price}€/mois
                <span className="text-sm font-normal text-muted-foreground">
                  {" "}
                  ou {config.yearly.price}€/an (-20%)
                </span>
              </p>
              <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                <CheckCircle2 className="h-3 w-3 text-green-500" />
                Sans engagement, annulable à tout moment
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <Button variant="ghost" size="sm" onClick={reset} className="text-muted-foreground">
              Refaire le quiz
            </Button>
            <Button asChild size="lg" className="shrink-0">
              <SiteazyLink href="/onboarding">
                {planInfo.cta} <ArrowRight className="ml-2 h-4 w-4" />
              </SiteazyLink>
            </Button>
          </div>
        </div>
      </motion.div>
    )
  }

  const current = PLAN_HELPER_QUESTIONS[step]
  if (!current) return null

  return (
    <motion.div
      key={current.id}
      initial={{ opacity: 0, x: 8 }}
      animate={{ opacity: 1, x: 0 }}
      className="rounded-2xl border bg-background p-6 sm:p-8 shadow-sm"
    >
      <div className="flex items-center gap-2 text-primary mb-4">
        <HelpCircle className="h-5 w-5" />
        <span className="text-sm font-semibold">Quel forfait pour vous ?</span>
      </div>
      <p className="text-lg font-semibold mb-4">{current.question}</p>
      <div className="flex flex-col gap-3">
        {current.options.map((opt) => (
          <Button
            key={opt.value}
            variant="outline"
            className="justify-start h-auto py-3 px-4 text-left"
            onClick={() => handleAnswer(opt.value, opt.next ?? -1)}
          >
            <Sparkles className="h-4 w-4 mr-2 shrink-0 text-primary" />
            {opt.label}
          </Button>
        ))}
      </div>
      {step > 0 && (
        <Button variant="ghost" size="sm" className="mt-4 text-muted-foreground" onClick={reset}>
          Refaire depuis le début
        </Button>
      )}
    </motion.div>
  )
}