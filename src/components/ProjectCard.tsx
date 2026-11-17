import Link from "next/link";
import type { ProjectListItem } from "@/lib/projects";

const statusClass: Record<string, string> = {
  adopted: "status-adopted",
  shipped: "status-shipped",
  research: "status-research",
};

export default function ProjectCard({ project }: { project: ProjectListItem }) {
  return (
    <div className="card group relative">
      <Link
        href={`/projects/${project.slug}`}
        className="absolute inset-0 z-0 rounded-[10px]"
        aria-label={`Read case study: ${project.title}`}
      />
      <div className="flex items-center justify-between mb-3.5">
        <span className={`status-pill ${statusClass[project.status]}`}>
          {project.statusLabel.toUpperCase()}
        </span>
        <span className="flex items-center gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 font-mono text-[10.5px] text-[var(--text-dim)] hover:text-[var(--signal)] transition-colors"
              aria-label={`View source on GitHub: ${project.title}`}
            >
              SOURCE ↗
            </a>
          )}
          <span className="font-mono text-[10.5px] text-[var(--text-dim)]">{project.employer}</span>
        </span>
      </div>
      <div className="font-display text-[19px] font-semibold mb-2 group-hover:text-[var(--accent)] transition-colors">
        {project.title}
      </div>
      <p className="text-[var(--text-muted)] text-[14px] mb-4 flex-grow">{project.summary}</p>
      <div className="flex flex-wrap gap-1.5 mb-1">
        {project.stack.slice(0, 4).map((s) => (
          <span key={s} className="tag">{s}</span>
        ))}
      </div>
      <div className="mt-4 font-mono text-[12px] text-[var(--signal)]">Read case study →</div>
    </div>
  );
}
