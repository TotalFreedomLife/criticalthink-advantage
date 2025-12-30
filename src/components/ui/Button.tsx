import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "outline";
type ButtonSize = "default" | "large";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--ct-primary)] text-white hover:bg-[var(--ct-primary-dark)] border border-transparent",
  secondary:
    "bg-[var(--ct-light)] text-[var(--ct-dark)] hover:bg-[var(--ct-border)] border border-[var(--ct-border)]",
  outline:
    "bg-transparent text-[var(--ct-primary)] border border-[var(--ct-primary)] hover:bg-[var(--ct-primary)] hover:text-white",
};

const sizeStyles: Record<ButtonSize, string> = {
  default: "px-6 py-3 text-base",
  large: "px-8 py-4 text-lg",
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "default",
  className = "",
  type = "button",
  disabled = false,
  onClick,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ct-primary)] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={combinedStyles}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
