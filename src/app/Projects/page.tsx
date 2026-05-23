"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
//import dynamic from 'next/dynamic';
import BlurText from "@/blocks/TextAnimations/BlurText/BlurText";
import HackathonEntry from "@/app/Awards/HackathonEntry";

// ─── Project entries ──────────────────────────────────────────────────────────
const projectEntriesData = [
  {
    entryNumber: "01",
    title: "Tech Tressure",
    award: "",
    description: "A sleek, high-conversion landing page for a premium drone retailer. It features a modern, airy aesthetic with high-impact hero banners and a smooth product carousel designed to create a professional and trustworthy shopping environment.",
    imageSrc: "/proj/allProjectOne.png",
    projectLink: "",
    trophyType: "",
    techStackIcons: ["/techstack/html.svg", "/techstack/css.svg", "/techstack/js.svg"],
  },
  {
    entryNumber: "02",
    title: "Sonic Path",
    award: "",
    description: "An inclusive endless runner game engineered to assist individuals with dyslexia. The project features a five-stage progression system using specialized dyslexia-friendly fonts and high-contrast UI elements to merge engaging gameplay with targeted educational support.",
    imageSrc: "/proj/allProjectTwo.png",
    projectLink: "",
    trophyType: "",
    techStackIcons: ["/techstack/unity.svg", "/techstack/blender.svg", "/techstack/csharp.svg"],
  },
  {
    entryNumber: "03",
    title: "Aepex Aerials",
    award: "",
    description: "A robust e-commerce platform built for data-driven backend integration. This project features a full store interface with dynamic sidebar filtering, price sorting, and a scalable product grid designed to manage live inventory efficiently.",
    imageSrc: "/proj/allProjectThree.png",
    projectLink: "",
    trophyType: "",
    techStackIcons: ["/techstack/react.svg", "/techstack/laravel.svg", "/techstack/mysql.svg"],
  },
  {
    entryNumber: "04",
    title: "Bulb",
    award: "",
    description: "A sophisticated UI/UX project tailored for high-end home decor. The design utilizes a \"Dark Mode\" aesthetic to emphasize atmospheric lighting, using clean typography and minimalist navigation to provide a seamless transition from inspiration to purchase.",
    imageSrc: "/proj/allProjectFour.png",
    projectLink: "",
    trophyType: "",
    techStackIcons: ["/techstack/html.svg", "/techstack/css.svg", "/techstack/js.svg"],
  },
];

// ─── Flicker title ────────────────────────────────────────────────────────────
function FlickerTitle({ text }: { text: string }) {
  const [flickering, setFlickering] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const intervals: ReturnType<typeof setInterval>[] = [];
    text.split("").forEach((char, i) => {
      if (char === " ") return;
      const id = setTimeout(() => {
        const iv = setInterval(() => {
          setFlickering((prev) => ({ ...prev, [i]: true }));
          setTimeout(() => setFlickering((prev) => ({ ...prev, [i]: false })), 90 + Math.random() * 110);
        }, 2500 + Math.random() * 3000);
        intervals.push(iv);
      }, Math.random() * 4000);
      void id;
    });
    return () => intervals.forEach(clearInterval);
  }, [text]);

  return (
    <span aria-label={text}>
      {text.split("").map((char, i) =>
        char === " " ? (
          <span key={i}>&nbsp;</span>
        ) : (
          <span
            key={i}
            className="inline-block transition-opacity duration-75"
            style={{ opacity: flickering[i] ? 0.12 : 1 }}
          >
            {char}
          </span>
        )
      )}
    </span>
  );
}

// ─── Horror Carousel (uses real screenshots) ──────────────────────────────────
const screenshots = [
  { src: "/featured_projects/The-Lost-Hospital-1.png", label: "Main menu" },
  { src: "/featured_projects/The-Lost-Hospital-2.png", label: "Letter" },
  { src: "/featured_projects/The-Lost-Hospital-3.png", label: "story" },
  { src: "/featured_projects/The-Lost-Hospital-4.png", label: "Controllers" },
  { src: "/featured_projects/The-Lost-Hospital-5.png", label: "Interactable Object" },
  { src: "/featured_projects/The-Lost-Hospital-6.png", label: "Environment" },
  { src: "/featured_projects/The-Lost-Hospital-7.png", label: "Unknown body?" },
];

function HorrorCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setActive((p) => (p + 1) % screenshots.length),
      4000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black">
      {screenshots.map((s, i) => (
        <motion.div
          key={i}
          className="absolute inset-0"
          initial={false}
          animate={{
            opacity: i === active ? [0, 1, 0.1, 1, 0.8, 1] : 0,
            filter: i === active
              ? ["blur(8px) contrast(1.5) brightness(0.5)", "blur(0px) contrast(1.2) brightness(1.3)", "blur(4px) contrast(2) brightness(0.2)", "blur(0px) contrast(1) brightness(1.1)", "brightness(0.8)", "brightness(1)"]
              : "brightness(1)"
          }}
          transition={{
            duration: i === active ? 0.5 : 0, // Old image cuts instantly; new one flashes in
            times: i === active ? [0, 0.15, 0.3, 0.45, 0.7, 1] : undefined,
            ease: "easeInOut"
          }}
          style={{ zIndex: i === active ? 10 : 0 }}
        >
          <Image
            src={s.src}
            alt={s.label}
            fill
            className="object-cover"
            priority={i === 0}
          />
          {/* vignette */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.75) 100%)",
            }}
          />
        </motion.div>
      ))}

      {/* ── CINEMATIC GLITCH PARTICLES & BLUR LINES ── */}
      {/* Particles/Noise burst */}
      <motion.div
        key={`noise-${active}`}
        className="absolute inset-0 pointer-events-none z-20 mix-blend-overlay"
        initial={{ opacity: 0.7 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: "circOut" }}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Horizontal thick blur scanline traveling down */}
      <motion.div
        key={`scanline1-${active}`}
        className="absolute left-0 right-0 h-16 bg-white/10 blur-xl pointer-events-none z-20"
        initial={{ opacity: 1, top: "0%" }}
        animate={{ opacity: 0, top: "100%" }}
        transition={{ duration: 0.35, ease: "linear" }}
      />

      {/* Thin red-tinted glitch line traveling up */}
      <motion.div
        key={`scanline2-${active}`}
        className="absolute left-0 right-0 h-6 bg-red-400/20 blur-sm pointer-events-none z-20 mix-blend-color-dodge"
        initial={{ opacity: 1, top: "100%" }}
        animate={{ opacity: 0, top: "-10%" }}
        transition={{ duration: 0.25, ease: "linear", delay: 0.05 }}
      />


      {/* Label */}
      <div className="absolute bottom-4 left-4 z-10">
        <div className="font-mono text-[10px] tracking-[0.25em] text-white/40 uppercase">
          ◆ {screenshots[active].label}
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 right-4 z-10 flex gap-2">
        {screenshots.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === active ? "bg-red-500 scale-150" : "bg-white/20"
              }`}
          />
        ))}
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function ProjectsPage() {
  const featuredRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const featuredInView = useInView(featuredRef, { once: true, margin: "-80px" });
  const listInView = useInView(listRef, { once: true, margin: "-80px" });

  return (
    <main className="flex-grow flex flex-col items-center w-full h-full relative pt-20 overflow-x-hidden">

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative w-full flex flex-col items-center pb-32 md:min-h-[60vh] justify-center">

        {/* Title and Subtitle Container - Shifted up */}
        <div className="w-full flex flex-col justify-center items-center relative -top-12 px-4 md:px-0 z-10 pointer-events-none">
          <div className="mb-4">
            <BlurText
              text="Projects"
              delay={150}
              animateBy="letters"
              direction="top"
              className="text-6xl md:text-7xl lg:text-9xl font-extrabold text-[var(--foreground)] text-center"
            />
          </div>

          <div className="mt-2 text-[var(--foreground)] opacity-40 text-sm md:text-base font-light tracking-wide text-center">
            <BlurText
              text="Games built with Unreal Engine · Web apps"
              delay={30}
              animateBy="letters"
              direction="top"
            />
          </div>
        </div>


      </section>

      {/* ── FEATURED: THE LOST HOSPITAL ──────────────────────────────────── */}
      <section
        ref={featuredRef}
        className="relative w-full max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24"
      >
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={featuredInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-14"
        >
          <div className="font-mono text-[10px] tracking-[0.35em] text-red-500/70 uppercase mb-3 proj-featured-label">
            ◆ Featured Project
          </div>
          <div className="text-2xl md:text-4xl font-bold text-[var(--foreground)] tracking-tight text-center">
            <FlickerTitle text="The Lost Hospital" />
          </div>
          <div className="mt-4 w-16 h-px bg-gradient-to-r from-transparent via-red-800 to-transparent proj-sep-line" />
        </motion.div>

        {/* Two-column layout */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={featuredInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
        >
          {/* Screenshot carousel */}
          <div className="relative">
            <div
              className="absolute -inset-4 rounded-2xl pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse, rgba(180,0,0,0.1) 0%, transparent 70%)",
              }}
            />
            <HorrorCarousel />
          </div>

          {/* Text content */}
          <div className="flex flex-col gap-6">
            {/* Genre badges */}
            <div className="flex flex-wrap gap-2">
              {["Horror", "First Person", "Unreal Engine 5", "3D", "C++"].map((tag) => (
                <div
                  key={tag}
                  className="text-[10px] font-mono tracking-widest uppercase px-3 py-1 rounded-full border border-red-900/50 text-red-400/70 bg-red-950/20 proj-genre-tag"
                >
                  {tag}
                </div>
              ))}
            </div>

            <p className="text-[var(--foreground)] opacity-60 leading-relaxed text-sm md:text-base">
              <span className="text-[var(--foreground)] font-semibold">The Lost Hospital</span> is a short
              first-person horror experience built in{" "}
              <strong className="text-red-500 font-medium proj-red-highlight">Unreal Engine 5</strong>. Navigate through the
              decayed wards of an abandoned hospital — every flicker of a failing light,
              every shadow at the end of the corridor hides something wrong.
            </p>

            <p className="text-[var(--foreground)] opacity-40 text-sm leading-relaxed">
              High-fidelity environment art, atmospheric lighting, and tension-driven level
              design crafted to immerse players in sustained dread. Built solo as a technical
              and artistic showcase.
            </p>

            {/* Tech stack */}
            <div className="flex items-center gap-4 pt-2">
              {[
                "/techstack/unrealengine.svg",
                "/techstack/cpp.svg",
                "/techstack/blender.svg",
              ].map((src, i) => (
                <div
                  key={i}
                  className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 p-1.5 proj-tech-icon"
                >
                  <img src={src} alt="" className="w-full h-full object-contain" />
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link
              href="https://charles-cs.github.io/Portfolio/The%20Lost%20Hospital.html"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit block"
            >
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="mt-2 px-7 py-3 rounded-xl font-semibold text-sm tracking-wide text-[var(--foreground)] border border-red-900/60 bg-red-950/30 hover:bg-red-900/40 hover:border-red-600/60 transition-all duration-300 proj-view-btn"
                style={{ boxShadow: "0 0 20px rgba(180,0,0,0.15)" }}
              >
                View Project →
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ── SCROLL-NARRATIVE TRANSITION ──────────────────────────────────── */}
      <div className="flex flex-col items-center pb-4 -mt-8 md:-mt-12 relative z-10">
        <div className="w-px h-12 border-l border-dashed border-[var(--card-border)] proj-dashed-line" />
        <div className="font-mono text-[10px] tracking-[0.3em] text-[var(--muted)] uppercase mt-3 proj-more-text">
          More Projects
        </div>
        <div className="w-px h-12 border-l border-dashed border-[var(--card-border)] mt-3 proj-dashed-line" />
      </div>

      {/* ── ALL PROJECTS LIST ─────────────────────────────────────────────── */}
      <section ref={listRef} className="w-full max-w-5xl mx-auto px-4 md:px-8 pt-10 md:pt-16 pb-24">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={listInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <BlurText
            text="All Projects"
            delay={60}
            animateBy="letters"
            direction="top"
            onAnimationComplete={() => { }}
            className="text-3xl md:text-5xl font-extrabold text-[var(--foreground)] text-center"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={listInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {projectEntriesData.map((entry, index) => (
            <HackathonEntry
              key={index}
              entryNumber={entry.entryNumber}
              title={entry.title}
              award={entry.award}
              description={entry.description}
              imageSrc={entry.imageSrc}
              projectLink={entry.projectLink}
              trophyType={entry.trophyType}
              techStackIcons={entry.techStackIcons}
            />
          ))}
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="flex w-full items-center justify-center p-4 border-t border-[var(--card-border)] text-[var(--muted)] text-sm font-light mt-4">
        <p>&copy; {new Date().getFullYear()} Charles Platon. All rights reserved.</p>
      </footer>
    </main>
  );
}
