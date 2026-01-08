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
  title: "The CriticalThink Advantage™ Methodology",
  description:
    "A structured decision-governance methodology for evaluating, justifying, and defending high-stakes decisions when the right answer isn't obvious.",
  keywords: [
    "decision governance",
    "decision methodology",
    "judgment evaluation",
    "defensible decisions",
  ],
  openGraph: {
    title: "The CriticalThink Advantage™ Methodology",
    description:
      "A structured decision-governance methodology for evaluating, justifying, and defending high-stakes decisions when the right answer isn't obvious.",
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
