"use client";

import MaterialSymbol from "./MaterialSymbol";

interface NavItem {
  label: string;
  icon: string;
  active?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Dashboard", active: true },
  { label: "Projects" },
  { label: "Tasks" },
  { label: "AI Assistant" },
  { label: "Analytics" },
  { label: "Settings" },
];

export default function SideNav() {
  return (
    <aside className="hidden md:flex flex-col h-screen left-0 w-52 bg-surface-container border-r border-outline-variant/20 shadow-lg py-6 z-40">
      {/* Header */}
      <div className="px-6 mb-8 flex items-center gap-3">
        <div className="w-5 h-5 rounded-lg bg-primary-container flex items-center justify-center shrink-0">
        </div>

        <div>
          <h1 className="font-geist text-2xl font-semibold text-primary tracking-tight">
            Nexora AI
          </h1>

          <p className="text-xs font-semibold tracking-widest text-on-surface-variant uppercase">
            Enterprise Productivity
          </p>
        </div>
      </div>

      {/* Nav Links */}
      <nav className="flex-1 px-2 space-y-2">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.label}
            href="#"
            className={
              item.active
                ? "flex items-center gap-4 px-4 py-3 rounded-lg bg-primary-container/20 text-primary border-r-4 border-primary transition-all duration-150 scale-95 origin-left"
                : "flex items-center gap-4 px-4 py-3 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest transition-all group"
            }
          >
            <MaterialSymbol
              icon={item.icon}
              className={
                item.active
                  ? ""
                  : "group-hover:text-primary transition-colors"
              }
            />

            <span className="text-sm font-medium tracking-wide">
              {item.label}
            </span>
          </a>
        ))}
      </nav>

      {/* CTA */}
      <div className="px-6 mt-auto pt-6">
        <button className="w-full py-3 px-4 bg-primary text-on-primary text-sm font-semibold rounded-lg hover:bg-primary-fixed transition-colors flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(192,193,255,0.2)]">
          <MaterialSymbol icon="add" className="text-[20px]" />
          New Project
        </button>
      </div>
    </aside>
  );
}