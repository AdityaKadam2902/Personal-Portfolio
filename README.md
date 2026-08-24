<div align="center">

# Aditya Kadam — AI Engineer Portfolio

**Building production-grade agentic AI, RAG systems, and full-stack applications.**

[![Portfolio](https://img.shields.io/badge/🌐_Live_Site-0B0F1A?style=for-the-badge&labelColor=0B0F1A&color=E8934A)](https://adityakadam.dev)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/aditya-kadam-268304252)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/AdityaKadam2902)
[![Email](https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:adityakadam2902@gmail.com)

</div>

---

## About

AI Engineer at **VSky Solutions**, building systems across agentic AI, retrieval-augmented generation, and full-stack backend architecture. I focus on the routing logic, verification layers, and failure handling that separate a working prototype from a system people actually rely on.

Architecture proposals adopted company-wide. Shipped client deployments. Production RAG and multi-agent systems — not notebook demos.

**Core focus areas:**
- Agentic AI & multi-agent orchestration (LangGraph, LangChain, Agno, Google ADK)
- Retrieval-augmented generation with hybrid retrieval, cross-encoder reranking, and self-improvement loops
- Full-stack backend systems (FastAPI, PostgreSQL, pgvector)
- LLM evaluation pipelines (RAGAS, DeepEval, deterministic scoring)

---

## Tech Stack

```
Orchestration & Agents   LangGraph · LangChain · Agno · Google ADK · Tool calling
Retrieval & RAG          pgvector · Qdrant · Pinecone · ChromaDB · BM25 · Cross-encoder reranking
LLMs & Fine-Tuning       Gemini · Groq · LiteLLM · Ollama · Qwen2.5-3B (LoRA) · DSPy
Reliability & Eval       Pydantic v2 · RAGAS · DeepEval · Circuit breakers · Pytest
Backend & Data           FastAPI · PostgreSQL · SQLAlchemy · Redis · Docker · SSE streaming
Frontend                 React · Vue 3 · Quasar · TypeScript
Computer Vision          YOLO · OpenCV · CNNs · VGG-16
Automation               n8n · LangSmith
```

---

## Featured Systems

| Project | Status | Stack | What It Does |
|---------|--------|-------|-------------|
| **Strategy Engine v2.0** | Research | LangGraph, FastAPI, Pydantic v2, React | 6-stage deterministic multi-agent pipeline — generate, score, select, evaluate, and report business strategies with self-re-planning |
| **Self-Improving Agentic RAG** | Research | LangGraph, ChromaDB, BM25, Groq, RAGAS | Enterprise document intelligence with hybrid retrieval, answer verification, and a closed feedback loop that classifies failures and improves over time |
| **SOP RAG Assistant** | Shipped | LangGraph, Groq, Pinecone, PostgreSQL | SOP retrieval and reasoning system for enterprise workflows |
| **HR Screening ATS** | Shipped | LangChain, Gemini, pgvector | Automated candidate screening with structured extraction and ranking |
| **Clinical Trial Matcher** | Research | LangGraph, ChromaDB, FastAPI | Matches patients to clinical trials using semantic search over protocol documents |
| **Falcon BO Explorer** | Shipped | LangChain, Pinecone, FastAPI | Business operations explorer with RAG-powered query understanding |

<details>
<summary><strong>More Projects</strong></summary>

| Project | Stack | Description |
|---------|-------|-------------|
| **Transaction Entry Automation** | LangChain, LangGraph, Agno, Pinecone, PostgreSQL | Multi-agent ERP automation — Outlook email → AI extraction → validation → ERP insertion |
| **Receipt Detection & Auto-Entry** | YOLO, OpenCV, FastAPI | YOLO-based object detection pipeline for receipt field extraction and ERP auto-entry |
| **Personal RAG Platform** | React, Python, LangGraph | Self-architected multi-RAG hosting platform with login and dashboard |
| **Nexus** | Ollama, Kuzu, FastAPI, Vue 3 | Persistent multi-agent system simulating a software-engineering org, producing real code |
| **Job Prep Engine** | Ollama, FastAPI, React, Vite | Fine-tuned Qwen2.5-3B (LoRA) with SSE streaming and intent-based routing |
| **LearnHub** | Flask, PostgreSQL, AWS S3 | Virtual classroom platform with multi-role auth and 35+ Pytest suites |
| **NailCareAI** | Flask, TensorFlow, VGG-16 | VGG-16-based nail disease screening app classifying 17 conditions |

</details>

---

## Architecture

```
┌──────────┐    ┌──────────┐    ┌───────────┐    ┌───────────┐    ┌──────────┐
│  INPUT   │───▶│  ROUTER  │───▶│  AGENTS   │───▶│  VERIFY   │───▶│ RESPONSE │
│  query   │    │  intent/ │    │  A · B · C │    │ cross-    │    │ grounded │
│          │    │ confidence│   │           │    │ check     │    │          │
└──────────┘    └──────────┘    └───────────┘    └─────┬─────┘    └──────────┘
                                                       │
                          ◀────────────────────────────┘
                          feedback loop (re-plan / retry)
```

---

## Getting Started

```bash
# Clone the repository
git clone https://github.com/AdityaKadam2902/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
src/
├── app/
│   ├── page.tsx                    # Homepage
│   ├── layout.tsx                  # Root layout with metadata
│   ├── globals.css                 # Design tokens & component styles
│   └── projects/[slug]/page.tsx   # Dynamic case study pages
├── components/
│   ├── Nav.tsx                     # Fixed navigation with theme toggle
│   ├── Hero.tsx                    # Landing section with animated schematic
│   ├── About.tsx                   # Bio + core stack panel
│   ├── Systems.tsx                 # Project grid with status pills
│   ├── Skills.tsx                  # Layered skill stack
│   ├── Experience.tsx              # Timeline
│   ├── Contact.tsx                 # CTA + resume download
│   ├── Schematic.tsx               # Animated agentic pipeline SVG
│   ├── ProjectCard.tsx             # Reusable project card
│   └── ThemeToggle.tsx             # Dark/light mode toggle
├── content/projects/               # MDX case studies
├── data/more-projects.ts           # Additional project entries
└── lib/projects.ts                 # File-based project loader
```

---

## Adding a Case Study

Create a new `.mdx` file in `src/content/projects/` with this frontmatter:

```yaml
---
slug: "your-project-slug"
title: "Project Title"
summary: "One-line description of what it does and why it matters."
employer: "Company Name" # or "Independent"
status: "adopted" | "shipped" | "research"
statusLabel: "Label shown on card"
order: 7                  # Controls sort order on homepage
stack: ["Tech1", "Tech2", "Tech3"]
---

## The problem
What gap or challenge this addresses.

## What I built
Architecture and implementation details.

## Why it matters
The production insight or engineering lesson.
```

The case study automatically appears on the homepage and gets its own `/projects/[slug]` page.

---

## Deployment

**Vercel (recommended):**
```bash
npx vercel
```

Or push to GitHub and import the repo at [vercel.com/new](https://vercel.com/new) — zero configuration needed.

---

## Contact

**Aditya Kadam** — AI Engineer · Kolhapur, Maharashtra, India

[![Email](https://img.shields.io/badge/adityakadam2902@gmail.com-EA4335?style=flat-square&logo=gmail&logoColor=white)](mailto:adityakadam2902@gmail.com)
[![GitHub](https://img.shields.io/badge/AdityaKadam2902-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/AdityaKadam2902)
[![LinkedIn](https://img.shields.io/badge/aditya--kadam-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://linkedin.com/in/aditya-kadam-268304252)
[![Resume](https://img.shields.io/badge/Resume-E8934A?style=flat-square&logo=react&logoColor=white)](/Aditya_AI_Engineer.pdf)

---

<div align="center">

Built with **Next.js 16** · **React 19** · **TypeScript** · **Tailwind CSS v4** · **Framer Motion** · **MDX**

</div>
