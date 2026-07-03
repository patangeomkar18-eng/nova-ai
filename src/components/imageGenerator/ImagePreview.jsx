import { ImageIcon } from "lucide-react";

export default function ImagePreview({ image, loading, ratio }) {
  const ratioClass = { "1:1": "aspect-square", "16:9": "aspect-video", "9:16": "aspect-[9/16]", "4:3": "aspect-[4/3]" }[ratio] || "aspect-square";

  return (
    <div className={`flex-1 rounded-2xl border border-border bg-surface overflow-hidden flex items-center justify-center ${ratioClass} max-h-[520px]`}>
      {loading ? (
        <div className="w-8 h-8 border-2 border-border border-t-primary rounded-full animate-spin" />
      ) : image ? (
        <img src={image} alt="Generated" className="w-full h-full object-cover" />
      ) : (
        <div className="text-text-muted flex flex-col items-center gap-2">
          <ImageIcon size={28} />
          <p className="text-sm">Your generated image will appear here</p>
        </div>
      )}
    </div>
  );
}