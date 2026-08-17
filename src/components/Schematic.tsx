export default function Schematic() {
  return (
    <div className="border border-[var(--border)] rounded-xl bg-[var(--panel)] px-5 pt-5 pb-4 relative overflow-hidden h-full flex flex-col min-h-[360px]">
      <span className="absolute top-3 left-5 font-mono text-[10px] tracking-widest text-[var(--text-dim)] z-10">
        PIPELINE.TRACE — LIVE
      </span>
      <div className="absolute inset-0 schematic-grid pointer-events-none" />
      <div className="flex-1 flex items-center justify-center relative">
        <svg
          viewBox="0 0 900 240"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Diagram of a typical agentic pipeline: input goes through an intent router, fans out to specialized agents, converges on a verification layer, and returns a response, with a feedback loop back to the router."
          className="w-full max-w-[680px] h-auto block"
        >
          <path className="edge" d="M 95 120 L 205 120" />
          <path className="edge" d="M 285 120 C 330 120, 330 55, 375 55" />
          <path className="edge" d="M 285 120 L 375 120" />
          <path className="edge" d="M 285 120 C 330 120, 330 185, 375 185" />
          <path className="edge" d="M 455 55 C 500 55, 500 120, 545 120" />
          <path className="edge" d="M 455 120 L 545 120" />
          <path className="edge" d="M 455 185 C 500 185, 500 120, 545 120" />
          <path className="edge" d="M 625 120 L 735 120" />
          <path className="edge-feedback" d="M 585 155 C 585 210, 245 210, 245 155" />

          <circle r="3" fill="#4FD1C5">
            <animateMotion dur="4.5s" repeatCount="indefinite" path="M 585 155 C 585 210, 245 210, 245 155" />
          </circle>

          <circle r="3.5" fill="#E8934A">
            <animateMotion
              dur="2.6s"
              repeatCount="indefinite"
              path="M 95 120 L 205 120 M 285 120 L 375 120 M 455 120 L 545 120 M 625 120 L 735 120"
            />
          </circle>

          <rect className="node-rect" x="15" y="98" width="80" height="44" rx="7" />
          <text className="node-label" x="55" y="116" textAnchor="middle">INPUT</text>
          <text className="node-sublabel" x="55" y="130" textAnchor="middle">user query</text>

          <rect className="node-rect accent-node" x="205" y="90" width="80" height="60" rx="7" />
          <text className="node-label" x="245" y="115" textAnchor="middle">ROUTER</text>
          <text className="node-sublabel" x="245" y="129" textAnchor="middle">intent /</text>
          <text className="node-sublabel" x="245" y="140" textAnchor="middle">confidence</text>

          <rect className="node-rect" x="375" y="33" width="80" height="44" rx="7" />
          <text className="node-label" x="415" y="51" textAnchor="middle">AGENT A</text>
          <text className="node-sublabel" x="415" y="65" textAnchor="middle">retrieval</text>

          <rect className="node-rect" x="375" y="98" width="80" height="44" rx="7" />
          <text className="node-label" x="415" y="116" textAnchor="middle">AGENT B</text>
          <text className="node-sublabel" x="415" y="130" textAnchor="middle">reasoning</text>

          <rect className="node-rect" x="375" y="163" width="80" height="44" rx="7" />
          <text className="node-label" x="415" y="181" textAnchor="middle">AGENT C</text>
          <text className="node-sublabel" x="415" y="195" textAnchor="middle">tool call</text>

          <rect className="node-rect signal-node" x="545" y="90" width="80" height="60" rx="7" />
          <text className="node-label" x="585" y="113" textAnchor="middle">VERIFY</text>
          <text className="node-sublabel" x="585" y="127" textAnchor="middle">cross-check /</text>
          <text className="node-sublabel" x="585" y="138" textAnchor="middle">circuit break</text>

          <rect className="node-rect" x="735" y="98" width="80" height="44" rx="7" />
          <text className="node-label" x="775" y="116" textAnchor="middle">RESPONSE</text>
          <text className="node-sublabel" x="775" y="130" textAnchor="middle">grounded</text>
        </svg>
      </div>
    </div>
  );
}
