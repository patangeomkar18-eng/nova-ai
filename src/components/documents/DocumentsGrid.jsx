import DocumentCard from "./DocumentCard";

const documents = [
  { name: "Marketing Plan", updated: "2 hours ago", color: "amber" },
  { name: "Product Roadmap", updated: "5 hours ago", color: "blue" },
  { name: "Blog: AI Trends 2024", updated: "yesterday", color: "teal" },
  { name: "Project Proposal", updated: "2 days ago", color: "violet" },
  { name: "Meeting Notes", updated: "3 days ago", color: "blue" },
  { name: "Social Media Ideas", updated: "4 days ago", color: "rose" },
];

export default function DocumentsGrid({ query }) {
  const filtered = documents.filter((d) =>
    d.name.toLowerCase().includes(query.toLowerCase())
  );

  if (filtered.length === 0) {
    return <p className="text-text-muted text-sm mt-10 text-center">No documents match your search.</p>;
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
      {filtered.map((doc) => (
        <DocumentCard key={doc.name} {...doc} />
      ))}
    </div>
  );
}