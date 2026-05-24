"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function AboutPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [showLoadingSection, setShowLoadingSection] = useState(true)
  const [isScrollLocked, setIsScrollLocked] = useState(true)
  const [showScrollbarCover, setShowScrollbarCover] = useState(true)
  const [isScrollbarCoverFading, setIsScrollbarCoverFading] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle("loading-scroll-lock", isScrollLocked)
    document.body.classList.toggle("loading-scroll-lock", isScrollLocked)

    return () => {
      document.documentElement.classList.remove("loading-scroll-lock")
      document.body.classList.remove("loading-scroll-lock")
    }
  }, [isScrollLocked])

  useEffect(() => {
    // Reveal data after 2.8s total loading animation
    const timer = setTimeout(() => setIsLoaded(true), 2800)
    // Hide loading screen element entirely
    const loadingScreenTimer = setTimeout(() => setShowLoadingSection(false), 2600)
    return () => {
      clearTimeout(timer)
      clearTimeout(loadingScreenTimer)
    }
  }, [])

  const loadingVariants = {
    initial: { y: "0%" },
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
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as const, delay: 0.5 } 
    },
    exit: { 
      opacity: 0, 
      y: -20, 
      transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] as const } 
    }
  }

  return (
    <>
      <AnimatePresence
        onExitComplete={() => {
          setIsScrollLocked(false)
          setIsScrollbarCoverFading(true)
        }}
      >
        {showLoadingSection && (
          <motion.div
            variants={loadingVariants}
            initial="initial"
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
              <span className="text-lg sm:text-xl md:text-2xl tracking-[0.3em] uppercase text-muted-foreground font-mono mb-2">
                glad you're here
              </span>
              <h1 
                className="text-5xl sm:text-7xl md:text-8xl font-light text-foreground"
                style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
              >
                About Me
              </h1>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {showScrollbarCover ? (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none fixed right-0 top-0 z-[99] h-dvh w-[18px] bg-background"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          onAnimationComplete={() => {
            if (isScrollbarCoverFading) {
              setShowScrollbarCover(false)
              setIsScrollbarCoverFading(false)
            }
          }}
        />
      ) : null}

      <main className="min-h-screen bg-background text-foreground">
        <div className={`max-w-5xl mx-auto px-6 sm:px-8 lg:px-16 py-10 sm:py-14 transition-all duration-1000 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}>
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            Back home
          </Link>

          <Link
            href="https://charlesplaton.vercel.app/img/CV/PlatonCV.pptx.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-foreground border border-border rounded-full px-4 py-2 hover:border-muted-foreground/60 transition-colors duration-300"
          >
            Resume
          </Link>
        </div>

        <section className="py-16 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div className="max-w-2xl space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-xs sm:text-sm font-mono uppercase tracking-[0.35em] text-muted-foreground">
                  <span className="h-px w-8 bg-border" />
                  About me
                </div>
                <div className="space-y-3">
                  <h1 className="max-w-xl text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[0.95]">
                    Charles Platon
                  </h1>
                </div>
              </div>

              <div className="space-y-5 border-l border-border pl-5 sm:pl-6">
                <p className="max-w-xl text-base sm:text-lg text-muted-foreground leading-8">
                  I am a 21-year-old BS Computer Science student based in Cabuyao, Laguna, Philippines. When I&apos;m not studying, I&apos;m actively developing and diving into hackathons. For me, competitions are a great way to work on solving actual problems and meet interesting people.
                </p>

                <p className="max-w-xl text-base sm:text-lg text-muted-foreground leading-8">
                  I&apos;m a game developer at heart—creator of the first-person horror experience <em>The Lost Hospital</em> built in Unreal Engine—who is also heavily exploring full-stack web development.
                </p>
              </div>

              {/* Removed hobby/interest tags as requested */}
            </div>

            <aside className="overflow-hidden rounded-2xl border border-border bg-muted/20">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/about-me-image/fb-pfp-removedbG.png"
                  alt="About me portrait"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 34vw, 100vw"
                  priority
                />
              </div>
            </aside>
          </div>
        </section>

        <section className="py-8 border-t border-border">
          <div className="grid gap-6 sm:grid-cols-3 text-sm text-muted-foreground">
            <div>
              <div className="text-foreground mb-2">Focus</div>
              Clean interfaces, useful motion, and solid architecture.
            </div>
            <div>
              <div className="text-foreground mb-2">Approach</div>
              Minimal by default, with details revealed only when needed.
            </div>
            <div>
              <div className="text-foreground mb-2">Outside code</div>
              Blender, creative builds, and collaborative hackathons.
            </div>
          </div>
        </section>
      </div>
    </main>
    </>
  )
}