"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function QuizBeeChampionPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    // Make sure to remove any scroll lock that might have been applied by page transitions
    document.documentElement.classList.remove("loading-scroll-lock")
    document.body.classList.remove("loading-scroll-lock")
    
    const timer = setTimeout(() => setIsLoaded(true), 50)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background">
      <nav
          className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 sm:px-10 lg:px-16 py-6 transition-all duration-700 ${
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
            Back
          </Link>
          <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-mono">
            Feb 2026
          </div>
        </nav>

        <main className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 pt-32">
          <article>
            <header className="mb-16 md:mb-24 flex flex-col md:flex-row gap-12 md:gap-20">
              <div className="flex-1 space-y-8">
                <div
                  className={`transition-all duration-1000 delay-100 ${
                    isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                >
                  <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light tracking-tight mb-6">
                    BSCS QuizBee Champion
                  </h1>
                  <p className="text-xl sm:text-2xl text-muted-foreground font-light leading-relaxed max-w-2xl">
                    Consistently recognized for technical knowledge and problem-solving speed in regional computer science competitions.
                  </p>
                </div>
              </div>
            </header>

            <div
              className={`relative aspect-video w-full mb-16 md:mb-24 overflow-hidden rounded-sm transition-all duration-1000 delay-200 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
            >
              <div className={`absolute inset-0 bg-muted transition-opacity duration-700 ${imageLoaded ? 'opacity-0' : 'opacity-100'}`} />
              <Image
                src="/school-competition-image/competition-1.png"
                alt="BSCS QuizBee Champion"
                fill
                priority
                className={`object-cover transition-all duration-1000 ${
                  imageLoaded ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-[1.02] blur-sm"
                }`}
                onLoad={() => setImageLoaded(true)}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
              <div className="col-span-1 md:col-span-8 space-y-8">
                <div
                  className={`prose prose-lg dark:prose-invert prose-headings:font-light prose-a:text-foreground hover:prose-a:text-muted-foreground transition-all duration-1000 delay-300 ${
                    isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                >
                  <p className="text-muted-foreground leading-relaxed">
                    Competing in regional computer science events has been a thrilling chapter of my academic journey. The BSCS QuizBee pushed participants across a wide spectrum of topics — from algorithms and data structures to software engineering principles and emerging technologies — and required both quick recall and applied problem solving under intense time pressure.
                  </p>

                  <p className="text-muted-foreground leading-relaxed">
                    As part of the QuizBee team I took part in buzzer-style rapid rounds, collaborative team rounds, and timed written problems. Preparation involved regular practice sessions, mock buzzer drills, and focused review of core concepts such as complexity analysis, graph and dynamic programming patterns, system design basics, networking fundamentals, and practical debugging strategies.
                  </p>

                  <ul className="text-muted-foreground leading-relaxed list-disc list-inside space-y-2">
                    <li><strong>Topics:</strong> Algorithmic problem solving, complexity analysis, data structures, software design, databases, and current CS trends.</li>
                    <li><strong>Formats:</strong> Buzzer rounds for rapid recall, coding/whiteboard problems for applied thinking, and case-style questions testing trade-offs.</li>
                    <li><strong>My role:</strong> Quick problem decomposition under time pressure, strategic buzzer positioning, and coordinating with teammates so we covered complementary strengths.</li>
                    <li><strong>Skills gained:</strong> Faster analytical reasoning, concise technical communication, calmness under pressure, and improved pattern recognition for common algorithmic motifs.</li>
                  </ul>

                  <p className="text-muted-foreground leading-relaxed">
                    Beyond the trophy, the QuizBee experience sharpened my ability to reason clearly in high-pressure situations and improved the way I approach design trade-offs and debugging in real projects. Those habits — deliberate practice, concise explanation, and quick validation — inform how I build reliable, maintainable systems today.
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* Footer */}
          <footer className="pb-12 sm:pb-16 border-t border-border/60 pt-8 mt-20">
            <div className="flex items-center justify-between">
              <div className="text-xs text-muted-foreground">© 2026 Charles Platon</div>
              <Link
                href="/#thoughts"
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
