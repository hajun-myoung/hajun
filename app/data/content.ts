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
import type { Locale } from "@/app/lib/i18n";
import type { ProjectStatus, ProjectVisibility } from "@/app/data/projects";

export const profileLinks = {
  email: "fe.dev.denver@gmail.com",
  github: "https://github.com/hajun-myoung/",
  instagram: "https://instagram.com/dev_hajun",
  blog: "https://hajun-myoung.github.io/until/",
};

export const statusLabels: Record<Locale, Record<ProjectStatus, string>> = {
  ko: {
    Live: "운영 중",
    Built: "구현 완료",
    Prototype: "프로토타입",
    "In Progress": "진행 중",
    "Private Client Work": "비공개 클라이언트 작업",
    Archived: "아카이브",
  },
  en: {
    Live: "Live",
    Built: "Built",
    Prototype: "Prototype",
    "In Progress": "In Progress",
    "Private Client Work": "Private Client Work",
    Archived: "Archived",
  },
};

export const visibilityLabels: Record<
  Locale,
  Record<ProjectVisibility, string>
> = {
  ko: {
    public: "Public",
    private: "Private Work",
    "private-or-redacted": "Redacted",
  },
  en: {
    public: "Public",
    private: "Private Work",
    "private-or-redacted": "Redacted",
  },
};

