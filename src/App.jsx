import { useState } from "react";
import { analyzeCode } from "./utils/analyzeCode";

import CodeEditor from "./components/CodeEditor";
import AnalyzeButton from "./components/AnalyzeButton";
import ResultPanel from "./components/ResultPanel";
import WarningList from "./components/WarningList";

function App() {
  const [code, setCode] = useState("");
  const [result, setResult] = useState(null);

  const handleAnalyze = () => {
    setResult(analyzeCode(code));
  };

  const handleReset = () => {
    setCode("");
    setResult(null);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #020617, #0f172a)",
        padding: "40px",
        boxSizing: "border-box"
      }}
    >
      {/* LEFT HINT PANEL */}
      <div
        style={{
          width: "250px",
          marginRight: "24px",
          fontSize: "14px",
          color: "#cbd5f5",
          lineHeight: "1.7"
        }}
      >
        <h4>💡 Complexity Hints</h4>
        <ul>
          <li>🚫 No loops → <b>O(1)</b></li>
          <li>🔁 Single loop → <b>O(n)</b></li>
          <li>🔂 Nested loops → <b>O(n²)</b></li>
          <li>🔄 3+ loops → <b>O(n³)</b></li>
          <li>🧬 Recursion → <b>Possibly exponential</b></li>
          <li>🌲 Divide & conquer → <b>O(n log n)</b></li>
        </ul>

        <hr style={{ margin: "14px 0", borderColor: "#334155" }} />

        <h4>🚨 Red Flags</h4>
        <ul>
          <li><code>includes()</code> in loop</li>
          <li><code>indexOf()</code> in loop</li>
          <li><code>find()</code> in loop</li>
          <li>Repeated recursion calls</li>
          <li>Deep nesting</li>
        </ul>
      </div>

      {/* MAIN ANALYZER CARD */}
      <div
        style={{
          width: "900px",
          background: "#020617",
          padding: "32px",
          borderRadius: "18px",
          boxShadow: "0 30px 60px rgba(0,0,0,0.6)",
          fontFamily: "Segoe UI, sans-serif",
          color: "#e5e7eb"
        }}
      >
        <h1 style={{ marginBottom: "6px", color: "#f9fafb" }}>
          🚀 Why Your Code Is Slow
        </h1>

        <p style={{ color: "#9ca3af", marginBottom: "20px" }}>
          Paste JavaScript or Java code to analyze performance patterns
          and estimate time complexity — instantly.
        </p>

        <CodeEditor code={code} setCode={setCode} />

        <div style={{ marginTop: "16px" }}>
          <AnalyzeButton onAnalyze={handleAnalyze} />

          <button
            onClick={handleReset}
            style={{
              marginLeft: "10px",
              padding: "10px 20px",
              background: "#334155",
              color: "#e5e7eb",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer"
            }}
          >
            ♻️ Reset
          </button>
        </div>

        {result && (
          <>
            <ResultPanel result={result} />
            <WarningList warnings={result.warnings} />

            {/* CONTEXTUAL INSIGHT */}
            <div
              style={{
                marginTop: "18px",
                padding: "14px",
                background: "#0f172a",
                borderRadius: "10px",
                color: "#93c5fd",
                fontSize: "14px"
              }}
            >
              💡 <b>Insight:</b>{" "}
              {result.complexity.includes("n²") &&
                "Try flattening nested loops or using hash-based lookups (Set/Map)."}
              {result.complexity.includes("n³") &&
                "This level of nesting will not scale. Consider redesigning the algorithm."}
              {result.complexity.includes("exponential") &&
                "Consider memoization or converting recursion into iteration."}
              {result.complexity === "O(n)" &&
                "This is generally efficient. Watch for hidden costs inside the loop."}
              {result.complexity === "O(1)" &&
                "Excellent! This code runs in constant time."}
            </div>
          </>
        )}
      </div>

      {/* RIGHT INFO PANEL */}
      <div
        style={{
          width: "250px",
          marginLeft: "24px",
          fontSize: "14px",
          color: "#cbd5f5",
          lineHeight: "1.7"
        }}
      >
        <h4>🧠 Optimization Tips</h4>
        <ul>
          <li>⚡ Use <b>Set / Map</b> for lookups</li>
          <li>📦 Cache repeated results</li>
          <li>🚚 Move invariant code outside loops</li>
          <li>🪜 Reduce nesting depth</li>
          <li>🧠 Memoize recursive calls</li>
        </ul>

        <hr style={{ margin: "14px 0", borderColor: "#334155" }} />

        <h4>📌 Engineering Notes</h4>
        <ul>
          <li>Additive loops ≠ nested loops</li>
          <li>Readable code can still be slow</li>
          <li>Measure before optimizing</li>
          <li>Heuristics ≠ compiler analysis</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
