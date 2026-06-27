"use client";

import { Badge } from "@/app/components/ui/badge";
import { useLocale } from "@/app/components/LocaleProvider";
import { MotionDiv, MotionSection } from "@/app/components/Motion";
import { SectionHeader } from "@/app/components/SectionHeader";

export function Experience() {
  const { t } = useLocale();

  return (
    <MotionSection id="experience" className="px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          eyebrow={t.experience.eyebrow}
          title={t.experience.title}
        />

        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-blue-300 via-white/10 to-transparent sm:left-1/2" />
          <div className="space-y-8">
            {t.experience.items.map((item, index) => (
              <MotionDiv
                key={item.company}
                delay={index * 0.05}
                className={`relative grid gap-5 sm:grid-cols-2 ${
                  index % 2 === 1 ? "sm:[&>div]:col-start-2" : ""
                }`}
              >
                <div className="ml-12 rounded-[8px] border border-white/10 bg-zinc-950/72 p-6 shadow-2xl sm:ml-0">
                  <div className="absolute left-[9px] top-7 h-3 w-3 rounded-full border border-blue-200 bg-blue-400 shadow-[0_0_0_6px_rgba(37,99,235,0.12)] sm:left-1/2 sm:-ml-1.5" />
                  <p className="text-sm text-blue-300">{item.period}</p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">
                    {item.company}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-zinc-300">
                    {item.role}
                  </p>
                  <ul className="mt-5 space-y-3 text-sm leading-7 text-zinc-400">
                    {item.achievements.map((achievement) => (
                      <li key={achievement}>{achievement}</li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.technologies.map((technology) => (
                      <Badge key={technology}>{technology}</Badge>
                    ))}
                  </div>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
