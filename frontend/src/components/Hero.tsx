import {
  ArrowRight,
  BarChart3,
  Bot,
  Check,
  Play,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#c0c1ff]/10 blur-[130px]" />
      <div className="pointer-events-none absolute -right-20 top-60 h-72 w-72 rounded-full bg-[#4edea3]/10 blur-[120px]" />

      <div className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#c0c1ff]/20 bg-[#c0c1ff]/10 px-4 py-2 text-sm font-medium text-[#d5d5ff]">
            <Sparkles className="h-4 w-4" />
            <span>Next-Gen Enterprise OS</span>
          </div>

          <h1 className="mt-8 font-geist text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Unlock the Future of{" "}
            <span className="bg-gradient-to-r from-[#c0c1ff] via-[#e0b9ff] to-[#4edea3] bg-clip-text text-transparent">
              Productivity
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-400 sm:text-xl">
            Nexora AI brings intelligent workflows, powerful automation, and
            predictive insights into one unified workspace—so your team can
            focus on the work that actually moves the business forward.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#c0c1ff] px-6 py-3.5 font-semibold text-[#0b1326] transition hover:-translate-y-0.5 hover:bg-[#d2d3ff] hover:shadow-lg hover:shadow-[#c0c1ff]/20"
            >
              Get Started
              <ArrowRight className="h-5 w-5" />
            </a>

            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 font-semibold text-white backdrop-blur transition hover:border-white/20 hover:bg-white/10"
            >
              <Play className="h-4 w-4 fill-current" />
              Learn More
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400">
            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-[#4edea3]" />
              AI-powered workflows
            </span>

            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-[#4edea3]" />
              Built for modern teams
            </span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div className="relative transition duration-500 lg:rotate-2 lg:hover:rotate-0">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-r from-[#c0c1ff]/20 via-transparent to-[#4edea3]/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-[#111b33]/80 p-3 shadow-2xl shadow-black/30 backdrop-blur-xl">
              <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0d162b]">
                <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#c0c1ff]/15">
                      <Bot className="h-5 w-5 text-[#c0c1ff]" />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-white">
                        Nexora Workspace
                      </p>
                      <p className="text-xs text-slate-500">
                        AI-powered command center
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ffb2b7]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ffcf85]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#4edea3]" />
                  </div>
                </div>

                <div className="grid gap-3 p-5 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-400">
                        Active Workflows
                      </span>
                      <Sparkles className="h-4 w-4 text-[#c0c1ff]" />
                    </div>

                    <p className="mt-4 text-3xl font-semibold text-white">
                      24
                    </p>

                    <div className="mt-5 flex gap-1">
                      {[40, 70, 55, 85, 65, 95, 75].map((height, index) => (
                        <div
                          key={`${height}-${index}`}
                          className="flex-1 rounded-full bg-[#c0c1ff]/20"
                        >
                          <div
                            className="w-full rounded-full bg-gradient-to-t from-[#8f90df] to-[#c0c1ff]"
                            style={{ height: `${height}%` }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-400">
                        AI Insights
                      </span>
                      <BarChart3 className="h-4 w-4 text-[#4edea3]" />
                    </div>

                    <div className="mt-6 space-y-4">
                      <div>
                        <div className="mb-2 flex justify-between text-xs text-slate-400">
                          <span>Automation</span>
                          <span>92%</span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-white/5">
                          <div className="h-full w-[92%] rounded-full bg-[#4edea3]" />
                        </div>
                      </div>

                      <div>
                        <div className="mb-2 flex justify-between text-xs text-slate-400">
                          <span>Team velocity</span>
                          <span>78%</span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-white/5">
                          <div className="h-full w-[78%] rounded-full bg-[#c0c1ff]" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 sm:col-span-2">
                    <div className="mb-5 flex items-center justify-between">
                      <div>
                        <p className="font-medium text-white">
                          AI Workflow Assistant
                        </p>
                        <p className="mt-1 text-xs text-slate-500">
                          Processing your team's priorities
                        </p>
                      </div>

                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#4edea3]/10">
                        <Bot className="h-5 w-5 text-[#4edea3]" />
                      </span>
                    </div>

                    <div className="flex items-center gap-3 rounded-xl border border-white/5 bg-black/10 px-4 py-3">
                      <div className="h-2 w-2 rounded-full bg-[#4edea3]" />
                      <span className="text-sm text-slate-300">
                        Optimizing your next workflow...
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-2 flex items-center gap-4 rounded-2xl border border-[#4edea3]/20 bg-[#101a30]/90 px-5 py-4 shadow-xl shadow-black/30 backdrop-blur-xl sm:-left-8">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#4edea3]/15">
              <TrendingUp className="h-6 w-6 text-[#4edea3]" />
            </div>

            <div>
              <p className="text-xs text-slate-400">Efficiency</p>
              <p className="mt-1 text-xl font-semibold text-white">
                +340%
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;