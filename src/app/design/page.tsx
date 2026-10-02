"use client";

import Image from "next/image";
import { useLang, type Key } from "@/lib/i18n";

type DesignProject = {
  id: number;
  title: string;
  description: Key;
  tags: Key[];
  image: string;
  url?: string;
  height: string;
  objectFit: "cover" | "contain";
  objectPosition?: string;
  scale?: number;
  pdf?: string;
};

// ─── EDIT THIS SECTION ────────────────────────────────────────────────────────
const DESIGN_PROJECTS: DesignProject[] = [
  {
    id: 1,
    title: "Kevin Williams",
    description: "designDesc1",
    tags: ["tagPrint", "tagLogoDesign"],
    image: "/business_card_2up.png",
    url: "https://www.muratdiril.com/artist-details/kevin-williams.html",
    height: "480px",
    objectFit: "contain",
  },
  {
    id: 2,
    title: "The Gallant Greyhound",
    description: "designDesc2",
    tags: ["tagPrint", "tagLogoDesign"],
    image: "/tshirt.png",
    url: "https://www.pinterest.com/thegallantgreyh/the-gallant-greyhound/",
    height: "420px",
    objectFit: "contain",
    objectPosition: "center",
  },
  {
    id: 3,
    title: "Fugoose",
    description: "designDesc3",
    tags: ["tagLogoDesign", "tagBranding", "tagVideoEditing"],
    image: "/fugoose.png",
    url: "https://www.youtube.com/@Fugooseyt",
    height: "320px",
    objectFit: "contain",
    pdf: "/Channel Brand.pdf",
  },
  {
    id: 4,
    title: "Expat Job Board",
    description: "designDesc4",
    tags: ["tagLogoDesign"],
    image: "/expat-job-board.png",
    url: "https://expatjobboard.com/jobs/location/hong-kong",
    height: "180px",
    objectFit: "contain",
    objectPosition: "center",
  },
  {
    id: 5,
    title: "Forkcast",
    description: "designDesc5",
    tags: ["tagLogoDesign"],
    image: "/forkcast_logo.png",
    url: "https://www.reciplan.org/",
    height: "240px",
    objectFit: "contain",
    objectPosition: "center",
    scale: 1.3,
  },
];
// ──────────────────────────────────────────────────────────────────────────────

export default function Design() {
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
        {t("designHeading1")}
        <br />
        <em style={{ fontStyle: "italic", color: "var(--rust)" }}>
          {t("designHeading2")}
        </em>
      </h1>

      {/* Project list */}
      <div style={{ borderTop: "1px solid var(--border)" }}>
        {DESIGN_PROJECTS.map((project) => (
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
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    quality={100}
                    style={{
                      objectFit: project.objectFit,
                      objectPosition: project.objectPosition || "center",
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
                <span style={{ color: "var(--rust)" }}>{project.title}</span>
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
                {t(project.description)}
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
                    {t(tag)}
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
                    ((e.target as HTMLElement).style.color = "var(--rust)")
                  }
                  onMouseOut={(e) =>
                    ((e.target as HTMLElement).style.color = "var(--muted)")
                  }
                >
                  {t("designCheckOut")} ↗
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
                    ((e.target as HTMLElement).style.color = "var(--rust)")
                  }
                  onMouseOut={(e) =>
                    ((e.target as HTMLElement).style.color = "var(--muted)")
                  }
                >
                  {t("designBrandGuide")} ↗
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
          {t("designGetInTouch")} ↗
        </a>
      </p>
    </div>
  );
}
