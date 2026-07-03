export default function SocialButton({ icon, label }) {
  return (
    <button className="w-full flex items-center justify-center gap-2 border border-border
      rounded-lg py-2.5 text-sm font-medium hover:bg-raised transition-colors">
      {icon}
      {label}
    </button>
  );
}