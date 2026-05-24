"use client"

import Link from "next/link"
import Image from "next/image"
import { useParams, useRouter } from "next/navigation"
import { useEffect, useState, use } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { getProjectBySlug, getNextProject, getPrevProject, projects } from "@/lib/projects"

export default function ProjectPage(props: { params: Promise<{ slug: string }> }) {
  const params = use(props.params)
  const router = useRouter()
  const slug = params.slug
  const project = getProjectBySlug(slug)
  const [isLoaded, setIsLoaded] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [showLoadingSection, setShowLoadingSection] = useState(true)

  useEffect(() => {
    // Reveal project data after 2.8s total loading animation
    const timer = setTimeout(() => setIsLoaded(true), 2800)
    // Hide loading screen element entirely
    const loadingScreenTimer = setTimeout(() => setShowLoadingSection(false), 2600)
    return () => {
      clearTimeout(timer)
      clearTimeout(loadingScreenTimer)
    }
  }, [slug])

  useEffect(() => {
    setImageLoaded(false)
  }, [slug])

  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-light">Project not found</h1>
          <Link
            href="/work"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 underline underline-offset-4"
          >
            View all projects
          </Link>
        </div>
      </div>
    )
  }

  const nextProject = getNextProject(slug)
  const prevProject = getPrevProject(slug)
  const currentIndex = projects.findIndex((p) => p.slug === slug)

  const loadingVariants = {
    initial: { y: "0%" },
    animate: { y: "0%" },
    exit: { 
      y: "-100%", 
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as const, delay: 0.2 } 
    }
  }

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as const, delay: 0.2 } 
    },
    exit: { 
      opacity: 0, 
      y: -20, 
      transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] as const } 
    }
  }

  return (
    <>
      <AnimatePresence>
        {showLoadingSection && (
          <motion.div
            variants={loadingVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center p-6 sm:p-10"
          >
            <motion.div
              variants={textVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="text-center space-y-4 sm:space-y-6 flex flex-col items-center"
            >
              <span className="text-xs sm:text-sm tracking-[0.3em] uppercase text-muted-foreground font-mono">
                hello there, meet
              </span>
              <h1 
                className="text-4xl sm:text-6xl md:text-7xl font-light text-foreground"
                style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
              >
                {project.name}
              </h1>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background">
        {/* Back Navigation */}
        <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 sm:px-10 lg:px-16 py-6 transition-all duration-700 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        } bg-background/80 backdrop-blur-md`}
      >
        <Link
          href="/"
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
          Back
        </Link>

        <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-mono">
          {String(currentIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Hero Section - Description */}
        <section
          className={`pt-28 sm:pt-36 pb-12 sm:pb-16 transition-all duration-1000 delay-100 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="space-y-6">
            <div className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-mono">{project.year}</div>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight max-w-4xl text-foreground"
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
            >
              {project.description}
            </h1>
          </div>
        </section>

        {/* Info Row - Role / Contributions / URL */}
        <section
          className={`py-10 sm:py-14 border-t border-border/60 transition-all duration-1000 delay-300 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 text-center">
            <div className="space-y-3">
              <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-mono">Role</div>
              <div className="text-sm text-foreground/80 leading-relaxed">{project.role}</div>
            </div>
            <div className="space-y-3">
              <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-mono">Contributions</div>
              <div className="text-sm text-foreground/80 leading-relaxed">{project.responsibilities}</div>
            </div>
            <div className="space-y-3">
              <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-mono">Live URL</div>
              {project.url !== "#" ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground/80 hover:text-foreground transition-colors duration-300 underline underline-offset-4 decoration-border hover:decoration-muted-foreground break-all"
                >
                  {project.url}
                </a>
              ) : (
                <div className="text-sm text-muted-foreground italic">Coming soon</div>
              )}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section
          className={`pb-10 sm:pb-14 transition-all duration-1000 delay-400 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex flex-wrap justify-center gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1.5 text-[11px] tracking-wide text-muted-foreground border border-border rounded-full hover:border-foreground/50 hover:text-foreground transition-colors duration-300"
              >
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* Hero Image */}
        <section
          className={`pb-16 sm:pb-24 transition-all duration-1000 delay-500 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden bg-muted">
            <Image
              src={project.image}
              alt={project.name}
              fill
              className={`object-cover transition-all duration-1000 ${
                imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
              }`}
              onLoad={() => setImageLoaded(true)}
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1152px"
            />
          </div>
        </section>

        {/* Bottom Navigation */}
        <section
          className={`pb-16 sm:pb-24 transition-all duration-1000 delay-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="border-t border-border/60 pt-10 sm:pt-14">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
              {/* All Projects Link */}
              <Link
                href="/work"
                className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                <div className="w-10 h-10 rounded-full border border-border group-hover:border-foreground/50 flex items-center justify-center transition-colors duration-300">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </div>
                <span className="text-sm tracking-wide">All Projects</span>
              </Link>

              {/* Next Project */}
              <Link
                href={`/work/${nextProject.slug}`}
                className="group flex items-center gap-4 sm:gap-6"
              >
                <div className="text-right">
                  <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-mono mb-1">
                    Next Project
                  </div>
                  <div className="text-lg sm:text-xl font-light text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                    {nextProject.name}
                  </div>
                </div>
                <div className="w-12 h-12 rounded-full border border-border group-hover:border-foreground/50 group-hover:bg-foreground/5 flex items-center justify-center transition-all duration-300">
                  <svg
                    className="w-5 h-5 text-muted-foreground group-hover:text-foreground transform group-hover:translate-x-0.5 transition-all duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14m0 0l-7-7m7 7l-7 7" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
    </>
  )
}
