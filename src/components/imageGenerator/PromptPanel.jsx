import StylePicker from "./StylePicker";
import AspectRatioPicker from "./AspectRatioPicker";
import Button from "../ui/Button";

export default function PromptPanel({
  prompt, setPrompt, style, setStyle, ratio, setRatio, onGenerate, loading,
}) {
  return (
    <div className="w-80 shrink-0 space-y-6">
      <div>
        <p className="text-sm text-text-secondary mb-2">Describe your image</p>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          rows={5}
          placeholder="Cyberpunk city at night with neon lights and flying cars"
          className="w-full bg-raised border border-border rounded-xl p-3 text-sm resize-none
            placeholder:text-text-muted focus:border-primary/50 focus:outline-none"
        />
      </div>

      <StylePicker selected={style} onSelect={setStyle} />
      <AspectRatioPicker selected={ratio} onSelect={setRatio} />

      <Button className="w-full" onClick={onGenerate} disabled={loading}>
        {loading ? "Generating..." : "Generate Image"}
      </Button>
    </div>
  );
}