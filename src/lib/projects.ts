import fs from "fs";
import path from "path";
import matter from "gray-matter";

const PROJECTS_DIR = path.join(process.cwd(), "src/content/projects");

export type ProjectFrontmatter = {
  slug: string;
  title: string;
  summary: string;
  employer: string;
  status: "adopted" | "shipped" | "research";
  statusLabel: string;
  order: number;
  stack: string[];
};

export type ProjectListItem = ProjectFrontmatter;

export function getAllProjects(): ProjectListItem[] {
  const files = fs.readdirSync(PROJECTS_DIR).filter((f) => f.endsWith(".mdx"));
  const projects = files.map((file) => {
    const raw = fs.readFileSync(path.join(PROJECTS_DIR, file), "utf-8");
    const { data } = matter(raw);
    return data as ProjectFrontmatter;
  });
  return projects.sort((a, b) => a.order - b.order);
}

export function getProjectSlugs(): string[] {
  return fs
    .readdirSync(PROJECTS_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getProjectBySlug(slug: string): {
  frontmatter: ProjectFrontmatter;
  content: string;
} | null {
  const filePath = path.join(PROJECTS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { frontmatter: data as ProjectFrontmatter, content };
}
