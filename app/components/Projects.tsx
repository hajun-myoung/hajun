 "use client";

import {
  ArrowUpRight,
  Boxes,
  ExternalLink,
  GitBranch,
  Lock,
  Radio,
  ShieldAlert,
  type LucideIcon,
} from "lucide-react";
import {
  statusLabels,
  visibilityLabels,
} from "@/app/data/content";
import { projects } from "@/app/data/projects";
import { Badge } from "@/app/components/ui/badge";
import { Card } from "@/app/components/ui/card";
import { useLocale } from "@/app/components/LocaleProvider";
import { MotionDiv, MotionSection } from "@/app/components/Motion";
import { SectionHeader } from "@/app/components/SectionHeader";
import type { ProjectVisibility } from "@/app/data/projects";

const visibilityBadge: Record<
  ProjectVisibility,
  { className: string; icon: LucideIcon }
> = {
  public: {
    className: "border-blue-300/20 bg-blue-400/8 text-blue-100",
    icon: ExternalLink,
  },
  private: {
    className: "border-amber-300/20 bg-amber-400/8 text-amber-100",
    icon: Lock,
  },
  "private-or-redacted": {
    className: "border-zinc-300/20 bg-zinc-400/8 text-zinc-100",
    icon: ShieldAlert,
  },
};

export function Projects() {
  const { locale, t } = useLocale();
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <MotionSection id="projects" className="px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={t.projects.eyebrow}
          title={t.projects.title}
          description={t.projects.description}
        />

        <div className="grid gap-5 lg:grid-cols-6">
          {featuredProjects.map((project, index) => {
            const visibility = visibilityBadge[project.visibility];
            const VisibilityIcon = visibility.icon;
            const projectLinks = [
              project.githubUrl
                ? {
                    label: t.projects.links.github,
                    href: project.githubUrl,
                    icon: GitBranch,
                  }
                : null,
              project.liveUrl
                ? {
                    label: t.projects.links.live,
                    href: project.liveUrl,
                    icon: ExternalLink,
                  }
                : null,
            ].filter((link) => link !== null);

            return (
            <MotionDiv
              key={project.title}
              delay={index * 0.05}
              className={index < 4 ? "lg:col-span-3" : "lg:col-span-2"}
            >
              <Card className="group relative flex h-full min-h-[320px] flex-col overflow-hidden p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-300/35 hover:bg-zinc-900/82 hover:shadow-[0_28px_100px_rgba(37,99,235,0.15)]">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/45 to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-[8px] border border-white/10 bg-white/6 text-blue-200">
                    {index % 2 === 0 ? (
                      <Boxes aria-hidden="true" className="h-5 w-5" />
                    ) : (
                      <Radio aria-hidden="true" className="h-5 w-5" />
                    )}
                  </div>
                  <Badge className="border-emerald-300/20 bg-emerald-400/8 text-emerald-100 text-right">
                    {statusLabels[locale][project.status]}
                  </Badge>
                </div>

                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <h3 className="text-2xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <Badge className={visibility.className}>
                    <VisibilityIcon aria-hidden="true" className="h-3.5 w-3.5" />
                    {visibilityLabels[locale][project.visibility]}
                  </Badge>
                </div>
                <p className="mt-4 flex-1 text-sm leading-7 text-zinc-400">
                  {t.projects.items[project.slug]}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>

                {projectLinks.length > 0 ? (
                  <div className="mt-8 flex flex-wrap gap-4">
                    {projectLinks.map((link) => {
                      const LinkIcon = link.icon;

                      return (
                        <a
                          key={link.label}
                          href={link.href}
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-200 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <LinkIcon aria-hidden="true" className="h-3.5 w-3.5" />
                          {link.label}
                          <ArrowUpRight
                            aria-hidden="true"
                            className="h-3.5 w-3.5"
                          />
                        </a>
                      );
                    })}
                  </div>
                ) : (
                  <p className="mt-8 text-xs font-medium uppercase text-zinc-500">
                    {t.projects.links.withheld}
                  </p>
                )}
              </Card>
            </MotionDiv>
            );
          })}
        </div>
      </div>
    </MotionSection>
  );
}
