import { Container } from "./Container";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: "white" | "light";
  containerSize?: "default" | "narrow" | "wide";
  id?: string;
}

export function Section({
  children,
  className = "",
  background = "white",
  containerSize = "default",
  id,
}: SectionProps) {
  const bgStyles = background === "light" ? "bg-[var(--ct-light)]" : "bg-white";

  return (
    <section
      id={id}
      className={`py-20 lg:py-28 ${bgStyles} ${className}`}
    >
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}