export const content = {
  ko: {
    nav: [
      { label: "프로젝트", href: "#projects" },
      { label: "소개", href: "#about" },
      { label: "경험", href: "#experience" },
      { label: "연락", href: "#contact" },
    ],
    hero: {
      badge: "'겉멋'을 좋아하는 개발자. 보기 좋은 떡이 먹기도 좋은 법!",
      name: "DENVER",
      subtitle:
        "실제로 쓰이는 제품을 만드는 풀스택 지향 프론트엔드 개발자. 교육, 교회, 연구 환경에서 필요한 도구를 빠르게 만들고 개선합니다.",
      tags: [
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
      actions: {
        projects: "프로젝트 보기",
        github: "GitHub",
        contact: "Contact",
      },
      imageAlt: "스파이더맨 벽화 앞에 서 있는 Denver",
    },
    projects: {
      eyebrow: "Selected Products",
      title: "실제 현장에서 쓰여야 유의미하다",
      description:
        "기술 스택보다 중요한, 누군가의 문제를 이해하고 실제로 사용할 수 있는 형태로 끝까지 만든 경험",
      links: {
        github: "GitHub",
        live: "Live Demo",
        withheld: "개인정보와 보안을 위해 링크를 공개하지 않습니다.",
      },
      items: {
        "jogyo-clock":
          "시험 감독 환경을 위한 웹 시계입니다. 현재 시간, 남은 시간, 안내 문구, 전체화면, 프리셋, 테마, 시험 흐름 제어를 한 화면에서 다룹니다.",
        "jy-workation":
          "교회 수련회와 트랙 운영을 위해 제안서, 일정, 참여 흐름을 더 명확한 제품 경험으로 정리한 플랫폼입니다.",
        karj: "Campaignus 기반 LMS에 강의 진도 추적, 수료 상태 관리, Firebase Functions 기반 수료증 자동 생성을 더한 비공개 운영 프로젝트입니다.",
        "karj-admin":
          "KARJ에서 생성된 LMS 수료증 기록을 관리자가 확인할 수 있도록 React와 MUI로 만든 비공개 관리자 대시보드입니다.",
        "ta-ticket":
          "185석 규모의 행사/강의실 환경을 위한 좌석 예매 서비스입니다. 실시간 좌석 잠금, 예약 가능 시간, 바코드 티켓 화면을 제공합니다.",
        coreprint:
          "인쇄 요청과 제작 흐름을 더 명확하게 연결하기 위한 워크플로 제품입니다. 운영 요청, 진행 상태, 팀 간 전달 과정을 제품 관점에서 정리했습니다.",
        scurt:
          "이미지 처리 로직을 깔끔한 프론트엔드와 FastAPI 백엔드로 연결한 연구 데모입니다. OpenCV 처리 결과를 사용자가 바로 확인할 수 있게 만들었습니다.",
        "qa-image":
          "이미지와 PDF 검수 흐름을 위한 Firebase 기반 도구입니다. 뷰어 경험, 스토리지 처리, 관리자 설정 화면을 실제 운영에 맞게 구성했습니다.",
      },
    },
    about: {
      eyebrow: "About",
      title: "프론트엔드 감각과 시스템 관점을 함께 키우는 프로덕트 빌더.",
      body: "고려대학교에서 공부하며, 제품 팀의 시선으로 소프트웨어를 만듭니다. 문제를 정확히 정의하고, 사용 흐름을 세심하게 설계하고, 실제로 사람들이 쓰는 형태까지 구현하는 것을 중요하게 생각합니다. 교육, 교회, 연구 현장에서 필요한 도구를 만들며 UI/UX, 디자인 시스템, 개발자 경험, 풀스택 역량을 함께 넓혀가고 있습니다.",
      principleLabel: "작업 원칙",
      principles: [
        "포트폴리오용 데모보다 실제로 쓰이는 제품을 만듭니다.",
        "인터페이스의 완성도와 그 뒤의 시스템을 함께 봅니다.",
        "프론트엔드를 넘어 더 넓은 제품 책임을 맡을 수 있도록 성장합니다.",
      ],
    },
    experience: {
      eyebrow: "Experience",
      title: "제품, 연구, 커뮤니티 현장에서 이어온 빌드 경험.",
      items: [
        {
          company: "AIT Studio",
          period: "제품 및 프론트엔드 작업",
          role: "Lead Frontend Developer | 수석개발자",
          achievements: [
            "명확한 정보 구조, 빠른 사용성, 시각적 완성도를 갖춘 인터페이스를 구현했습니다.",
            "제품 목표를 실제 화면과 재사용 가능한 UI 패턴으로 구체화했습니다.",
          ],
          technologies: ["React", "Next.js", "TypeScript", "TailwindCSS"],
        },
        {
          company: "(주)이미지수학연구소",
          period: "연구원(조교) 및 연구소용 소프트웨어 외주개발",
          role: "Researcher and Software Builder",
          achievements: [
            "이미지 처리 로직과 사용자가 이해하기 쉬운 웹 인터페이스를 연결하는 데모를 만들었습니다.",
            "연구 내용을 보여줄 수 있는 프로토타입과 기술 보고 흐름을 지원했습니다.",
          ],
          technologies: ["Python", "FastAPI", "OpenCV", "Next.js"],
        },
        {
          company: "Freelance Projects",
          period: "클라이언트 제품",
          role: "Product Builder",
          achievements: [
            "검수, 인쇄, 관리자 데이터 화면처럼 목적이 분명한 도구들을 실제 사용 흐름에 맞게 구현했습니다.",
            "제품 판단, 프론트엔드 구현, 배포 제약을 함께 고려하며 프로젝트를 완성했습니다.",
          ],
          technologies: ["Firebase", "React", "Node.js", "Vercel"],
        },
        {
          company: "Church Systems",
          period: "커뮤니티 운영",
          role: "Church Tech Operator",
          achievements: [
            "사역 운영, 수련회 준비, 트랙 제안, 팀 협업을 돕는 실용적인 시스템을 만들었습니다.",
            "비개발자도 처음부터 이해하고 사용할 수 있는 단순한 인터페이스를 설계했습니다.",
          ],
          technologies: ["Firebase", "Forms", "Automation", "Operations"],
        },
      ],
    },
    techStack: {
      eyebrow: "Tech Stack",
      title: "제품을 끝까지 만들기 위해 쓰는 도구들.",
      description:
        "화면, API, 데이터, 배포, 개발 흐름을 함께 다루며 실제 제품 작업이 계속 앞으로 나아가도록 돕는 스택입니다.",
      groups: [
        {
          category: "Frontend",
          items: [
            "Next.js",
            "React",
            "TypeScript",
            "TailwindCSS",
            "shadcn/ui",
            "MUI",
          ],
        },
        {
          category: "Backend",
          items: [
            "FastAPI",
            "Hono",
            "Node.js",
            "Firebase Functions",
            "REST APIs",
          ],
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
          items: [
            "Full-stack architecture",
            "Design systems",
            "DX",
            "AI products",
          ],
        },
      ],
    },
    activities: {
      eyebrow: "Activities",
      title: "코드 바깥에서도 이어지는 제품 감각.",
      description:
        "가르치고, 연구하고, 교회 운영을 돕고, 더 나은 시스템을 공부하는 과정에서도 같은 질문을 합니다. 어떻게 하면 더 쉽게 쓰이고 더 오래 유지될 수 있을까.",
      items: [
        {
          title: "Teaching",
          description:
            "복잡한 기술 개념을 명확하게 설명하고, 막힌 지점을 스스로 풀 수 있게 돕습니다.",
          icon: BookOpen,
        },
        {
          title: "Research",
          description:
            "이미지 처리, 수학, 응용 소프트웨어 실험을 위한 데모와 도구를 만듭니다.",
          icon: Lightbulb,
        },
        {
          title: "Church",
          description:
            "사역팀, 행사, 트랙, 커뮤니티 운영에 필요한 실제 시스템을 개선합니다.",
          icon: Church,
        },
        {
          title: "Product Development",
          description:
            "흐릿한 운영 문제를 명확한 화면과 사용 흐름, 출시 가능한 도구로 바꿉니다.",
          icon: Rocket,
        },
        {
          title: "Study",
          description:
            "프론트엔드, 백엔드, 인프라, 제품 설계의 기본기를 계속 넓혀갑니다.",
          icon: PenTool,
        },
        {
          title: "Open Source",
          description:
            "좋은 도구를 배우고 재사용하며, 다른 사람이 이어갈 수 있는 구조를 고민합니다.",
          icon: PackageOpen,
        },
        {
          title: "Speaking",
          description:
            "결정 과정과 기술적 선택, 프로젝트 이야기를 비개발자도 이해할 수 있게 전달합니다.",
          icon: Mic2,
        },
        {
          title: "Interface Craft",
          description:
            "소프트웨어가 신뢰감 있게 느껴지도록 타이포그래피, 시각 시스템, 상호작용을 공부합니다.",
          icon: Brush,
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "10초 안에 신뢰가 느껴지는 제품을 함께 만들고 싶습니다.",
      links: [
        { label: "Email", href: `mailto:${profileLinks.email}`, icon: Mail },
        { label: "GitHub", href: profileLinks.github, icon: GitBranch },
        { label: "Instagram", href: profileLinks.instagram, icon: Camera },
        { label: "Blog", href: profileLinks.blog, icon: TerminalSquare },
        { label: "Projects", href: "#projects", icon: Code2 },
      ],
    },
    footer: "실제로 쓰이는 제품을 만드는 프론트엔드 개발자 Denver.",
  },
  en: {
    nav: [
      { label: "Projects", href: "#projects" },
      { label: "About", href: "#about" },
      { label: "Experience", href: "#experience" },
      { label: "Contact", href: "#contact" },
    ],
    hero: {
      badge: "Product-minded frontend engineer",
      name: "DENVER",
      subtitle:
        "A frontend developer building real products for education, church operations, and research workflows.",
      tags: [
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
      actions: {
        projects: "View Projects",
        github: "GitHub",
        contact: "Contact",
      },
      imageAlt: "Denver standing in front of a Spider-Man mural",
    },
    projects: {
      eyebrow: "Selected Products",
      title: "Real tools, built for real contexts.",
      description:
        "The strongest signal is not a stack list. It is the pattern of shipping useful software for people who need it to work.",
      links: {
        github: "GitHub",
        live: "Live Demo",
        withheld: "Links withheld for privacy and security.",
      },
      items: {
        "jogyo-clock":
          "An exam proctoring clock web app for classroom projection, built around current time, remaining time, announcements, fullscreen mode, presets, themes, and exam-flow controls.",
        "jy-workation":
          "A retreat and track-management platform that turns proposals, schedules, and participant flows into a cleaner product experience for church operations.",
        karj: "A private LMS enhancement project built around Campaignus, adding course progress tracking and automated certificate generation through Firebase Functions.",
        "karj-admin":
          "A private admin dashboard for viewing LMS certificate records generated by KARJ, built with React and MUI for clean administrator workflows.",
        "ta-ticket":
          "A controlled ticketing and seat-reservation service for a 185-seat event/classroom-style environment, with realtime seat locking, reservation windows, and barcode ticket views.",
        coreprint:
          "A print workflow product concept focused on operational clarity, production requests, and reliable handoff between teams.",
        scurt:
          "An image-processing demo that connects a clean frontend with a FastAPI backend, OpenCV processing, and research-facing output flows.",
        "qa-image":
          "A Firebase-powered image and PDF review tool with viewer workflows, storage handling, and practical admin configuration surfaces.",
      },
    },
    about: {
      eyebrow: "About",
      title: "A product builder with frontend taste and systems curiosity.",
      body: "I study at Korea University and build software with the mindset of a product team: define the real problem, design the interaction carefully, and ship something people can actually use. My work sits between frontend engineering, product development, UI/UX, design systems, developer tooling, and the practical systems needed by schools, churches, and research teams.",
      principleLabel: "Working principles",
      principles: [
        "Build real products, not portfolio props.",
        "Care about the interface and the system behind it.",
        "Keep learning toward strong full-stack ownership.",
      ],
    },
    experience: {
      eyebrow: "Experience",
      title: "A timeline of building across product, research, and community.",
      items: [
        {
          company: "AIT Studio",
          period: "Product and frontend work",
          role: "Frontend Developer",
          achievements: [
            "Built interface systems with an emphasis on clarity, speed, and visual polish.",
            "Translated product goals into production-ready screens and reusable UI patterns.",
          ],
          technologies: ["React", "Next.js", "TypeScript", "TailwindCSS"],
        },
        {
          company: "Image Math Institute",
          period: "Research software",
          role: "Software Builder",
          achievements: [
            "Created demos that connect image-processing logic with accessible web interfaces.",
            "Supported research communication through usable prototypes and technical reports.",
          ],
          technologies: ["Python", "FastAPI", "OpenCV", "Next.js"],
        },
        {
          company: "Freelance Projects",
          period: "Client products",
          role: "Product Builder",
          achievements: [
            "Shipped targeted tools for review workflows, printing operations, and data-heavy admin surfaces.",
            "Balanced product decisions, frontend implementation, and deployment constraints.",
          ],
          technologies: ["Firebase", "React", "Node.js", "Vercel"],
        },
        {
          company: "Church Systems",
          period: "Community operations",
          role: "Church Tech Operator",
          achievements: [
            "Built practical systems for ministry workflows, retreat planning, proposals, and team coordination.",
            "Designed interfaces for non-technical users who need software to feel simple on the first try.",
          ],
          technologies: ["Firebase", "Forms", "Automation", "Operations"],
        },
      ],
    },
    techStack: {
      eyebrow: "Tech Stack",
      title: "Tools grouped by how they help products ship.",
      description:
        "The stack is intentionally practical: interfaces, APIs, data, deployment, and the developer workflows that keep product work moving.",
      groups: [
        {
          category: "Frontend",
          items: ["Next.js", "React", "TypeScript", "TailwindCSS", "shadcn/ui"],
        },
        {
          category: "Backend",
          items: [
            "FastAPI",
            "Hono",
            "Node.js",
            "Firebase Functions",
            "REST APIs",
          ],
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
          items: [
            "Full-stack architecture",
            "Design systems",
            "DX",
            "AI products",
          ],
        },
      ],
    },
    activities: {
      eyebrow: "Activities",
      title: "More than code on a screen.",
      description:
        "The same product instincts show up in teaching, research, church operations, and the way I keep studying better systems.",
      items: [
        {
          title: "Teaching",
          description:
            "Explaining technical concepts clearly and helping others move from confusion to confidence.",
          icon: BookOpen,
        },
        {
          title: "Research",
          description:
            "Building demos and tooling around image processing, mathematics, and applied software experiments.",
          icon: Lightbulb,
        },
        {
          title: "Church",
          description:
            "Operating and improving practical systems for ministry teams, events, tracks, and communities.",
          icon: Church,
        },
        {
          title: "Product Development",
          description:
            "Turning fuzzy operational problems into focused interfaces, flows, and shippable tools.",
          icon: Rocket,
        },
        {
          title: "Study",
          description:
            "Continuously strengthening fundamentals across frontend, backend, infrastructure, and product craft.",
          icon: PenTool,
        },
        {
          title: "Open Source",
          description:
            "Learning in public, reusing strong tools, and shaping projects so others can extend them.",
          icon: PackageOpen,
        },
        {
          title: "Speaking",
          description:
            "Sharing decisions, tradeoffs, and project stories in a way non-engineers can follow.",
          icon: Mic2,
        },
        {
          title: "Interface Craft",
          description:
            "Studying visual systems, typography, and interaction details that make software feel trustworthy.",
          icon: Brush,
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's build the kind of product people can feel in ten seconds.",
      links: [
        { label: "Email", href: `mailto:${profileLinks.email}`, icon: Mail },
        { label: "GitHub", href: profileLinks.github, icon: GitBranch },
        { label: "Instagram", href: profileLinks.instagram, icon: Camera },
        { label: "Blog", href: profileLinks.blog, icon: TerminalSquare },
        { label: "Projects", href: "#projects", icon: Code2 },
      ],
    },
    footer:
      "Denver builds real products with frontend craft and product ownership.",
  },
} as const;
