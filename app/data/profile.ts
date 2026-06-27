import {
  BookOpen,
  Brush,
  Camera,
  Church,
  Code2,
  GitBranch,
  Lightbulb,
  Mail,
  Mic2,
  PackageOpen,
  PenTool,
  Rocket,
  TerminalSquare,
} from "lucide-react";

export const profile = {
  name: "DENVER",
  intro:
    "Frontend developer and product builder creating polished tools for education, churches, research, and everyday operations.",
  email: "hello@denver.dev",
  github: "https://github.com/",
  instagram: "https://instagram.com/",
  blog: "https://velog.io/",
  heroTags: [
    "Frontend Developer",
    "Product Builder",
    "Church Tech Operator",
    "Full-stack in progress",
  ],
  floatingStack: [
    "Next.js",
    "TypeScript",
    "Firebase",
    "Product Builder",
    "Church Tech",
  ],
  about:
    "I study at Korea University and build software with the mindset of a product team: define the real problem, design the interaction carefully, and ship something people can actually use. My work sits between frontend engineering, product development, UI/UX, design systems, developer tooling, and the practical systems needed by schools, churches, and research teams.",
  principles: [
    "Build real products, not portfolio props.",
    "Care about the interface and the system behind it.",
    "Keep learning toward strong full-stack ownership.",
  ],
};

export const techStack = [
  {
    category: "Frontend",
    items: ["Next.js", "React", "TypeScript", "TailwindCSS", "shadcn/ui"],
  },
  {
    category: "Backend",
    items: ["FastAPI", "Hono", "Node.js", "Firebase Functions", "REST APIs"],
  },
  {
    category: "Database",
    items: ["Firestore", "SQLite", "PostgreSQL", "Storage Rules"],
  },
  {
    category: "Cloud",
    items: ["Firebase", "Vercel", "Cloud Storage", "Hosting"],
  },
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "SQL", "HTML/CSS"],
  },
  {
    category: "Tools",
    items: ["Git", "Figma", "VS Code", "OpenAI API", "CLI Workflows"],
  },
  {
    category: "Currently Exploring",
    items: ["Full-stack architecture", "Design systems", "DX", "AI products"],
  },
];

export const activities = [
  {
    title: "Teaching",
    description: "Explaining technical concepts clearly and helping others move from confusion to confidence.",
    icon: BookOpen,
  },
  {
    title: "Research",
    description: "Building demos and tooling around image processing, mathematics, and applied software experiments.",
    icon: Lightbulb,
  },
  {
    title: "Church",
    description: "Operating and improving practical systems for ministry teams, events, tracks, and communities.",
    icon: Church,
  },
  {
    title: "Product Development",
    description: "Turning fuzzy operational problems into focused interfaces, flows, and shippable tools.",
    icon: Rocket,
  },
  {
    title: "Study",
    description: "Continuously strengthening fundamentals across frontend, backend, infrastructure, and product craft.",
    icon: PenTool,
  },
  {
    title: "Open Source",
    description: "Learning in public, reusing strong tools, and shaping projects so others can extend them.",
    icon: PackageOpen,
  },
  {
    title: "Speaking",
    description: "Sharing decisions, tradeoffs, and project stories in a way non-engineers can follow.",
    icon: Mic2,
  },
  {
    title: "Interface Craft",
    description: "Studying visual systems, typography, and interaction details that make software feel trustworthy.",
    icon: Brush,
  },
];

export const contactLinks = [
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
  { label: "GitHub", href: profile.github, icon: GitBranch },
  { label: "Instagram", href: profile.instagram, icon: Camera },
  { label: "Blog", href: profile.blog, icon: TerminalSquare },
  { label: "Projects", href: "#projects", icon: Code2 },
];
