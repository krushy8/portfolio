"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Home() {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate the horizontal rule on load
    if (lineRef.current) {
      lineRef.current.style.width = "0";
      setTimeout(() => {
        if (lineRef.current) {
          lineRef.current.style.transition = "width 1s cubic-bezier(0.16, 1, 0.3, 1)";
          lineRef.current.style.width = "100%";
        }
      }, 400);
    }
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "0 2.5rem 4rem",
        paddingTop: "6rem",
      }}
    >
      {/* Top label */}
      <div
        style={{
          position: "absolute",
          top: "6rem",
          right: "2.5rem",
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.7rem",
          color: "var(--muted)",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          writingMode: "vertical-rl",
          paddingTop: "5rem",
        }}
      >
        Available for work
      </div>

      {/* Main hero content */}
      <div style={{ maxWidth: "900px" }}>
        {/* Eyebrow */}
        <p
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.75rem",
            color: "var(--rust)",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: "1.5rem",
            opacity: 0,
            animation: "fadeUp 0.6s ease forwards 0.1s",
          }}
        >
          Developer & Builder
        </p>

        {/* Big headline */}
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(3rem, 8vw, 7rem)",
            fontWeight: 400,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            color: "var(--ink)",
            marginBottom: "2rem",
            opacity: 0,
            animation: "fadeUp 0.7s ease forwards 0.2s",
          }}
        >
          Hi, I&apos;m{" "}
          <em style={{ fontStyle: "italic", color: "var(--rust)" }}>
            Your Name
          </em>
          .
          <br />I build things for the web.
        </h1>

        {/* Divider line */}
        <div
          ref={lineRef}
          style={{
            height: "1px",
            backgroundColor: "var(--border)",
            marginBottom: "2rem",
            width: "0",
          }}
        />

        {/* Subheading */}
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "1.1rem",
            color: "var(--muted)",
            maxWidth: "500px",
            lineHeight: 1.7,
            fontWeight: 300,
            marginBottom: "2.5rem",
            opacity: 0,
            animation: "fadeUp 0.7s ease forwards 0.5s",
          }}
        >
          Full-stack developer with a background in Rails, learning React and
          Next.js. I like making fast, clean, useful software.
        </p>

        {/* CTAs */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            opacity: 0,
            animation: "fadeUp 0.7s ease forwards 0.65s",
          }}
        >
          <Link
            href="/projects"
            style={{
              display: "inline-block",
              padding: "0.75rem 1.75rem",
              backgroundColor: "var(--ink)",
              color: "var(--cream)",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.875rem",
              fontWeight: 500,
              textDecoration: "none",
              letterSpacing: "0.02em",
              transition: "background-color 0.2s ease",
            }}
            onMouseOver={(e) =>
              ((e.target as HTMLElement).style.backgroundColor = "var(--rust)")
            }
            onMouseOut={(e) =>
              ((e.target as HTMLElement).style.backgroundColor = "var(--ink)")
            }
          >
            View Projects
          </Link>
          <Link
            href="/about"
            style={{
              display: "inline-block",
              padding: "0.75rem 1.75rem",
              border: "1px solid var(--border)",
              color: "var(--ink)",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.875rem",
              fontWeight: 400,
              textDecoration: "none",
              letterSpacing: "0.02em",
              transition: "border-color 0.2s ease, color 0.2s ease",
            }}
            onMouseOver={(e) => {
              (e.target as HTMLElement).style.borderColor = "var(--rust)";
              (e.target as HTMLElement).style.color = "var(--rust)";
            }}
            onMouseOut={(e) => {
              (e.target as HTMLElement).style.borderColor = "var(--border)";
              (e.target as HTMLElement).style.color = "var(--ink)";
            }}
          >
            About Me
          </Link>
        </div>
      </div>

      {/* Bottom index label */}
      <div
        style={{
          position: "fixed",
          bottom: "2rem",
          right: "2.5rem",
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.7rem",
          color: "var(--muted)",
          letterSpacing: "0.08em",
        }}
      >
        01 / Home
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
