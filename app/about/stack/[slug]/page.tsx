import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, BookOpen, CalendarDays, Clock3, MapPin } from "lucide-react"
import { createTechStackSlug, getTechStackBySlug, techStackGroups } from "@/lib/tech-stacks"

export function generateStaticParams() {
  return techStackGroups.flatMap((group) =>
    group.items.map((item) => ({ slug: createTechStackSlug(item.name) }))
  )
}

export default function TechStackPage({ params }: { params: { slug: string } }) {
  const stack = getTechStackBySlug(params.slug)

  if (!stack) {
    notFound()
  }

  const category = techStackGroups.find((group) =>
    group.items.some((item) => item.name === stack.name)
  )?.category ?? "Tech Stack"

  return (
    <main className="min-h-screen bg-background px-6 py-8 text-foreground sm:px-8 lg:px-16">
      <div className="mx-auto flex min-h-[calc(100dvh-4rem)] max-w-4xl flex-col justify-center gap-6">
        <Link
          href="/about"
          className="inline-flex w-fit items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to About
        </Link>

        <section className="overflow-hidden rounded-3xl border border-border bg-background/95 shadow-2xl">
          <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="border-b border-border p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
              <div className="inline-flex items-center rounded-full border border-border px-3 py-1 text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground">
                {category}
              </div>

              <div className="mt-6 flex items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-muted/20">
                  <i aria-hidden="true" className={`${stack.icon} text-3xl text-foreground`} />
                </div>

                <div className="space-y-3">
                  <h1 className="text-4xl font-light tracking-tight sm:text-5xl">{stack.name}</h1>
                  <p className="max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
                    {stack.learningStory}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 p-6 sm:p-8 lg:p-10">
              <div className="rounded-2xl border border-border bg-muted/20 p-4 sm:p-5">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground">
                  <CalendarDays className="h-4 w-4" />
                  Started
                </div>
                <div className="mt-3 text-2xl font-medium text-foreground">{stack.startedYear}</div>
                <p className="mt-1 text-sm leading-7 text-muted-foreground">{stack.startedContext}</p>
              </div>

              <div className="rounded-2xl border border-border bg-muted/20 p-4 sm:p-5">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground">
                  <Clock3 className="h-4 w-4" />
                  Experience
                </div>
                <div className="mt-3 text-2xl font-semibold text-foreground">
                  {Math.max(1, new Date().getFullYear() - stack.startedYear)}+ years
                </div>
                <p className="mt-1 text-sm leading-7 text-muted-foreground">
                  Hands-on work that kept growing through projects, hackathons, and real builds.
                </p>
              </div>

              <div className="rounded-2xl border border-border p-4 sm:p-5">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  Learning context
                </div>
                <p className="mt-3 text-sm leading-7 text-foreground">{stack.startedContext}</p>
              </div>

              <div className="flex items-start gap-2 rounded-2xl border border-border p-4 sm:p-5 text-sm leading-7 text-muted-foreground">
                <BookOpen className="mt-0.5 h-4 w-4 shrink-0" />
                <span>Open the stack page anytime to revisit the learning timeline.</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
