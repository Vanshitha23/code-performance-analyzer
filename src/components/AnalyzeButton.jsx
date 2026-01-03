function AnalyzeButton({ onAnalyze }) {
  return (
    <button
      onClick={onAnalyze}
      style={{
        padding: "10px 20px",
        background: "#3b82f6",
        color: "white",
        border: "none",
        borderRadius: "8px",
        fontSize: "14px",
        cursor: "pointer"
      }}
    >
      Analyze Code
    </button>
  );
}

export default AnalyzeButton;
