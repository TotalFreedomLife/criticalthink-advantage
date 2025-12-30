import Link from "next/link";
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
          <div className="text-lg font-semibold tracking-tight text-[var(--ct-dark)]">
            CriticalThink Advantage
            <span className="text-[var(--ct-primary)]">&#8482;</span>
          </div>

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
