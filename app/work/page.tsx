"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { projects } from "@/lib/projects"

export default function AllProjectsPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set())
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 50)
    return () => clearTimeout(timer)
  }, [])

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => new Set(prev).add(index))
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-white selection:text-black">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 sm:px-10 lg:px-16 py-6 bg-[#0a0a0a]/80 backdrop-blur-md transition-all duration-700 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        }`}
      >
        <Link
          href="/"
          className="group flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-neutral-500 hover:text-white transition-colors duration-300"
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

        <div className="text-xs tracking-[0.2em] uppercase text-neutral-500 font-mono">
          {projects.length} Projects
        </div>
      </nav>

      {/* Header */}
      <main className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <section
          className={`pt-28 sm:pt-36 pb-12 sm:pb-16 transition-all duration-1000 delay-100 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight">
              All Projects
            </h1>
            <p className="text-neutral-400 text-base sm:text-lg max-w-xl leading-relaxed">
              A curated collection of my work spanning web development, mobile apps, AI systems, and game design.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="pb-20 sm:pb-32">
          <div className="grid grid-cols-1 gap-16 sm:gap-20">
            {projects.map((project, index) => (
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
                <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden bg-neutral-900 mb-6">
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
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <div className="space-y-1.5">
                    <h2 className="text-xl sm:text-2xl font-light group-hover:text-neutral-300 transition-colors duration-300">
                      {project.name}
                    </h2>
                    <p className="text-sm text-neutral-500 max-w-md leading-relaxed">{project.tagline}</p>
                  </div>

                  <div className="flex items-center gap-3 sm:pt-1">
                    <span className="text-xs tracking-[0.2em] text-neutral-600 font-mono">{project.year}</span>
                    <svg
                      className="w-4 h-4 text-neutral-600 group-hover:text-white group-hover:translate-x-1 transition-all duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14m0 0l-7-7m7 7l-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="pb-12 sm:pb-16 border-t border-neutral-800/60 pt-8">
          <div className="flex items-center justify-between">
            <div className="text-xs text-neutral-600">© 2026 Charles Platon</div>
            <Link
              href="/"
              className="text-xs tracking-[0.2em] uppercase text-neutral-500 hover:text-white transition-colors duration-300"
            >
              Back to Home
            </Link>
          </div>
        </footer>
      </main>
    </div>
  )
}
