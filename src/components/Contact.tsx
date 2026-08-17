export default function Contact() {
  return (
    <>
      <section id="contact" className="py-[120px]">
        <div className="max-w-[1120px] mx-auto px-7">
          <div className="eyebrow">CONTACT</div>
          <h2 className="section-title">Open to AI engineering roles.</h2>

          <div className="mt-10 border border-[var(--border)] rounded-xl bg-[var(--panel)] px-10 py-11 flex items-center justify-between gap-8 flex-wrap relative overflow-hidden">
            <span className="absolute top-4 left-5 font-mono text-[10.5px] text-[var(--text-dim)]">
              $ whoami
            </span>
            <div>
              <h3 className="font-display text-[24px] font-semibold mb-2">
                Let&apos;s build something that ships.
              </h3>
              <p className="text-[var(--text-muted)] text-[14.5px] max-w-[420px]">
                Looking for AI Engineer, Agentic AI Engineer, or Full-Stack AI roles where
                production reliability actually matters.
              </p>
            </div>
            <div className="flex gap-3 flex-wrap">
              <a className="btn btn-primary" href="mailto:adityakadam2902@gmail.com">
                Email me →
              </a>
              <a
                className="btn btn-ghost"
                href="https://github.com/AdityaKadam2902"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                className="btn btn-ghost"
                href="https://linkedin.com/in/aditya-kadam-268304252"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="pb-12">
        <div className="max-w-[1120px] mx-auto px-7 flex justify-between items-center flex-wrap gap-3">
          <span className="font-mono text-[11.5px] text-[var(--text-dim)]">© 2026 Aditya Kadam</span>
          <span className="font-mono text-[11.5px] text-[var(--text-dim)]">
            BUILT WITH INTENT, NOT A TEMPLATE
          </span>
        </div>
      </footer>
    </>
  );
}
