"use client";
import { useLang } from "@/lib/i18n";

export default function LangToggle() {
  const { lang, setLang } = useLang();

  return (
    <button
      onClick={() => setLang(lang === "en" ? "ja" : "en")}
      aria-label="Switch language"
      style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "0.8rem",
        letterSpacing: "0.02em",
        color: "var(--ink)",
        background: "transparent",
        border: "1px solid var(--border)",
        borderRadius: "999px",
        padding: "0.25rem 0.75rem",
        cursor: "pointer",
        transition: "color 0.2s ease, border-color 0.2s ease",
      }}
    >
      {lang === "en" ? "日本語" : "EN"}
    </button>
  );
}
