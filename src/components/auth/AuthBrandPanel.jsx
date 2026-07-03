import Logo from "../ui/Logo";

export default function AuthBrandPanel() {
  return (
    <div className="hidden lg:flex flex-1 relative bg-gradient-to-br from-primary via-primary-dark to-accent
      items-center justify-center overflow-hidden">
      <div className="absolute w-72 h-72 rounded-full bg-white/10 blur-3xl top-10 right-10" />
      <div className="absolute w-56 h-56 rounded-full bg-black/20 blur-2xl bottom-10 left-10" />

      <div className="relative text-center px-10">
        <div className="flex justify-center mb-4">
          <Logo className="[&>span]:text-white [&>span]:text-3xl" />
        </div>
        <p className="text-white/80 max-w-xs mx-auto">
          Your intelligent workspace for writing, coding, designing, and creating.
        </p>
      </div>
    </div>
  );
}