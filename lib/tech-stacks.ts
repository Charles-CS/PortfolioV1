export type TechStackItem = {
  name: string
  icon: string
  startedYear: number
  startedContext: string
  learningStory: string
}

export type TechStackGroup = {
  category: string
  items: TechStackItem[]
}

export const createTechStackSlug = (name: string) =>
  name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/\+/g, "plus")
    .replace(/#/g, "sharp")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")

export const techStackGroups: TechStackGroup[] = [
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

export const allTechStacks = techStackGroups.flatMap((group) => group.items)

export const getTechStackBySlug = (slug: string) =>
  allTechStacks.find((stack) => createTechStackSlug(stack.name) === slug)
