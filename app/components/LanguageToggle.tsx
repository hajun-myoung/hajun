"use client";

import { supportedLocales, type Locale } from "@/app/lib/i18n";
import { useLocale } from "@/app/components/LocaleProvider";
import { cn } from "@/app/lib/utils";

const labels: Record<Locale, string> = {
  ko: "KO",
  en: "EN",
};

export function LanguageToggle() {
  const { locale, setLocale } = useLocale();

  return (
    <div
      aria-label="Language selector"
      className="inline-flex rounded-full border border-white/12 bg-black/45 p-1 text-xs font-semibold text-zinc-400 shadow-2xl backdrop-blur"
    >
      {supportedLocales.map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => setLocale(item)}
          aria-pressed={locale === item}
          className={cn(
            "h-8 rounded-full px-3 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300",
            locale === item
              ? "bg-white text-zinc-950"
              : "text-zinc-400 hover:text-white",
          )}
        >
          {labels[item]}
        </button>
      ))}
    </div>
  );
}
