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

interface DeploymentCardProps {
  title: string;
  status: "Live" | "In Development" | "Coming Soon";
  description: string;
  href?: string;
}

export function DeploymentCard({
  title,
  status,
  description,
  href,
}: DeploymentCardProps) {
  const statusStyles = {
    Live: "text-green-700 bg-green-50 border-green-200",
    "In Development": "text-amber-700 bg-amber-50 border-amber-200",
    "Coming Soon": "text-[var(--ct-muted)] bg-[var(--ct-light)] border-[var(--ct-border)]",
  };

  const content = (
    <>
      <div className="mb-4 flex items-start justify-between">
        <h3 className="text-xl font-semibold text-[var(--ct-dark)]">{title}</h3>
        <span
          className={`inline-block border px-3 py-1 text-sm font-medium ${statusStyles[status]}`}
        >
          {status}
        </span>
      </div>
      <p className="text-[var(--ct-slate)]">{description}</p>
    </>
  );

  if (href && status === "Live") {
    return (
      <a
        href={href}
        className="block border border-[var(--ct-border)] bg-white p-6 transition-all duration-200 hover:border-[var(--ct-primary)] hover:shadow-md"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="border border-[var(--ct-border)] bg-white p-6">
      {content}
    </div>
  );
}
