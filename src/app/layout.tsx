import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://personal-portfolio-beta-puce-35.vercel.app"),
  title: "Aditya Kadam — AI Engineer | Generative AI, Agentic & RAG Systems",
  description:
    "AI Engineer with a year of production experience shipping Generative AI systems end to end: grounded RAG assistants, multi-agent orchestration, and the FastAPI, PostgreSQL, and frontend layers around them.",
  keywords: [
    "AI Engineer",
    "Generative AI",
    "RAG",
    "Agentic AI",
    "LangGraph",
    "LLM",
    "FastAPI",
    "Multi-agent systems",
  ],
  openGraph: {
    title: "Aditya Kadam — AI Engineer | Generative AI, Agentic & RAG Systems",
    description:
      "I build AI systems that reason, retrieve, and hold up in production — grounded RAG, multi-agent orchestration, and the backend and frontend layers around them.",
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary",
    title: "Aditya Kadam — AI Engineer",
    description:
      "Production RAG, multi-agent orchestration, and full-stack AI systems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme')||'light';document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','light');}})();`,
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
