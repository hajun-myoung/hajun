"use client";

import Image from "next/image";
import { ArrowDown, GitBranch, Mail, Sparkles } from "lucide-react";
import { profileLinks } from "@/app/data/content";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { LanguageToggle } from "@/app/components/LanguageToggle";
import { useLocale } from "@/app/components/LocaleProvider";
import { MotionDiv, MotionSection } from "@/app/components/Motion";

export function Hero() {
  const { t } = useLocale();

  return (
    <MotionSection className="relative isolate overflow-hidden px-6 pb-24 pt-10 sm:px-8 lg:px-12">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_16%,rgba(37,99,235,0.2),transparent_31%),radial-gradient(circle_at_12%_22%,rgba(99,102,241,0.16),transparent_28%),linear-gradient(180deg,#050506_0%,#09090b_70%,#0b0b10_100%)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-blue-300/45 to-transparent" />

      <header className="absolute inset-x-0 top-0 z-20 px-6 pt-5 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <a
            href="#"
            className="text-sm font-semibold tracking-[0.24em] text-white"
            aria-label="Denver home"
          >
            DENVER
          </a>
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-6 text-sm font-medium text-zinc-400 md:flex"
          >
            {t.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <LanguageToggle />
        </div>
      </header>

      <div className="mx-auto flex min-h-[calc(100vh-2.5rem)] max-w-7xl flex-col justify-center gap-16 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="max-w-3xl">
          <Badge className="mb-8 border-blue-300/25 bg-blue-400/10 text-blue-100">
            <Sparkles aria-hidden="true" className="h-3.5 w-3.5" />
            {t.hero.badge}
          </Badge>

          <h1 className="text-6xl font-semibold leading-[0.92] text-white sm:text-7xl lg:text-8xl">
            Hola,
            <span className="mt-2 block text-zinc-200">{t.hero.name}</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">
            {t.hero.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {t.hero.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href="#projects">
              {t.hero.actions.projects}
              <ArrowDown aria-hidden="true" className="h-4 w-4" />
            </Button>
            <Button
              href={profileLinks.github}
              variant="secondary"
              target="_blank"
              rel="noreferrer"
            >
              <GitBranch aria-hidden="true" className="h-4 w-4" />
              {t.hero.actions.github}
            </Button>
            <Button href="#contact" variant="ghost">
              <Mail aria-hidden="true" className="h-4 w-4" />
              {t.hero.actions.contact}
            </Button>
          </div>
        </div>

        <MotionDiv className="relative mx-auto w-full max-w-[470px] lg:mr-0">
          <div className="absolute -inset-6 rounded-[8px] bg-gradient-to-br from-blue-500/18 via-indigo-500/10 to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-[8px] border border-white/12 bg-zinc-950 shadow-[0_35px_120px_rgba(0,0,0,0.48)]">
            <Image
              src="/profile/in-front-of-spiderman.jpeg"
              alt={t.hero.imageAlt}
              width={1080}
              height={1440}
              priority
              className="aspect-[3/4] h-auto w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
          </div>

          {t.hero.floatingStack.map((label, index) => (
            <div
              key={label}
              className={[
                "absolute hidden rounded-full border border-white/12 bg-black/70 px-4 py-2 text-xs font-medium text-zinc-100 shadow-2xl backdrop-blur md:block",
                index === 0 && "-left-8 top-16",
                index === 1 && "-right-8 top-28",
                index === 2 && "-left-10 bottom-28",
                index === 3 && "right-4 bottom-16",
                index === 4 && "left-12 top-1/2",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {label}
            </div>
          ))}
        </MotionDiv>
      </div>
    </MotionSection>
  );
}
