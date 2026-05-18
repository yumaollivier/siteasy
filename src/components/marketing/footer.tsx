import { Logo } from "@/components/shared/logo"
import { SiteazyLink } from "@/components/siteazy-link"
import { TRADE_PAGE_LINKS } from "@/lib/trade-page-links"
import { siteazyUrl } from "@/lib/siteazy-url"

export function Footer() {
  return (
    <footer className="border-t py-12 bg-muted/20">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo size="sm" />
            <p className="text-sm text-muted-foreground">
              La plateforme e-commerce nouvelle génération pour tous les entrepreneurs.
            </p>
            <p className="text-sm text-muted-foreground">
              Site officiel :{" "}
              <a
                href={siteazyUrl()}
                className="font-medium text-primary hover:underline"
                rel="noopener noreferrer"
              >
                siteazy.com
              </a>
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Produit</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <SiteazyLink href="/artisans" className="hover:text-foreground">
                  Artisans &amp; TPE
                </SiteazyLink>
              </li>
              <li>
                <SiteazyLink href="/#features" className="hover:text-foreground">
                  Fonctionnalités
                </SiteazyLink>
              </li>
              <li>
                <SiteazyLink href="/pricing" className="hover:text-foreground">
                  Tarifs
                </SiteazyLink>
              </li>
              <li>
                <SiteazyLink href="/#solutions" className="hover:text-foreground">
                  Solutions
                </SiteazyLink>
              </li>
              <li>
                <SiteazyLink href="/a-propos" className="hover:text-foreground">
                  À propos
                </SiteazyLink>
              </li>
              <li>
                <SiteazyLink href="/contact" className="hover:text-foreground">
                  Contact
                </SiteazyLink>
              </li>
              <li>
                <SiteazyLink href="/blog" className="hover:text-foreground">
                  Blog
                </SiteazyLink>
              </li>
              <li>
                <SiteazyLink href="/siteasy" className="hover:text-foreground">
                  Siteazy (recherche Siteasy)
                </SiteazyLink>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Par métier</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {TRADE_PAGE_LINKS.map(({ slug, label }) => (
                <li key={slug}>
                  <SiteazyLink
                    href={`/site-internet/${slug}`}
                    className="hover:text-foreground"
                  >
                    {label}
                  </SiteazyLink>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Légal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <SiteazyLink href="/legal/mentions-legales" className="hover:text-foreground">
                  Mentions légales
                </SiteazyLink>
              </li>
              <li>
                <SiteazyLink href="/legal/confidentialite" className="hover:text-foreground">
                  Confidentialité
                </SiteazyLink>
              </li>
              <li>
                <SiteazyLink href="/legal/cgv" className="hover:text-foreground">
                  CGV
                </SiteazyLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Siteazy. Tous droits réservés.
        </div>
      </div>
    </footer>
  )
}
