interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
}

const sizeStyles = {
  default: "max-w-5xl",
  narrow: "max-w-3xl",
  wide: "max-w-7xl",
};

export function Container({
  children,
  className = "",
  size = "default",
}: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full px-6 lg:px-8 ${sizeStyles[size]} ${className}`}
    >
      {children}
    </div>
  );
}
