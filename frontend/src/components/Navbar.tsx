import { Bell, Sparkles } from "lucide-react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b1326]/75 backdrop-blur-xl">
      <nav
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <a
          href="#home"
          className="flex items-center gap-3"
          aria-label="Nexora AI home"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#c0c1ff] to-[#8c8eff] shadow-lg shadow-[#c0c1ff]/20">
            <Sparkles className="h-5 w-5 text-[#0b1326]" />
          </div>

          <span className="font-geist text-lg font-semibold tracking-tight text-white">
            Nexora <span className="text-[#c0c1ff]">AI</span>
          </span>
        </a>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="View notifications"
            className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:border-[#c0c1ff]/40 hover:bg-white/10 hover:text-white"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[#4edea3] ring-2 ring-[#0b1326]" />
          </button>

          <button
            type="button"
            aria-label="Open user profile"
            className="h-10 w-10 overflow-hidden rounded-full border border-[#c0c1ff]/40 bg-gradient-to-br from-[#c0c1ff] via-[#8f90df] to-[#4edea3] p-[2px] transition hover:scale-105"
          >
            <span className="flex h-full w-full items-center justify-center rounded-full bg-[#18213a] text-sm font-semibold text-white">
              N
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;