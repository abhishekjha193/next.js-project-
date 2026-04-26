import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";

export const metadata: Metadata = {
  title: "Abhishek Jha",
  description:
    "I build performant, scalable, and beautiful web experiences. Senior Software Engineer specializing in React, Next.js, and TypeScript.",
  keywords: [
    "Software Engineer",
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Web Development",
  ],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Abhishek Jha",
    description: "I build performant, scalable, and beautiful web experiences.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhishek Jha",
    description: "I build performant, scalable, and beautiful web experiences.",
    creator: "@yourhandle",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="shortcut icon" href="a.png" type="image/x-icon" />
      </head>
      <body className="noise">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
