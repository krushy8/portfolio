"use client";

import Image from "next/image";
import { useState } from "react";
import React from "react";

// ─── EDIT THIS SECTION ────────────────────────────────────────────────────────
const DESIGN_PROJECTS = [
  {
    id: 1,
    title: "Kevin Williams",
    description:
      "Kevin is a US-based freelance drummer. I developed a bold, funky logo and business card that expresses his taste in a variety of music genres.",
    tags: ["Print", "Logo Design"],
    image: "/business_card_2up.png",
    url: "https://www.muratdiril.com/artist-details/kevin-williams.html",
    height: "480px",
    objectFit: "contain",
  },
  {
    id: 2,
    title: "The Gallant Greyhound",
    description:
      "The Gallant Greyhound is an independent shop that creates custom crocheted products mainly for dogs. The owner wanted to incorporate a rhythmic, whimsical logo using her own greyhound as the company mascot.",
    tags: ["Print", "Logo Design"],
    image: "/tshirt.png",
    url: "https://www.pinterest.com/thegallantgreyh/the-gallant-greyhound/",
    height: "420px",
    objectFit: "contain",
    objectPosition: "center",
  },
  {
    id: 3,
    title: "Fugoose",
    description:
      "I wanted to share my passion for cooking, how I make meals, and what I eat as a foreigner living in Japan. I wanted to create a fun, distinguishable mascot to represent the fusion of Japanese and English.",
    tags: ["Logo Design", "Branding", "Video Editing"],
    image: "/fugoose.png",
    url: "https://www.youtube.com/@Fugooseyt",
    height: "320px",
    objectFit: "contain",
    pdf: "/Channel Brand.pdf",
  },
  {
    id: 4,
    title: "Expat Job Board",
    description:
      "The owners developed an honest, straightforward job site to help expats find jobs with no surprises. I developed a logo to help capture the modern simplicity of their vision.",
    tags: ["Logo Design"],
    image: "/expat-job-board.png",
    url: "https://expatjobboard.com/jobs/location/hong-kong",
    height: "320px",
    objectFit: "contain",
    objectPosition: "center",
    scale: 1.3,
  },
  {
    id: 5,
    title: "Forkcast",
    description:
      "My team wanted to build an app to help take the hassle out of meal planning. I developed a modern, fresh logo to tie together this colorful tool.",
    tags: ["Logo Design"],
    image: "/forkcast_logo.png",
    url: "https://www.reciplan.org/",
    height: "240px",
    objectFit: "contain",
    objectPosition: "center",
    scale: 1.3,
  },
];

export default function Design() {

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "8rem 2.5rem 5rem",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
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
        Art &amp;
        <br />
        <em style={{ fontStyle: "italic", color: "var(--rust)" }}>
          Design.
        </em>
      </h1>

      {/* Project list */}
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
              cursor: "default",
            }}
          >

          <div />

            {/* Content */}
            <div style={{ minWidth: 0 }}>
              {project.image && (
                <div
                  style={{
                    width: "100%",
                    height: project.height || "320px",
                    overflow: "hidden",
                    marginBottom: "1.25rem",
                  }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1200}
                    height={480}
                    quality={100}
                    style={{
                      objectFit: (project.objectFit || "cover") as
                        | "cover"
                        | "contain",
                      objectPosition:
                        project.objectPosition || "center",
                      width: "100%",
                      height: "100%",
                      transform: project.scale
                        ? `scale(${project.scale})`
                        : undefined,
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
                <span style={{ color: "var(--rust)" }}>
                  {project.title}
                </span>
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

              <div
                style={{
                  display: "flex",
                  gap: "0.5rem",
                  flexWrap: "wrap",
                }}
              >
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

            {/* Links */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                gap: "0.75rem",
                paddingTop: "0.25rem",
              }}
            >
              {project.url && (
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
                    ((e.target as HTMLElement).style.color =
                      "var(--rust)")
                  }
                  onMouseOut={(e) =>
                    ((e.target as HTMLElement).style.color =
                      "var(--muted)")
                  }
                >
                  Check them out ↗
                </a>
              )}

              {project.pdf && (
                <a
                  href={project.pdf}
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
                    ((e.target as HTMLElement).style.color =
                      "var(--rust)")
                  }
                  onMouseOut={(e) =>
                    ((e.target as HTMLElement).style.color =
                      "var(--muted)")
                  }
                >
                  Brand Guide ↗
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <p
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.7rem",
          color: "var(--muted)",
          marginTop: "3rem",
          letterSpacing: "0.05em",
        }}
      >
        {" "}
        <a
          href="/about"
          style={{ color: "var(--rust)", textDecoration: "none" }}
        >
          Get in touch ↗
        </a>
      </p>
    </div>
  );
}
