interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "elevated" | "flat" | "gradient";
  padding?: "none" | "sm" | "md" | "lg";
}

export default function Card({
  children,
  className = "",
  variant = "default",
  padding = "md",
}: CardProps) {
  const variants = {
    default: "bg-white border border-gray-100 shadow-sm",
    elevated:
      "bg-white shadow-md hover:shadow-lg transition-shadow duration-200",
    flat: "bg-gray-50 border border-gray-200",
    gradient: "bg-gradient-to-br from-red-500 to-red-700 text-white",
  };

  const paddings = {
    none: "",
    sm: "p-3",
    md: "p-4",
    lg: "p-6",
  };

  return (
    <div
      className={`rounded-2xl overflow-hidden ${variants[variant]} ${paddings[padding]} ${className}`}
    >
      {children}
    </div>
  );
}
