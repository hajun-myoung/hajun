"use client";

import { Badge } from "@/app/components/ui/badge";
import { Card } from "@/app/components/ui/card";
import { useLocale } from "@/app/components/LocaleProvider";
import { MotionDiv, MotionSection } from "@/app/components/Motion";
import { SectionHeader } from "@/app/components/SectionHeader";

export function TechStack() {
  const { t } = useLocale();

  return (
    <MotionSection id="stack" className="px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow={t.techStack.eyebrow}
          title={t.techStack.title}
          description={t.techStack.description}
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.techStack.groups.map((group, index) => (
            <MotionDiv key={group.category} delay={index * 0.04}>
              <Card className="h-full p-6 transition hover:border-indigo-300/30 hover:bg-zinc-900/80">
                <h3 className="text-lg font-semibold text-white">
                  {group.category}
                </h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Badge
                      key={item}
                      className="hover:border-blue-300/30 hover:text-white"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </Card>
            </MotionDiv>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
