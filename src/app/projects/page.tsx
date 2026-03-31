"use client";

import Image from "next/image";

// ─── EDIT THIS SECTION ────────────────────────────────────────────────────────
const PROJECTS = [
  {
    id: 1,
    title: "Forkcast",
    description:
      "A meal planning web app designed to make weekly cooking simple and stress-free.",
    tags: ["Rails", "Hotwire", "Ajax", "SweetAlert", "SortableJS", "Figma"],
    year: "2026",
    url: "https://github.com/cledx/Forkcast",
    live: "https://www.reciplan.org/",
    image: "/forkcast.png",
  },
  {
    id: 2,
    title: "A&D",
    description:
      "A fun, decision-based role-playing game, where you can create your own character and story or leave it up to AI to take you on a journey.",
    tags: ["Rails", "Stimulus JS", "Heroku", "PostgreSQL", "Bootstrap", "Figma"],
    year: "2026",
    url: "https://github.com/cledx/A_n_D",
    live: "https://a-n-d-6c853770e414.herokuapp.com/",
    image: "/and.png",
  },
  {
    id: 3,
    title: "devtype",
    description:
      "A developer-focused typing speed test. Choose a language, type real code snippets, and track your WPM, CPM, and accuracy.",
    tags: ["React", "Typescript", "Tailwind", "Vite"],
    year: "2026",
    url: "https://github.com/krushy8/devtype",
    live: "https://devtype-sand.vercel.app/",
    image: "/devtype.png", //
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
          color: "var(--muted)",
          marginBottom: "3rem",
        }}
      >
        Things I&apos;ve
        <br />
        <em style={{ fontStyle: "italic", color: "var(--rust)" }}>built.</em>
      </h1>

      {/* Project list */}
      <div style={{ borderTop: "1px solid var(--border)" }}>
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
              {/* Screenshot */}
              {project.image && (
                <div
                  style={{
                    width: "100%",
                    height: "320px",
                    overflow: "hidden",
                    marginBottom: "1.25rem",
                    border: "1px solid var(--border)",
                  }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={200}
                    style={{ objectFit: "cover", width: "100%", height: "100%" }}
                  />
                </div>
              )}

              {/* Title — clickable if live URL exists */}
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.6rem",
                  fontWeight: 400,
                  marginBottom: "0.75rem",
                  letterSpacing: "-0.02em",
                }}
              >
                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "var(--rust)",
                      textDecoration: "none",
                      transition: "opacity 0.2s ease",
                    }}
                    onMouseOver={(e) =>
                      ((e.currentTarget as HTMLElement).style.opacity = "0.7")
                    }
                    onMouseOut={(e) =>
                      ((e.currentTarget as HTMLElement).style.opacity = "1")
                    }
                  >
                    {project.title}
                  </a>
                ) : (
                  <span style={{ color: "var(--rust)" }}>{project.title}</span>
                )}
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
          href="https://github.com/krushy8"
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
