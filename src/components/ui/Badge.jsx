export default function Badge({
  children,
  variant = "default",
  className = "",
}) {
  const variants = {
    default:
      "bg-white/5 text-gray-200 border-white/10 shadow-white/5",

    success:
      "bg-emerald-500/10 text-emerald-300 border-emerald-500/20 shadow-emerald-500/20",

    warning:
      "bg-amber-500/10 text-amber-300 border-amber-500/20 shadow-amber-500/20",

    danger:
      "bg-red-500/10 text-red-300 border-red-500/20 shadow-red-500/20",

    info:
      "bg-violet-500/10 text-violet-300 border-violet-500/20 shadow-violet-500/20",
  };

  return (
    <span
      className={`
        inline-flex
        items-center
        justify-center

        px-3
        py-1

        rounded-full

        text-xs
        font-medium
        tracking-wide

        backdrop-blur-xl

        border

        shadow-lg

        transition-all
        duration-300

        hover:scale-105
        hover:shadow-xl

        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}