import { siteazyUrl } from "@/lib/siteazy-url"
import type { ComponentProps } from "react"

type SiteazyLinkProps = Omit<ComponentProps<"a">, "href"> & {
  href?: string
}

export function SiteazyLink({ href = "/", children, ...props }: SiteazyLinkProps) {
  return (
    <a href={siteazyUrl(href)} rel="noopener noreferrer" {...props}>
      {children}
    </a>
  )
}
