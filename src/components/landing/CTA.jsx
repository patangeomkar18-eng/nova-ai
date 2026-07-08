import { Link } from "react-router-dom";
import Button from "../ui/Button";

export default function CTA() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div
        className="
          relative
          overflow-hidden
          rounded-3xl

          border
          border-white/10

          bg-white/5
          backdrop-blur-xl

          p-12
          md:p-16

          text-center

          shadow-2xl
          shadow-violet-500/10
        "
      >
        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 via-purple-500/10 to-pink-500/10" />

        <div className="absolute -top-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-violet-600/20 blur-[120px]" />

        {/* Content */}
        <div className="relative z-10">

          <h2
            className="
              text-4xl
              md:text-5xl
              font-bold
              tracking-tight

              bg-gradient-to-r
              from-white
              via-violet-200
              to-fuchsia-300

              bg-clip-text
              text-transparent
            "
          >
            Ready to Build Smarter with AI?
          </h2>

          <p
            className="
              mt-5
              max-w-2xl
              mx-auto

              text-lg
              text-gray-400
              leading-8
            "
          >
            Join over{" "}
            <span className="font-semibold text-white">
              10,000+
            </span>{" "}
            creators, developers, and businesses using Nova AI to
            automate work, generate content, and boost productivity.
          </p>

          <Link
            to="/login"
            className="inline-block mt-10"
          >
            <Button className="px-8 py-3 text-lg">
              🚀 Get Started Free
            </Button>
          </Link>

        </div>
      </div>
    </section>
  );
}