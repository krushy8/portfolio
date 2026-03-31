"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "0.5rem 2.5rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid var(--border)",
        backgroundColor: "rgba(245, 240, 232, 0.85)",
        backdropFilter: "blur(12px)",
      }}
    >
      {/* Logo / Name */}
      <Link
        href="/"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "1.1rem",
          fontWeight: 600,
          color: "var(--ink)",
          textDecoration: "none",
          letterSpacing: "-0.02em",
        }}
      >
        <Image
          src="/logo.png"
          alt="Katherine Rush"
          width={80}
          height={20}
          style={{ objectFit: "contain" }}
        />
      </Link>

      {/* Links */}
      <ul style={{ display: "flex", gap: "2rem", listStyle: "none" }}>
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.875rem",
                fontWeight: pathname === href ? 500 : 400,
                color: pathname === href ? "var(--rust)" : "var(--muted)",
                textDecoration: "none",
                letterSpacing: "0.02em",
                transition: "color 0.2s ease",
              }}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
