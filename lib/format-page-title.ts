export function formatTitleFromSlug(slug: string): string {
  return slug
    .split("/")
    .map(
      (part) => part.charAt(0).toUpperCase() + part.slice(1).replace(/-/g, " ")
    )
    .join(" | ");
}
