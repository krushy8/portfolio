"use client";
import { Github, Linkedin, Mail } from "lucide-react";
import { useLang } from "@/lib/i18n";

// ─── EDIT THIS SECTION ────────────────────────────────────────────────────────
const ABOUT = {
  name: "Katherine Rush",
  bio: ["aboutBio1", "aboutBio2", "aboutBio3"],
  skills: [
    { category: "skillsLanguages", items: ["Ruby", "JavaScript", "TypeScript", "HTML", "CSS"] },
    { category: "skillsFrameworks", items: ["Ruby on Rails", "React", "Next.js", "Tailwind"] },
    { category: "skillsTools", items: ["Git", "PostgreSQL", "Vercel", "Figma", "Adobe Illustrator", "Adobe Photoshop"] },
  ],
  links: [
    { label: "GitHub", url: "https://github.com/krushy8" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/krushy8/" },
    { label: "Email", url: "mailto:rushkatheriney@gmail.com" },
  ],
} as const;
// ──────────────────────────────────────────────────────────────────────────────

export default function About() {
  const { t } = useLang();

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "8rem 2.5rem 5rem",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      {/* Page label */}
      <p
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.7rem",
          color: "var(--rust)",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          marginBottom: "1.5rem",
        }}
      >
        02 / {t("about")}
      </p>

      {/* Heading */}
      <h1
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(2.5rem, 6vw, 5rem)",
          fontWeight: 400,
          lineHeight: 1.1,
          letterSpacing: "-0.03em",
          color: "var(--rust)",
          marginBottom: "3rem",
        }}
      >
        {t("aboutHeading1")}
        <br />
        <em style={{ fontStyle: "italic", color: "var(--rust)" }}>
          {t("aboutHeading2")}
        </em>
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          borderTop: "1px solid var(--border)",
          paddingTop: "3rem",
        }}
      >
        {/* Left: Bio */}
        <div>
          <h2
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.7rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--muted)",
              marginBottom: "1.5rem",
            }}
          >
            {t("aboutBackground")}
          </h2>
          {ABOUT.bio.map((key) => (
            <p
              key={key}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "1rem",
                color: "var(--rust)",
                lineHeight: 1.8,
                fontWeight: 300,
                marginBottom: "1.25rem",
              }}
            >
              {t(key)}
            </p>
          ))}

          {/* Links */}
          <div style={{ marginTop: "2rem", display: "flex", gap: "1.5rem" }}>
            {ABOUT.links.map(({ label, url }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.75rem",
                  color: "var(--muted)",
                  textDecoration: "none",
                  letterSpacing: "0.05em",
                  borderBottom: "1px solid var(--border)",
                  paddingBottom: "2px",
                  transition: "color 0.2s ease, border-color 0.2s ease",
                }}
                onMouseOver={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "var(--rust)";
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--rust)";
                }}
                onMouseOut={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "var(--muted)";
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                }}
              >
                {label === "GitHub" && <Github size={14} />}
                {label === "LinkedIn" && <Linkedin size={14} />}
                {label === "Email" && <Mail size={14} />}
                {label === "Email" ? t("aboutEmail") : label}
              </a>
            ))}
          </div>
        </div>

        {/* Right: Skills */}
        <div>
          <h2
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.7rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--muted)",
              marginBottom: "1.5rem",
            }}
          >
            {t("aboutSkills")}
          </h2>

          {ABOUT.skills.map(({ category, items }) => (
            <div key={category} style={{ marginBottom: "2rem" }}>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  color: "var(--ink)",
                  marginBottom: "0.75rem",
                  letterSpacing: "0.02em",
                }}
              >
                {t(category)}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {items.map((item) => (
                  <span
                    key={item}
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.7rem",
                      color: "var(--muted)",
                      padding: "0.3rem 0.75rem",
                      border: "1px solid var(--border)",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Info block */}
          <div
            style={{
              marginTop: "2rem",
              padding: "1.25rem",
              border: "1px solid var(--border)",
              backgroundColor: "rgba(255,255,255,0.4)",
            }}
          >
            <p
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.7rem",
                color: "var(--muted)",
                letterSpacing: "0.06em",
                lineHeight: 2,
              }}
            >
              {t("aboutRoleLabel")} — {t("aboutRole")}
              <br />
              {t("aboutLocationLabel")} — {t("aboutLocation")}
              <br />
              {t("aboutStatusLabel")} — {t("available")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
