import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import { LangProvider } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Katherine Rush — Developer",
  description: "Full-stack developer portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LangProvider>
          <Nav />
          <main>{children}</main>
        </LangProvider>
      </body>
    </html>
  );
}
