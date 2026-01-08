"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Container } from "@/components/ui";

const navigation = [
  { name: "Why", href: "/#why" },
  { name: "What", href: "/#what" },
  { name: "When", href: "/#when" },
  { name: "How", href: "/#how" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-[var(--ct-border)] bg-white/95 backdrop-blur-sm">
      <Container size="wide">
        <nav className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/CriticalThinkAdvantageLogo.png"
              alt="CriticalThink Advantage"
              width={280}
              height={56}
              className="h-10 w-auto lg:h-14"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-[var(--ct-slate)] transition-colors hover:text-[var(--ct-dark)]"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6 text-[var(--ct-dark)]"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="border-t border-[var(--ct-border)] py-4 lg:hidden">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-[var(--ct-slate)] transition-colors hover:text-[var(--ct-dark)]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
