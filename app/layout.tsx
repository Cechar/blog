import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Blog & Skill Library",
  description: "个人博客与技能库",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
