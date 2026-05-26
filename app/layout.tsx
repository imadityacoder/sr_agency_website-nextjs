import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SR Studio | Premium Digital Creative Agency",
  description:
    "Modern websites, AI-powered workflows, branding, UI/UX, automation, and high-converting landing pages for ambitious businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
