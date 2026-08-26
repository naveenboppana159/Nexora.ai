"use client"
import { useState } from "react";
import {
  ArrowRight,
  Bot,
  Eye,
  EyeOff,
  Lock,
  Mail,
  User,
} from "lucide-react";

interface SignUpProps {
  onNavigateToSignIn: () => void;
}

const SignUp = ({ onNavigateToSignIn }: SignUpProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Sign up submitted");
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

          <h1>Create your account</h1>

          <p>Start building smarter workflows with Nexora AI.</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="input-group">
            <label htmlFor="name">Full name</label>

            <div className="input-wrapper">
              <User size={18} />

              <input
                id="name"
                type="text"
                placeholder="Naveen Kumar"
                required
              />
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="signup-email">Email address</label>

            <div className="input-wrapper">
              <Mail size={18} />

              <input
                id="signup-email"
                type="email"
                placeholder="name@company.com"
                required
              />
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="signup-password">Password</label>

            <div className="input-wrapper">
              <Lock size={18} />

              <input
                id="signup-password"
                type={showPassword ? "text" : "password"}
                placeholder="Create a strong password"
                required
                minLength={6}
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

          <label className="remember-me terms">
            <input type="checkbox" required />
            <span>
              I agree to the Terms of Service and Privacy Policy
            </span>
          </label>

          <button type="submit" className="primary-button">
            Create Account
            <ArrowRight size={18} />
          </button>
        </form>

        <p className="auth-switch">
          Already have an account?{" "}
          <button type="button" onClick={onNavigateToSignIn}>
            Sign in
          </button>
        </p>
      </section>
    </main>
  );
};

export default SignUp;