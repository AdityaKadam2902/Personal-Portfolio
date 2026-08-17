import Schematic from "./Schematic";

export default function Hero() {
  return (
    <section className="pt-[168px] pb-[100px] border-b border-[var(--border-soft)]">
      <div className="max-w-[1120px] mx-auto px-7 grid grid-cols-1 lg:grid-cols-2 gap-14">
        <div>
          <div className="eyebrow">AI ENGINEER · KOLHAPUR, INDIA</div>
          <h1 className="font-display font-semibold text-[34px] sm:text-[44px] lg:text-[52px] leading-[1.08] tracking-tight max-w-[780px]">
            I build AI systems that reason, retrieve, and{" "}
            <span className="text-[var(--accent)]">hold up in production.</span>
          </h1>
          <p className="mt-5 text-[var(--text-muted)] text-[16.5px] max-w-[540px]">
            AI Engineer at VSky Solutions, working across agentic AI, retrieval-augmented
            generation, and full-stack backend architecture. I ship systems that route, verify,
            and recover — not demos that fall over outside a notebook.
          </p>
          <div className="mt-8 flex gap-3.5 flex-wrap">
            <a className="btn btn-primary" href="#systems">
              View systems built →
            </a>
            <a className="btn btn-ghost" href="#contact">
              Get in touch
            </a>
          </div>
          <div className="mt-11 flex gap-2.5 flex-wrap">
            <span className="tag text-[var(--text-muted)]">Adopted company-wide</span>
            <span className="tag text-[var(--text-muted)]">Live client deployments</span>
            <span className="tag text-[var(--text-muted)]">Production RAG &amp; multi-agent systems</span>
          </div>
        </div>

        <Schematic />
      </div>
    </section>
  );
}
