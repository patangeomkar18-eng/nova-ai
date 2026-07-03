export default function Card({ children, className = "", hover = false, ...props }) {
  return (
    <div
      className={`bg-surface border border-border rounded-xl p-5
        ${hover ? "transition-colors hover:border-primary/40 cursor-pointer" : ""}
        ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}