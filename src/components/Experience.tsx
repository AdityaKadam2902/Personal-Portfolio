export default function Experience() {
  return (
    <section id="experience" className="py-[120px] border-b border-[var(--border-soft)]">
      <div className="max-w-[1120px] mx-auto px-7">
        <div className="eyebrow">EXPERIENCE</div>
        <h2 className="section-title">Where I&apos;ve built this.</h2>

        <div className="mt-10 relative pl-[26px]">
          <div className="absolute left-1 top-1.5 bottom-1.5 w-px bg-[var(--border)]" />

          <div className="relative pb-10">
            <div className="absolute -left-[26px] top-1 w-2.5 h-2.5 rounded-full bg-[var(--bg)] border-2 border-[var(--accent)]" />
            <div className="font-mono text-[11.5px] text-[var(--text-dim)] mb-1.5">CURRENT</div>
            <div className="font-display text-[17px] font-semibold mb-1.5">
              AI Engineer Intern — VSky Solutions
            </div>
            <div className="text-[var(--text-muted)] text-[14px] max-w-[560px]">
              Working across generative AI, RAG, agentic AI, and full-stack backend architecture —
              shipping systems that are adopted into internal products, not just prototyped.
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-[26px] top-1 w-2.5 h-2.5 rounded-full bg-[var(--bg)] border-2 border-[var(--accent)]" />
            <div className="font-mono text-[11.5px] text-[var(--text-dim)] mb-1.5">GRADUATING 2026</div>
            <div className="font-display text-[17px] font-semibold mb-1.5">
              B.Tech, Computer Science — D.Y. Patil Agriculture &amp; Technical University, Talsande
            </div>
            <div className="text-[var(--text-muted)] text-[14px] max-w-[560px]">
              Coursework and independent projects spanning full-stack development, applied machine
              learning, and system design.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
