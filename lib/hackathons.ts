export const hackathons = [
  {
    slug: "sikaptala",
    name: "SIKAPTala 2026",
    year: "2026",
    description: "Breaking into the Top 8 with Lunas, a web-based emergency medical passport.",
    tagline: "Top 8 Finalist out of 70+ teams in the National CS & IT Competition.",
    event: "National CS & IT Competition",
    achievement: "Top 8 Finalist (Out of 70+ Teams)",
    project: "Lunas",
    tech: ["Next.js", "React", "PostgreSQL", "TailwindCSS"],
    image: "/hackathons-image/hackathon-2.png",
  },
  {
    slug: "codekada",
    name: "CodeKada Hackathon 2026",
    year: "2026",
    description: "Showcasing with RedQuest, a web-based emergency medical information platform.",
    tagline: "Showcasing with RedQuest",
    event: "CodeKada Hackathon 2026",
    achievement: "Participation",
    project: "RedQuest",
    tech: ["Brainstorming", "Ideation", "Prototyping"],
    image: "/hackathons-image/hackathon-1.png",
  }
]

export function getHackathonBySlug(slug: string) {
  return hackathons.find((h) => h.slug === slug)
}

export function getNextHackathon(slug: string) {
  const currentIndex = hackathons.findIndex((h) => h.slug === slug)
  if (currentIndex === -1) return hackathons[0]
  return hackathons[(currentIndex + 1) % hackathons.length]
}

export function getPrevHackathon(slug: string) {
  const currentIndex = hackathons.findIndex((h) => h.slug === slug)
  if (currentIndex === -1) return hackathons[hackathons.length - 1]
  return hackathons[(currentIndex - 1 + hackathons.length) % hackathons.length]
}
