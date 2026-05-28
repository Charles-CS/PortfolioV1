import { getTechStackBySlug } from "@/lib/tech-stacks"

export default async function TechStackPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const stack = getTechStackBySlug(slug)

  const label = stack?.name ?? "Stack"
  const iconClass = stack?.icon ?? ""

  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center justify-center w-40 h-40 rounded-full border border-border bg-muted/20">
          {iconClass ? (
            // Use icon class if available (project provides icon fonts)
            <i aria-hidden="true" className={`${iconClass} text-6xl`} />
          ) : (
            // Fallback simple SVG logo
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="20" height="20" rx="6" fill="currentColor" opacity="0.12" />
              <path d="M7 12h10M7 8h10M7 16h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </div>

        <div className="text-sm text-muted-foreground uppercase tracking-[0.2em]">{label}</div>
      </div>
    </main>
  )
}
