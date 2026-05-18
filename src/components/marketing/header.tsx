"use client"

import { Logo } from "@/components/shared/logo"
import { SiteazyLink } from "@/components/siteazy-link"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { AnimatePresence, motion } from "framer-motion"
import { LogIn, Menu } from "lucide-react"
import { useState } from "react"

const navLinks = [
  { href: "/#features", label: "Fonctionnalités" },
  { href: "/#solutions", label: "Solutions" },
  { href: "/pricing", label: "Tarifs" },
  { href: "/a-propos", label: "À propos" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed sm:top-3 left-1/2 -translate-x-1/2 z-50 max-w-7xl w-full mx-auto border sm:rounded-lg bg-white/95 backdrop-blur-sm supports-backdrop-filter:bg-background/60"
    >
      <div className="container flex h-16 items-center justify-between">
        <Logo textClassName="hidden sm:block" />
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <SiteazyLink
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </SiteazyLink>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-4">
          <SiteazyLink
            href="/login"
            className="text-sm font-medium hover:underline underline-offset-4 hidden sm:block"
          >
            Se connecter
          </SiteazyLink>
          <Button className="text-primary sm:hidden h-9 w-9" variant="ghost" size="icon" asChild>
            <SiteazyLink href="/login">
              <LogIn className="h-4 w-4" />
            </SiteazyLink>
          </Button>
          <Button asChild className="font-bold h-9 px-3 sm:px-4 text-xs sm:text-sm">
            <SiteazyLink href="/onboarding">Créer ma boutique</SiteazyLink>
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden h-9 w-9">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="text-left">
                  <Logo href={null} />
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-4 mt-8">
                <AnimatePresence>
                  {isOpen &&
                    navLinks.map((link, i) => (
                      <motion.div
                        key={link.href}
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 20, opacity: 0 }}
                        transition={{ delay: i * 0.15, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <SiteazyLink
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors block py-1"
                        >
                          {link.label}
                        </SiteazyLink>
                      </motion.div>
                    ))}
                </AnimatePresence>
                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 20, opacity: 0 }}
                  transition={{ delay: navLinks.length * 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <SiteazyLink
                    href="/login"
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors block py-1"
                  >
                    Se connecter
                  </SiteazyLink>
                </motion.div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}
