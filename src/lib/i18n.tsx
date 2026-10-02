"use client";
import { createContext, useContext, useEffect, useState } from "react";

const dict = {
  en: {
    home: "Home",
    about: "About",
    projects: "Projects",
    design: "Design",
    available: "Available for work",
    role: "Developer & Builder",
    intro:
      "Full-stack developer with a background in Rails. I like building useful things with clean visuals.",
    webProjects: "Web Projects",
    graphicDesign: "Graphic Design",
    aboutMe: "About Me",
  },
  ja: {
    home: "ホーム",
    about: "私について",
    projects: "プロジェクト",
    design: "デザイン",
    available: "お仕事受付中",
    role: "デベロッパー & ビルダー",
    intro:
      "Railsを軸にしたフルスタックデベロッパーです。使いやすく、見た目もすっきりしたものづくりが好きです。",
    webProjects: "Webプロジェクト",
    graphicDesign: "グラフィックデザイン",
    aboutMe: "自己紹介",
  },
} as const;

type Lang = keyof typeof dict;
type Key = keyof (typeof dict)["en"];

const Ctx = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (k: Key) => string;
}>({ lang: "en", setLang: () => {}, t: (k) => dict.en[k] });

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved && saved in dict) setLangState(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("lang", l);
  };

  return (
    <Ctx.Provider value={{ lang, setLang, t: (k) => dict[lang][k] }}>
      {children}
    </Ctx.Provider>
  );
}

export const useLang = () => useContext(Ctx);
