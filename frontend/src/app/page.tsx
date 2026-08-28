"use client";

import { useRouter } from "next/navigation";

import {
  Bell,
  Sparkles,
  ArrowRight,
  Play,
  Check,
  TrendingUp,
  Bot,
  Users,
  BarChart3,
} from "lucide-react";

const features = [
  {
    title: "Smart Automation",
    description:
      "Eliminate repetitive tasks using context-aware AI agents that understand your workflows.",
    icon: Bot,
    color: "#c0c1ff",
  },
  {
    title: "Team Collaboration",
    description:
      "Bring teams together with shared workspaces and real-time collaboration.",
    icon: Users,
    color: "#4edea3",
  },
  {
    title: "AI Insights",
    description:
      "Transform your data into powerful insights with predictive AI analytics.",
    icon: BarChart3,
    color: "#ffb2b7",
  },
];

export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-[#0b1326] text-white">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b1326]/80 backdrop-blur-xl">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#c0c1ff]">
              <Sparkles className="h-5 w-5 text-[#0b1326]" />
            </div>

            <h2 className="text-xl font-bold">
              Nexora <span className="text-[#c0c1ff]">AI</span>
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <button
              aria-label="Notifications"
              className="rounded-full border border-white/10 p-3 hover:bg-white/10"
            >
              <Bell className="h-5 w-5" />
            </button>

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#c0c1ff] to-[#4edea3] font-bold text-[#0b1326]">
              N
            </div>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-20">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#c0c1ff]/10 blur-[130px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#c0c1ff]/20 bg-[#c0c1ff]/10 px-4 py-2 text-sm text-[#c0c1ff]">
              <Sparkles className="h-4 w-4" />
              Next-Gen Enterprise OS
            </div>

            <h1 className="mt-8 text-5xl font-bold leading-tight md:text-6xl">
              Unlock the Future of{" "}
              <span className="bg-gradient-to-r from-[#c0c1ff] to-[#4edea3] bg-clip-text text-transparent">
                Productivity
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
              Nexora AI brings intelligent workflows, powerful automation,
              and predictive insights into one unified workspace.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button
                onClick={() => router.push("/signin")}
                className="flex items-center justify-center gap-2 rounded-xl bg-[#c0c1ff] px-6 py-4 font-semibold text-[#0b1326] transition hover:scale-105"
              >
                Get Started
                <ArrowRight className="h-5 w-5" />
              </button>

              <button className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-4 transition hover:bg-white/10">
                <Play className="h-4 w-4" />
                Learn More
              </button>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-[#4edea3]" />
                AI-powered workflows
              </div>

              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-[#4edea3]" />
                Built for modern teams
              </div>
            </div>
          </div>

          {/* Right Dashboard */}
          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-4 shadow-2xl backdrop-blur-xl transition duration-500 lg:rotate-2 hover:rotate-0">
              <div className="overflow-hidden rounded-2xl bg-[#111b33]">
                <div className="flex items-center justify-between border-b border-white/10 p-5">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-[#c0c1ff]/10 p-3">
                      <Bot className="h-5 w-5 text-[#c0c1ff]" />
                    </div>

                    <div>
                      <p className="font-semibold">Nexora Workspace</p>
                      <p className="text-xs text-slate-400">
                        AI-powered command center
                      </p>
                    </div>
                  </div>

                  <Sparkles className="text-[#c0c1ff]" />
                </div>

                <div className="grid gap-4 p-5 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm text-slate-400">
                      Active Workflows
                    </p>

                    <h3 className="mt-3 text-4xl font-bold">24</h3>

                    <div className="mt-6 flex h-20 items-end gap-2">
                      {[40, 70, 50, 90, 65, 100, 80].map(
                        (height, index) => (
                          <div
                            key={index}
                            className="flex-1 rounded-t bg-[#c0c1ff]"
                            style={{ height: `${height}%` }}
                          />
                        )
                      )}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm text-slate-400">AI Insights</p>

                    <div className="mt-6">
                      <div className="flex justify-between text-sm">
                        <span>Automation</span>
                        <span>92%</span>
                      </div>

                      <div className="mt-2 h-2 rounded-full bg-white/10">
                        <div className="h-full w-[92%] rounded-full bg-[#4edea3]" />
                      </div>
                    </div>

                    <div className="mt-5">
                      <div className="flex justify-between text-sm">
                        <span>Team Velocity</span>
                        <span>78%</span>
                      </div>

                      <div className="mt-2 h-2 rounded-full bg-white/10">
                        <div className="h-full w-[78%] rounded-full bg-[#c0c1ff]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-8 -left-4 flex items-center gap-4 rounded-2xl border border-[#4edea3]/20 bg-[#111b33]/90 px-5 py-4 shadow-xl backdrop-blur-xl">
              <div className="rounded-xl bg-[#4edea3]/10 p-3">
                <TrendingUp className="text-[#4edea3]" />
              </div>

              <div>
                <p className="text-sm text-slate-400">Efficiency</p>
                <h3 className="text-2xl font-bold">+340%</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold">
              Intelligent by Design
            </h2>

            <p className="mt-5 text-lg text-slate-400">
              Discover the core pillars that make Nexora AI the ultimate tool
              for high-performing teams.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 transition duration-300 hover:-translate-y-2 hover:bg-white/[0.07]"
                >
                  <div
                    className="mb-6 inline-flex rounded-2xl p-4"
                    style={{ backgroundColor: `${feature.color}20` }}
                  >
                    <Icon
                      className="h-7 w-7"
                      style={{ color: feature.color }}
                    />
                  </div>

                  <h3 className="text-xl font-semibold">
                    {feature.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-400">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <h3 className="text-lg font-bold">
            Nexora <span className="text-[#c0c1ff]">AI</span>
          </h3>

          <p className="text-sm text-slate-500">
            © 2024 Nexora AI Inc. All rights reserved. Designed for the Future.
          </p>
        </div>
      </footer>
    </main>
  );
}