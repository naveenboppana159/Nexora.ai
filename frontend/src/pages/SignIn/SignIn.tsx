"use client"
import { useState } from "react";
import {
  ArrowRight,
  Bot,
  Eye,
  EyeOff,
  Lock,
  Mail,
} from "lucide-react";

interface SignInProps {
  onNavigateToSignUp: () => void;
}

const SignIn = ({ onNavigateToSignUp }: SignInProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Sign in submitted");
  };

  return (
    <main className="auth-page">
      <div className="auth-glow auth-glow-left" />
      <div className="auth-glow auth-glow-right" />

      <section className="auth-card">
        <div className="auth-header">
          <div className="auth-logo">
            <Bot size={26} />
          </div>

          <h1>Welcome back</h1>

          <p>Sign in to your intelligent workspace.</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="input-group">
            <label htmlFor="email">Email address</label>

            <div className="input-wrapper">
              <Mail size={18} />
              <input
                id="email"
                type="email"
                placeholder="name@company.com"
                required
              />
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>

            <div className="input-wrapper">
              <Lock size={18} />

              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                required
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={
                  showPassword ? "Hide password" : "Show password"
                }
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div className="form-options">
            <label className="remember-me">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>

            <button type="button" className="text-button">
              Forgot password?
            </button>
          </div>

          <button type="submit" className="primary-button">
            Sign In
            <ArrowRight size={18} />
          </button>
        </form>

        <p className="auth-switch">
          Don't have an account?{" "}
          <button type="button" onClick={onNavigateToSignUp}>
            Sign up
          </button>
        </p>
      </section>
    </main>
  );
};

export default SignIn;