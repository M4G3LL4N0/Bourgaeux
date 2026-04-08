import { ReactNode } from "react";

type SectionCardProps = {
  children: ReactNode;
  className?: string;
};

export default function SectionCard({ children, className = "" }: SectionCardProps) {
  return (
    <div className={`card hover:border-white/20 transition-colors ${className}`}>
      {children}
    </div>
  );
}
