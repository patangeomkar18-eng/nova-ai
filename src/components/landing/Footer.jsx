import Logo from "../ui/Logo";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col sm:flex-row
        items-center justify-between gap-4">
        <Logo />
        <p className="text-sm text-text-muted">
          © {new Date().getFullYear()} Nova AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}