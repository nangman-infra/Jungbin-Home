"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "ko";

interface I18nContextProps {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (enText: string, koText: string) => string;
}

const I18nContext = createContext<I18nContextProps | undefined>(undefined);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("en"); // Default to English for global focus

  useEffect(() => {
    // Check local storage on mount
    const saved = localStorage.getItem("lang") as Language;
    if (saved === "en" || saved === "ko") {
      const timeoutId = window.setTimeout(() => setLang(saved), 0);
      return () => window.clearTimeout(timeoutId);
    }
  }, []);

  const handleSetLang = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  const t = (enText: string, koText: string) => {
    return lang === "en" ? enText : koText;
  };

  return (
    <I18nContext.Provider value={{ lang, setLang: handleSetLang, t }}>
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
