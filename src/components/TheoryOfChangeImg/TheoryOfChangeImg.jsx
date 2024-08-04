import React, { useEffect, useRef } from "react";
import mermaid from "mermaid";

const MermaidDiagram = ({ width = "80%" }) => {
  const mermaidRef = useRef(null);

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
      theme: "neutral",
      flowchart: {
        curve: "basis",
      },
    });

    if (mermaidRef.current) {
      mermaid
        .render(
          "mermaid-diagram",
          `
        flowchart TD
          A[Convention Activities] --> B[Increased Knowledge]
          A --> C[New Connections]
          B --> E[Career Shifts]
          C --> F[Collaborations]
          E --> H[AI Safety Workforce]
          F --> I[Research Advancements]
          H --> K[Industry Impact]
          I --> L[Academic Progress]
          K --> N[Safer AI Development]
          L --> N
          O[Policy Changes] --> N
          P[Public Awareness] --> O
          B --> P
      `
        )
        .then(({ svg }) => {
          mermaidRef.current.innerHTML = svg;
        });
    }
  }, []);

  return (
    <div style={{ width, margin: "0 auto" }}>
      <div ref={mermaidRef}>{/* Mermaid diagram will be rendered here */}</div>
    </div>
  );
};

export default MermaidDiagram;
