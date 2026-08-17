import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import Nav from "@/components/Nav";
import Contact from "@/components/Contact";
import { getProjectBySlug, getProjectSlugs } from "@/lib/projects";

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

const statusClass: Record<string, string> = {
  adopted: "status-adopted",
  shipped: "status-shipped",
  research: "status-research",
};

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const { frontmatter, content } = project;

  return (
    <>
      <Nav />
      <article className="pt-[160px] pb-[80px] max-w-[820px] mx-auto px-7">
        <Link href="/#systems" className="font-mono text-[12.5px] text-[var(--signal)]">
          ← Back to systems
        </Link>

        <div className="mt-7 flex items-center gap-3 flex-wrap">
          <span className={`status-pill ${statusClass[frontmatter.status]}`}>
            {frontmatter.statusLabel.toUpperCase()}
          </span>
          <span className="font-mono text-[11px] text-[var(--text-dim)]">{frontmatter.employer}</span>
        </div>

        <h1 className="font-display font-semibold text-[32px] sm:text-[40px] leading-tight tracking-tight mt-4">
          {frontmatter.title}
        </h1>
        <p className="text-[var(--text-muted)] text-[16px] mt-4 max-w-[680px]">
          {frontmatter.summary}
        </p>

        <div className="flex flex-wrap gap-2 mt-6">
          {frontmatter.stack.map((s) => (
            <span key={s} className="tag">{s}</span>
          ))}
        </div>

        <div className="prose-case mt-4">
          <MDXRemote source={content} />
        </div>
      </article>
      <Contact />
    </>
  );
}
