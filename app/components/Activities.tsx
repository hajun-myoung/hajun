"use client";

import { useLocale } from "@/app/components/LocaleProvider";
import { MotionDiv, MotionSection } from "@/app/components/Motion";
import { SectionHeader } from "@/app/components/SectionHeader";

export function Activities() {
  const { t } = useLocale();

  return (
    <MotionSection id="activities" className="px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow={t.activities.eyebrow}
          title={t.activities.title}
          description={t.activities.description}
        />

        <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {t.activities.items.map((activity, index) => {
            const Icon = activity.icon;

            return (
              <MotionDiv key={activity.title} delay={index * 0.04}>
                <div className="border-t border-white/10 pt-6">
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-[8px] bg-white/6 text-blue-200">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {activity.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-400">
                    {activity.description}
                  </p>
                </div>
              </MotionDiv>
            );
          })}
        </div>
      </div>
    </MotionSection>
  );
}
