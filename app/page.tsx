"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function Home() {
  const [isDark, setIsDark] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [showHoverLabel, setShowHoverLabel] = useState(false)
  const [hoverLabelPosition, setHoverLabelPosition] = useState({ x: 0, y: 0 })
  const [hoveredProjectIndex, setHoveredProjectIndex] = useState<number | null>(null)
  const [projectHoverLabelPosition, setProjectHoverLabelPosition] = useState({ x: 0, y: 0 })
  const sectionsRef = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: "0px 0px -20% 0px" },
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  const updateHoverLabelPosition = (event: React.MouseEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    const labelWidth = 92
    const labelHeight = 32
    const padding = 12
    const rawX = event.clientX - bounds.left
    const rawY = event.clientY - bounds.top - labelHeight / 2 - 2

    const nextX = Math.min(Math.max(rawX, padding + labelWidth / 2), bounds.width - padding - labelWidth / 2)
    const nextY = Math.min(Math.max(rawY, padding + labelHeight / 2), bounds.height - padding - labelHeight / 2)

    const nextPosition = { x: nextX, y: nextY }

    setHoverLabelPosition(nextPosition)
    setProjectHoverLabelPosition(nextPosition)
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <div className="flex flex-col gap-4">
          {["intro", "work", "thoughts", "connect"].map((section) => (
            <button
              key={section}
              onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })}
              className={`w-2 h-8 rounded-full transition-all duration-500 ${activeSection === section ? "bg-foreground" : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
                }`}
              aria-label={`Navigate to ${section}`}
            />
          ))}
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
        <header
          id="intro"
          ref={(el) => { sectionsRef.current[0] = el }}
          className="min-h-screen flex items-center opacity-0"
        >
          <div className="grid lg:grid-cols-5 gap-12 sm:gap-16 w-full items-start">
            <Link
              href="/about"
              onMouseEnter={(event) => {
                setShowHoverLabel(true)
                updateHoverLabelPosition(event)
              }}
              onMouseMove={updateHoverLabelPosition}
              onMouseLeave={() => setShowHoverLabel(false)}
              className="group lg:col-span-3 relative block space-y-6 sm:space-y-8 rounded-3xl p-4 -m-4 cursor-crosshair focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20"
              aria-label="Go to the About Me page"
            >
              <div className="space-y-3 sm:space-y-2">
                <div className="text-sm text-muted-foreground font-mono tracking-wider">Hello, world! Call me</div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight">
                  Charles
                  <br />
                  <span className="text-muted-foreground">Platon</span>
                </h1>
              </div>

              <div className="space-y-6 max-w-md">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Aspiring Frontend Engineer specializing in
                  <span className="text-foreground"> High-Fidelity UIs</span>,
                  <span className="text-foreground"> Web Architectures</span>, and
                  <span className="text-foreground"> Interactive Design</span>.
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    Available for work
                  </div>
                  <div>Philippines</div>
                </div>
              </div>

              <div
                className={`pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-150 ${showHoverLabel ? "opacity-100" : "opacity-0"
                  }`}
                style={{ left: hoverLabelPosition.x, top: hoverLabelPosition.y }}
              >
                <div className="rounded-full border border-border bg-background/90 px-3 py-1.5 text-[11px] leading-none whitespace-nowrap text-foreground shadow-sm backdrop-blur-sm">
                  Click for more
                </div>
              </div>
            </Link>

            <div className="lg:col-span-2 flex flex-col justify-center space-y-6 sm:space-y-8 mt-8 lg:mt-0 lg:pt-24">
              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">CURRENTLY</div>
                <div className="space-y-2">
                  <div className="text-foreground">3rd-Year CS Student</div>
                  <div className="text-muted-foreground">@ University of Cabuyao</div>
                  <div className="text-xs text-muted-foreground">2026 - Present</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">FOCUS</div>
                <div className="flex flex-wrap gap-2">
                  {["React", "TypeScript", "Node.js", "Next.js", "Tailwind"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </header>

        <section
          id="work"
          ref={(el) => { sectionsRef.current[1] = el }}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl font-light">Selected Work</h2>
              <div className="text-sm text-muted-foreground font-mono">2019 — 2025</div>
            </div>

            <div className="space-y-8 sm:space-y-12">
              {[
                {
                  slug: "kumpirma",
                  year: "2026",
                  role: "Kumpirma",
                  company: "",
                  description: "AI + blockchain signature verification using YOLOv8, Pix2Pix, Siamese CapsNet, Ethereum & IPFS.",
                  tech: ["Next.js", "TypeScript", "Python", "OpenCV", "TensorFlow", "PostgreSQL", "IPFS"],
                },
                {
                  slug: "redquest",
                  year: "2026",
                  role: "RedQuest",
                  company: "",
                  description: "Mobile platform that connects blood requesters with nearby donors and enables rapid delivery to hospitals.",
                  tech: ["React Native", "Expo Go", "Tailwind", "Railway", "PostgreSQL"],
                },
                {
                  slug: "lunas",
                  year: "2026",
                  role: "Lunas",
                  company: "",
                  description: "Secure web platform giving clinicians instant access to patient health data via QR code for emergencies.",
                  tech: ["Next.Js", "React", "PostgreSQL", "Password Hashing", "RBAC", "TailwindCSS"],
                },
                {
                  slug: "toka",
                  year: "2026",
                  role: "Toka",
                  company: "",
                  description: "App that turns chores into a rewards micro-economy with real-time approvals and a savings vault.",
                  tech: ["React Native", "TypeScript", "Firebase"],
                },
              ].map((job, index) => (
                <Link
                  key={index}
                  href={`/work/${job.slug}`}
                  onMouseEnter={(event) => {
                    setHoveredProjectIndex(index)
                    updateHoverLabelPosition(event)
                  }}
                  onMouseMove={updateHoverLabelPosition}
                  onMouseLeave={() => setHoveredProjectIndex(null)}
                  className="group relative grid lg:grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8 border-b border-border/50 hover:border-border transition-all duration-500 cursor-crosshair overflow-hidden block"
                >
                  <div className="pointer-events-none absolute inset-0 bg-foreground/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="lg:col-span-2">
                    <div className="text-xl sm:text-2xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                      {job.year}
                    </div>
                  </div>

                  <div className="lg:col-span-6 space-y-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-medium">{job.role}</h3>
                      <div className="text-muted-foreground">{job.company}</div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed max-w-lg">{job.description}</p>
                  </div>

                  <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end mt-2 lg:mt-0">
                    {job.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs text-muted-foreground rounded group-hover:border-muted-foreground/50 transition-colors duration-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div
                    className={`pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-150 ${hoveredProjectIndex === index ? "opacity-100" : "opacity-0"
                      }`}
                    style={{ left: projectHoverLabelPosition.x, top: projectHoverLabelPosition.y }}
                  >
                    <div className="rounded-full border border-border bg-background/90 px-3 py-1.5 text-[11px] leading-none whitespace-nowrap text-foreground shadow-sm backdrop-blur-sm">
                      Click to view
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section
          id="thoughts"
          ref={(el) => { sectionsRef.current[2] = el }}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <h2 className="text-3xl sm:text-4xl font-light">Project & Achievements</h2>

            <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
              {[
                {
                  title: "Portfolio Showcase",
                  excerpt: "A collection of my recent development work, ranging from full-stack applications to interactive web experiences.",
                  date: "Jan 2025 - 2026",
                  readTime: "All Projects",
                },
                {
                  title: "Hackathons",
                  excerpt: "Intense 48-hour sprints of innovation and collaboration, building functional prototypes to solve real-world challenges.",
                  date: "May 2026",
                  readTime: "Experiences",
                },
                {
                  title: "BSCS QuizBee Champion",
                  excerpt: "Consistently recognized for technical knowledge and problem-solving speed in regional computer science competitions.",
                  date: "Feb 2026",
                  readTime: "Awards",
                },
                {
                  title: "Certificates",
                  excerpt: "A testament to continuous learning and mastery of various technologies, from cloud to specialized development",
                  date: "Jan 2024 - 2026",
                  readTime: "Recognitions",
                },
              ].map((post, index) => (
                <article
                  key={index}
                  className="group p-6 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg cursor-crosshair"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      <span>View more</span>
                      <svg
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="connect" ref={(el) => { sectionsRef.current[3] = el }} className="py-20 sm:py-32 opacity-0">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl font-light">Let's Connect</h2>

              <div className="space-y-6">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Always interested in new opportunities, collaborations, and conversations about technology and design.
                </p>

                <div className="space-y-4">
                  <Link
                    href="mailto:Charlesplaton263@gmail.com"
                    className="group flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors duration-300"
                  >
                    <span className="text-base sm:text-lg">Charlesplaton263@gmail.com</span>
                    <svg
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="text-sm text-muted-foreground font-mono">ELSEWHERE</div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: "GitHub", handle: "Charles-CS", url: "https://github.com/Charles-CS" },
                  { name: "Instagram", handle: "chrls_plnkton", url: "https://www.instagram.com/chrls_plnkton" },
                  { name: "Facebook", handle: "Charles Platon", url: "https://www.facebook.com/charles.platon.573221" },
                  { name: "LinkedIn", handle: "charles-platon", url: "https://www.linkedin.com/in/charles-platon" },
                ].map((social) => (
                  <Link
                    key={social.name}
                    href={social.url}
                    target={social.url !== "#" ? "_blank" : undefined}
                    rel={social.url !== "#" ? "noopener noreferrer" : undefined}
                    className="group p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm"
                  >
                    <div className="space-y-2">
                      <div className="text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                        {social.name}
                      </div>
                      <div className="text-sm text-muted-foreground">{social.handle}</div>
                    </div>
                  </Link>
                ))}
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
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
    </div>
  )
}
