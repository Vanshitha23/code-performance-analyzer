function getColor(complexity) {
  if (complexity.includes("n²") || complexity.includes("n³")) return "#ef4444";
  if (complexity.includes("n")) return "#f59e0b";
  return "#22c55e";
}

function ResultPanel({ result }) {
  return (
    <div
      style={{
        marginTop: "30px",
        padding: "20px",
        borderRadius: "12px",
        background: "#020617",        // 🔥 DARK BACKGROUND
        border: "1px solid #334155",
        color: "#e5e7eb"              // 🔥 LIGHT TEXT
      }}
    >
      <h3 style={{ marginBottom: "12px", color: "#f9fafb" }}>
        Analysis Summary
      </h3>

      <p>
        <strong>Time Complexity:</strong>{" "}
        <span
          style={{
            padding: "6px 12px",
            background: getColor(result.complexity),
            color: "white",
            borderRadius: "999px",
            fontSize: "13px",
            marginLeft: "6px"
          }}
        >
          {result.complexity}
        </span>
      </p>

      <p>🔁 Loops detected: {result.loopCount}</p>
      <p>📊 Max nesting depth: {result.maxNestedDepth}</p>
      <p>🔄 Recursion: {result.hasRecursion ? "Yes" : "No"}</p>
    </div>
  );
}

export default ResultPanel;
