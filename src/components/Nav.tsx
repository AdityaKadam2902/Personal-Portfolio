import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[var(--nav-bg)] border-b border-[var(--border-soft)]">
      <div className="max-w-[1120px] mx-auto px-7 py-4 flex items-center justify-between">
        <Link href="/" className="flex flex-col leading-tight">
          <span className="font-display font-semibold text-[17px]">Aditya Kadam</span>
          <span className="font-mono text-[10.5px] text-[var(--text-dim)] tracking-wider mt-0.5">
            AI ENGINEER — AGENTIC &amp; RAG SYSTEMS
          </span>
        </Link>
        <nav className="hidden md:flex gap-7 items-center">
          <Link href="/#about" className="text-[13.5px] text-[var(--text-muted)] hover:text-[var(--text)] transition-colors">About</Link>
          <Link href="/#systems" className="text-[13.5px] text-[var(--text-muted)] hover:text-[var(--text)] transition-colors">Systems</Link>
          <Link href="/#skills" className="text-[13.5px] text-[var(--text-muted)] hover:text-[var(--text)] transition-colors">Skills</Link>
          <Link href="/#experience" className="text-[13.5px] text-[var(--text-muted)] hover:text-[var(--text)] transition-colors">Experience</Link>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13.5px] text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
          >
            Resume
          </a>
          <Link href="/#contact" className="text-[13.5px] text-[var(--text-muted)] hover:text-[var(--text)] transition-colors">Contact</Link>
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a href="/#contact" className="btn btn-ghost font-mono text-[12.5px]">
            Get in touch →
          </a>
        </div>
      </div>
    </header>
  );
}
