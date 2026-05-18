"use client"

import { SiteazyLink } from "@/components/siteazy-link"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface LogoProps {
  className?: string
  iconOnly?: boolean
  size?: "sm" | "md" | "lg"
  href?: string | null
  textClassName?: string
  imgSize?: number
  imgClassName?: string
}

export function Logo({
  className,
  iconOnly = false,
  size = "md",
  href = "/",
  textClassName,
  imgSize,
  imgClassName,
}: LogoProps) {
  const sizes = {
    sm: { img: 24, text: "text-lg" },
    md: { img: 32, text: "text-2xl" },
    lg: { img: 48, text: "text-4xl" },
  }

  const finalImgSize = imgSize || sizes[size].img

  const inner = (
    <>
      <Image
        src="/logo.png"
        alt="Siteazy"
        width={finalImgSize}
        height={finalImgSize}
        className={cn("shrink-0", imgClassName)}
      />
      {!iconOnly && (
        <span
          className={cn(
            "font-extrabold tracking-tight text-primary",
            sizes[size].text,
            textClassName
          )}
        >
          Siteazy
        </span>
      )}
    </>
  )

  if (href) {
    return (
      <SiteazyLink
        href={href}
        className={cn("flex items-center gap-2 hover:opacity-80 transition-opacity", className)}
      >
        {inner}
      </SiteazyLink>
    )
  }

  return <div className={cn("flex items-center gap-2", className)}>{inner}</div>
}
