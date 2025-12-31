import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui";

const footerLinks = [
  { name: "Doctrine", href: "/doctrine" },
  { name: "Deployments", href: "/deployments" },
  { name: "Trust", href: "/trust" },
  { name: "Contact", href: "/contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--ct-border)] bg-white py-12">
      <Container size="wide">
        <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
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

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-[var(--ct-muted)] transition-colors hover:text-[var(--ct-dark)]"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-sm text-[var(--ct-muted)]">
            {currentYear} CriticalThink Advantage. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
