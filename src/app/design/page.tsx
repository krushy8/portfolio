"use client";

import Image from "next/image";
import { useState } from "react";
import React from "react";

// ─── EDIT THIS SECTION ────────────────────────────────────────────────────────
const DESIGN_PROJECTS = [
  {
    id: 1,
    title: "Kevin Williams- Drummer",
    description: "Kevin is a US-based freelance drummer. I developed a bold, funky logo and business card that expresses his taste in a variety of music genres.",
    tags: ["Print", "Logo Design"],
    year: "2014",
    image: "/business_card_2up.png",
    url: "https://www.muratdiril.com/artist-details/kevin-williams.html",
  },
  {
    id: 2,
    title: "The Gallant Greyhound",
    description: "The Gallant Greyhound is an independent shop that creates custom crocheted products mainly for dogs. The owner wanted to incorporate a rhythmic, whimsical logo using her own greyhound as the company mascot.",
    tags: ["Print", "Logo Design"],
    year: "2015",
    image: "/tshirt.png",
    url: "https://www.pinterest.com/thegallantgreyh/the-gallant-greyhound/",
  },
  {
    id: 3,
    title: "Fugoose",
    description: "I wanted to share my passion for cooking, how I make meals, and what I eat as a foreigner living in Japan. I wanted to create a fun, distinguishable mascot to represent the fusion of Japanese and English.",
    tags: ["Logo Design", "Branding", "Video Editing"],
    year: "2025",
    image: "/fugoose.png",
    url: "https://www.youtube.com/@Fugooseyt",
  },

  {
    id: 4,
    title: "Expat Job Board",
    description: "The owners developed an honest, straightforward job site to help expats find jobs with no surprises. I developed a logo to help capture the modern simplicity of their vision.",
    tags: ["Logo Design"],
    year: "2026",
    image: "/expat-job-board.png",
    url: "https://expatjobboard.com/jobs/location/hong-kong",
  },
  {
    id: 5,
    title: "Forkcast",
    description: "My team wanted to build an app to help take the hassle out of meal planning. I developed a modern, fresh logo to tie together this colorful tool.",
    tags: ["Logo Design"],
    year: "2026",
    image: "/forkcast.png",
    url: "https://www.reciplan.org/",
  }
];

const COLLAGE_IMAGES: { src: string; alt: string; style: React.CSSProperties }[] = [
  { src: "/business_card_2up.png", alt: "Design sample 1", style: { gridColumn: "1 / 3", gridRow: "1 / 2" } },
  { src: "/forkcast.png", alt: "Design sample 2", style: { gridColumn: "3 / 4", gridRow: "1 / 2" } },
  { src: "/fugoose.png", alt: "Design sample 3", style: { gridColumn: "1 / 2", gridRow: "2 / 3" } },
  { src: "/tshirt.png", alt: "Design sample 4", style: { gridColumn: "2 / 4", gridRow: "2 / 3" } },
];
// ──────────────────────────────────────────────────────────────────────────────

export default function Design() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div style={{ minHeight: "100vh", padding: "8rem 2.5rem 5rem" }}>

      {/* ── HERO: full width ── */}
      <div style={{ maxWidth: "1600px", margin: "0 auto", marginBottom: "6rem" }}>

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
          04 / Art &amp; Design
        </p>

        {/* Two-column split */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.6fr",
            gap: "4rem",
            alignItems: "center",
          }}
        >
          {/* Left — headline + body + CTA */}
          <div>
            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                fontWeight: 400,
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                color: "var(--ink)",
                marginBottom: "1.75rem",
              }}
            >
              Art &amp;{" "}
              <em style={{ fontStyle: "italic", color: "var(--rust)" }}>
                Design
              </em>
            </h1>

            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.9rem",
                color: "var(--muted)",
                lineHeight: 1.8,
                fontWeight: 300,
                maxWidth: "340px",
                marginBottom: "2.5rem",
              }}
            >
              I help devoted people create
              remarkable graphics and tell stories.{" "}
              <em style={{ fontStyle: "italic", color: "var(--ink)" }}>
                Logo design is my specialty.
              </em>
            </p>

            <a
              href="mailto:your@email.com"
              style={{
                display: "inline-block",
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.7rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--cream)",
                backgroundColor: "var(--ink)",
                padding: "1rem 2.5rem",
                textDecoration: "none",
                transition: "background-color 0.2s ease",
              }}
              onMouseOver={(e) =>
                ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--rust)")
              }
              onMouseOut={(e) =>
                ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--ink)")
              }
            >
              Let&apos;s Talk
            </a>
          </div>

          {/* Right — image collage grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gridTemplateRows: "repeat(2, 260px)",
              gap: "6px",
            }}
          >
            {COLLAGE_IMAGES.map((img, i) => (
              <div
                key={i}
                style={{
                  ...img.style,
                  overflow: "hidden",
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={400}
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                    display: "block",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── PROJECT LIST: narrower ── */}
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <div style={{ borderTop: "1px solid var(--border)" }}>
          {DESIGN_PROJECTS.map((project, index) => (
            <div
              key={project.id}
              style={{
                borderBottom: "1px solid var(--border)",
                padding: "2.5rem 0",
                display: "grid",
                gridTemplateColumns: "3rem 1fr auto",
                gap: "2rem",
                alignItems: "start",
                backgroundColor:
                  hoveredId === project.id
                    ? "rgba(255,255,255,0.4)"
                    : "transparent",
                transition: "background-color 0.2s ease",
                cursor: "default",
              }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Index */}
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
                      height={320}
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </div>
                )}

                <h2
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.6rem",
                    fontWeight: 400,
                    marginBottom: "0.75rem",
                    letterSpacing: "-0.02em",
                    color: "var(--rust)",
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

              {/* Year */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
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
          Get in touch at{" "}
          <a
            href="mailto:your@email.com"
            style={{ color: "var(--rust)", textDecoration: "none" }}
          >
            your@email.com ↗
          </a>
        </p>
      </div>
    </div>
  );
}
