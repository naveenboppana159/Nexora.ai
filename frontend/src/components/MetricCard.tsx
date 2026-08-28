"use client";

import { ReactNode } from "react";
import  MaterialSymbol  from "./MaterialSymbol";

interface MetricCardProps {
  label: string;
  value: string | number;
  icon: string;
  accent: string;
  glow?: string;
  suffix?: string;
  highlight?: boolean;
}

export default function MetricCard({
  label,
  value,
  icon,
  accent,
  glow,
  suffix,
  highlight = false,
}: MetricCardProps) {
  if (highlight) {
    return (
      <div className="rounded-xl p-6 flex flex-col gap-3 relative overflow-hidden bg-surface-container border border-primary/30 ai-glow">
        <div className="absolute inset-0 bg-to-br from-primary/5 to-secondary/5 pointer-events-none" />
        <div className="flex items-center justify-between relative z-10">
          <span className={`text-sm font-medium uppercase tracking-widest text-primary flex items-center gap-1 ${accent}`}>
            <MaterialSymbol icon="auto_awesome" className="text-[16px]" />
            {label}
          </span>
          <MaterialSymbol icon="trending_up" className="text-primary" />
        </div>
        <div className="text-5xl font-bold text-on-surface mt-auto relative z-10 flex items-baseline gap-1">
          {value}
          {suffix && <span className="text-2xl text-on-surface-variant">{suffix}</span>}
        </div>
      </div>
    );
  }

  return (
    <div className="glass-card rounded-xl p-6 flex flex-col gap-3 relative overflow-hidden group">
      {glow && (
        <div className={`absolute -right-6 -top-6 w-24 h-24 rounded-full blur-2xl opacity-50 group-hover:opacity-100 transition-all ${glow}`} />
      )}
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium uppercase tracking-widest text-on-surface-variant">
          {label}
        </span>
        <MaterialSymbol icon={icon} className={accent} />
      </div>
      <div className="text-5xl font-bold text-on-surface mt-auto">{value}</div>
    </div>
  );
}
