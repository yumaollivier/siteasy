"use client"

import { CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils"

export function CheckList({
  items,
  variant,
}: {
  items: string[]
  variant: "simple" | "accent"
}) {
  if (variant === "simple") {
    return (
      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 shrink-0" />
            <span className="text-muted-foreground font-medium">{item}</span>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <ul className="space-y-4 w-full">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-3 text-muted-foreground group/item">
          <div
            className={cn(
              "h-5 w-5 rounded-full bg-accent/10 flex items-center justify-center shrink-0",
              "group-hover/item:bg-accent group-hover/item:text-accent-foreground transition-colors"
            )}
          >
            <CheckCircle2 className="h-3 w-3 text-accent group-hover/item:text-accent-foreground" />
          </div>
          <span className="text-sm font-medium max-sm:text-left">{item}</span>
        </li>
      ))}
    </ul>
  )
}

