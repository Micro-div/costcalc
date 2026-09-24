export default function AnalyzeStep({ lines, status }) {
  return (
    <div className="step is-active" data-step="analyze">
      <div className="step-body ai-panel">
        <div className="ai-head">
          <span className="ai-spark"></span>
          <div>
            <strong>AI is analysing your project</strong>
            <span>{status}</span>
          </div>
        </div>
        <div className="ai-log" id="aiLog">
          {lines.map((l, i) => (
            <div className="ai-line" key={i}>
              <span className="tl">{l.tag}</span>
              <span>{l.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}