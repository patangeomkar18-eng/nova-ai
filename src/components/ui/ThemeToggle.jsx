import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle({ className = "" }) {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      aria-label="Toggle Theme"
      className={`
        relative
        flex
        items-center
        justify-center

        h-11
        w-11

        rounded-full

        bg-white/5
        backdrop-blur-xl

        border
        border-white/10

        text-violet-300

        shadow-lg
        shadow-violet-500/10

        transition-all
        duration-300

        hover:scale-110
        hover:border-violet-500/30
        hover:shadow-[0_0_25px_rgba(139,92,246,0.35)]

        active:scale-95

        focus:outline-none
        focus:ring-2
        focus:ring-violet-500/40

        ${className}
      `}
    >
      <span
        className={`
          absolute
          transition-all
          duration-300

          ${
            dark
              ? "rotate-0 scale-100 opacity-100"
              : "-rotate-90 scale-0 opacity-0"
          }
        `}
      >
        <Moon size={20} strokeWidth={2.2} />
      </span>

      <span
        className={`
          absolute
          transition-all
          duration-300

          ${
            dark
              ? "rotate-90 scale-0 opacity-0"
              : "rotate-0 scale-100 opacity-100 text-yellow-400"
          }
        `}
      >
        <Sun size={20} strokeWidth={2.2} />
      </span>
    </button>
  );
}