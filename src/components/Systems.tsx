import ProjectCard from "./ProjectCard";
import { getAllProjects } from "@/lib/projects";
import { moreProjects } from "@/data/more-projects";

export default function Systems() {
  const projects = getAllProjects();

  return (
    <section id="systems" className="py-[120px] border-b border-[var(--border-soft)]">
      <div className="max-w-[1120px] mx-auto px-7">
        <div className="eyebrow">SYSTEMS BUILT</div>
        <h2 className="section-title">Selected work.</h2>
        <p className="section-lead">
          A mix of shipped company systems and independent projects — chosen for what they
          actually demonstrate, not for volume.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-11">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>

        <div className="mt-16">
          <div className="font-mono text-[11px] text-[var(--text-dim)] tracking-wide mb-5">
            MORE PROJECTS
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {moreProjects.map((p) => (
              <div
                key={p.title}
                className="border border-[var(--border-soft)] rounded-lg px-4 py-4 hover:border-[var(--border)] transition-colors"
              >
                <div className="font-display text-[14.5px] font-semibold mb-1.5">{p.title}</div>
                {p.status && (
                  <span className="status-pill status-shipped mb-2" style={{ fontSize: "9px" }}>
                    {p.status.toUpperCase()}
                  </span>
                )}
                <p className="text-[var(--text-muted)] text-[12.5px] mb-3 leading-relaxed mt-1.5">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {p.stack.slice(0, 3).map((s) => (
                    <span key={s} className="tag text-[9.5px]">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
