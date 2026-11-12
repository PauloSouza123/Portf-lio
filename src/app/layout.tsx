import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Paulo Andre de Souza | Customer Success & Software Engineering",
  description:
    "Portfolio of Paulo Andre de Souza: customer success, technical onboarding, full-stack software development, APIs, automation and practical AI adoption.",
  keywords: [
    "Paulo Andre de Souza",
    "Customer Success",
    "Technical Customer Success",
    "Software Engineer",
    "Full Stack Developer",
    "AI Automation",
    "Next.js",
    "Java",
    "Spring Boot",
  ],
  openGraph: {
    title: "Paulo Andre de Souza | Customer Success & Software Engineering",
    description:
      "Technical customer success, software development and AI-powered automation.",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
