export type MoreProject = {
  title: string;
  description: string;
  stack: string[];
  employer: string;
  github?: string;
};

export const moreProjects: MoreProject[] = [
  {
    title: "Transaction Entry Automation",
    description:
      "Multi-agent ERP automation — Outlook email to AI extraction to validation to ERP insertion, end to end.",
    stack: ["LangChain", "LangGraph", "Agno", "Pinecone", "PostgreSQL"],
    employer: "VSky Solutions",
  },
  {
    title: "Receipt Detection & Auto-Entry",
    description:
      "YOLO-based object detection pipeline that locates receipt fields and auto-inserts extracted data into ERP systems.",
    stack: ["YOLO", "OpenCV", "FastAPI"],
    employer: "VSky Solutions",
  },
  {
    title: "FalconBOExplorer",
    description:
      "Enterprise tool for navigating BI universe metadata — restructured from a JSON prototype into a layered, PostgreSQL-backed app.",
    stack: ["FastAPI", "Vue 3", "PostgreSQL"],
    employer: "VSky Solutions",
  },
  {
    title: "Personal RAG Platform",
    description:
      "Self-architected multi-RAG hosting platform with login and dashboard, built after proposing the design at work.",
    stack: ["React", "Python", "LangGraph"],
    employer: "Independent",
  },
  {
    title: "Nexus",
    description:
      "A persistent multi-agent system simulating a full software-engineering org, producing real code against a real repo.",
    stack: ["Ollama", "Kuzu", "FastAPI", "Vue 3"],
    employer: "Independent",
  },
  {
    title: "Job Prep Engine",
    description:
      "Fine-tuned Qwen2.5-3B (LoRA) served via Ollama, with an SSE-streaming backend and intent-based routing across six task types.",
    stack: ["Ollama", "FastAPI", "React", "Vite"],
    employer: "Independent",
  },
  {
    title: "LearnHub",
    description:
      "A virtual classroom platform with multi-role auth, S3 file storage, and 35+ passing Pytest suites.",
    stack: ["Flask", "PostgreSQL", "AWS S3"],
    employer: "Independent",
  },
  {
    title: "NailCareAI",
    description:
      "A VGG-16-based nail disease screening app classifying 17 conditions, with a custom training pipeline.",
    stack: ["Flask", "TensorFlow", "VGG-16"],
    employer: "Independent",
  },
];
