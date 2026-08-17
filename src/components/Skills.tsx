const layers = [
  {
    index: "01",
    name: "Orchestration",
    items: ["LangGraph", "LangChain", "Agno", "Google ADK", "Multi-agent design"],
  },
  {
    index: "02",
    name: "Retrieval & Grounding",
    items: ["RAG", "pgvector", "Embeddings", "Gemini", "Source grounding"],
  },
  {
    index: "03",
    name: "Backend & APIs",
    items: ["FastAPI", "PostgreSQL", "REST APIs", "Flask"],
  },
  {
    index: "04",
    name: "Frontend",
    items: ["Vue 3", "Quasar", "React"],
  },
  {
    index: "05",
    name: "Tooling & Ops",
    items: ["n8n", "LangSmith", "Docker", "Pytest"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-[120px] border-b border-[var(--border-soft)]">
      <div className="max-w-[1120px] mx-auto px-7">
        <div className="eyebrow">SKILLS</div>
        <h2 className="section-title">Organized the way I actually build.</h2>
        <p className="section-lead">
          Not a tag cloud — the layers a request actually passes through, top to bottom.
        </p>

        <div className="mt-10 flex flex-col">
          {layers.map((layer, i) => (
            <div
              key={layer.index}
              className={`grid grid-cols-1 sm:grid-cols-[64px_200px_1fr] gap-2.5 sm:gap-5 items-baseline py-5 ${
                i !== 0 ? "border-t border-[var(--border-soft)]" : ""
              }`}
            >
              <div className="font-mono text-[12px] text-[var(--text-dim)] hidden sm:block">{layer.index}</div>
              <div className="font-display text-[16px] font-semibold">{layer.name}</div>
              <div className="flex flex-wrap gap-2">
                {layer.items.map((item) => (
                  <span key={item} className="tag text-[var(--text-muted)]">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
