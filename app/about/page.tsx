"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"
import { createTechStackSlug, techStackGroups } from "@/lib/tech-stacks"
import {
  LayoutTemplate,
  Database,
  Settings,
  Gamepad2,
  ArrowRight,
  Github,
  Instagram,
  Linkedin,
} from "lucide-react"

export default function AboutPage() {
  const { resolvedTheme, setTheme } = useTheme()
  const [activeTab, setActiveTab] = useState("Frontend")
  const [isLoaded, setIsLoaded] = useState(false)
  const [showLoadingSection, setShowLoadingSection] = useState(true)
  const [isScrollLocked, setIsScrollLocked] = useState(true)
  const [isPortraitHovered, setIsPortraitHovered] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  const isDark = mounted && resolvedTheme === "dark"

  const activeStacks = techStackGroups.find((group) => group.category === activeTab)?.items ?? []

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

      <main className="min-h-screen bg-background text-foreground">
        <div className={`max-w-5xl mx-auto px-6 sm:px-8 lg:px-16 pt-10 sm:pt-14 pb-0 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
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

              <aside
                className="overflow-hidden rounded-2xl border border-border bg-muted/20"
                onMouseEnter={() => setIsPortraitHovered(true)}
                onMouseLeave={() => setIsPortraitHovered(false)}
              >
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src="/about-me-image/fb-pfp-removedbG.png"
                    alt="About me portrait"
                    fill
                    className={`object-cover transition-opacity duration-300 ease-out ${isPortraitHovered ? "opacity-0" : "opacity-100"
                      }`}
                    sizes="(min-width: 1024px) 34vw, 100vw"
                    priority
                  />
                  <Image
                    src="/about-me-image/fb-pfp-hover-image.png"
                    alt="About me portrait hover"
                    fill
                    className={`object-cover transition-opacity duration-300 ease-out ${isPortraitHovered ? "opacity-100" : "opacity-0"
                      }`}
                    sizes="(min-width: 1024px) 34vw, 100vw"
                  />
                </div>
              </aside>
            </div>
          </section>

          <section className="py-8 border-t border-border">
            <div className="grid gap-6 sm:grid-cols-3 text-sm text-muted-foreground">
              <div>
                <div className="text-foreground mb-2">A member of</div>
                <div className="space-y-3 max-w-xs">
                  <Link
                    href="https://www.facebook.com/ACSS.PNC"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block bg-background border border-border rounded-md p-4 hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex-0">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-sm bg-muted/10 border border-border text-muted-foreground">AC</span>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-foreground">Association of Computer Science Students - PNC</div>
                      </div>
                      <div className="flex-0">
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground" />
                      </div>
                    </div>
                  </Link>

                  <div className="group block bg-background border border-border rounded-md p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex-0">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-sm bg-muted/10 border border-border text-muted-foreground">PC</span>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-foreground">Pamantasan ng Cabuyao</div>
                        <div className="text-xs text-muted-foreground mt-1">College of Computing Studies</div>
                      </div>
                      <div className="flex-0">
                        <ArrowRight className="w-4 h-4 text-muted-foreground" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="text-foreground mb-2">Social Links</div>
                <div className="max-w-xs">
                  <Link href="https://www.linkedin.com/in/charles-platon" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 border-b border-border py-3">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-sm bg-muted/10 border border-border text-muted-foreground">
                      <Linkedin className="w-4 h-4" aria-hidden="true" />
                    </span>
                    <span className="text-sm text-foreground">LinkedIn</span>
                  </Link>

                  <Link href="https://github.com/Charles-CS" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 border-b border-border py-3">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-sm bg-muted/10 border border-border text-muted-foreground">
                      <Github className="w-4 h-4" aria-hidden="true" />
                    </span>
                    <span className="text-sm text-foreground">GitHub</span>
                  </Link>

                  <Link href="https://www.instagram.com/chrls_plnkton/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 py-3">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-sm bg-muted/10 border border-border text-muted-foreground">
                      <Instagram className="w-4 h-4" aria-hidden="true" />
                    </span>
                    <span className="text-sm text-foreground">Instagram</span>
                  </Link>
                </div>
              </div>

              <div className="flex flex-col h-full">
                <div className="text-foreground mb-2">Open for opportunities</div>
                <div className="border border-border rounded-md p-4 bg-background max-w-xs flex-1 flex flex-col justify-between">
                  <p className="text-sm text-muted-foreground">Open to work and collaboration — available for full-time roles and freelance projects.</p>
                  <Link href="#" className="mt-4 inline-flex items-center text-sm font-medium text-foreground">
                    Contact me
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 sm:py-24 border-t border-border">
            <div className="space-y-12">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-xs sm:text-sm font-mono uppercase tracking-[0.35em] text-muted-foreground">
                  <span className="h-px w-8 bg-border" />
                  The Arsenal
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight">
                  Tech Stack
                </h2>
              </div>

              <div className="grid gap-8 lg:grid-cols-[250px_1fr] lg:gap-16 lg:items-stretch items-start">
                {/* Vertical Navigation for larger screens, Horizontal scroll for mobile */}
                <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible gap-2 sm:gap-3 pb-4 lg:pb-0 hide-scrollbar -mx-6 px-6 lg:mx-0 lg:px-0">
                  {[
                    { name: "Frontend", icon: LayoutTemplate },
                    { name: "Backend", icon: Database },
                    { name: "Tools & Cloud", icon: Settings },
                    { name: "Game Dev", icon: Gamepad2 },
                  ].map((tab) => {
                    const isActive = activeTab === tab.name
                    return (
                      <button
                        key={tab.name}
                        onClick={() => setActiveTab(tab.name)}
                        className={`relative flex items-center gap-3 whitespace-nowrap px-4 py-3 text-sm font-mono tracking-wider transition-all duration-300 rounded-lg text-left ${isActive
                            ? "bg-foreground text-background"
                            : "hover:bg-muted/50 text-muted-foreground hover:text-foreground"
                          }`}
                      >
                        <tab.icon className="w-4 h-4 z-10" />
                        <span className="z-10">{tab.name}</span>
                        {isActive && (
                          <motion.div
                            layoutId="activeTabIndicator"
                            className="absolute inset-0 bg-foreground rounded-lg -z-10"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          />
                        )}
                      </button>
                    )
                  })}
                </div>

                {/* Dynamic Content */}
                <div className="h-full">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="space-y-8 h-full flex flex-col"
                    >
                      <div className="w-full">
                        <div className="sr-only">Tech stack</div>
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 items-start">
                          {activeStacks.map((item) => (
                            <div
                              key={item.name}
                              title={item.name}
                              className="group flex flex-col items-center justify-center gap-2 rounded-xl p-2 sm:p-3 transition-all duration-300 hover:bg-muted/40"
                            >
                              <i aria-hidden="true" className={`${item.icon} text-2xl sm:text-3xl md:text-4xl text-muted-foreground transition-all duration-300 group-hover:text-foreground group-hover:scale-110`} />
                              <span className="sr-only">{item.name}</span>
                              <span aria-hidden="true" className="opacity-0 group-hover:opacity-100 transition-opacity text-xs text-muted-foreground mt-1 whitespace-nowrap truncate max-w-[8rem]">
                                {item.name}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </section>

        <footer className="py-12 sm:py-16 border-t border-border">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">© 2026 Charles Platon. All rights reserved.</div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>

              <button className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300">
                <svg
                  className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </footer>
        </div>
      </main>
    </>
  )
}