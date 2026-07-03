export default function Input({
  type = "text",
  placeholder = "",
  value,
  onChange,
  className = "",
  disabled = false,
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={`
        w-full
        px-4
        py-3
        rounded-xl

        bg-white/5
        backdrop-blur-xl

        border
        border-white/10

        text-white
        placeholder:text-gray-500

        shadow-lg
        shadow-black/20

        transition-all
        duration-300

        focus:outline-none
        focus:ring-2
        focus:ring-violet-500/60
        focus:border-violet-500/40
        focus:bg-white/[0.07]

        hover:border-white/20

        disabled:opacity-50
        disabled:cursor-not-allowed

        ${className}
      `}
    />
  );
}