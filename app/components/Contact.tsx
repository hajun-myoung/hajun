"use client";

import { ArrowUpRight } from "lucide-react";
import { useLocale } from "@/app/components/LocaleProvider";
import { MotionSection } from "@/app/components/Motion";

export function Contact() {
  const { t } = useLocale();

  return (
    <MotionSection id="contact" className="px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl rounded-[8px] border border-white/10 bg-gradient-to-br from-zinc-950 via-zinc-950 to-blue-950/30 p-8 shadow-[0_30px_120px_rgba(0,0,0,0.35)] sm:p-12 lg:p-16">
        <p className="text-sm font-medium uppercase text-blue-300">
          {t.contact.eyebrow}
        </p>
        <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <h2 className="max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-6xl">
            {t.contact.title}
          </h2>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {t.contact.links.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="group flex items-center justify-between rounded-[8px] border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-zinc-200 transition hover:border-blue-300/35 hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300"
                >
                  <span className="flex items-center gap-3">
                    <Icon aria-hidden="true" className="h-4 w-4 text-blue-200" />
                    {link.label}
                  </span>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
