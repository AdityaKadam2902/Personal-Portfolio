export type MoreProject = {
  title: string;
  description: string;
  stack: string[];
  employer: string;
  status?: string;
  github?: string;
};

export const moreProjects: MoreProject[] = [
  {
    title: "Transaction Entry Automation",
    description:
      "Multi-agent ERP automation — Outlook email to AI extraction to validation to ERP insertion, end to end.",
    stack: ["LangChain", "LangGraph", "Agno", "PostgreSQL"],
    employer: "VSky Solutions",
    status: "Live client deployment",
  },
  {
    title: "Receipt Detection & Auto-Entry",
    description:
      "YOLO-based object detection pipeline that locates receipt fields and auto-inserts extracted data into ERP systems.",
    stack: ["YOLO", "OpenCV", "FastAPI"],
    employer: "VSky Solutions",
  },
  {
    title: "GEO Auditor",
    description:
      "Measures how visible a business is inside AI search engines with proof, not proxies — real LLM citation simulation, Schema.org entity-graph validation, and an evidence-backed HTML report.",
    stack: ["Groq", "httpx", "Jinja2"],
    employer: "Independent",
    github: "https://github.com/AdityaKadam2902/geo-auditor",
  },
  {
    title: "Northstar AI Sales Agent",
    description:
      "A real-estate AI sales agent where a deterministic validator sits between the model and the user — it structurally cannot let a hallucinated price or false booking confirmation through.",
    stack: ["FastAPI", "Tool calling", "Pydantic"],
    employer: "Independent",
    github: "https://github.com/AdityaKadam2902/northstar-ai-agent",
  },
  {
    title: "Job Hunter MVP",
    description:
      "Local-first job-matching pipeline over Greenhouse/Lever/Ashby/RemoteOK with pgvector embeddings and a five-factor deterministic rubric — Precision@20 of 1.00 on a held-out labeled sample.",
    stack: ["pgvector", "Ollama", "Groq"],
    employer: "Independent",
    github: "https://github.com/AdityaKadam2902/job-hunter-mvp",
  },
  {
    title: "Praxis",
    description:
      "Six agents (PM → Architect → Engineer → QA → Reviewer → DevOps) work a feature request against a real repo — real branch, real commits, sandboxed test runs, real merge, with outcome-grounded calibration.",
    stack: ["Ollama", "Groq", "Sandboxing"],
    employer: "Independent",
    github: "https://github.com/AdityaKadam2902/praxis",
  },
  {
    title: "RecipeBot",
    description:
      "Recipe assistant over 122,918 recipes where every number comes from deterministic code, every LLM sentence passes a grounding verifier, and every answer ends with a receipt — 282 tests passing.",
    stack: ["SQLite", "Gemini", "Grounded generation"],
    employer: "Independent",
    github: "https://github.com/AdityaKadam2902/nosh-submission",
  },
  {
    title: "PracticeSignal",
    description:
      "Healthcare practice intelligence where an untrusted local LLM proposes candidates and deterministic verification at exact character offsets decides — 299 automated tests, zero-cost inference.",
    stack: ["Ollama", "SQLite triggers", "FastAPI"],
    employer: "Independent",
    github: "https://github.com/AdityaKadam2902/Gokul-Submission",
  },
  {
    title: "Interaction Ledger",
    description:
      "Privacy-preserving ingestion pipeline turning out-of-order, duplicated, malformed call events into an append-only ledger with Fernet-encrypted PII and idempotent reruns — 182 tests passing.",
    stack: ["SQLite", "Fernet + HMAC", "Python"],
    employer: "Independent",
    github: "https://github.com/AdityaKadam2902/agentic-universe-submission",
  },
  {
    title: "LearnHub",
    description:
      "A virtual classroom platform with multi-role auth, S3 file storage, and 35+ passing Pytest suites.",
    stack: ["Flask", "PostgreSQL", "AWS S3"],
    employer: "Independent",
    github: "https://github.com/AdityaKadam2902/Virtual-Classroom-Platform",
  },
  {
    title: "NailCareAI",
    description:
      "A VGG-16-based nail disease screening app classifying 17 conditions, with a custom training pipeline.",
    stack: ["Flask", "TensorFlow", "VGG-16"],
    employer: "Independent",
    github: "https://github.com/AdityaKadam2902/NailPredection",
  },
  {
    title: "VeriQuery",
    description:
      "An open-source toolkit and public benchmark for measuring and enforcing the numerical trustworthiness of AI data agents — audit verifier, attested reference agent, and abstention analysis. In active development.",
    stack: ["Python", "SQL auditing", "MCP"],
    employer: "Independent",
    status: "In progress",
    github: "https://github.com/AdityaKadam2902/veriquery",
  },
];
