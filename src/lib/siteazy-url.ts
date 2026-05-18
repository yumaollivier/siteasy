export const SITEAZY_ORIGIN = "https://siteazy.com"

export function siteazyUrl(path = "/"): string {
  if (!path || path === "/") {
    return `${SITEAZY_ORIGIN}/`
  }
  const normalized = path.startsWith("/") ? path : `/${path}`
  return `${SITEAZY_ORIGIN}${normalized}`
}
