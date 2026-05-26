"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"
import {
  LayoutTemplate,
  Database,
  Settings,
  Gamepad2,
  ArrowRight,
  Github,
  Instagram,
  Linkedin,
  X,
  BookOpen,
  CalendarDays,
  MapPin,
  Clock3,
} from "lucide-react"

type TechStackItem = {
  name: string
  icon: string
  startedYear: number
  startedContext: string
  learningStory: string
}

type TechStackGroup = {
  category: string
  items: TechStackItem[]
}

const techStackGroups: TechStackGroup[] = [
  {
    category: "Frontend",
    items: [
      {
        name: "HTML5",
        icon: "devicon-html5-plain",
        startedYear: 2021,
        startedContext: "school projects and simple personal pages",
        learningStory:
          "I started learning HTML5 in 2021 through school projects and simple personal pages. It was the first layer of web development I practiced seriously, and after 5+ years of use it still anchors how I structure every interface.",
      },
      {
        name: "CSS3",
        icon: "devicon-css3-plain",
        startedYear: 2021,
        startedContext: "school projects and early layout experiments",
        learningStory:
          "I started learning CSS3 in 2021 while styling school projects and experimenting with layouts on my own. That hands-on practice gave me 5+ years of experience shaping responsive, polished interfaces.",
      },
      {
        name: "JavaScript",
        icon: "devicon-javascript-plain",
        startedYear: 2021,
        startedContext: "interactive school work and small web experiments",
        learningStory:
          "I started learning JavaScript in 2021 while adding interactivity to school work and small web experiments. After 5+ years of building with it, it became the language that connected my frontend ideas to real behavior.",
      },
      {
        name: "TypeScript",
        icon: "devicon-typescript-plain",
        startedYear: 2024,
        startedContext: "hackathon prototypes and production web apps",
        learningStory:
          "I started learning TypeScript in 2024 when hackathon prototypes and production web apps needed stronger structure. With 2+ years of daily use, it now helps me keep complex frontend code predictable and maintainable.",
      },
      {
        name: "React",
        icon: "devicon-react-original",
        startedYear: 2024,
        startedContext: "portfolio builds and hackathon projects",
        learningStory:
          "I started learning React in 2024 while building portfolio pages and hackathon projects. Over 2+ years of component-based development, it has become one of my main tools for fast, reusable interfaces.",
      },
      {
        name: "Next.js",
        icon: "devicon-nextjs-plain",
        startedYear: 2024,
        startedContext: "shipping full-stack portfolio and product sites",
        learningStory:
          "I started learning Next.js in 2024 when I began shipping full-stack portfolio and product sites. After 2+ years of building with it, it is the framework I rely on most for production-ready web apps.",
      },
      {
        name: "Tailwind CSS",
        icon: "devicon-tailwindcss-plain",
        startedYear: 2024,
        startedContext: "rapid UI work for modern web apps",
        learningStory:
          "I started learning Tailwind CSS in 2024 while speeding up UI work for modern web apps. After 2+ years of using it, I lean on it whenever I need consistent design systems and quick iteration.",
      },
    ],
  },
  {
    category: "Backend",
    items: [
      {
        name: "Java",
        icon: "devicon-java-plain",
        startedYear: 2022,
        startedContext: "computer science classes and foundational programming work",
        learningStory:
          "I started learning Java in 2022 through computer science classes and foundational programming work. With 4+ years of experience, it gave me a strong base for thinking about object-oriented systems and backend logic.",
      },
      {
        name: "Python",
        icon: "devicon-python-plain",
        startedYear: 2024,
        startedContext: "automation, AI experiments, and hackathon work",
        learningStory:
          "I started learning Python in 2024 while exploring automation, AI experiments, and hackathon work. After 2+ years of practical use, it has become my go-to language for rapid prototyping and data-heavy tasks.",
      },
      {
        name: "PHP",
        icon: "devicon-php-plain",
        startedYear: 2022,
        startedContext: "school backend exercises and basic server-side projects",
        learningStory:
          "I started learning PHP in 2022 through school backend exercises and basic server-side projects. With 4+ years of exposure, it helped me understand how requests, forms, and server logic fit together.",
      },
      {
        name: "Laravel",
        icon: "devicon-laravel-plain",
        startedYear: 2023,
        startedContext: "structured backend projects and MVC practice",
        learningStory:
          "I started learning Laravel in 2023 while working on structured backend projects and MVC practice. After 3+ years of using it, I appreciate how much it speeds up building clean, organized application backends.",
      },
      {
        name: "Node.js",
        icon: "devicon-nodejs-plain",
        startedYear: 2024,
        startedContext: "full-stack web applications and API work",
        learningStory:
          "I started learning Node.js in 2024 when I began building full-stack web applications and APIs. With 2+ years of experience, it now sits at the center of most of my JavaScript backend work.",
      },
      {
        name: "PostgreSQL",
        icon: "devicon-postgresql-plain",
        startedYear: 2024,
        startedContext: "project databases and production app data models",
        learningStory:
          "I started learning PostgreSQL in 2024 while designing databases for project work and production app data models. After 2+ years of use, it is the database I trust most for structured relational data.",
      },
      {
        name: "Supabase",
        icon: "devicon-supabase-plain",
        startedYear: 2024,
        startedContext: "rapid backend setup for modern web apps",
        learningStory:
          "I started learning Supabase in 2024 when I needed a faster backend setup for modern web apps. With 2+ years of experience, it has become a practical shortcut for auth, database, and storage workflows.",
      },
      {
        name: "Prisma",
        icon: "devicon-prisma-original",
        startedYear: 2025,
        startedContext: "typed database access in Next.js projects",
        learningStory:
          "I started learning Prisma in 2025 while tightening up typed database access in Next.js projects. After 1+ years of use, it gives me a safer way to work with relational data in full-stack builds.",
      },
    ],
  },
  {
    category: "Tools & Cloud",
    items: [
      {
        name: "Git",
        icon: "devicon-git-plain",
        startedYear: 2021,
        startedContext: "school projects and version-controlled assignments",
        learningStory:
          "I started learning Git in 2021 through school projects and version-controlled assignments. After 5+ years of using it, it has become the default way I manage history, branches, and collaboration.",
      },
      {
        name: "GitHub",
        icon: "devicon-github-original",
        startedYear: 2021,
        startedContext: "publishing school and personal projects",
        learningStory:
          "I started using GitHub in 2021 while publishing school and personal projects. With 5+ years of experience, it is where I keep my work visible, organized, and ready to share.",
      },
      {
        name: "Docker",
        icon: "devicon-docker-plain",
        startedYear: 2025,
        startedContext: "deployment workflows and containerized project setups",
        learningStory:
          "I started learning Docker in 2025 while improving deployment workflows and containerized project setups. After 1+ years of use, it helps me package apps in a way that is easier to ship and reproduce.",
      },
      {
        name: "AWS",
        icon: "devicon-amazonwebservices-plain-wordmark",
        startedYear: 2025,
        startedContext: "deployment and infrastructure exploration",
        learningStory:
          "I started learning AWS in 2025 while exploring deployment and infrastructure options for larger projects. With 1+ years of experience, it broadened how I think about cloud services and scaling.",
      },
      {
        name: "Vercel",
        icon: "devicon-vercel-original",
        startedYear: 2024,
        startedContext: "shipping the portfolio and other web apps",
        learningStory:
          "I started using Vercel in 2024 when I began shipping the portfolio and other web apps. After 2+ years of deployments, it has become my fastest path from code to live production.",
      },
      {
        name: "Figma",
        icon: "devicon-figma-plain",
        startedYear: 2023,
        startedContext: "UI planning and interface mockups for projects",
        learningStory:
          "I started learning Figma in 2023 while planning UI layouts and building mockups for projects. With 3+ years of experience, it helps me translate ideas into interfaces before I write code.",
      },
    ],
  },
  {
    category: "Game Dev",
    items: [
      {
        name: "Unreal Engine",
        icon: "devicon-unrealengine-original",
        startedYear: 2024,
        startedContext: "The Lost Hospital and first-person horror experiments",
        learningStory:
          "I started learning Unreal Engine in 2024 while building The Lost Hospital and exploring first-person horror experiments. After 2+ years of hands-on work, it is the engine I associate most with atmosphere-driven game design.",
      },
      {
        name: "Unity",
        icon: "devicon-unity-plain",
        startedYear: 2024,
        startedContext: "educational game development and gameplay prototypes",
        learningStory:
          "I started learning Unity in 2024 for educational game development and gameplay prototypes. With 2+ years of experience, it taught me how to build interactive systems that feel playful and responsive.",
      },
      {
        name: "Godot",
        icon: "devicon-godot-plain",
        startedYear: 2025,
        startedContext: "lightweight engine experiments and experimentation",
        learningStory:
          "I started learning Godot in 2025 through lightweight engine experiments and experimentation. After 1+ years of use, it has been a great space for quick gameplay ideas and learning different engine workflows.",
      },
      {
        name: "C++",
        icon: "devicon-cplusplus-plain",
        startedYear: 2022,
        startedContext: "programming foundations and game scripting concepts",
        learningStory:
          "I started learning C++ in 2022 through programming foundations and game scripting concepts. With 4+ years of experience, it remains one of the core languages behind how I understand performance-heavy systems.",
      },
      {
        name: "C#",
        icon: "devicon-csharp-plain",
        startedYear: 2024,
        startedContext: "Unity gameplay scripting and game tooling",
        learningStory:
          "I started learning C# in 2024 while writing Unity gameplay scripts and game tooling. After 2+ years of use, it is the language I reach for when I want fast iteration inside game engines.",
      },
      {
        name: "Blender",
        icon: "devicon-blender-original",
        startedYear: 2024,
        startedContext: "asset prototyping and supporting game scenes",
        learningStory:
          "I started learning Blender in 2024 while prototyping assets and supporting game scenes. With 2+ years of practice, it helps me shape the visual side of projects before they reach the engine.",
      },
    ],
  },
]

