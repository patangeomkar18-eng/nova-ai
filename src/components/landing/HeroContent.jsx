import { Link } from "react-router-dom";
import Button from "../ui/Button";

export default function HeroContent() {
  return (
    <div className="max-w-xl">
      <h1 className="text-5xl font-bold leading-tight tracking-tight">
        The Future of<br />
        <span className="text-gradient">Productivity is AI</span>
      </h1>
      <p className="mt-5 text-text-secondary text-lg leading-relaxed">
        Nova AI is your all-in-one workspace to write, code, design, and
        automate anything faster than ever before.
      </p>
      <div className="mt-8 flex items-center gap-3">
        <Link to="/login"><Button size="lg">Get Started Free</Button></Link>
        <Button variant="secondary" size="lg">Watch Demo</Button>
      </div>
      <p className="mt-10 text-xs uppercase tracking-wide text-text-muted">
        Trusted by 10,000+ teams worldwide
      </p>
    </div>
  );
}