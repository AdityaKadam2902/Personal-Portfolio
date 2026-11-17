const layers = [
  {
    index: "01",
    name: "Orchestration & Agents",
    items: ["LangGraph", "LangChain", "Agno", "Google ADK", "MCP", "A2A protocol", "Multi-agent design", "Tool/function calling"],
  },
  {
    index: "02",
    name: "Retrieval & RAG",
    items: ["pgvector", "ChromaDB", "Qdrant", "Pinecone", "Hybrid search (BM25 + dense)", "Reciprocal Rank Fusion", "Cross-encoder reranking", "Grounded generation & citations"],
  },
  {
    index: "03",
    name: "LLMs & Fine-Tuning",
    items: ["Gemini API", "Groq", "LiteLLM", "Ollama", "Hugging Face", "Qwen2.5-3B (LoRA)", "DSPy", "Prompt engineering"],
  },
  {
    index: "04",
    name: "Evaluation, Safety & Observability",
    items: ["RAGAS", "LangSmith", "Hallucination detection", "Guardrails", "Deterministic validation", "Retrieval-audit logging", "Token-usage tracking", "Prometheus metrics"],
  },
  {
    index: "05",
    name: "Backend & Data",
    items: ["FastAPI", "Flask", "PostgreSQL", "SQLAlchemy", "Alembic", "Pydantic v2", "Redis", "SSE streaming", "JWT"],
  },
  {
    index: "06",
    name: "Cloud & DevOps",
    items: ["AWS (S3 · EC2 · Lambda · IAM · CloudWatch)", "Docker", "Docker Compose", "Kubernetes", "GitHub Actions CI/CD"],
  },
  {
    index: "07",
    name: "Frontend",
    items: ["Vue 3", "Quasar", "React", "TypeScript", "Vite", "esbuild"],
  },
  {
    index: "08",
    name: "ML & Computer Vision",
    items: ["TensorFlow", "Keras", "CNNs (VGG-16)", "YOLO", "OpenCV", "Scikit-learn"],
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