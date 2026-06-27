export type Locale = "ko" | "en";

export const defaultLocale: Locale = "ko";
export const supportedLocales: Locale[] = ["ko", "en"];
export const localeStorageKey = "denver-portfolio-locale";

export function isLocale(value: string | null): value is Locale {
  return value === "ko" || value === "en";
}

export function detectBrowserLocale(language: string | undefined): Locale {
  return language?.toLowerCase().startsWith("ko") ? "ko" : "en";
}
