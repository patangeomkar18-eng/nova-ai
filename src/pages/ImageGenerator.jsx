import { useState } from "react";
import PageBackground from "../layouts/PageBackground";

import PromptPanel from "../components/imageGenerator/PromptPanel";
import ImagePreview from "../components/imageGenerator/ImagePreview";
import GeneratedGrid from "../components/imageGenerator/GeneratedGrid";

export default function ImageGenerator() {
  const [prompt, setPrompt] = useState("");
  const [style, setStyle] = useState("cyberpunk");
  const [ratio, setRatio] = useState("9:16");
  const [loading, setLoading] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const [gallery, setGallery] = useState([
    "https://picsum.photos/seed/nova1/300/300",
    "https://picsum.photos/seed/nova2/300/300",
    "https://picsum.photos/seed/nova3/300/300",
    "https://picsum.photos/seed/nova4/300/300",
  ]);

  function handleGenerate() {
    setLoading(true);

    setTimeout(() => {
      const newImage = `https://picsum.photos/seed/${Date.now()}/500/500`;

      setCurrentImage(newImage);
      setGallery((prev) => [newImage, ...prev].slice(0, 8));

      setLoading(false);
    }, 1200);
  }

  return (
    <PageBackground>
      <div className="max-w-7xl mx-auto px-6 py-8">
        <h1 className="text-2xl font-semibold mb-6">
          AI Image Generator
        </h1>

        <div className="flex gap-6">
          <PromptPanel
            prompt={prompt}
            setPrompt={setPrompt}
            style={style}
            setStyle={setStyle}
            ratio={ratio}
            setRatio={setRatio}
            onGenerate={handleGenerate}
            loading={loading}
          />

          <ImagePreview
            image={currentImage}
            loading={loading}
            ratio={ratio}
          />
        </div>

        <GeneratedGrid images={gallery} />
      </div>
    </PageBackground>
  );
}