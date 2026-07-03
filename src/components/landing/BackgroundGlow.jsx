export default function BackgroundGlow() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-glow-radial blur-3xl" />
      <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] rounded-full bg-glow-radial blur-3xl opacity-60" />
    </div>
  );
}