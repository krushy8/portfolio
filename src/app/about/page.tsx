"use client";

// ─── EDIT THIS SECTION ────────────────────────────────────────────────────────
const ABOUT = {
  name: "Katherine Rush",
  role: "Full-Stack Developer",
  location: "Tokyo, Japan",
  bio: [
    "I'm a developer with a background in Ruby on Rails. I enjoy building things that are fast, clean, and actually useful.",
    "Before coding, I studied Graphic Design. These days I spend most of my time working on projects useful in Japan and learning everything I can about modern web development.",
    "When I'm not at my desk, you'll find me cooking, running, and taking care of my plants.",
  ],
  skills: [
    { category: "Languages", items: ["Ruby", "JavaScript", "TypeScript", "HTML", "CSS"] },
    { category: "Frameworks", items: ["Ruby on Rails", "React", "Next.js", "Tailwind"] },
    { category: "Tools", items: ["Git", "PostgreSQL", "Vercel", "Figma"] },
  ],
  links: [
    { label: "GitHub", url: "https://github.com/krushy8" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/krushy8/" },
    { label: "Email", url: "rushkatheriney@gmail.com" },
  ],
};
// ──────────────────────────────────────────────────────────────────────────────

export default function About() {
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
        02 / About
      </p>

      {/* Heading */}
      <h1
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(2.5rem, 6vw, 5rem)",
          fontWeight: 400,
          lineHeight: 1.1,
          letterSpacing: "-0.03em",
          color: "var(--ink)",
          marginBottom: "3rem",
        }}
      >
        A bit about
        <br />
        <em style={{ fontStyle: "italic", color: "var(--rust)" }}>who I am.</em>
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
            Background
          </h2>
          {ABOUT.bio.map((paragraph, i) => (
            <p
              key={i}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "1rem",
                color: "var(--ink)",
                lineHeight: 1.8,
                fontWeight: 300,
                marginBottom: "1.25rem",
              }}
            >
              {paragraph}
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
                  (e.target as HTMLElement).style.color = "var(--rust)";
                  (e.target as HTMLElement).style.borderColor = "var(--rust)";
                }}
                onMouseOut={(e) => {
                  (e.target as HTMLElement).style.color = "var(--muted)";
                  (e.target as HTMLElement).style.borderColor = "var(--border)";
                }}
              >
                {label} ↗
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
            Skills
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
                {category}
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
              Role — {ABOUT.role}
              <br />
              Location — {ABOUT.location}
              <br />
              Status — Available for work
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
