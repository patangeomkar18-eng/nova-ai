import { useState } from "react";
import PageBackground from "../layouts/PageBackground";

import DocumentsHeader from "../components/documents/DocumentsHeader";
import DocumentTabs from "../components/documents/DocumentTabs";
import DocumentsGrid from "../components/documents/DocumentsGrid";

export default function Documents() {
  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState("All");

  return (
    <PageBackground>
      <div className="max-w-7xl mx-auto px-6 py-8">
        <h1 className="text-2xl font-semibold mb-6">
          Documents
        </h1>

        <DocumentsHeader
          query={query}
          setQuery={setQuery}
        />

        <div className="mt-6">
          <DocumentTabs
            active={activeTab}
            onChange={setActiveTab}
          />
        </div>

        <DocumentsGrid query={query} />
      </div>
    </PageBackground>
  );
}