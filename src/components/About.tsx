export default function About() {
  return (
    <section id="about" className="py-[120px] border-b border-[var(--border-soft)]">
      <div className="max-w-[1120px] mx-auto px-7">
        <div className="eyebrow">ABOUT</div>
        <h2 className="section-title">Full-stack under the hood, agentic AI on top.</h2>
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-14 mt-9">
          <div className="space-y-4">
            <p className="text-[var(--text-muted)] text-[15.5px] max-w-[560px]">
              I&apos;m a computer science student (graduating 2026, D.Y. Patil Agriculture &amp;
              Technical University) working as an{" "}
              <strong className="text-[var(--text)] font-medium">AI Engineer Intern at VSky Solutions</strong>,
              where I design and ship production systems across generative AI, RAG, and agentic
              workflows.
            </p>
            <p className="text-[var(--text-muted)] text-[15.5px] max-w-[560px]">
              My work sits at the intersection of{" "}
              <strong className="text-[var(--text)] font-medium">backend architecture and LLM orchestration</strong>{" "}
              — building the routing logic, verification layers, and failure handling that
              separate a working prototype from a system people actually rely on. I&apos;ve had
              architecture proposals adopted into company products, restructured legacy tools
              into layered, maintainable codebases, and built a handful of personal systems that
              push further than the day job allows.
            </p>
            <p className="text-[var(--text-muted)] text-[15.5px] max-w-[560px]">
              Outside of assigned work, I build things that meet the same bar I hold enterprise
              tools to — multi-agent research systems, evaluation pipelines, and full applications
              from database to UI.
            </p>
          </div>
          <div className="border border-[var(--border)] rounded-[10px] bg-[var(--panel)] px-5 py-5">
            <div className="font-mono text-[11px] text-[var(--text-dim)] tracking-wide mb-3.5">CORE.STACK</div>
            {[
              ["Orchestration", "LangGraph · LangChain · Agno · ADK"],
              ["Backend", "FastAPI · PostgreSQL · pgvector"],
              ["Frontend", "Vue 3 · Quasar · React"],
              ["Automation", "n8n · LangSmith"],
              ["Based in", "Kolhapur, Maharashtra, IN"],
            ].map(([label, val], i) => (
              <div
                key={label}
                className={`flex justify-between py-2.5 text-[13.5px] ${i !== 0 ? "border-t border-[var(--border-soft)]" : ""}`}
              >
                <span className="text-[var(--text-muted)]">{label}</span>
                <span className="font-mono text-[12px] text-right">{val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
