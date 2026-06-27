"use client";

import { CheckCircle2 } from "lucide-react";
import { Card } from "@/app/components/ui/card";
import { useLocale } from "@/app/components/LocaleProvider";
import { MotionSection } from "@/app/components/Motion";
import { SectionHeader } from "@/app/components/SectionHeader";

export function About() {
  const { t } = useLocale();

  return (
    <MotionSection id="about" className="px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow={t.about.eyebrow}
          title={t.about.title}
        />

        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <Card className="p-7 sm:p-9">
            <p className="text-xl leading-9 text-zinc-200">{t.about.body}</p>
          </Card>

          <Card className="p-7 sm:p-9">
            <p className="text-sm font-medium uppercase text-blue-300">
              {t.about.principleLabel}
            </p>
            <div className="mt-6 space-y-5">
              {t.about.principles.map((principle) => (
                <div key={principle} className="flex gap-3">
                  <CheckCircle2
                    aria-hidden="true"
                    className="mt-0.5 h-5 w-5 shrink-0 text-blue-300"
                  />
                  <p className="text-base leading-7 text-zinc-300">
                    {principle}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </MotionSection>
  );
}
