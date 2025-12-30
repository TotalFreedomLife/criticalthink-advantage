import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
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
  title: "CriticalThink Advantage | Decision Governance Platform",
  description:
    "CriticalThink Advantage is a decision governance platform that defines how high-stakes decisions are evaluated, justified, and defended across institutional domains.",
  keywords: [
    "decision governance",
    "institutional accountability",
    "judgment standards",
    "enterprise governance",
  ],
  openGraph: {
    title: "CriticalThink Advantage | Decision Governance Platform",
    description:
      "CriticalThink Advantage is a decision governance platform that defines how high-stakes decisions are evaluated, justified, and defended across institutional domains.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen pt-16 lg:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
