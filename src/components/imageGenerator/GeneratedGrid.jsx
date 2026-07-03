export default function GeneratedGrid({ images }) {
  if (images.length === 0) return null;

  return (
    <div className="mt-6">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-medium">Generated Images</h3>
        <button className="text-xs text-primary-light hover:underline">View all</button>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {images.map((src, i) => (
          <div key={i} className="aspect-square rounded-lg overflow-hidden border border-border">
            <img src={src} alt={`Generated ${i}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}