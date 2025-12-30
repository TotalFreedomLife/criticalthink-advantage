import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | CriticalThink Advantage",
  description:
    "Engage the CriticalThink Advantage platform team. Platform partnerships, enterprise deployment, and investment inquiries.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
