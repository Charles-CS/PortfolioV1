"use client"

import { useEffect } from "react"

/**
 * Eagerly preloads heavy JS modules used by sub-pages (/about, /work/[slug])
 * so they're already in the browser's module cache when the user navigates.
 * Renders nothing — purely a side-effect component.
 */
export function PreloadResources() {
  useEffect(() => {
    // Start downloading framer-motion immediately after hydration.
    // This is the heaviest dependency on the About/Project pages (~130KB)
    // and the main cause of the cold-navigation delay.
    import("framer-motion").catch(() => {})

    // Also preload lucide-react icons used on the About page
    import("lucide-react").catch(() => {})
  }, [])

  return null
}
