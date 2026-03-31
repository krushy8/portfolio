"use client";

import Link from "next/link";

// ─── EDIT THIS SECTION ────────────────────────────────────────────────────────
const PROJECTS = [
  {
    id: 1,
    title: "Project One",
    description:
      "A brief description of what this project does, the problem it solves, and what you learned building it.",
    tags: ["Rails", "PostgreSQL", "Tailwind"],
    year: "2024",
    url: "https://github.com/yourusername/project-one",
    live: "https://your-project.com",
  },
  {
    id: 2,
    title: "Project Two",
    description:
      "Another project description. Focus on impact — what did it do, who used it, what was interesting about it?",
    tags: ["Next.js", "React", "Vercel"],
    year: "2024",
    url: "https://github.com/yourusername/project-two",
    live: null,
  },
  {
    id: 3,
    title: "Project Three",
    description:
      "Keep adding projects here. Replace these placeholder entries with your real work as you build it.",
    tags: ["JavaScript", "API", "CSS"],
    year: "2023",
    url: "https://github.com/yourusername/project-three",
    live: null,
  },
];
// ──────────────────────────────────────────────────────────────────────────────

export default function Projects() {
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
        03 / Projects
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
        Things I&apos;ve
        <br />
        <em style={{ fontStyle: "italic", color: "var(--rust)" }}>built.</em>
      </h1>

      {/* Project list */}
      <div
        style={{
          borderTop: "1px solid var(--border)",
        }}
      >
        {PROJECTS.map((project, index) => (
          <div
            key={project.id}
            style={{
              borderBottom: "1px solid var(--border)",
              padding: "2.5rem 0",
              display: "grid",
              gridTemplateColumns: "3rem 1fr auto",
              gap: "2rem",
              alignItems: "start",
              transition: "background-color 0.2s ease",
              cursor: "default",
            }}
            onMouseOver={(e) =>
              ((e.currentTarget as HTMLElement).style.backgroundColor =
                "rgba(255,255,255,0.4)")
            }
            onMouseOut={(e) =>
              ((e.currentTarget as HTMLElement).style.backgroundColor =
                "transparent")
            }
          >
            {/* Index number */}
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.7rem",
                color: "var(--muted)",
                paddingTop: "0.25rem",
              }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>

            {/* Content */}
            <div>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.6rem",
                  fontWeight: 400,
                  color: "var(--ink)",
                  marginBottom: "0.75rem",
                  letterSpacing: "-0.02em",
                }}
              >
                {project.title}
              </h2>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.9rem",
                  color: "var(--muted)",
                  lineHeight: 1.7,
                  fontWeight: 300,
                  maxWidth: "480px",
                  marginBottom: "1.25rem",
                }}
              >
                {project.description}
              </p>

              {/* Tags */}
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.65rem",
                      color: "var(--muted)",
                      padding: "0.25rem 0.6rem",
                      border: "1px solid var(--border)",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Links + year */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                gap: "0.75rem",
                paddingTop: "0.25rem",
              }}
            >
              <span
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.7rem",
                  color: "var(--muted)",
                }}
              >
                {project.year}
              </span>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.7rem",
                  color: "var(--muted)",
                  textDecoration: "none",
                  letterSpacing: "0.05em",
                  transition: "color 0.2s ease",
                }}
                onMouseOver={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--rust)")
                }
                onMouseOut={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--muted)")
                }
              >
                GitHub ↗
              </a>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.7rem",
                    color: "var(--muted)",
                    textDecoration: "none",
                    letterSpacing: "0.05em",
                    transition: "color 0.2s ease",
                  }}
                  onMouseOver={(e) =>
                    ((e.target as HTMLElement).style.color = "var(--rust)")
                  }
                  onMouseOut={(e) =>
                    ((e.target as HTMLElement).style.color = "var(--muted)")
                  }
                >
                  Live ↗
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Footer note */}
      <p
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.7rem",
          color: "var(--muted)",
          marginTop: "3rem",
          letterSpacing: "0.05em",
        }}
      >
        More on{" "}
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--rust)", textDecoration: "none" }}
        >
          GitHub ↗
        </a>
      </p>
    </div>
  );
}
