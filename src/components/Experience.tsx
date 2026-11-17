export default function Experience() {
  return (
    <section id="experience" className="py-[120px] border-b border-[var(--border-soft)]">
      <div className="max-w-[1120px] mx-auto px-7">
        <div className="eyebrow">EXPERIENCE</div>
        <h2 className="section-title">Where I&apos;ve built this.</h2>

        <div className="mt-10 relative pl-[26px]">
          <div className="absolute left-1 top-1.5 bottom-1.5 w-px bg-[var(--border)]" />

          <div className="relative pb-12">
            <div className="absolute -left-[26px] top-1 w-2.5 h-2.5 rounded-full bg-[var(--bg)] border-2 border-[var(--accent)]" />
            <div className="font-mono text-[11.5px] text-[var(--text-dim)] mb-1.5">
              AUG 2025 — AUG 2026 · COMPLETED
            </div>
            <div className="font-display text-[17px] font-semibold mb-1.5">
              AI Engineer — VSky Solutions
            </div>
            <div className="text-[var(--text-muted)] text-[14px] max-w-[560px] mb-4">
              A year shipping production Generative AI systems end to end — RAG,
              multi-agent orchestration, and the FastAPI, PostgreSQL, and frontend
              layers around them.
            </div>
            <ul className="space-y-2.5 max-w-[600px]">
              {[
                "Independently designed and shipped a production SOP RAG assistant (FastAPI, Gemini, PostgreSQL/pgvector): multi-outcome intent routing, metadata-based document selection, vector retrieval with LLM reranking, grounded generation, retrieval-audit logging, and per-call token tracking — adopted into VSky's product line.",
                "Architected the multi-agent backend for HR Lens (resume-checker, email-classifier, autofill agents); replaced an inconsistent LLM-based candidate scorer with a deterministic, JSON-configured engine across ~14 role profiles — cutting recruiter screening from ~20 minutes to under 45 seconds per candidate.",
                "Architected an Outlook-to-ERP transaction-automation pipeline on a multi-agent backend (LangChain, LangGraph, Agno), with custom PDF/email document extraction and FastAPI/PostgreSQL services for agent memory and state.",
                "Built the assistant's embeddable JavaScript widget (Shadow-DOM isolation; works in React, Vue, or vanilla JS) mountable with one script tag, with a CI-ready esbuild bundling pipeline.",
                "Led the full-stack re-architecture of FalconBOExplorer, an enterprise SAP BusinessObjects metadata explorer: a layered FastAPI service and a 33-file modular Vue frontend, migrating a JSON-file prototype to a PostgreSQL-backed lazy-loading tool.",
              ].map((item, i) => (
                <li
                  key={i}
                  className="relative pl-5 text-[var(--text-muted)] text-[13.5px] leading-relaxed"
                >
                  <span className="absolute left-0 top-[9px] w-1.5 h-1.5 rounded-sm bg-[var(--accent)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -left-[26px] top-1 w-2.5 h-2.5 rounded-full bg-[var(--bg)] border-2 border-[var(--accent)]" />
            <div className="font-mono text-[11.5px] text-[var(--text-dim)] mb-1.5">
              2022 — 2026 · GRADUATED
            </div>
            <div className="font-display text-[17px] font-semibold mb-1.5">
              B.Tech, Computer Science &amp; Engineering — D.Y. Patil Agriculture &amp;
              Technical University, Talsande
            </div>
            <div className="text-[var(--text-muted)] text-[14px] max-w-[560px]">
              Graduated with a <strong className="text-[var(--text)] font-medium">CGPA of 9.5/10.0</strong>.
              Coursework and independent projects spanning full-stack development, applied
              machine learning, agentic AI, and system design.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
