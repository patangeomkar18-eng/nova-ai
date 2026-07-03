import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Input from "../ui/Input";
import Button from "../ui/Button";
import SocialButton from "./SocialButton";

function GoogleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 48 48">
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.9 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.1 8 3l6-6C34.1 5.1 29.3 3 24 3 12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21c0-1.2-.1-2.3-.4-3.5z"/>
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.6 15.9 18.9 13 24 13c3.1 0 5.8 1.1 8 3l6-6C34.1 5.1 29.3 3 24 3 16.3 3 9.6 7.3 6.3 14.7z"/>
      <path fill="#4CAF50" d="M24 45c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 36.6 26.7 37.5 24 37.5c-5.3 0-9.7-3.5-11.3-8.3l-6.5 5C9.5 40.6 16.2 45 24 45z"/>
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.3-4.1 5.6l6.2 5.2C40.9 36 44 30.6 44 24c0-1.2-.1-2.3-.4-3.5z"/>
    </svg>
  );
}
function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57
        0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695
        -.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99
        .105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225
        -.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3
        .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225
        0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3
        0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  );
}

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full max-w-sm">
      <h1 className="text-2xl font-semibold">Welcome Back 👋</h1>
      <p className="text-text-secondary text-sm mt-2">
        Login to continue to your Nova AI account.
      </p>

      <div className="mt-6 space-y-3">
        <SocialButton icon={<GoogleIcon />} label="Continue with Google" />
        <SocialButton icon={<GithubIcon />} label="Continue with GitHub" />
      </div>

      <div className="flex items-center gap-3 my-6">
        <div className="h-px bg-border flex-1" />
        <span className="text-xs text-text-muted">or</span>
        <div className="h-px bg-border flex-1" />
      </div>

      <form className="space-y-4">
        <Input label="Email address" type="email" placeholder="omkar@example.com" />

        <div>
          <label className="block text-sm text-text-secondary mb-1.5">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              className="w-full bg-raised border border-border rounded-lg py-2.5 px-3 pr-10 text-sm
                placeholder:text-text-muted focus:border-primary/50 focus:outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary"
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-text-secondary">
            <input type="checkbox" className="rounded border-border accent-primary" />
            Remember me
          </label>
          <a href="#" className="text-primary-light hover:underline">Forgot password?</a>
        </div>

        <Button className="w-full" type="submit">Login</Button>
      </form>

      <p className="text-sm text-text-secondary text-center mt-6">
        Don't have an account?{" "}
        <a href="#" className="text-primary-light hover:underline">Sign up</a>
      </p>
    </div>
  );
}