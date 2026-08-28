"use client"
interface MaterialSymbolProps {
  icon: string;
  className?: string;
  fill?: boolean;
}

export default function MaterialSymbol({
  icon,
  className = "",
  fill = false,
}: MaterialSymbolProps) {
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={
        fill
          ? { fontVariationSettings: "'FILL' 1" }
          : undefined
      }
    >
      {icon}
    </span>
  );
}