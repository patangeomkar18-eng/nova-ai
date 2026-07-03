export default function Loader({
  size = "md",
  className = "",
}) {
  const sizes = {
    sm: "h-8 w-8 border-[3px]",
    md: "h-12 w-12 border-4",
    lg: "h-16 w-16 border-[5px]",
  };

  return (
    <div
      className={`
        flex
        items-center
        justify-center
        ${className}
      `}
    >
      <div className="relative">
        {/* Glow */}
        <div
          className={`
            absolute
            inset-0
            rounded-full
            bg-violet-500/20
            blur-xl
            scale-150
          `}
        />

        {/* Spinner */}
        <div
          className={`
            relative
            ${sizes[size]}

            rounded-full
            border-white/10
            border-t-violet-500
            border-r-purple-500
            border-b-fuchsia-500
            border-l-transparent

            animate-spin

            shadow-lg
            shadow-violet-500/30

            backdrop-blur-xl
          `}
        />
      </div>
    </div>
  );
}