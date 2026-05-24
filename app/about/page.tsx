"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const coreTechStacks = ["Next.js", "TypeScript", "React", "Node.js", "Tailwind", "PostgreSQL"]

const extendedTechStacks = [
  "React Native",
  "Expo",
  "Firebase",
  "Python",
  "OpenCV",
  "TensorFlow",
  "IPFS",
  "Blender",
  "Three.js",
  "Vercel",
]

export default function AboutPage() {
  const [showMoreTechStacks, setShowMoreTechStacks] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [showLoadingSection, setShowLoadingSection] = useState(true)

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
      <AnimatePresence>
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
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div className="space-y-6 max-w-2xl">
              <div className="space-y-3">
                <div className="text-sm text-muted-foreground font-mono tracking-wider">ABOUT ME</div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight">
                  Charles Platon
                </h1>
              </div>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
                I&apos;m a passionate developer and creator bridging code and craft. With a Computer Science background, I build digital experiences that are functional and meaningful.
              </p>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
                I&apos;m currently exploring full-stack web, game development, and 3D art. When I&apos;m not shipping code, I&apos;m usually modeling in Blender or joining hackathons with my team.
              </p>

              {/* Removed hobby/interest tags as requested */}
            </div>

            <aside className="space-y-5 rounded-2xl border border-border p-5 sm:p-6">
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground font-mono">TECH STACK</div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The site leans on a compact core stack, with the rest tucked away until you need it.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {["Full-Stack Web", "Mobile Dev", "Game Development", "Tools & Deployment"].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 text-xs text-muted-foreground border border-border rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {coreTechStacks.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-2 text-sm rounded-full border border-border text-foreground/90"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <button
                type="button"
                onClick={() => setShowMoreTechStacks(!showMoreTechStacks)}
                className="text-sm text-foreground border border-border rounded-full px-4 py-2 hover:border-muted-foreground/60 transition-colors duration-300"
                aria-expanded={showMoreTechStacks}
              >
                {showMoreTechStacks ? "Show less" : "View more tech stacks"}
              </button>

              {showMoreTechStacks ? (
                <div className="flex flex-wrap gap-2">
                  {extendedTechStacks.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-2 text-sm rounded-full border border-border text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              ) : null}
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