import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nexora AI",
  description: "AI-powered productivity platform",
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