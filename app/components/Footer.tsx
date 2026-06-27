"use client";

import { useLocale } from "@/app/components/LocaleProvider";

export function Footer() {
  const { t } = useLocale();

  return (
    <footer className="px-6 pb-10 text-center text-sm text-zinc-500 sm:px-8 lg:px-12">
      <p>{t.footer}</p>
    </footer>
  );
}
