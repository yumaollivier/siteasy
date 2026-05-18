import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "cursor-pointer font-semibold inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "text-foreground border border-input bg-background hover:bg-muted hover:text-primary",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-muted hover:text-primary",
        link: "text-primary underline-offset-4 hover:underline",
        ai:
          [
            "relative overflow-hidden border text-white",
            "border-primary/30",
            "bg-[linear-gradient(135deg,var(--color-primary)_0%,var(--color-accent,var(--color-primary))_100%)]",
            "shadow-[0_4px_14px_hsl(var(--primary)/0.30)]",
            "hover:shadow-[0_6px_20px_hsl(var(--primary)/0.40)]",
            "hover:brightness-110 hover:-translate-y-px",
            "before:absolute before:inset-0",
            "before:bg-[linear-gradient(120deg,transparent_25%,rgba(255,255,255,0.18)_50%,transparent_75%)]",
            "before:translate-x-[-110%] before:transition-transform before:duration-600",
            "hover:before:translate-x-[110%]",
          ].join(" "),

        "ai-soft":
          [
            "border text-primary",
            "border-primary/25",
            "bg-[linear-gradient(135deg,hsl(var(--primary)/0.07)_0%,hsl(var(--primary)/0.12)_100%)]",
            "hover:bg-[linear-gradient(135deg,hsl(var(--primary)/0.10)_0%,hsl(var(--primary)/0.16)_100%)]",
            "hover:border-primary/35 hover:-translate-y-px",
            "shadow-[0_2px_8px_hsl(var(--primary)/0.12)]",
            "dark:bg-[linear-gradient(135deg,hsl(var(--primary)/0.12)_0%,hsl(var(--primary)/0.18)_100%)]",
            "dark:hover:bg-[linear-gradient(135deg,hsl(var(--primary)/0.16)_0%,hsl(var(--primary)/0.22)_100%)]",
          ].join(" "),

        "ai-outline":
          [
            "border text-primary bg-background",
            "border-primary/30",
            "shadow-[0_0_0_0_hsl(var(--primary)/0)]",
            "hover:bg-primary/5 hover:border-primary/45",
            "hover:shadow-[0_0_12px_hsl(var(--primary)/0.20)]",
            "hover:-translate-y-px",
          ].join(" "),
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
        iconSm: "h-8 w-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
