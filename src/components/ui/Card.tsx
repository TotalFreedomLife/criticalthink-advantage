interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = "", hover = false }: CardProps) {
  const hoverStyles = hover
    ? "transition-shadow duration-200 hover:shadow-lg"
    : "";

  return (
    <div
      className={`border border-[var(--ct-border)] bg-white p-8 ${hoverStyles} ${className}`}
    >
      {children}
    </div>
  );
}
