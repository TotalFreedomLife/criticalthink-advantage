import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--ct-border)] bg-white py-12">
      <Container size="wide">
        <div className="flex flex-col items-center gap-8">
          {/* Logo and Copyright Row */}
          <div className="flex flex-col items-center justify-between gap-6 lg:w-full lg:flex-row">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/CriticalThinkAdvantageLogo.png"
                alt="CriticalThink Advantage"
                width={220}
                height={44}
                className="h-9 w-auto"
              />
            </Link>

            {/* Contact Link */}
            <Link
              href="/contact"
              className="text-sm text-[var(--ct-muted)] transition-colors hover:text-[var(--ct-dark)]"
            >
              Contact
            </Link>

            {/* Copyright */}
            <p className="text-sm text-[var(--ct-muted)]">
              {currentYear} CriticalThink Advantage. All rights reserved.
            </p>
          </div>

          {/* Disclaimer */}
          <div className="border-t border-[var(--ct-border)] pt-6 text-center">
            <p className="max-w-3xl text-xs leading-relaxed text-[var(--ct-muted)]">
              The CriticalThink Advantage&#8482; is a proprietary
              decision-governance methodology. It is not a certification,
              credential, or endorsement, and is not affiliated with or
              approved by any certifying body.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
