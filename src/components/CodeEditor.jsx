function CodeEditor({ code, setCode }) {
  return (
    <textarea
      value={code}
      onChange={(e) => setCode(e.target.value)}
      placeholder="Paste your JavaScript or Java code here..."
      style={{
        width: "100%",
        minHeight: "220px",
        padding: "15px",
        fontFamily: "Consolas, monospace",
        fontSize: "14px",
        borderRadius: "10px",
        border: "1px solid #334155",
        outline: "none",
        resize: "vertical",
        background: "#020617",
        color: "#e5e7eb"
      }}
    />
  );
}

export default CodeEditor;
