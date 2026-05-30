"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { projects } from "@/lib/projects"

export default function AllProjectsPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set())
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [viewMode, setViewMode] = useState<"list" | "grid">("list")
  const [page, setPage] = useState<number>(1)
  const ITEMS_PER_PAGE = 9

  const totalPages = Math.max(1, Math.ceil(projects.length / ITEMS_PER_PAGE))
  const visibleProjects = projects.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE)

  useEffect(() => {
    document.documentElement.classList.remove("loading-scroll-lock")
    document.body.classList.remove("loading-scroll-lock")

    const timer = setTimeout(() => setIsLoaded(true), 50)
    return () => {
      clearTimeout(timer)
      document.documentElement.classList.remove("loading-scroll-lock")
      document.body.classList.remove("loading-scroll-lock")
    }
  }, [])

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => new Set(prev).add(index))
  }

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 sm:px-10 lg:px-16 py-6 bg-background/80 backdrop-blur-md transition-all duration-700 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        }`}
      >
        <Link
          href="/#thoughts"
          className="group flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
        >
          <svg
            className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 12H5m0 0l7 7m-7-7l7-7" />
          </svg>
          Home
        </Link>

        <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-mono">
          {projects.length} Projects
        </div>
      </nav>

      {/* Header */}
      <main className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <section
          className={`pt-28 sm:pt-36 pb-12 sm:pb-16 transition-all duration-1000 delay-100 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          } flex flex-col md:flex-row md:items-end justify-between gap-6`}
        >
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight">
              All Projects
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg max-w-xl leading-relaxed">
              A curated collection of my work spanning web development, mobile apps, AI systems, and game design.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-muted/50 p-1.5 rounded-full border border-border/80">
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-full transition-all duration-300 ${
                viewMode === "list" ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"
              }`}
              title="List View"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-full transition-all duration-300 ${
                viewMode === "grid" ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"
              }`}
              title="Grid View"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="pb-20 sm:pb-32">
          <div className={`grid ${viewMode === "list" ? "grid-cols-1 gap-16 sm:gap-20" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"} transition-all duration-500`}>
            {visibleProjects.map((project, i) => {
              const index = (page - 1) * ITEMS_PER_PAGE + i

              return (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className={`group block transition-all duration-1000 ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Image */}
                <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden bg-muted mb-6">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className={`object-cover transition-all duration-700 ${
                      loadedImages.has(index) ? "opacity-100" : "opacity-0"
                    } ${hoveredIndex === index ? "scale-[1.03]" : "scale-100"}`}
                    onLoad={() => handleImageLoad(index)}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1152px"
                  />

                  {/* Hover overlay */}
                  <div
                    className={`absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity duration-500 ${
                      hoveredIndex === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div className="px-5 py-2.5 rounded-full border border-white/30 bg-black/40 backdrop-blur-sm text-xs tracking-[0.2em] uppercase text-white">
                      View Project
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className={`flex flex-col ${viewMode === "list" ? "sm:flex-row sm:items-start sm:justify-between" : "items-start"} gap-3`}>
                  <div className="space-y-1.5">
                    <h2 className={`${viewMode === "list" ? "text-xl sm:text-2xl" : "text-lg sm:text-xl"} font-light group-hover:text-muted-foreground transition-colors duration-300`}>
                      {project.name}
                    </h2>
                    <p className={`text-sm text-muted-foreground max-w-md leading-relaxed ${viewMode === "grid" && "line-clamp-2"}`}>
                      {project.tagline}
                    </p>
                  </div>

                  <div className={`flex items-center gap-3 ${viewMode === "list" ? "sm:pt-1" : "pt-1"}`}>
                    <span className="text-xs tracking-[0.2em] text-muted-foreground/60 font-mono">{project.year}</span>
                    <svg
                      className="w-4 h-4 text-muted-foreground/60 group-hover:text-foreground group-hover:translate-x-1 transition-all duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14m0 0l-7-7m7 7l-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
              )
            })}
          </div>
        </section>

        {/* Pagination */}
        <section className="py-6 flex items-center justify-center">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className={`px-3 py-2 rounded border border-border/60 transition-colors duration-200 ${page === 1 ? "opacity-40 cursor-not-allowed" : "hover:border-foreground/50"}`}
            >
              Prev
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, idx) => (
                <button
                  key={idx}
                  onClick={() => setPage(idx + 1)}
                  className={`w-9 h-9 flex items-center justify-center rounded ${page === idx + 1 ? "bg-foreground text-background" : "border border-border/60 text-muted-foreground hover:text-foreground"}`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className={`px-3 py-2 rounded border border-border/60 transition-colors duration-200 ${page === totalPages ? "opacity-40 cursor-not-allowed" : "hover:border-foreground/50"}`}
            >
              Next
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="pb-12 sm:pb-16 border-t border-border/60 pt-8">
          <div className="flex items-center justify-between">
            <div className="text-xs text-muted-foreground">© 2026 Charles Platon</div>
            <Link
              href="/"
              className="text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Back to Home
            </Link>
          </div>
        </footer>
      </main>
    </div>
  )
}
