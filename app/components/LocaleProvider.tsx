"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { content } from "@/app/data/content";
import {
  defaultLocale,
  detectBrowserLocale,
  isLocale,
  localeStorageKey,
  type Locale,
} from "@/app/lib/i18n";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (typeof content)[Locale];
};

const LocaleContext = createContext<LocaleContextValue | null>(null);
const localeChangeEvent = "denver-portfolio-locale-change";

function readStoredLocale(): Locale {
  if (typeof window === "undefined") {
    return defaultLocale;
  }

  const savedLocale = window.localStorage.getItem(localeStorageKey);

  if (isLocale(savedLocale)) {
    return savedLocale;
  }

  return detectBrowserLocale(window.navigator.language);
}

function subscribeLocaleChange(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(localeChangeEvent, callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(localeChangeEvent, callback);
  };
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(
    subscribeLocaleChange,
    readStoredLocale,
    () => defaultLocale,
  );

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = (nextLocale: Locale) => {
    window.localStorage.setItem(localeStorageKey, nextLocale);
    document.documentElement.lang = nextLocale;
    window.dispatchEvent(new Event(localeChangeEvent));
  };

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: content[locale],
    }),
    [locale],
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);

  if (!context) {
    throw new Error("useLocale must be used inside LocaleProvider");
  }

  return context;
}