export default function AboutPage() {
  const { resolvedTheme, setTheme } = useTheme()
  const [activeTab, setActiveTab] = useState("Frontend")
  const [isLoaded, setIsLoaded] = useState(false)
  const [showLoadingSection, setShowLoadingSection] = useState(true)
  const [isScrollLocked, setIsScrollLocked] = useState(true)
  const [isPortraitHovered, setIsPortraitHovered] = useState(false)
  const [selectedStack, setSelectedStack] = useState<TechStackItem | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  const isDark = mounted && resolvedTheme === "dark"

  const activeStacks = techStackGroups.find((group) => group.category === activeTab)?.items ?? []

  const openStackModal = (stack: TechStackItem) => {
    setSelectedStack(stack)
  }

  const closeStackModal = () => {
    setSelectedStack(null)
  }

  useEffect(() => {
    document.documentElement.classList.toggle("loading-scroll-lock", isScrollLocked)
    document.body.classList.toggle("loading-scroll-lock", isScrollLocked)

    return () => {
      document.documentElement.classList.remove("loading-scroll-lock")
      document.body.classList.remove("loading-scroll-lock")
    }
  }, [isScrollLocked])

  useEffect(() => {
    if (!selectedStack) {
      return
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeStackModal()
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [selectedStack])

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
        <div className={`max-w-5xl mx-auto px-6 sm:px-8 lg:px-16 pt-10 sm:pt-14 pb-0 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
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
                            <button
                              key={item.name}
                              type="button"
                              onClick={() => openStackModal(item)}
                              aria-label={`Open details for ${item.name}`}
                              className="group flex flex-col items-center justify-center gap-2 rounded-xl p-2 sm:p-3 transition-all duration-300 hover:bg-muted/40 focus:outline-none focus:ring-2 focus:ring-foreground/20"
                            >
                              <i aria-hidden="true" className={`${item.icon} text-2xl sm:text-3xl md:text-4xl text-muted-foreground transition-all duration-300 group-hover:text-foreground group-hover:scale-110`} />
                              <span className="sr-only">{item.name}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </section>

          <AnimatePresence>
            {selectedStack && (
              <motion.div
                role="dialog"
                aria-modal="true"
                aria-labelledby="stack-modal-title"
                aria-describedby="stack-modal-description"
                className="fixed inset-0 z-[120] flex items-center justify-center px-4 py-6 sm:px-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.button
                  type="button"
                  aria-label="Close tech stack modal"
                  className="absolute inset-0 bg-black/55 backdrop-blur-sm"
                  onClick={closeStackModal}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />

                <motion.div
                  initial={{ opacity: 0, y: 24, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 18, scale: 0.98 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="relative z-10 w-full max-w-xl rounded-3xl border border-border bg-background p-6 sm:p-8 shadow-2xl"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <div className="inline-flex items-center rounded-full border border-border px-3 py-1 text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground">
                        {activeTab}
                      </div>
                      <h3 id="stack-modal-title" className="text-3xl sm:text-4xl font-light tracking-tight">
                        {selectedStack.name}
                      </h3>
                    </div>

                    <button
                      type="button"
                      onClick={closeStackModal}
                      className="rounded-full border border-border p-2 text-muted-foreground transition-colors hover:text-foreground hover:border-muted-foreground/60"
                      aria-label="Close modal"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>

                  <div id="stack-modal-description" className="mt-6 space-y-6">
                    <p className="text-base sm:text-lg leading-8 text-muted-foreground">
                      {selectedStack.learningStory}
                    </p>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="rounded-2xl border border-border bg-muted/20 p-4">
                        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground">
                          <CalendarDays className="h-4 w-4" />
                          Started
                        </div>
                        <div className="mt-3 text-lg font-medium text-foreground">{selectedStack.startedYear}</div>
                        <p className="mt-1 text-sm text-muted-foreground">{selectedStack.startedContext}</p>
                      </div>

                      <div className="rounded-2xl border border-border bg-muted/20 p-4">
                        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground">
                          <Clock3 className="h-4 w-4" />
                          Experience
                        </div>
                        <div className="mt-3 text-lg font-semibold text-foreground">
                          {Math.max(1, new Date().getFullYear() - selectedStack.startedYear)}+ years
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground">
                          Hands-on work that kept growing through projects, hackathons, and real builds.
                        </p>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-border p-4">
                      <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        Learning context
                      </div>
                      <div className="mt-3 text-sm leading-7 text-foreground">
                        {selectedStack.startedContext}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <BookOpen className="h-4 w-4" />
                      Open the stack card anytime to revisit the learning timeline.
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

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