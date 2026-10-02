"use client";
import { useLang } from "@/lib/i18n";

export default function LangToggle() {
  const { lang, setLang } = useLang();
  return (
    <button
      onClick={() => setLang(lang === "en" ? "ja" : "en")}
      aria-label="Switch language"
      className="rounded-full border px-3 py-1 text-sm"
    >
      {lang === "en" ? "日本語" : "EN"}
    </button>
  );
}
