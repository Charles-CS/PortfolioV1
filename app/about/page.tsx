"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, LayoutTemplate, Database, Settings, Gamepad2 } from "lucide-react"

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("Core")
  const [isLoaded, setIsLoaded] = useState(false)
  const [showLoadingSection, setShowLoadingSection] = useState(true)
  const [isScrollLocked, setIsScrollLocked] = useState(true)
  const [showScrollbarCover, setShowScrollbarCover] = useState(true)
  const [isScrollbarCoverFading, setIsScrollbarCoverFading] = useState(false)
  const [isPortraitHovered, setIsPortraitHovered] = useState(false)

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
                  className={`object-cover transition-opacity duration-300 ease-out ${
                    isPortraitHovered ? "opacity-0" : "opacity-100"
                  }`}
                  sizes="(min-width: 1024px) 34vw, 100vw"
                  priority
                />
                <Image
                  src="/about-me-image/fb-pfp-hover-image.png"
                  alt="About me portrait hover"
                  fill
                  className={`object-cover transition-opacity duration-300 ease-out ${
                    isPortraitHovered ? "opacity-100" : "opacity-0"
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
              <div className="text-foreground mb-2">Focus</div>
              Game systems, full‑stack web applications, and polished user experiences.
            </div>
            <div>
              <div className="text-foreground mb-2">Approach</div>
              Prototype quickly, iterate with feedback, and keep designs minimal and accessible.
            </div>
            <div>
              <div className="text-foreground mb-2">Outside code</div>
              3D modeling in Blender, level design, creative builds, and hackathon collaborations.
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
                  { name: "Core", icon: Star },
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
                      className={`relative flex items-center gap-3 whitespace-nowrap px-4 py-3 text-sm font-mono tracking-wider transition-all duration-300 rounded-lg text-left ${
                        isActive 
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
                      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 items-center">
                      {[
                        {
                          category: "Core",
                          items: [
                            { name: "JavaScript", icon: "devicon-javascript-plain" },
                            { name: "TypeScript", icon: "devicon-typescript-plain" },
                            { name: "Java", icon: "devicon-java-plain" },
                            { name: "Python", icon: "devicon-python-plain" },
                            { name: "PHP", icon: "devicon-php-plain" },
                            { name: "C++", icon: "devicon-cplusplus-plain" },
                            { name: "C#", icon: "devicon-csharp-plain" },
                          ],
                        },
                        {
                          category: "Frontend",
                          items: [
                            { name: "React", icon: "devicon-react-original" },
                            { name: "Next.js", icon: "devicon-nextjs-plain" },
                            { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain" },
                            { name: "HTML5", icon: "devicon-html5-plain" },
                            { name: "CSS3", icon: "devicon-css3-plain" },
                          ],
                        },
                        {
                          category: "Backend",
                          items: [
                            { name: "Node.js", icon: "devicon-nodejs-plain" },
                            { name: "Laravel", icon: "devicon-laravel-plain" },
                            { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
                            { name: "Supabase", icon: "devicon-supabase-plain" },
                            { name: "Prisma", icon: "devicon-prisma-original" },
                          ],
                        },
                        {
                          category: "Tools & Cloud",
                          items: [
                            { name: "Git", icon: "devicon-git-plain" },
                            { name: "GitHub", icon: "devicon-github-original" },
                            { name: "Docker", icon: "devicon-docker-plain" },
                            { name: "AWS", icon: "devicon-amazonwebservices-original" },
                            { name: "Vercel", icon: "devicon-vercel-original" },
                            { name: "Figma", icon: "devicon-figma-plain" },
                          ],
                        },
                        {
                          category: "Game Dev",
                          items: [
                            { name: "Unreal Engine", icon: "devicon-unrealengine-original" },
                            { name: "Unity", icon: "devicon-unity-original" },
                            { name: "Godot", icon: "devicon-godot-plain" },
                            { name: "Blender", icon: "devicon-blender-original" },
                          ],
                        },
                      ].find(tab => tab.category === activeTab)?.items.map((item) => (
                        <div
                          key={item.name}
                          className="flex flex-col items-center justify-center gap-2"
                        >
                          <i className={`${item.icon} text-2xl sm:text-3xl md:text-4xl text-muted-foreground transition-colors`} />
                          <span className="text-xs sm:text-sm text-muted-foreground">{item.name}</span>
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
      </div>
    </main>
    </>
  )
}