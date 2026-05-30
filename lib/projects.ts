export interface Project {
  slug: string
  name: string
  tagline: string
  description: string
  image: string
  role: string
  responsibilities: string
  url: string
  tech: string[]
  year: string
}

export const projects: Project[] = [
  {
    slug: "kumpirma",
    name: "Kumpirma",
    tagline: "AI + Blockchain Signature Verification",
    description:
      "AI-powered signature verification system integrating Pix2Pix GAN denoising and a Siamese Capsule Network into a forensic-grade pipeline — anchoring every verification outcome immutably on Ethereum.",
    image: "/selected-projects-image/project-2.png",
    role: "Lead Full-Stack Engineer",
    responsibilities:
      "End-to-end system architecture, YOLOv8 detection pipeline, Pix2Pix & Siamese CapsNet training, Ethereum smart contract integration, IPFS storage, and full-stack deployment.",
    url: "https://kumpirma.vercel.app/",
    tech: ["Next.js", "TypeScript", "Python", "OpenCV", "TensorFlow", "PostgreSQL", "IPFS"],
    year: "2026",
  },
  {
    slug: "redquest",
    name: "RedQuest",
    tagline: "Blood Donation Mobile Platform",
    description:
      "A mobile platform that connects blood requesters with nearby compatible donors, dispatching a motorcycle rider to transport the donor to the hospital — all within minutes.",
    image: "/selected-projects-image/project-1.png",
    role: "Mobile Developer",
    responsibilities:
      "React Native app development, real-time quest tracking, gamification system, donor matching algorithm, and push notification integration.",
    url: "https://redquest.app/",
    tech: ["React Native", "Expo Go", "Tailwind", "Railway", "PostgreSQL"],
    year: "2026",
  },
  {
    slug: "lunas",
    name: "Lunas",
    tagline: "Medical Passport Web Platform",
    description:
      "A Secure web platform giving clinicians instant access to patient health data via QR code for emergencies — encrypting complete medical histories into permanent, verifiable digital passports.",
    image: "/selected-projects-image/project-9.png",
    role: "Full-Stack Developer",
    responsibilities:
      "End-to-end PWA architecture, Supabase database integration, QR-based access system, RBAC implementation, UI/UX design, and full-stack deployment.",
    url: "https://lunas.software/",
    tech: ["Next.js", "React", "PostgreSQL", "Password Hashing", "RBAC", "TailwindCSS"],
    year: "2026",
  },
  {
    slug: "toka",
    name: "Toka",
    tagline: "Chores-to-Rewards Micro-Economy",
    description:
      "App that turns daily chores into a rewards micro-economy with real-time approvals and a savings vault — bridging household responsibilities and financial literacy using behavioral economics.",
    image: "/selected-projects-image/project-8.png",
    role: "Mobile Developer",
    responsibilities:
      "React Native app development, Firebase real-time database, reward system design, parent/child role management, and gamification mechanics.",
    url: "https://toka-platform.vercel.app/",
    tech: ["React Native", "TypeScript", "Firebase"],
    year: "2026",
  },
  {
    slug: "brainstormai",
    name: "BrainstormAI",
    tagline: "AI-Powered Academic Engineering",
    description:
      "AI-driven platform for academic engineering that synthesizes topics, generates dynamic roadmaps, and provides tailored architectural guidance — scaling your team's unique vision without limits.",
    image: "/selected-projects-image/project-3.png",
    role: "Full-Stack Developer",
    responsibilities:
      "AI integration, topic synthesis engine, dynamic roadmap generation, team collaboration features, and responsive UI development.",
    url: "https://brainstormai.vercel.app/",
    tech: ["Next.js", "TypeScript", "Python", "TensorFlow", "FastAPI", "React", "PostgreSQL"],
    year: "2025",
  },
  {
    slug: "lumina",
    name: "Lumina",
    tagline: "Modern Website Builder",
    description:
      "A modern website builder that lets you create top-tier, production-ready website pages in seconds — with intuitive drag-and-drop components and real-time preview.",
    image: "/selected-projects-image/project-4.png",
    role: "Frontend Developer",
    responsibilities:
      "Component library development, drag-and-drop interface, real-time preview engine, dark theme system, and template management.",
    url: "#",
    tech: ["React", "TypeScript", "TailwindCSS", "Node.js"],
    year: "2025",
  },
  {
    slug: "the-lost-hospital",
    name: "The Lost Hospital",
    tagline: "Unreal Engine 5 Horror Game",
    description:
      "A short first-person horror experience made with Unreal Engine 5 — immersing players in an abandoned hospital filled with atmospheric tension, environmental storytelling, and spine-chilling encounters.",
    image: "/selected-projects-image/project-5.png",
    role: "Game Developer",
    responsibilities:
      "Level design, Unreal Engine 5 development, environmental storytelling, lighting and atmosphere design, and gameplay scripting.",
    url: "#",
    tech: ["Unreal Engine 5", "Blueprints", "C++"],
    year: "2025",
  },
  {
    slug: "sonicpath",
    name: "SonicPath",
    tagline: "Educational Reading Game",
    description:
      "An interactive educational game that makes reading fun for children — combining a racing game mechanic with reading comprehension challenges to boost literacy through play.",
    image: "/selected-projects-image/project-6.png",
    role: "Game Developer",
    responsibilities:
      "Game mechanics design, Unity development, reading comprehension integration, UI/UX design, and educational content curation.",
    url: "#",
    tech: ["Unity", "C#", "Game Design"],
    year: "2024",
  },
  {
    slug: "tech-treasure",
    name: "Tech Treasure",
    tagline: "E-Commerce Tech Store",
    description:
      "A cutting-edge e-commerce platform specializing in tech products — featuring curated collections, detailed product galleries, and a seamless shopping experience.",
    image: "/selected-projects-image/project-7.png",
    role: "Frontend Developer",
    responsibilities:
      "E-commerce UI development, product catalog system, responsive design, and shopping cart functionality.",
    url: "#",
    tech: ["HTML", "CSS", "JavaScript"],
    year: "2024",
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getNextProject(currentSlug: string): Project {
  const currentIndex = projects.findIndex((p) => p.slug === currentSlug)
  const nextIndex = (currentIndex + 1) % projects.length
  return projects[nextIndex]
}

export function getPrevProject(currentSlug: string): Project {
  const currentIndex = projects.findIndex((p) => p.slug === currentSlug)
  const prevIndex = (currentIndex - 1 + projects.length) % projects.length
  return projects[prevIndex]
}
