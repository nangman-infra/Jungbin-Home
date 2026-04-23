"use client";

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

type Language = "en" | "ko";

interface I18nContextProps {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (enText: string, koText: string) => string;
}

const I18nContext = createContext<I18nContextProps | undefined>(undefined);

export function I18nProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const [lang, setLang] = useState<Language>("en"); // Default to English for global focus

  useEffect(() => {
    // Check local storage on mount
    const saved = localStorage.getItem("lang") as Language;
    if (saved === "en" || saved === "ko") {
      const timeoutId = globalThis.setTimeout(() => setLang(saved), 0);
      return () => globalThis.clearTimeout(timeoutId);
    }
  }, []);

  const handleSetLang = useCallback((newLang: Language) => {
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  }, []);

  const t = useCallback((enText: string, koText: string) => {
    return lang === "en" ? enText : koText;
  }, [lang]);
  const value = useMemo(
    () => ({ lang, setLang: handleSetLang, t }),
    [handleSetLang, lang, t]
  );

  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}
