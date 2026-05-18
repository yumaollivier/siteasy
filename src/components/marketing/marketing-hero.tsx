"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function MarketingHero<TFadeIn>({
  backgroundImageSrc,
  backgroundImageAlt,
  fadeIn,
  staggerContainer,
  sectionClassName,
  badge,
  title,
  titleClassName,
  description,
  descriptionClassName,
  cta,
}: {
  backgroundImageSrc: string
  backgroundImageAlt: string
  fadeIn: TFadeIn
  staggerContainer: unknown
  sectionClassName?: string
  badge?: React.ReactNode
  title: React.ReactNode
  titleClassName?: string
  description?: React.ReactNode
  descriptionClassName?: string
  cta?: React.ReactNode
}) {
  return (
    <section
      className={
        sectionClassName ||
        "relative overflow-hidden py-20 lg:py-32 min-h-screen flex items-center justify-center"
      }
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImageSrc}
          alt={backgroundImageAlt}
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer as any}
          className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto"
        >
          {badge ? <motion.div variants={fadeIn as any}>{badge}</motion.div> : null}
          <motion.h1
            variants={fadeIn as any}
            className={
              titleClassName ||
              "text-5xl font-extrabold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/50 w-full"
            }
          >
            {title}
          </motion.h1>
          {description ? (
            <motion.p
              variants={fadeIn as any}
              className={
                descriptionClassName ||
                "text-lg text-foreground font-medium max-w-2xl leading-normal sm:text-2xl sm:leading-8"
              }
            >
              {description}
            </motion.p>
          ) : null}
          {cta ? <motion.div variants={fadeIn as any}>{cta}</motion.div> : null}
        </motion.div>
      </div>
    </section>
  )
}

