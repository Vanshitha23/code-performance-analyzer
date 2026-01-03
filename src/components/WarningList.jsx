function WarningList({ warnings }) {
  if (!warnings.length) return null;

  return (
    <div style={{ marginTop: "20px" }}>
      <h4 style={{ color: "#fca5a5" }}>⚠️ Performance Issues</h4>

      {warnings.map((warning, index) => (
        <div
          key={index}
          style={{
            background: "#1f2933",
            borderLeft: "5px solid #ef4444",
            padding: "12px",
            marginBottom: "10px",
            borderRadius: "6px",
            color: "#fca5a5"
          }}
        >
          {warning}
        </div>
      ))}
    </div>
  );
}

export default WarningList;
