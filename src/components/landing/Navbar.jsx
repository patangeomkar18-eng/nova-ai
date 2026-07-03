import { Link, NavLink } from "react-router-dom";
import Logo from "../ui/Logo";
import Button from "../ui/Button";

const links = [
  { label: "Features", to: "/#features" },
  { label: "Solutions", to: "/#solutions" },
  { label: "Resources", to: "/#resources" },
  { label: "Pricing", to: "/pricing" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-base/70 border-b border-border">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/"><Logo /></Link>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <NavLink
              key={l.label}
              to={l.to}
              className="text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              {l.label}
            </NavLink>
          ))}
        </div>
        <Link to="/login">
          <Button size="sm">Get Started</Button>
        </Link>
      </nav>
    </header>
  );
}