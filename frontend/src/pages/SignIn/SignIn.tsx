"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  Bot,
  Eye,
  EyeOff,
  Lock,
  Mail,
} from "lucide-react";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Sign in submitted");
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0b1326] px-4 py-8 text-[#dae2fd]">
      <div className="absolute left-[-300px] top-[20%] h-[700px] w-[700px] rounded-full bg-[#8083ff]/10 blur-[120px]" />

      <div className="absolute bottom-[10%] right-[-250px] h-[600px] w-[600px] rounded-full bg-[#4edea3]/10 blur-[120px]" />

      <section className="relative z-10 w-full max-w-md rounded-2xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl backdrop-blur-xl sm:p-8">
        <div className="flex flex-col items-center text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#c0c1ff] to-[#4edea3] text-[#0b1326]">
            <Bot size={28} />
          </div>

          <h1 className="mt-5 text-3xl font-bold text-white">
            Welcome back
          </h1>

          <p className="mt-2 text-sm text-slate-400">
            Sign in to your intelligent workspace.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col gap-5"
        >
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-slate-300"
            >
              Email address
            </label>

            <div className="relative">
              <Mail
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
              />

              <input
                id="email"
                type="email"
                placeholder="name@company.com"
                required
                className="w-full rounded-xl border border-white/10 bg-[#0b1326]/80 py-3 pl-11 pr-4 text-white outline-none transition placeholder:text-slate-600 focus:border-[#c0c1ff] focus:ring-2 focus:ring-[#c0c1ff]/20"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-slate-300"
            >
              Password
            </label>

            <div className="relative">
              <Lock
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
              />

              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                required
                className="w-full rounded-xl border border-white/10 bg-[#0b1326]/80 py-3 pl-11 pr-12 text-white outline-none transition placeholder:text-slate-600 focus:border-[#c0c1ff] focus:ring-2 focus:ring-[#c0c1ff]/20"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={
                  showPassword ? "Hide password" : "Show password"
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 transition hover:text-white"
              >
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between gap-4">
            <label className="flex items-center gap-2 text-sm text-slate-400">
              <input
                type="checkbox"
                className="h-4 w-4 accent-[#c0c1ff]"
              />
              Remember me
            </label>

            <button
              type="button"
              className="text-sm text-[#c0c1ff] hover:text-white"
            >
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#c0c1ff] px-4 py-3 font-semibold text-[#0b1326] transition hover:-translate-y-0.5 hover:bg-[#e1e0ff]"
          >
            Sign In
            <ArrowRight size={18} />
          </button>
        </form>

        <p className="mt-7 text-center text-sm text-slate-400">
          Don't have an account?{" "}
          <Link
            href="/signup"
            className="font-medium text-[#c0c1ff] hover:text-white"
          >
            Sign up
          </Link>
        </p>
      </section>
    </main>
  );
};

export default SignIn;